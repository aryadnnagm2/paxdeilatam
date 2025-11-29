
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function Home({ clans }) {
  return (
    <div style={{fontFamily:'Inter, system-ui, -apple-system'}}>
      <header style={{borderBottom:'1px solid #eee', padding:16, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <strong>Pax Dei Latam</strong>
        <nav>
          <Link href="/">Home</Link> | <Link href="/dashboard">Mercado</Link> | <Link href="/login">Login</Link>
        </nav>
      </header>
      <main style={{maxWidth:900, margin:'2rem auto', padding:'0 1rem'}}>
        <h1>Bienvenido a Pax Dei Latam</h1>
        <p>Portal minimalista para clanes latinos.</p>
        <section>
          {clans.length === 0 && <p>No hay clanes aún.</p>}
          {clans.map(c => (
            <article key={c.id} style={{border:'1px solid #eee', padding:12, borderRadius:6, marginBottom:10}}>
              <h3>{c.name} {c.tag ? `(${c.tag})` : ''}</h3>
              <p style={{margin:0}}>{c.description}</p>
              <div style={{marginTop:8}}><Link href={`/clan/${c.id}`}>Ver clan</Link></div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await supabase.from('clans').select('*').limit(50)
  return { props: { clans: data || [] } }
}
