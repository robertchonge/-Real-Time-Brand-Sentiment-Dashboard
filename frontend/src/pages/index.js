import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import MentionFeed from '../components/MentionFeed';
import SentimentChart from '../components/SentimentChart';
import WordCloud from '../components/WordCloud';
import AlertBanner from '../components/AlertBanner';

const socket = io('http://localhost:8000');

export default function Home() {
  const [mentions, setMentions] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    socket.on('new_mention', (mention) => {
      setMentions((prev) => [mention, ...prev.slice(0, 99)]);
    });
    socket.on('alert', (alertData) => {
      setAlert(alertData.message);
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Brand Sentiment Dashboard</h1>
      {alert && <AlertBanner message={alert} />}
      <SentimentChart mentions={mentions} />
      <WordCloud mentions={mentions} />
      <MentionFeed mentions={mentions} />
    </div>
  );
}

// File: src/components/AlertBanner.js

export default function AlertBanner({ message }) {
  return (
    <div className="bg-red-100 text-red-800 p-4 rounded mb-4">
      ⚠️ {message}
    </div>
  );
        }
