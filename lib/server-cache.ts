// Server-side in-memory cache for Gmail / Google Calendar API responses.
// Module-level Map — lives for the lifetime of the Next.js server process.
// On Railway (single instance) this deduplicates repeated external API calls
// across all users and browser sessions without needing Redis.

interface Entry {
  data: unknown;
  expiresAt: number;
}

const store = new Map<string, Entry>();

export function cacheGet<T>(key: string): T | null {
  const entry = store.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    store.delete(key);
    return null;
  }
  return entry.data as T;
}

export function cacheSet(key: string, data: unknown, ttlMs: number): void {
  store.set(key, { data, expiresAt: Date.now() + ttlMs });
}

export function cacheDelete(key: string): void {
  store.delete(key);
}

// Flush all keys starting with a prefix — used after mutations to invalidate
// stale list pages (e.g. archive an email → flush all inbox pages for that user).
export function cacheDeletePrefix(prefix: string): void {
  for (const key of store.keys()) {
    if (key.startsWith(prefix)) store.delete(key);
  }
}

export const TTL = {
  emails:    3 * 60_000,   // 3 min  — email lists
  calEvents: 5 * 60_000,   // 5 min  — calendar events
  calList:   30 * 60_000,  // 30 min — calendar list (rarely changes)
  drafts:    3 * 60_000,   // 3 min  — draft list
} as const;
