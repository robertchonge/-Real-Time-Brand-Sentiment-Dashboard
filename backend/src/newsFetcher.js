const express = require('express');
const Mention = require('./models/mention');
const router = express.Router();

router.get('/mentions', async (req, res) => {
  const mentions = await Mention.find().sort({ createdAt: -1 }).limit(100);
  res.json(mentions);
});

module.exports = router;

// File: src/twitterStream.js

const { generateInsights } = require('./llmAnalyzer');
const Mention = require('./models/mention');

function monitorTwitterStream(io) {
  setInterval(async () => {
    const mockTweet = {
      text: 'Sample brand mention on Twitter.',
      author: '@exampleUser',
      platform: 'Twitter'
    };
    const aiResult = await generateInsights(mockTweet.text);
    const mention = await Mention.create({
      text: mockTweet.text,
      author: mockTweet.author,
      platform: mockTweet.platform,
      sentiment: aiResult.sentiment,
      summary: aiResult.summary
    });
    io.emit('new_mention', mention);
  }, 5000);
}

module.exports = { monitorTwitterStream };
