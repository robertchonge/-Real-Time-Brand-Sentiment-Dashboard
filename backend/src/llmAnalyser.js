const axios = require('axios');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function generateInsights(text) {
  const prompt = `Analyze the following brand mention:\n\n${text}\n\n- Sentiment (Positive/Negative/Neutral):\n- Summary:`;

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200
    },
    {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  const result = response.data.choices[0].message.content;

  const sentimentMatch = result.match(/Sentiment: (.*)/i);
  const summaryMatch = result.match(/Summary:(.*)/is);

  return {
    sentiment: sentimentMatch ? sentimentMatch[1].trim() : 'Neutral',
    summary: summaryMatch ? summaryMatch[1].trim() : ''
  };
}

module.exports = { generateInsights };
