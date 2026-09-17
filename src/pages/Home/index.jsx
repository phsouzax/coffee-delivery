import { coffees } from '../../data/coffees'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <main style={{ padding: '2rem 0' }}>
      <h2 style={{ color: '#403937', fontSize: '2rem' }}>Nossos cafés</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </main>
  )
}