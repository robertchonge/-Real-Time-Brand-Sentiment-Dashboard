import { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function SentimentChart({ mentions }) {
  useEffect(() => {
    const ctx = document.getElementById('sentimentChart').getContext('2d');
    const sentiments = mentions.map((m) => m.sentiment);
    const counts = ['Positive', 'Negative', 'Neutral'].map(
      (sent) => sentiments.filter((s) => s === sent).length
    );
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
          data: counts,
          backgroundColor: ['#34D399', '#EF4444', '#9CA3AF']
        }]
      }
    });
  }, [mentions]);

  return <canvas id="sentimentChart" className="mb-6"></canvas>;
}
