export default function WordCloud({ mentions }) {
  const allText = mentions.map(m => m.text).join(' ');
  return (
    <div className="bg-gray-50 p-4 rounded shadow mb-6">
      <p className="italic text-sm">Word cloud (mock-up):</p>
      <p>{allText.substring(0, 300)}...</p>
    </div>
  );
}
