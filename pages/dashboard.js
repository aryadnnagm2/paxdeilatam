
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function Dashboard() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    supabase.from('orders').select('*').then(res => setOrders(res.data || []))
  },[])

  return (
    <div style={{maxWidth:900, margin:'2rem auto', padding:'0 1rem'}}>
      <header style={{borderBottom:'1px solid #eee', padding:12}}><strong>Pax Dei Latam</strong></header>
      <h2>Mercado</h2>
      <p>Lista pública de órdenes</p>
      <ul>
        {orders.map(o => <li key={o.id}>{o.type} - {o.item} x{o.quantity} ({o.price})</li>)}
      </ul>
    </div>
  )
}
