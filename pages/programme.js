export default function Programme() {
  const days = Array.from({ length: 14 }, (_, i) => `Jour ${i + 1}`);
  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Programme 14 jours</h1>
      <ul>
        {days.map((day, i) => (
          <li key={i}><a href={`/programme/jour${i + 1}`}>{day}</a></li>
        ))}
      </ul>
    </main>
  );
}
