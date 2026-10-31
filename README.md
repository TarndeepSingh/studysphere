# StudySphere
A student-first study app. Before anything else it asks school or college, age and (optionally) gender, then offers age-suitable themes the student can freely change.

## Features (all working)
- Onboarding with 5 themes: Doodle Jungle, Pixel Pop, Sunset Notebook, Matcha Cafe, Midnight Library
- Voice input for subjects and tutor questions (browser speech recognition, Chrome recommended)
- Learn: subjects, topics, Studied / Recalled / Practised signals, revision dates, syllabus import
- Notes: paste text or upload .txt, .md, text-based .pdf (extracted in the browser)
- Tutor: retrieval over the student's notes with passage citations and an honest "not enough evidence"; fill-the-blank quiz
- AI tutor (optional): retrieved passages are sent to Anthropic, OpenAI or Gemini with provider fallback, timeout, rate limit and optional login requirement
- Planner: deadlines; attendance tracker with target % and "can miss N more"
- My Life: focus timer, habits without streak pressure, daily reflection
- Optional accounts and cross-device sync (Supabase, row-level security)
- Export and delete-all of personal data

## Deploy on Vercel (free)
1. Push this folder to a GitHub repo.
2. vercel.com > Add New > Project > import the repo > Deploy. The app already works at this point, saving data in each visitor's browser.
3. Optional: cloud sync
   - Create a free project at supabase.com. SQL Editor > paste and run `supabase/schema.sql`.
   - Project Settings > API: copy the Project URL and the anon public key.
   - In Vercel > Settings > Environment Variables add `SUPABASE_URL` and `SUPABASE_ANON_KEY`, then Redeploy.
   - Supabase > Authentication > URL Configuration: set Site URL to your Vercel URL. (For a quick demo you may turn off "Confirm email" under Providers > Email.)
4. Optional: AI tutor
   - Add `ANTHROPIC_API_KEY` (or `OPENAI_API_KEY` / `GEMINI_API_KEY`) and `REQUIRE_LOGIN_FOR_AI=true`, then Redeploy.
   - Set a monthly spend limit at the provider first. A consumer chat subscription does not include API credits.

See `.env.example` for every variable. Without any variables the app still runs fully in local mode.

## Known limits
- Retrieval is keyword-based, not semantic (no embeddings). Scanned PDFs (no selectable text) and PPTX are not supported.
- Sync stores one JSON document per user and the last write wins. Two devices editing at once can overwrite each other.
- Rate limiting is per server instance; high-traffic production use needs a shared store.
- Not included: agent workflows, Career Studio / resume export, automated test suite, admin dashboard.
- Verified: syntax checks and a headless-browser run of onboarding, notes, tutor retrieval, attendance and persistence in local mode. Not verified against a live Supabase project, live AI providers, or PDF upload; test those once after deploying.
