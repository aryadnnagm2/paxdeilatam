export default function Navbar() {
  return (
    <nav
      style={{
        padding: "15px 20px",
        background: "#111",
        display: "flex",
        gap: "20px",
        borderBottom: "1px solid #222",
      }}
    >
      <a href="/">Inicio</a>
      <a href="/clans">Clanes</a>
      <a href="/orders">Mercado</a>
      <a href="/login" style={{ marginLeft: "auto" }}>Login</a>
    </nav>
  );
}
