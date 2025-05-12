import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'Missing url parameter' });
  try {
    const response = await fetch(`https://website-screenshot-roan.vercel.app/?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    if (!data.image) return res.status(500).json({ error: 'Failed to capture screenshot' });
    res.status(200).json({ image: data.image });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}