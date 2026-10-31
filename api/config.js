// Public client config. The anon key is public by design; row-level security protects data.
export default function handler(req, res) {
  const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return res.status(404).json({ error: "not_configured" });
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ url, key });
}
