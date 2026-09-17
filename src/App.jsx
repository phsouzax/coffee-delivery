import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'
import { Header } from './components/Header'
import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header />
        <Router />
      </CartContextProvider>
    </BrowserRouter>
  )
}