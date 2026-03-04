// Vercel Serverless Function - Keeps Supabase awake
export default async function handler(req, res) {
    try {
        const response = await fetch(
            `${process.env.VITE_SUPABASE_URL}/rest/v1/votes?limit=1`,
            {
                headers: {
                    apikey: process.env.VITE_SUPABASE_ANON_KEY,
                    Authorization: `Bearer ${process.env.VITE_SUPABASE_ANON_KEY}`,
                },
            }
        );

        const status = response.status;
        return res.status(200).json({ ok: true, supabase_status: status });
    } catch (error) {
        return res.status(500).json({ ok: false, error: error.message });
    }
}
