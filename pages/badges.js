// Structure du projet Next.js prêt à coller dans ton repo GitHub

// package.json
{
  "name": "issa-d-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "13.4.10",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}

// next.config.js
module.exports = {
  reactStrictMode: true
};

// pages/index.js
export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Bienvenue Issa D</h1>
      <p>Choisis ton programme :</p>
      <ul>
        <li><a href="/programme">Programme 14 jours</a></li>
        <li><a href="/badges">Mes Badges</a></li>
      </ul>
    </main>
  );
}

// pages/programme.js
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

// pages/badges.js
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
