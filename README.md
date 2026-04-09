# Deploy snapjam in 5 Minutes (AI-Powered - FREE Tier)

## Step 1: Get OpenAI API Key (FREE $5 credit for new users)

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up for a free account
3. Navigate to API Keys and create a new key
4. Copy the key (keep it safe!)

## Step 2: Push to GitHub

```bash
git init
git add .
git commit -m "Deploy snapjam AI"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/snapjam.git
git push -u origin main
```

## Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Select your `snapjam` GitHub repository
4. Add Environment Variable:
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key
5. Click **"Deploy"** ✨

## Local Development

```bash
npm install
# Set your API key
echo "OPENAI_API_KEY=your-key-here" > .env
vercel dev
```

Your app will be live with real AI analysis! 🎵

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
