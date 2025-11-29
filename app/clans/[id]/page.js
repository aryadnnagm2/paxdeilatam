import { supabase } from "../../../lib/supabase";

export default async function ClanPage({ params }) {
  const { data } = await supabase
    .from("clans")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!data) return <p>No encontrado</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p><b>Región:</b> {data.region}</p>
      <p>{data.description}</p>
    </div>
  );
}
