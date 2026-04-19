# snapjam

Upload a photo, get 3 song recommendations that match its vibe. Songs are picked from 50+ languages and are available on Instagram music.

**Live:** https://snapjam-kqye.vercel.app

---

## What it has

- Upload any photo (selfie, landscape, food, aesthetic — anything)
- Optional mood selector to add extra context
- Claude AI reads the photo's mood, colors, energy, and setting
- Returns 3 songs from different languages that match
- Share button generates a text summary of your vibe + matches
- Recent matches saved locally in browser
- FAQ, About, and Contact pages
- Photos are never stored — discarded immediately after analysis

## Built with

- Vanilla HTML, CSS, JavaScript
- Claude AI (vision) via Anthropic API
- Deployed on Vercel

## Run locally

Needs an Anthropic API key.

```
git clone https://github.com/gayathrisanthoshpc/snapjam
cd snapjam
```

Add your API key where the fetch call is made, then open `index.html`.
