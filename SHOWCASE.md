# StudySphere: showcase notes

**Problem:** study tools feel generic and are built for one kind of student. StudySphere starts by asking who is studying (school or college, age) and shapes the look to match, with the student always in control.

**Architecture:** static frontend (HTML/CSS/JS, no build step) on Vercel; two serverless functions (`/api/chat` AI gateway, `/api/config` public config); Supabase (Auth + Postgres with row-level security) for optional sync; browser storage as the default store.

**Design decisions worth mentioning**
- Local-first: works with zero configuration and zero accounts; cloud sync is opt-in.
- Grounded AI: only the few retrieved passages leave the device, and the model is told to answer only from them or say it lacks evidence.
- Honest progress: "readiness estimate" from three signals instead of claiming mastery; attendance labelled as a personal tracker.
- Wellbeing-aware: habits without streak guilt; "easing off" habits get supportive wording.
- Privacy: export and delete-all; passwords and keys never stored in the app; AI keys only on the server.
- Cost safety: AI limited to signed-in users, rate limited, with provider fallback.

**Roadmap:** semantic search (pgvector embeddings), OCR for scanned PDFs, agentic study-plan generation, Career Studio, parent/teacher views, tests and monitoring.
