import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
    // Remove data URL prefix if present
    const base64Image = image.replace(/^data:image\/[a-z]+;base64,/, '');

    const prompt = `Analyze this image and determine the mood/vibe. Then suggest 3 songs from around the world that match this vibe. Return in JSON format: {"vibes": ["vibe1", "vibe2", "vibe3"], "songs": [{"title": "Song Title", "artist": "Artist Name", "language": "Language"}]} ${mood ? `The user specified mood: ${mood}` : ''}`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: prompt },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`,
              },
            },
          ],
        },
      ],
      max_tokens: 500,
    });

    const content = response.choices[0].message.content;
    let result;
    try {
      result = JSON.parse(content);
    } catch (parseError) {
      // Fallback if JSON parsing fails
      result = {
        vibes: ['Creative', 'Unique', 'Expressive'],
        songs: [
          { title: 'Unknown Song', artist: 'AI Generated', language: 'English' },
          { title: 'Another Tune', artist: 'Music AI', language: 'English' },
          { title: 'Vibe Match', artist: 'Global Artist', language: 'English' },
        ],
      };
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error('OpenAI API error:', error);
    return res.status(500).json({
      error: error.message || 'AI analysis failed. Please try again.',
    });
  }
}
