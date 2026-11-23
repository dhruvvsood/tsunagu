import { corsair } from "@/db";
import { auth } from "@/lib/auth";
import { getSessionCached } from "@/lib/session-cache";
import { cacheGet, cacheSet, TTL } from "@/lib/server-cache";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

function isTokenError(err: any): boolean {
  const msg = String(err?.message ?? "").toLowerCase();
  const status = err?.status ?? err?.statusCode ?? 0;
  return (
    status === 401 ||
    msg.includes("invalid_grant") ||
    msg.includes("token expired") ||
    msg.includes("token has been") ||
    msg.includes("unauthorized") ||
    msg.includes("unauthenticated") ||
    msg.includes("401")
  );
}

const CATEGORY_LABELS: Record<string, string[]> = {
  primary:    ["INBOX"],
  inbox:      ["INBOX"],
  promotions: ["CATEGORY_PROMOTIONS"],
  social:     ["CATEGORY_SOCIAL"],
  updates:    ["CATEGORY_UPDATES"],
  sent:       ["SENT"],
  starred:    ["STARRED"],
};


export async function GET(req: Request) {
  const session = await getSessionCached(await headers());
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const pageToken  = searchParams.get("pageToken")  ?? undefined;
  const maxResults = Number(searchParams.get("maxResults") ?? "20");
  const category   = searchParams.get("category") ?? "inbox";

  const userId = session.user.id;
  const cacheKey = `emails:${userId}:${category}:${pageToken ?? ""}:${maxResults}`;
  const cached = cacheGet<{ messages: any[]; nextPageToken: string | null }>(cacheKey);
  if (cached) {
    return NextResponse.json(cached, { headers: { "Cache-Control": "no-store", "X-Cache": "HIT" } });
  }

  const tenant = corsair.withTenant(userId);

  try {
    const queryParams: any = {
      maxResults,
      pageToken,
    };

    if (category === "archive") {
      // in:anywhere overrides Gmail's default scope so the search covers all mail.
      // Then we exclude every system folder — what remains is genuinely archived mail.
      queryParams.q = "in:anywhere -in:inbox -in:sent -in:trash -in:spam -in:draft -in:chats";
    } else {
      queryParams.labelIds = CATEGORY_LABELS[category] ?? CATEGORY_LABELS.inbox;
    }

    const list = await tenant.gmail.api.messages.list(queryParams);

    const results = await Promise.allSettled(
      (list.messages ?? []).map((m: any) =>
        tenant.gmail.api.messages.get({ id: m.id!, format: "metadata" }),
      ),
    );

    const messages = results
      .filter((r: any) => r.status === "fulfilled")
      .map((r: any) => r.value);

    const payload = { messages, nextPageToken: list.nextPageToken ?? null };
    cacheSet(cacheKey, payload, TTL.emails);

    return NextResponse.json(
      payload,
      { headers: { "Cache-Control": "no-store", "X-Cache": "MISS" } },
    );
  } catch (err: any) {
    console.error("[api/emails]", err?.message ?? err);
    if (isTokenError(err)) {
      return NextResponse.json(
        { error: "connection_expired", plugin: "gmail" },
        { status: 401 },
      );
    }
    return NextResponse.json(
      { error: "Failed to fetch emails", messages: [], nextPageToken: null },
      { status: 500 },
    );
  }
}
