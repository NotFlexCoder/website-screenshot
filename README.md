# 📸 Website Screenshot Capture API

This lightweight Node.js (Next.js) API endpoint captures and returns a screenshot of any website using the [Website Screenshot API](https://website-screenshot-pink.vercel.app). Ideal for bots, previews, automation tools, or any project that needs a live web snapshot!

## 🚀 Features

- ⚡ Simple and fast API endpoint.
- 🌐 Accepts any public website URL as input.
- 🖼️ Returns a direct image link of the screenshot.
- 🔐 Can be integrated into Telegram bots, dashboards, or web apps.

## 🛠️ Requirements

- Node.js v14 or higher.
- A Next.js server or any backend supporting API routes (e.g., Vercel, Netlify).

## 📡 Usage

1. **Setup**:
   - Create a file under `pages/api/screenshot.js` in your Next.js project.
   - Paste the following code:

     ```js
     import fetch from 'node-fetch';

     export default async function handler(req, res) {
       const { url } = req.query;
       if (!url) return res.status(400).json({ error: 'Missing url parameter' });
       try {
         const response = await fetch(\`https://website-screenshot-pink.vercel.app/?url=\${encodeURIComponent(url)}\`);
         const data = await response.json();
         if (!data.image) return res.status(500).json({ error: 'Failed to capture screenshot' });
         res.status(200).json({ image: data.image });
       } catch (err) {
         res.status(500).json({ error: 'Internal Server Error' });
       }
     }
     ```

2. **Run Your Server**:
   ```bash
   npm run dev
   ```

3. **Access the API**:
   - Visit: `http://localhost:3000/api/screenshot?url=https://example.com`
   - You’ll receive a response like:

   ```json
   {
     "image": "https://your-screenshot-url.com/screenshot.png"
   }
   ```

## 📄 Example Response

```json
{
  "image": "https://website-screenshot-pink.vercel.app/screenshots/example.png"
}
```

## ⚠️ Error Handling

- Missing `url` query parameter: returns `400 Bad Request`.
- Screenshot API fails: returns `500 Internal Server Error`.

## 📝 License

This project is licensed under the MIT License – see the [LICENSE](https://github.com/NotFlexCoder/advice-api/blob/main/LICENSE) file for details.
