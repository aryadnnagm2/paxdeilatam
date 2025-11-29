
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function ClanPage({ clan, orders }) {
  return (
    <div style={{maxWidth:900, margin:'2rem auto', padding:'0 1rem'}}>
      <header style={{borderBottom:'1px solid #eee', padding:12}}><strong>Pax Dei Latam</strong></header>
      <h2>{clan?.name || 'Clan'}</h2>
      <p>{clan?.description}</p>
      <h3>Órdenes</h3>
      <ul>
        {(orders||[]).map(o => <li key={o.id}>{o.type} - {o.item} x{o.quantity} ({o.price})</li>)}
      </ul>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.params
  const { data: clan } = await supabase.from('clans').select('*').eq('id', id).single()
  const { data: orders } = await supabase.from('orders').select('*').eq('clan_id', id).order('created_at', {ascending:false})
  return { props: { clan: clan || null, orders: orders || [] } }
}
