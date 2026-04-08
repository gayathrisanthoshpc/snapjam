# Quick Reference

## Setup

```bash
# 1. Clone or create repo
git clone <your-repo>
cd snapjam

# 2. Set up environment
cp .env.example .env.local
# Edit .env.local and add your API key

# 3. Install Vercel CLI
npm i -g vercel

# 4. Test locally
vercel dev
# Open http://localhost:3000
```

## Deploying to Vercel

### First Time
```bash
# Connect to Vercel (one-time setup)
vercel

# Follow prompts to link project
```

### Environment Variables in Vercel
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Settings → Environment Variables
4. Add: `ANTHROPIC_API_KEY` = `sk-ant-your-key`

### Deploy
```bash
# Production deploy
vercel deploy --prod

# Or push to GitHub and Vercel auto-deploys
```

## Testing

```bash
# Local testing
npm run dev

# Check logs
vercel logs

# View project
vercel ls
```

## Troubleshooting

```bash
# Check environment variables are set
vercel env ls

# View function logs
vercel logs

# Rebuild and redeploy
vercel deploy --prod --force
```

## File Locations

- **Frontend:** `index.html`
- **Backend API:** `api/analyze.js`
- **Config:** `vercel.json`
- **Environment:** `.env.local` (local only, never commit)
