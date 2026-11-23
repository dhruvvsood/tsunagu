<div align="center">

<h1>Tsunagu <sub><sup>繋ぐ</sup></sub></h1>

<p><strong>An AI agent for Gmail and Google Calendar that does the busywork, and never sends or books anything without your approval.</strong></p>

<p>
<img alt="Next.js 16" src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white">
<img alt="React 19" src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white">
<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white">
<img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-17-4169E1?logo=postgresql&logoColor=white">
<img alt="OpenAI Agents SDK" src="https://img.shields.io/badge/OpenAI-Agents%20SDK-412991?logo=openai&logoColor=white">
<img alt="Tailwind CSS 4" src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white">
</p>

<img src="report-screenshots/01-landing-page-hero-section.png" alt="Tsunagu landing page" width="100%">

</div>

---

## Table of contents

**For everyone**
1. [What is Tsunagu?](#1-what-is-tsunagu)
2. [The problem it solves](#2-the-problem-it-solves)
3. [What you can do with it](#3-what-you-can-do-with-it)
4. [Screenshots](#4-screenshots)
5. [How to use Tsunagu (user guide)](#5-how-to-use-tsunagu-user-guide)
6. [Safety, privacy and control](#6-safety-privacy-and-control)
7. [Plans and AI access](#7-plans-and-ai-access)

**For developers**

8. [Tech stack](#8-tech-stack)
9. [How it works (architecture)](#9-how-it-works-architecture)
10. [Project structure](#10-project-structure)
11. [Running it locally](#11-running-it-locally)
12. [Environment variables](#12-environment-variables)
13. [Google Cloud setup](#13-google-cloud-setup)
14. [Database](#14-database)
15. [API reference](#15-api-reference)
16. [Background jobs and real-time sync](#16-background-jobs-and-real-time-sync)
17. [Admin and roles](#17-admin-and-roles)
18. [Deployment](#18-deployment)
19. [Scripts and troubleshooting](#19-scripts-and-troubleshooting)
20. [Roadmap and credits](#20-roadmap-and-credits)

---

# Part 1: For everyone

## 1. What is Tsunagu?

**Tsunagu** (繋ぐ) is Japanese for **"to connect"**.

Tsunagu puts your **Gmail inbox** and your **Google Calendar** in one place and adds an **AI assistant** that works across both of them. You can tell it, in plain English:

> *"Reply to Sarah about the deck and book a 30-minute call with her before Thursday."*

The assistant reads the email thread, checks your calendar for a free slot, writes a reply, and prepares a calendar invite. Then it **stops and shows you what it plans to do**. Nothing is sent and nothing is booked until you click to approve it.

In short: **Tsunagu does the typing and the searching. You make the decisions.**

It works with the Gmail and Google Calendar you already use. There is nothing to migrate, and you sign in with your Google account.

## 2. The problem it solves

If your work happens in email and meetings, a lot of your day goes to small jobs:

| The everyday problem | What it costs you |
|---|---|
| **Switching between apps.** Email in one tab, calendar in another, notes in a third. | Context is lost every time you switch, and small things slip through. |
| **Scheduling ping-pong.** "Does Tuesday work?" "How about Wednesday?" | Several emails and days of waiting to book one meeting. |
| **Long threads.** Twenty-message threads you have to reread to remember where things stand. | Minutes per thread just to catch up. |
| **Writing routine replies.** Confirmations, follow-ups, polite declines. | Repetitive typing that doesn't need your full attention. |
| **Finding things.** "Where was that attachment Marcus sent?" | Hunting through Gmail search and folders. |
| **Not trusting AI.** Most AI tools can act on your behalf without asking. | People don't let AI near their inbox because a wrong email can't be unsent. |

**Tsunagu's answer:**

1. **One workspace.** Inbox and calendar side by side, with a single search (<kbd>⌘</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd>) across both.
2. **An agent, not just a chatbot.** It can carry out multi-step tasks: search mail, check availability, draft, and schedule.
3. **Human in the loop by design.** The AI *prepares*; you *approve*. Drafts and events appear as editable cards with buttons.
4. **Real-time.** New mail and calendar changes are pushed to Tsunagu by Google as they happen, so you don't need to refresh.

### Who it's for

Founders, operators, recruiters, managers, consultants, freelancers: anyone who spends a large part of the day in Gmail and Google Calendar.

## 3. What you can do with it

| Feature | What it does |
|---|---|
| 📥 **Unified inbox** | Inbox, Sent, Drafts, Archive and Starred, with **Primary / Promotions / Social / Updates** tabs, bulk select, pagination and threaded reading. |
| ✨ **AI email summary** | One click gives a one-line summary, a **priority** (high / medium / low), a **category**, and **suggested replies**. |
| 📅 **Meeting detection** | Tsunagu spots emails that look like meeting invites ("Can we meet Tuesday at 3pm?") and offers to turn them into a calendar event. |
| ✍️ **Compose and AI replies** | Write, reply and forward, or have the AI generate a reply from the thread's context. |
| 🤖 **AI assistant (agent)** | A chat assistant with full read access to your Gmail and Calendar. It can search, summarize, draft emails and create events across several steps. |
| 🃏 **Approval cards** | Drafted emails and proposed events appear as **cards** in the chat. You edit, send, save, or discard them. |
| 🧠 **Long-term memory** | The assistant remembers useful facts from past conversations (for example how you sign off or who your key contacts are). |
| 🗓 **Calendar** | Month, week, day and agenda views, multiple calendars, create/edit/delete events, invite guests. |
| ⌨️ **Command palette** | <kbd>⌘</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd> searches emails and events together. |
| 🎹 **Keyboard shortcuts** | Navigate, compose, reply and archive without touching the mouse. Press <kbd>?</kbd> to see them all. |
| 🔔 **Notifications** | A bell shows today's important emails and upcoming events. |
| ⚡ **Real-time sync** | Google push notifications (webhooks) update the inbox and calendar as soon as something changes. |
| 🌗 **Light and dark themes** | Light, Dark, or follow your system. |
| 🧪 **Live demo** | Try the whole interface with sample data, without signing in. |
| 🛡 **Admin dashboard** | For the workspace owner: users, usage analytics, AI access and daily limits. |

## 4. Screenshots

> All screenshots below are from the **live demo** (sample data, dark theme).

### Landing page
<img src="report-screenshots/01-landing-page-hero-section.png" alt="Landing page hero" width="100%">

### Inbox
<img src="report-screenshots/03-email-inbox-primary-view.png" alt="Inbox, primary tab" width="100%">

<table>
<tr>
<td width="50%"><img src="report-screenshots/04-email-inbox-promotions-category.png" alt="Promotions tab"><br><sub><b>Category tabs</b>: Promotions, Social and Updates are separated from Primary.</sub></td>
<td width="50%"><img src="report-screenshots/07-starred-emails-folder.png" alt="Starred folder"><br><sub><b>Starred folder</b>: important mail in one place.</sub></td>
</tr>
</table>

### Reading an email: AI summary and meeting detection
<img src="report-screenshots/05-email-detail-with-ai-summary-option.png" alt="Email detail with AI summary and meeting detection" width="100%">
<sub>"Summarize with AI" gives priority, category and suggested replies. Tsunagu also noticed this email looks like a meeting invite and offers <b>Configure Event</b>.</sub>

### Writing email
<table>
<tr>
<td width="50%"><img src="report-screenshots/06-compose-new-email-window.png" alt="Compose window"><br><sub><b>Compose</b>: new message window.</sub></td>
<td width="50%"><img src="report-screenshots/09-saved-email-drafts-page.png" alt="Drafts"><br><sub><b>Drafts</b>: saved drafts, ready to edit or send.</sub></td>
</tr>
</table>

### Calendar
<table>
<tr>
<td width="50%"><img src="report-screenshots/10-calendar-month-view-with-events.png" alt="Calendar month view"><br><sub><b>Month view</b> with events.</sub></td>
<td width="50%"><img src="report-screenshots/11-calendar-agenda-list-view.png" alt="Calendar agenda view"><br><sub><b>Agenda view</b>: everything coming up, as a list.</sub></td>
</tr>
</table>

### AI assistant, settings and shortcuts
<table>
<tr>
<td width="50%"><img src="report-screenshots/12-ai-assistant-page-demo-sign-in-prompt.png" alt="AI assistant in demo mode"><br><sub><b>AI assistant</b>: in the demo it asks you to sign in; after sign-in this is the agent chat.</sub></td>
<td width="50%"><img src="report-screenshots/13-settings-account-theme-and-ai.png" alt="Settings"><br><sub><b>Settings</b>: account, theme, AI assistant and AI memory.</sub></td>
</tr>
<tr>
<td width="50%"><img src="report-screenshots/08-keyboard-shortcuts-help-dialog.png" alt="Keyboard shortcuts"><br><sub><b>Keyboard shortcuts</b>: press <kbd>?</kbd> anywhere.</sub></td>
<td width="50%"><img src="report-screenshots/14-google-sign-in-modal.png" alt="Google sign-in"><br><sub><b>Sign in</b> with Google. No password is stored by Tsunagu.</sub></td>
</tr>
</table>

<details>
<summary><b>Full landing page (long image)</b></summary>

<img src="report-screenshots/02-landing-page-full-overview.png" alt="Full landing page" width="100%">
</details>

## 5. How to use Tsunagu (user guide)

### Option A: Try the demo (no account needed)

1. Open the site and click **Try Demo** (or go to `/demo`).
2. You get a sample workspace ("Alex Carter's Space") with emails and calendar events.
3. Everything works except AI and real syncing. Your changes are saved **only in your browser**, and **Reset** in the top banner restores the original data.

### Option B: Use it with your own Google account

1. Click **Get started free** and sign in with Google.
2. Connect **Gmail** and **Google Calendar** when asked. Google shows a consent screen listing what Tsunagu can access.
3. A short guided tour shows you around (you can replay it later from Settings).

### Everyday tasks

| I want to… | Do this |
|---|---|
| Read my mail | **Inbox** in the sidebar. Use the tabs to switch between Primary, Promotions, Social and Updates. |
| Understand a long email fast | Open it, then click **Summarize with AI**. |
| Reply | **Reply** in the email toolbar, or press <kbd>R</kbd>. Ask the AI for a suggested reply. |
| Write a new email | **New Message**, or press <kbd>C</kbd>. |
| Archive / delete / star | Toolbar buttons on the open email. <kbd>E</kbd> archives. |
| Turn an email into an event | When Tsunagu shows "This email looks like a meeting invite", click **Configure Event**. |
| See my schedule | **Calendar** in the sidebar. Switch between month, week, day and agenda views. |
| Create an event | Click an empty slot in the calendar, or ask the AI assistant. |
| Search everything | <kbd>⌘</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd>, then type. Results include both emails and events. |
| Ask the AI to do something | Open **AI Assistant** (<kbd>Alt</kbd> + <kbd>A</kbd>) and type what you need. |

### Things you can ask the AI assistant

- "What needs a reply from me today?"
- "Summarize my emails from Marcus this week."
- "Draft a polite reply to the latest email from Priya saying I'll review it by Friday."
- "Follow up on the last email I sent to the design team."
- "Am I free Thursday afternoon?"
- "Schedule a 30-minute call with sarah@acme.com tomorrow at 3pm."
- "Find the email with the Q3 deck attachment."

When the assistant writes an email or proposes an event, it appears as a **card**. Review it, edit if needed, then click to send or save. You can also reply "send it" in the chat.

### Keyboard shortcuts

| Keys | Action |
|---|---|
| <kbd>⌘</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd> | Open command palette / search |
| <kbd>Alt</kbd> + <kbd>A</kbd> | Open the AI assistant from anywhere |
| <kbd>?</kbd> | Show all keyboard shortcuts |
| <kbd>J</kbd> / <kbd>K</kbd> | Next / previous email |
| <kbd>C</kbd> | Compose new message |
| <kbd>R</kbd> | Reply to the selected email |
| <kbd>E</kbd> | Archive the selected email |
| <kbd>Esc</kbd> | Close the email panel |
| <kbd>Enter</kbd> / <kbd>Shift</kbd> + <kbd>Enter</kbd> | Send message / new line (in AI chat) |

## 6. Safety, privacy and control

Tsunagu is designed so that you stay in control of your inbox.

- **Nothing is sent without you.** When the AI writes an email it calls a `draft_email` tool, which **only shows a card**. It does not send or save anything. Sending happens only when you click **Send** on the card, or explicitly tell the assistant to send it.
- **Events are confirmed first.** The assistant is instructed to create calendar events only after you confirm the details.
- **No password storage.** You sign in through Google OAuth 2.0, so Tsunagu never sees your Google password.
- **Encrypted access tokens.** Google access/refresh tokens are stored through [Corsair](https://corsair.dev), which encrypts each account's keys with a per-record data key that is itself wrapped by a master key (`CORSAIR_KEK`).
- **Your account, your data.** Each user's data is isolated (multi-tenant by user ID), and you can disconnect Gmail or Calendar from Settings at any time.
- **Demo data stays local.** The demo stores everything in your browser's `localStorage`. Nothing is sent to a server.

## 7. Plans and AI access

The inbox, calendar, search and shortcuts are available to every signed-in user. **AI features are controlled per user:**

| Setting | Behavior |
|---|---|
| **No AI access** (default for new users) | AI features are locked, and the AI page shows an upgrade/sign-in prompt. |
| **AI access with a daily limit** | Each AI request counts against a daily cap (default **10/day**, configurable per user). The count resets at **midnight IST**. |
| **Unlimited** | No daily cap (daily limit set to `-1`). |
| **Admin / super-admin** | Always unlimited. |

Admins grant access and set limits from the **Admin** dashboard ([section 17](#17-admin-and-roles)). The landing page shows the planned public pricing (Free ₹0, Pro ₹499/month, Max ₹999/month). Payments are not wired up in the code yet.

---

# Part 2: For developers

## 8. Tech stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 16** (App Router, React Server Components, Route Handlers), **React 19**, **TypeScript 5** |
| Styling / UI | **Tailwind CSS 4**, Radix UI / shadcn primitives, `lucide-react` and Remix icons, Geist fonts |
| Calendar UI | **FullCalendar 6** (day grid, time grid, list, interaction) |
| Auth | **Better Auth** with the Google social provider, Drizzle adapter |
| Google integration | **Corsair** (`corsair`, `@corsair-dev/gmail`, `@corsair-dev/googlecalendar`): OAuth, encrypted token storage, typed Gmail and Calendar API clients, entity cache, webhook processing |
| AI agent | **OpenAI Agents SDK** (`@openai/agents`) plus **Corsair MCP** tools (`@corsair-dev/mcp`). `gpt-4o-mini` for email analysis and reply generation |
| Long-term memory | **Supermemory** (optional) |
| Database | **PostgreSQL** (Neon in production, Docker locally) with **Drizzle ORM** and Drizzle Kit migrations |
| Background jobs | **Inngest** (event-driven functions and a cron job) |
| Real-time | Gmail push via **Google Cloud Pub/Sub**, Calendar push via **watch channels** |
| Charts | Recharts (admin analytics) |
| Onboarding tour | driver.js |

## 9. How it works (architecture)

### System overview

```mermaid
flowchart LR
    U[User's browser<br/>Next.js UI] -->|HTTPS| N[Next.js server<br/>Route Handlers / RSC]

    N -->|sessions| BA[Better Auth]
    N -->|SQL| PG[(PostgreSQL<br/>Drizzle ORM)]
    BA --> PG

    N -->|typed API calls<br/>encrypted tokens| CO[Corsair]
    CO --> PG
    CO -->|REST| GM[Gmail API]
    CO -->|REST| GC[Google Calendar API]

    N -->|Agents SDK| OA[OpenAI]
    N -->|recall / store| SM[Supermemory]

    GM -- Pub/Sub push --> WH1[/api/webhooks/gmail/]
    GC -- watch channel --> WH2[/api/webhooks/calendar/]
    WH1 --> IN[Inngest]
    WH2 --> IN
    IN -->|renew watches every 6 days| CO
```

### What happens when you ask the AI to do something

```mermaid
sequenceDiagram
    participant User
    participant UI as Chat UI
    participant API as /api/ai/chat
    participant Limit as Rate limiter
    participant Mem as Supermemory
    participant Agent as OpenAI Agent
    participant Google as Gmail / Calendar (via Corsair)

    User->>UI: "Reply to Sarah and book a call"
    UI->>API: POST messages + sessionId
    API->>Limit: check AI access and daily count
    Limit-->>API: allowed
    API->>Mem: search memories for this user
    Mem-->>API: relevant facts
    API->>Agent: run(system prompt + memories, tools)
    Agent->>Google: run_script → messages.list / messages.get
    Agent->>Google: run_script → freebusy / events.list
    Agent-->>API: draft_email(...) + create_calendar_event proposal
    API-->>UI: stream text + approval cards (SSE)
    User->>UI: clicks Send / Confirm on the card
    UI->>Google: send email / create event
```

**The agent's tools**

| Tool | Purpose | Writes to Google? |
|---|---|---|
| `list_operations`, `get_schema`, `run_script` | Corsair meta-tools: discover and call any Gmail/Calendar API operation (search, read, list, free/busy, …) | Read in practice. The system prompt routes all writes through the tools below |
| `draft_email` | Shows an editable email card in the chat | **No.** Preview only |
| `send_email` | Sends via the Gmail API | **Yes**, only after the user explicitly says to send |
| `create_calendar_event` | Creates an event on the primary calendar and emails invites | **Yes**, only after the user confirms |

The system prompt (in `app/api/ai/chat/route.ts`) enforces one action per turn, never guessing addresses or IDs (always fetching first), and IST as the default timezone.

Chat sessions and messages are stored in Postgres, including tool usage and the rendered cards ("artifacts"), so conversations survive a reload. After each answer, the exchange (your message plus the first 600 characters of the reply) is stored in Supermemory under `user:<id>`. On the next request, the 8 most relevant memories are added to the agent's instructions.

## 10. Project structure

```
tsunagu/
├── app/
│   ├── page.tsx                 # Marketing landing page
│   ├── layout.tsx               # Root layout, fonts, theme provider
│   ├── globals.css              # Design tokens (light/dark), Tailwind
│   ├── dashboard/               # Signed-in app
│   │   ├── page.tsx             #   Inbox / Sent / Archive / Starred (?folder=)
│   │   ├── drafts/              #   Drafts
│   │   ├── calendar/            #   Calendar
│   │   ├── ai/                  #   AI assistant (or locked page without access)
│   │   ├── settings/            #   Settings
│   │   └── admin/               #   Admin dashboard (admins only)
│   ├── demo/                    # Same app with sample data, no sign-in
│   └── api/                     # Route handlers (see section 15)
├── components/
│   ├── layout/                  # Sidebar, TopNav, CommandPalette, Settings, shortcuts
│   ├── email/                   # EmailList, EmailRow, EmailDetail, Compose, Drafts
│   ├── calendar/                # Toolbar, event dialogs, detail panel
│   ├── ai/                      # Chat bubbles, draft/event cards, summary card
│   ├── notifications/           # Notification bell
│   ├── onboarding/              # Welcome modal and walkthrough tour
│   └── ui/                      # Shared primitives (button, dialog, input, …)
├── db/
│   ├── schema.ts                # Drizzle schema (all tables)
│   └── index.ts                 # Postgres pool, Drizzle client, Corsair instance
├── drizzle/                     # Generated SQL migrations
├── inngest/functions/           # Background jobs (gmail, calendar, watch renewal)
├── lib/
│   ├── auth.ts / auth-client.ts # Better Auth server/client
│   ├── ai-rate-limit.ts         # AI access + daily limits
│   ├── register-watch.ts        # Gmail/Calendar push registration
│   ├── event-detect.ts          # "Looks like a meeting" detection
│   ├── mime.ts                  # Builds raw RFC 2822 emails
│   ├── demo/                    # Demo data + DemoContext (localStorage)
│   └── theme/                   # Theme provider
├── scripts/                     # Setup and maintenance scripts (section 19)
├── report-screenshots/          # Screenshots used in this README
├── docker-compose.yml           # Local Postgres
└── drizzle.config.ts
```

## 11. Running it locally

### Prerequisites

- **Node.js 20+** and npm
- **Docker** (for local Postgres), or any Postgres 15+ database
- A **Google Cloud project** (see [section 13](#13-google-cloud-setup))
- An **OpenAI API key**
- Optional: **Supermemory** API key and an **Inngest** account (Inngest has a local dev server)

### Steps

```bash
# 1. Clone and install
git clone https://github.com/DhruvSood05/tsunagu.git
cd tsunagu
npm install

# 2. Start Postgres
npm run docker:up        # postgres://tsunagu:tsunagu@localhost:5432/tsunagu

# 3. Create your env file (see section 12 for every variable)
cp .env.example .env     # or create .env from the template below

# 4. Create the database tables
npm run db:migrate

# 5. Register your Google OAuth credentials with Corsair (one time)
npx tsx scripts/corsair-setup.ts

# 6. Run the app
npm run dev              # http://localhost:3000

# 7. (Optional) run Inngest locally for background jobs
npx inngest-cli@latest dev   # then open http://localhost:8288
```

Then open <http://localhost:3000>, sign in with Google, and connect Gmail and Calendar.

> **Tip:** to try the UI without any Google setup, run steps 1, 2 and 6 and open <http://localhost:3000/demo>.

> **Real-time push locally:** Google can only deliver webhooks to a public HTTPS URL. Use a tunnel (for example `ngrok http 3000`) and set `BETTER_AUTH_URL` to the tunnel URL if you want live push in development. Without it, the app still works; it just won't receive push updates.

## 12. Environment variables

Create a `.env` file in the project root:

```env
# Corsair: master key used to encrypt stored Google tokens
CORSAIR_KEK="a-long-random-secret"

# Better Auth
BETTER_AUTH_SECRET="another-long-random-secret"
BETTER_AUTH_URL="http://localhost:3000"

# Google OAuth (Google Cloud Console)
GOOGLE_CLIENT_ID="xxxxxxxx.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="GOCSPX-xxxxxxxx"

# Postgres
DATABASE_URL="postgresql://tsunagu:tsunagu@localhost:5432/tsunagu"

# OpenAI
OPENAI_API_KEY="sk-..."

# Supermemory (optional: long-term AI memory)
SUPERMEMORY_API_KEY="sm_..."

# Inngest (background jobs)
INNGEST_EVENT_KEY="..."
INNGEST_SIGNING_KEY="..."

# Gmail push notifications
GMAIL_PUBSUB_TOPIC="projects/<your-project>/topics/gmail-webhooks"
```

| Variable | Required | What it's for |
|---|---|---|
| `CORSAIR_KEK` | ✅ | Key-encryption key for Corsair's envelope encryption of OAuth tokens. **Keep it secret and never change it after users connect**, or stored tokens can't be decrypted. Generate with `openssl rand -base64 32`. |
| `BETTER_AUTH_SECRET` | ✅ | Signs session cookies. Generate with `openssl rand -base64 32`. |
| `BETTER_AUTH_URL` | ✅ | Public base URL of the app. Also used to build OAuth redirect URLs and the Calendar webhook URL. |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | ✅ | OAuth client for sign-in and for Gmail/Calendar access. |
| `DATABASE_URL` | ✅ | Postgres connection string. SSL is enabled automatically in production. |
| `OPENAI_API_KEY` | ✅ for AI | Powers the agent, email analysis and reply generation. |
| `SUPERMEMORY_API_KEY` | Optional | Enables long-term memory. Without it, the assistant works but doesn't remember past chats. |
| `INNGEST_EVENT_KEY` / `INNGEST_SIGNING_KEY` | Production | Required by Inngest Cloud. Not needed with the local Inngest dev server. |
| `GMAIL_PUBSUB_TOPIC` | For real-time mail | Pub/Sub topic Gmail publishes to (see [section 13](#13-google-cloud-setup)). |

> Note: `.gitignore` excludes `.env*`, which also covers `.env.example`. Use the template above if `.env.example` is missing from your clone.

## 13. Google Cloud setup

1. **Create a project** at <https://console.cloud.google.com>.
2. **Enable APIs:** *Gmail API*, *Google Calendar API* and *Cloud Pub/Sub API*.
3. **OAuth consent screen:** set it up (External or Internal) and add yourself as a test user while in testing.
4. **Create OAuth credentials:** *APIs & Services → Credentials → Create credentials → OAuth client ID → Web application*.
   - **Authorized JavaScript origins:** `http://localhost:3000` (and your production URL)
   - **Authorized redirect URIs:**
     - `http://localhost:3000/api/auth/callback/google` (Better Auth sign-in)
     - `http://localhost:3000/api/connect/callback` (Gmail/Calendar connection via Corsair)
     - plus the same two paths on your production domain
   - Copy the client ID and secret into `.env`.
5. **Gmail push (Pub/Sub):**
   - Create a topic, e.g. `gmail-webhooks`, and put its full name in `GMAIL_PUBSUB_TOPIC`.
   - On the topic, grant **Pub/Sub Publisher** to `gmail-api-push@system.gserviceaccount.com`.
   - Create a **push subscription** to `https://<your-domain>/api/webhooks/gmail`.
6. **Calendar push** needs no Google Cloud setup. Tsunagu registers a watch channel pointing to `https://<your-domain>/api/webhooks/calendar` when a user connects Calendar.
7. Run `npx tsx scripts/corsair-setup.ts` so Corsair stores these credentials.

## 14. Database

Postgres with Drizzle ORM. The schema lives in `db/schema.ts`, and migrations are in `drizzle/`.

| Table | Purpose |
|---|---|
| `user`, `session`, `account`, `verification` | Better Auth: users, sessions and Google sign-in accounts |
| `corsair_integrations` | One row per integration (gmail, googlecalendar) with encrypted client credentials |
| `corsair_accounts` | One row per user per integration, with encrypted tokens (`tenant_id` = user ID) |
| `corsair_entities` | Cached Gmail/Calendar entities, used for fast local search |
| `corsair_events` | Webhook events received by Corsair |
| `chat_sessions`, `chat_messages` | AI conversations, including tools used and rendered cards (`artifacts`) |
| `user_preferences` | Tour seen, optional personal OpenAI key, `ai_access`, `ai_daily_limit`, `role`, last active |
| `ai_usage` | Per-user, per-day AI request counter (IST date) |
| `webhook_events` | Short-lived "something changed" markers the UI polls to refresh in real time |

```bash
npm run db:generate   # create a new migration after editing db/schema.ts
npm run db:migrate    # apply migrations
npm run db:studio     # browse the database in Drizzle Studio
```

## 15. API reference

All routes live under `app/api/`. All of them except webhooks and Inngest require a signed-in session.

| Area | Routes |
|---|---|
| **Auth** | `/api/auth/[...all]` (Better Auth) |
| **Connect Google** | `GET /api/connect?plugin=gmail\|googlecalendar` → OAuth redirect · `/api/connect/callback` · `POST /api/gmail/disconnect` · `POST /api/calendar/disconnect` |
| **Email** | `GET /api/emails` (list by folder/category/page) · `GET/PATCH/DELETE /api/emails/[id]` · `POST /api/emails/[id]/archive` · `POST /api/emails/[id]/reply` · `POST /api/emails/[id]/forward` · `GET /api/emails/[id]/attachments/[attachmentId]` · `POST /api/compose` |
| **Drafts** | `GET/POST /api/drafts` · `GET/PATCH/DELETE /api/drafts/[id]` · `POST /api/drafts/[id]/send` |
| **Calendar** | `GET/POST /api/calendar/events` · `GET/PATCH/DELETE /api/calendar/events/[id]` · `GET /api/calendar/calendars` · `GET /api/calendar/search` |
| **Search** | `GET /api/search` (mail + events) · `GET /api/search/local` (Corsair cache with Gmail API fallback) |
| **AI** | `POST /api/ai/chat` (agent, streams SSE) · `POST /api/ai/analyze-email` (summary, priority, category, suggested replies) · `POST /api/ai/generate-reply` · `POST /api/ai/email-action` · `GET/POST /api/ai/sessions` · `GET/DELETE /api/ai/sessions/[id]` · `/api/ai/sessions/[id]/messages` · `/api/ai/memory` · `GET /api/ai/usage` · `POST /api/ai/test-key` |
| **User** | `GET/POST /api/preferences` · `GET /api/user/role` · `/api/user/account` · `POST /api/user/heartbeat` · `GET /api/notifications/today` |
| **Admin** | `GET /api/admin/stats` · `GET /api/admin/analytics` · `GET /api/admin/users` · `PATCH /api/admin/users/[id]` (set `aiAccess`, `aiDailyLimit`, and `role` (super-admin only)) |
| **Webhooks** | `POST /api/webhooks/gmail` (Pub/Sub push) · `GET /api/webhooks/gmail?userId=&since=` (UI polls for changes) · `/api/webhooks/calendar` |
| **Jobs** | `/api/inngest` (Inngest endpoint) · `/api/corsair/[...all]` (Corsair handler) |

## 16. Background jobs and real-time sync

```mermaid
sequenceDiagram
    participant G as Gmail
    participant PS as Pub/Sub
    participant W as /api/webhooks/gmail
    participant C as Corsair
    participant DB as Postgres
    participant I as Inngest
    participant UI as Browser

    G->>PS: mailbox changed
    PS->>W: push (base64 { emailAddress, historyId })
    W->>DB: find user by email
    W->>C: processWebhook (updates cache)
    C->>DB: insert webhook_events marker
    W->>I: event tsunagu/gmail.message.received
    UI->>W: GET ?userId&since (poll)
    W-->>UI: hasUpdate: true → refetch inbox
```

**Inngest functions** (`inngest/functions/`):

| Function | Trigger | What it does |
|---|---|---|
| `on-plugin-connected` | event `tsunagu/plugin.connected` | Registers the Gmail watch or Calendar watch right after a user connects. |
| `renew-all-watches` | cron `0 9 */6 * *` | Google watches expire after 7 days, so this renews every user's watches every 6 days. |
| `gmail-message-received` | event `tsunagu/gmail.message.received` | Background processing for new mail. |
| `calendar-event-changed` | event `tsunagu/calendar.event.changed` | Background processing for calendar changes. |

## 17. Admin and roles

| Role | Can do |
|---|---|
| `user` | Use the app. AI only if an admin has granted access. |
| `admin` | Unlimited AI, open the **Admin** dashboard, grant/revoke AI access and set daily limits for users. |
| `superadmin` | Everything an admin can do, plus change other users' roles. |

- The super-admin is defined by `SUPER_ADMIN_EMAIL` in `lib/ai-rate-limit.ts`. **Change it to your own email** when you fork the project.
- To give an account the super-admin role in the database, sign in once, then run `node scripts/seed-superadmin.mjs` after editing the email in that script.
- The admin dashboard (`/dashboard/admin`) shows user counts, activity, AI usage analytics, and a user table with access controls.

## 18. Deployment

The app runs anywhere Next.js runs. It has been used with **Vercel / Railway** plus **Neon Postgres**.

1. Create a production Postgres database (e.g. Neon) and set `DATABASE_URL`.
2. Set every variable from [section 12](#12-environment-variables) in your host's dashboard, with `BETTER_AUTH_URL` set to your production URL.
3. Add the production redirect URIs and JavaScript origin to your Google OAuth client.
4. Run migrations against production: `npm run db:migrate` (with the production `DATABASE_URL`).
5. Run `npx tsx scripts/corsair-setup.ts` once against production.
6. Connect the app to **Inngest Cloud** (set the Inngest keys and sync `https://<domain>/api/inngest`).
7. Point the Gmail Pub/Sub push subscription at `https://<domain>/api/webhooks/gmail`.

`npm run build && npm start` builds and serves a production build.

## 19. Scripts and troubleshooting

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` / `npm start` | Production build / serve |
| `npm run lint` | ESLint |
| `npm run docker:up` / `docker:down` | Start / stop local Postgres |
| `npm run db:generate` / `db:migrate` / `db:studio` | Drizzle migrations and studio |
| `npx tsx scripts/corsair-setup.ts` | Store Google OAuth credentials (and the Pub/Sub topic) in Corsair |
| `node scripts/seed-superadmin.mjs` | Promote an account to super-admin |
| `node scripts/check-db.mjs` | Check database connectivity |
| `node scripts/check-integrations.mjs` | Inspect Corsair integrations |
| `node scripts/verify-connections.mjs` | Verify users' Gmail/Calendar connections |
| `node scripts/reset-connections.mjs` | Reset stored connections |
| `node scripts/cleanup-stale-tenants.mjs` | Remove connection records for users that no longer exist |

**Common issues**

| Symptom | Likely cause / fix |
|---|---|
| `redirect_uri_mismatch` on sign-in or connect | The redirect URI isn't in the Google OAuth client. Add both `/api/auth/callback/google` and `/api/connect/callback`. |
| "Missing gmail client credentials" | `scripts/corsair-setup.ts` hasn't been run against this database. |
| "No refresh token" | Disconnect and reconnect the integration. The connect flow forces `prompt=consent` so Google issues a refresh token. |
| Inbox doesn't update live | Webhooks need a public HTTPS URL. Check `BETTER_AUTH_URL`, the Pub/Sub push subscription, and that Inngest is running. |
| AI page says access is locked | The user has no `ai_access`. Grant it from the Admin dashboard. |
| AI returns HTTP 429 | The daily limit has been reached. It resets at midnight IST, or an admin can raise the limit. |
| Stored tokens can't be decrypted | `CORSAIR_KEK` changed. Restore the original value or reconnect accounts. |

## 20. Roadmap and credits

**Planned next**
- Payments for the Pro and Max plans
- Mobile and tablet layouts
- Visual refresh based on the new design system (light and dark), designed in Figma
- More agent skills (bulk triage, follow-up reminders, daily brief email)

**Built with:** [Next.js](https://nextjs.org) · [Better Auth](https://www.better-auth.com) · [Corsair](https://corsair.dev) · [OpenAI Agents SDK](https://openai.github.io/openai-agents-js/) · [Drizzle ORM](https://orm.drizzle.team) · [Inngest](https://www.inngest.com) · [Supermemory](https://supermemory.ai) · [FullCalendar](https://fullcalendar.io) · [Tailwind CSS](https://tailwindcss.com)

Built by **Dhruv Sood** for the ChaiCode Cohort 2026 Hackathon.
[X](https://x.com/dhruvsood05) · [LinkedIn](https://www.linkedin.com/in/dhruv-sood-9871b9272/) · [Instagram](https://www.instagram.com/dhruvvsood_)
