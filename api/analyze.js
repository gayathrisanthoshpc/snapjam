/**
 * Vercel Function - Demo Mode
 * Returns realistic demo data (no API key needed)
 * Replace with AI backend when ready: see DEPLOY.md
 */

const DEMO_SONGS = [
  {
    vibes: ['Golden', 'Nostalgic', 'Warm'],
    songs: [
      { title: 'Kesariya', artist: 'Arijit Singh', language: 'Hindi' },
      { title: 'Levitating', artist: 'Dua Lipa', language: 'English' },
      { title: 'Dynamite', artist: 'BTS', language: 'Korean' },
    ],
  },
  {
    vibes: ['Energetic', 'Bold', 'Urban'],
    songs: [
      { title: 'Blinding Lights', artist: 'The Weeknd', language: 'English' },
      { title: 'Hawái', artist: 'Maluma', language: 'Spanish' },
      { title: 'Buttabomma', artist: 'Anirudh Ravichander', language: 'Telugu' },
    ],
  },
  {
    vibes: ['Peaceful', 'Dreamy', 'Soft'],
    songs: [
      { title: 'Yoru ni Kakeru', artist: 'YOASOBI', language: 'Japanese' },
      { title: 'Mon Amour', artist: 'Isabelle Pierre', language: 'French' },
      { title: 'Rowdy Baby', artist: 'Dhanush', language: 'Tamil' },
    ],
  },
  {
    vibes: ['Joyful', 'Celebratory', 'Happy'],
    songs: [
      { title: 'Shape of You', artist: 'Ed Sheeran', language: 'English' },
      { title: 'Lean on Me', artist: 'Tauren Wells', language: 'English' },
      { title: 'Lehanga', artist: 'Aman Jaji', language: 'Punjabi' },
    ],
  },
  {
    vibes: ['Romantic', 'Tender', 'Intimate'],
    songs: [
      { title: 'Perfect', artist: 'Ed Sheeran', language: 'English' },
      { title: 'Oru Adaar Love', artist: 'Sooraj Santhosh', language: 'Malayalam' },
      { title: 'Tum Se', artist: 'Jubin Nautiyal', language: 'Hindi' },
    ],
  },
];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image, mood } = req.body;

  if (!image) {
    return res.status(400).json({ error: 'Image data required' });
  }

  try {
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 800));

    // Get random demo result
    const demoIndex = Math.floor(Math.random() * DEMO_SONGS.length);
    const result = { ...DEMO_SONGS[demoIndex] };

    // Adjust vibes based on mood if provided
    if (mood) {
      const moodMap = {
        Chill: ['Relaxed', 'Chill', 'Laid-back'],
        Hype: ['Energetic', 'Hype', 'Pumped'],
        Sad: ['Melancholic', 'Emotional', 'Introspective'],
        Romantic: ['Romantic', 'Tender', 'Intimate'],
        Adventure: ['Adventurous', 'Daring', 'Explorer'],
        Party: ['Fun', 'Party', 'Celebratory'],
      };
      result.vibes = moodMap[mood] || result.vibes;
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error('Backend error:', error);
    return res.status(500).json({
      error: error.message || 'Server error. Please try again.',
    });
  }
}
