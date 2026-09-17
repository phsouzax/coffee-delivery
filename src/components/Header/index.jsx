import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { HeaderContainer, LocationBadge, CartButton } from './styles'

export function Header() {
  const { cartItems } = useContext(CartContext)
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: 'none', color: '#8047F8', fontWeight: 'bold', fontSize: '1.25rem' }}>
        ☕ Coffee Delivery
      </Link>

      <nav>
        <LocationBadge>📍 São Paulo, SP</LocationBadge>
        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <CartButton>
            🛒
            {totalItems > 0 && <span>{totalItems}</span>}
          </CartButton>
        </Link>
      </nav>
    </HeaderContainer>
  )
}