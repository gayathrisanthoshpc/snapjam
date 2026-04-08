# snapjam — Deploy to Vercel (Free & Secure)

This guide walks you through deploying snapjam with a secure backend using **Vercel Edge Functions** (completely free).

## Why This Setup?

✅ **Free forever** - Vercel's free tier has generous limits  
✅ **Secure** - Your API key is never exposed to users  
✅ **Fast** - Edge functions run globally  
✅ **1-click deploy** - Deploy from GitHub directly  

---

## Quick Start (3 steps)

### **Step 1: Create `.env.local` file**

```bash
# Copy the example file
cp .env.example .env.local

# Edit and add your Anthropic API key
ANTHROPIC_API_KEY=sk-ant-your-actual-key-here
```

Get your API key:
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Click "API Keys" in the sidebar
3. Create a new key and copy it

### **Step 2: Push to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/snapjam.git
git push -u origin main
```

**⚠️ Important:** Never commit `.env.local` — it's in `.gitignore` automatically.

### **Step 3: Deploy to Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your `snapjam` GitHub repository
4. In **Environment Variables**, add:
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** `sk-ant-your-actual-key-here`
5. Click **Deploy**

✨ Done! Your app is live. Vercel will give you a URL like `https://snapjam-xyz.vercel.app`

---

## How It Works

```
User uploads photo
    ↓
Frontend sends to /api/analyze
    ↓
Backend (Vercel Function) receives request
    ↓
Backend calls Anthropic with API key (safe, server-side)
    ↓
Backend returns results to frontend
    ↓
User sees their songs!
```

**Key point:** Your API key is stored only on Vercel's servers. Users never see it.

---

## Testing Locally

### **Option A: Vercel CLI (easiest)**

```bash
# Install Vercel CLI
npm i -g vercel

# Run locally with environment variables
vercel dev
```

Then open `http://localhost:3000`

### **Option B: Node.js + npm**

```bash
# Install dependencies
npm install

# Create .env.local with your API key
echo "ANTHROPIC_API_KEY=sk-ant-your-key" > .env.local

# Run a local server (using http-server)
npm install -g http-server
http-server
```

Then open `http://localhost:8080`

---

## File Structure

```
snapjam/
├── index.html                    # Your main app
├── api/
│   └── analyze.js               # Backend function (processes images)
├── vercel.json                  # Vercel configuration
├── .env.example                 # Template for environment variables
└── .gitignore                   # Keeps .env.local private
```

---

## Troubleshooting

### **Error: "Missing API key"**
→ Check that `ANTHROPIC_API_KEY` is set in Vercel Project Settings

### **Error: "Network error"**
→ Make sure your Vercel deployment finished (check Deployments tab)

### **Error: "Rate limited"**
→ You've exceeded Claude's rate limits. Try again in a few minutes.

### **Function timeout**
→ Image too large or API taking >60 seconds. Check image size (<2MB)

---

## Alternative Free Hosting (If You Prefer)

| Provider | Free Tier | Setup |
|----------|-----------|-------|
| **Vercel** | ✅ Best | Deploy with `vercel deploy` |
| **Netlify** | ✅ Good | Use Netlify Functions (similar setup) |
| **Railway** | ✅ Good | Deploy Node.js backend |
| **Render** | ✅ Basic | Deploy Node.js backend |

---

## Security Checklist

- ✅ API key stored in environment variables (never in code)
- ✅ HTTPS enforcement (automatic on Vercel)
- ✅ Images discarded immediately after analysis
- ✅ No request logging of image data
- ✅ Rate limiting available (set in Vercel)

---

## Next Steps

1. **Get Anthropic API key:** [console.anthropic.com](https://console.anthropic.com)
2. **Push to GitHub**
3. **Deploy on Vercel:** [vercel.com](https://vercel.com)
4. **Test it:** Visit your Vercel URL and upload a photo

Questions? Check [Vercel Docs](https://vercel.com/docs) or [Anthropic Docs](https://docs.anthropic.com)
