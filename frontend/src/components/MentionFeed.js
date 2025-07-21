export default function MentionFeed({ mentions }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Recent Mentions</h2>
      <ul className="space-y-2">
        {mentions.map((m, idx) => (
          <li key={idx} className="bg-white p-3 rounded shadow">
            <p><strong>{m.platform}</strong>: {m.text}</p>
            <p className="text-sm text-gray-600">{m.author}</p>
            <p className="text-sm text-blue-600">Sentiment: {m.sentiment}</p>
            <p className="text-sm italic">{m.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
