import { supabase } from "../../lib/supabase";
import ClanCards from "../components/ClanCards";

export default async function ClansPage() {
  const { data: clans } = await supabase.from("clans").select("*");

  return (
    <div>
      <h1>Clanes LATAM</h1>

      <div style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
        {clans?.map((c) => (
          <ClanCard key={c.id} clan={c} />
        ))}
      </div>
    </div>
  );
}
