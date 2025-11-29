export default function ClanCard({ clan }) {
  return (
    <a
      href={`/clans/${clan.id}`}
      style={{
        padding: "15px",
        border: "1px solid #222",
        borderRadius: "10px",
        display: "block",
        background: "#111",
      }}
    >
      <h2>{clan.name}</h2>
      <p>{clan.description || "Sin descripción"}</p>
    </a>
  );
}
