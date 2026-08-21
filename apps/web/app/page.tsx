export default function HomePage() {
  return (
    <main style={{ fontFamily: 'system-ui', maxWidth: 960, margin: '0 auto', padding: 32 }}>
      <p>MICRA Platform OS</p>
      <h1>Farm Operations Portal</h1>
      <p>
        Canonical Web build target for R1 Farm Digital Core. Domain state is owned by the MICRA API;
        this surface is presentation-only.
      </p>
      <section>
        <h2>Baseline modules</h2>
        <ul>
          <li>Farm registry</li>
          <li>Pond registry</li>
          <li>Baseline assessment</li>
          <li>Evidence and audit context</li>
        </ul>
      </section>
    </main>
  );
}
