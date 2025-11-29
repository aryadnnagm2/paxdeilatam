import { supabase } from "../../lib/supabase";

export default async function OrdersPage() {
  const { data: orders } = await supabase.from("orders").select(`
    id, type, item, quantity, price, status,
    profiles ( username )
  `);

  return (
    <div>
      <h1>Mercado LATAM</h1>

      {orders?.map((o) => (
        <div
          key={o.id}
          style={{
            marginTop: "15px",
            padding: "15px",
            background: "#111",
            borderRadius: "10px",
            border: "1px solid #222",
          }}
        >
          <h3>{o.type === "buy" ? "Compra" : "Venta"} — {o.item}</h3>
          <p>Cantidad: {o.quantity}</p>
          <p>Precio: {o.price}</p>
          <p>Estado: {o.status}</p>
          <p>Usuario: {o.profiles?.username || "N/A"}</p>
        </div>
      ))}
    </div>
  );
}
