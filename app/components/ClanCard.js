export default function ClanCard({ clan }) {
  return (
    <div
      style={{
        border: "1px solid #555",
        padding: "15px",
        borderRadius: "8px",
        background: "#1a1a1a",
      }}
    >
      <h2>{clan.name}</h2>
      <p>{clan.description}</p>
    </div>
  );
}
