export default function Badges() {
  const badges = ['Contrôle', 'Endurance', 'Technique', 'Créativité', 'Vitesse', 'Concentration'];
  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Mes Badges</h1>
      <ul>
        {badges.map((badge, i) => (
          <li key={i}>[ ] {badge}</li>
        ))}
      </ul>
    </main>
  );
}
