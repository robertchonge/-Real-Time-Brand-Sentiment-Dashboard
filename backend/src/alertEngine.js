const Mention = require('./models/mention');

async function runAlertEngine(io) {
  const negatives = await Mention.countDocuments({
    createdAt: { $gte: new Date(Date.now() - 60 * 60 * 1000) },
    sentiment: /Negative/i
  });

  if (negatives > 5) {
    io.emit('alert', {
      message: 'High volume of negative mentions detected!'
    });
  }
}

module.exports = { runAlertEngine };

// File: src/models/mention.js

const mongoose = require('mongoose');

const MentionSchema = new mongoose.Schema({
  text: String,
  author: String,
  platform: String,
  sentiment: String,
  summary: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Mention', MentionSchema);
