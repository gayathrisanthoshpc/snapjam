# 🎵 snapjam

> Upload a photo. Get a vibe. Discover music from around the world.

[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://snapjam-kqye.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)
[![OpenAI](https://img.shields.io/badge/AI-GPT--4o%20Vision-412991?style=flat&logo=openai&logoColor=white)](https://platform.openai.com)
[![Vanilla JS](https://img.shields.io/badge/Frontend-Vanilla%20JS-f7df1e?style=flat&logo=javascript&logoColor=black)]()
[![Last Commit](https://img.shields.io/github/last-commit/gayathrisanthoshpc/snapjam)](https://github.com/gayathrisanthoshpc/snapjam/commits/main)

**snapjam** is an AI-powered web app that analyzes your Instagram story photos and suggests 3 personalized songs matched to the mood and energy of your image — spanning genres and languages from Hindi to Korean to English and beyond.

🔗 **Live Demo:** [snapjam-kqye.vercel.app](https://snapjam-kqye.vercel.app)

---

## 📸 Preview

<!-- Add a screenshot or screen recording GIF of the app here -->
<!-- Recommended: 1280×720px screenshot or a short GIF showing upload → analysis → results -->
<!-- To add: Settings → Social Preview on GitHub also accepts this image -->

![snapjam preview](./preview.png)

---

## ✨ Features

- **AI Image Analysis** — Uses OpenAI GPT-4o Vision to read the mood, color palette, and vibe of your photo
- **Global Music Recommendations** — Songs suggested across multiple languages and cultures (Hindi, English, Korean, and more)
- **Mood Selection** — Fine-tune the vibe before analysis for more personalized results
- **Real-time Processing** — Live feedback with cancel functionality and request timeouts
- **History Storage** — Keeps track of your past jams locally
- **Share Modal** — Easily share your song recommendations
- **Dark / Light Theme** — Toggle between themes with preference persistence
- **Responsive Design** — Optimized for both mobile and desktop
- **Accessibility** — ARIA labels throughout for screen reader support
- **Security** — XSS protection, input validation, and CORS handling

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3 (glassmorphism), Vanilla JavaScript |
| Backend | Vercel Edge Functions (Node.js) |
| AI | OpenAI GPT-4o Vision API |
| Deployment | Vercel (auto-deploy from GitHub) |

---

## 📁 Project Structure

```
snapjam/
├── api/
│   └── analyze.js       # Backend edge function — OpenAI API integration
├── index.html           # Main app — UI, logic, image handling (~1.2K lines)
├── vercel.json          # Vercel deployment configuration
├── package.json         # Dependencies and scripts
├── .env.example         # Example environment variable file
├── QUICKSTART.md        # Quick setup guide
├── DEPLOY.md            # Deployment reference
└── README.md            # You're reading it
```

---

## 🚀 Getting Started

### Prerequisites

- A [Vercel](https://vercel.com) account
- An [OpenAI API key](https://platform.openai.com/account/api-keys) (new accounts get $5 free credit)
- Node.js installed locally (for development)

### Local Development

```bash
# Clone the repo
git clone https://github.com/gayathrisanthoshpc/snapjam.git
cd snapjam

# Install dependencies
npm install

# Run locally with Vercel CLI
npx vercel dev
```

### Environment Variables

Create a `.env` file in the project root (or set via Vercel dashboard):

```env
OPENAI_API_KEY=your_openai_api_key_here
```

> ⚠️ Never commit your API key. Add `.env` to `.gitignore`.

### Deploy to Vercel

```bash
# One-time setup
npx vercel

# Or push to GitHub — auto-deploy is enabled
git push origin main
```

Set `OPENAI_API_KEY` in your Vercel project under **Settings → Environment Variables**.

---

## 🎮 How It Works

1. **Upload** a photo (Instagram story format works best)
2. **Select** a mood (optional, but improves results)
3. **Analyze** — snapjam sends the image to GPT-4o Vision
4. **Discover** — 3 song recommendations appear, matched to your photo's vibe
5. **Share** your jam or browse your history

---

## ⚙️ Configuration

**`vercel.json`** — Routes all `/api/*` requests to the edge function and sets Node.js runtime.

**`package.json`** — Defines ESM module type and build scripts required for Vercel deployment.

---

## 🔐 Security

- Input validation on all user-uploaded content
- Image compression before transmission (reduces cost + improves speed)
- XSS sanitization on rendered song data
- CORS headers configured on the edge function

---

## 💸 Cost

snapjam runs comfortably within OpenAI's free tier for personal use. Each image analysis costs a small number of tokens via the GPT-4o Vision API. New OpenAI accounts receive **$5 in free credits** — enough for hundreds of analyses.

---

## 🗺 Roadmap

- [ ] Spotify / Apple Music deep links for recommendations
- [ ] Multi-image mood collage analysis
- [ ] User accounts and shareable jam pages
- [ ] Playlist export

---

## 🐛 Troubleshooting

| Problem | Fix |
|---|---|
| `Error: Cannot find module` | Run `npm install` and ensure `"type": "module"` is in `package.json` |
| API key not working | Double-check `OPENAI_API_KEY` is set in Vercel → Settings → Environment Variables, then redeploy |
| 500 error on `/api/analyze` | Check Vercel Function logs (Dashboard → Deployments → Functions tab) |
| App deploys but analysis fails | Ensure the function is in `api/analyze.js` — Vercel auto-routes `/api/*` from that folder |
| Local dev not working | Use `npx vercel dev` instead of a plain static server — edge functions need the Vercel CLI |
| CORS errors | Verify `vercel.json` has the correct headers config for your domain |

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Commit your changes
git commit -m "feat: describe your change"

# Push and open a PR
git push origin feature/your-feature-name
```

---

## 📄 License

MIT © snapjam

---

*Built with ❤️ and a good playlist.*

---
