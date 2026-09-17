import { Routes, Route, Link } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'

function Success() {
  return (
    <main style={{ marginTop: '5rem', textAlign: 'center' }}>
      <h1 style={{ color: '#C47F17', fontSize: '2rem' }}>Uhu! Pedido confirmado 🎉</h1>
      <p style={{ color: '#574F4D', fontSize: '1.25rem', marginTop: '0.5rem' }}>
        Agora é só aguardar que logo o café chegará até você!
      </p>

      <div style={{ marginTop: '2.5rem' }}>
        <Link 
          to="/" 
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: '#8047F8', 
            color: '#FFF', 
            borderRadius: '6px', 
            textDecoration: 'none',
            fontWeight: 'bold' 
          }}
        >
          Voltar para a Home
        </Link>
      </div>
    </main>
  )
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}