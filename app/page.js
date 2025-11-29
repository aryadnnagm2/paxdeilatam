export default function Home() {
  return (
    <main style={{
      padding: "40px",
      maxWidth: "900px",
      margin: "0 auto",
      fontFamily: "Arial",
      color: "#fff"
    }}>
      
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Pax Dei LATAM
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6", opacity: 0.9 }}>
        Bienvenido a la primera página comunitaria para clanes Latinos de Pax Dei.
        Esta plataforma permitirá conectar clanes, publicar órdenes de compra/venta,
        y organizar actividades entre jugadores de la región.
      </p>

      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "12px"
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Estado del proyecto</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>✔️ Conexión a Supabase lista</li>
          <li>✔️ Login pronto a activarse</li>
          <li>🛠️ Creando diseño de clanes</li>
          <li>🛠️ Configurando órdenes de compra/venta</li>
        </ul>
      </div>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 20px",
          borderRadius: "8px",
          background: "#1e90ff",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          color: "white"
        }}
      >
        Iniciar sesión
      </button>
    </main>
  );
}
