export default function Home() {
  return (
    <div>
      <h1>Pax Dei LATAM</h1>
      <p style={{ maxWidth: "600px" }}>
        La primera plataforma dedicada a unir clanes latinoamericanos de Pax Dei.  
        Explorá clanes, comercio, eventos y más.
      </p>

      <a href="/clans">
        <button
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            borderRadius: "8px",
            background: "#1e90ff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            color: "white",
          }}
        >
          Ver clanes
        </button>
      </a>
    </div>
  );
}
