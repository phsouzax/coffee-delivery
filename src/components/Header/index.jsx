import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, MapPin } from 'lucide-react'
import { CartContext } from '../../contexts/CartContext'
import { HeaderContainer, HeaderActions, LocationBadge, CartButton, CartBadge } from './styles'

export function Header() {
  const { cartItems } = useContext(CartContext)
  const totalItems = cartItems ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0

  return (
    <HeaderContainer>
      <div className="content">
        <a href="/">
          <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#272221', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ☕ Coffee<span style={{ color: '#8047F8' }}>Delivery</span>
          </span>
        </a>

        <HeaderActions>
          <LocationBadge>
            <MapPin size={18} color="#8047F8" fill="#8047F8" />
            <span>Porto Alegre, RS</span>
          </LocationBadge>

          <a href="/checkout">
            <CartButton as={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ShoppingCart size={20} color="#C47F17" fill="#C47F17" />
              
              <AnimatePresence>
                {totalItems > 0 && (
                  <CartBadge
                    as={motion.span}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    key={totalItems}
                    transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                  >
                    {totalItems}
                  </CartBadge>
                )}
              </AnimatePresence>
            </CartButton>
          </a>
        </HeaderActions>
      </div>
    </HeaderContainer>
  )
}