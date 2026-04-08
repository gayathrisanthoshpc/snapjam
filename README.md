# Deploy snapjam in 5 Minutes (Demo Mode - FREE)

## Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Deploy snapjam demo"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/snapjam.git
git push -u origin main
```

## Step 2: Deploy on Vercel (1 click)

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Select your `snapjam` GitHub repository
4. Click **"Deploy"** ✨

**Done!** Your app is live at: `https://snapjam-xxx.vercel.app`

---

## What Works Now

✅ Upload any photo  
✅ Select mood (optional)  
✅ Get 3 instant songs + vibes  
✅ Share results  
✅ Works offline too!

All with **realistic demo data** - completely free!

---

## Upgrade to Real AI Later

Want real AI instead of demo data?

1. Get API key: [console.anthropic.com](https://console.anthropic.com)
2. Add to Vercel: Settings → Environment Variables → `ANTHROPIC_API_KEY`
3. Update `api/analyze.js` to call real API
4. Redeploy!

See `DEPLOY.md` for full details.

---

## Local Testing

```bash
# Install Vercel CLI
npm install -g vercel

# Run locally
cd snapjam
vercel dev

# Open: http://localhost:3000
```

---

**Questions?** Check `DEPLOY.md` or `QUICKSTART.md`
