import { useState, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CardContainer, CardFooter, CounterContainer } from './styles'

export function CoffeeCard({ coffee }) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useContext(CartContext)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddToCart() {
    addCoffeeToCart(coffee, quantity)
  }

  return (
    <CardContainer>
      <img src={coffee.image} alt={coffee.title} />
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>

      <CardFooter>
        <span>R$ {coffee.price.toFixed(2)}</span>
        
        <CounterContainer>
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
          <button onClick={handleAddToCart} style={{ marginLeft: '0.5rem' }}>
            🛒
          </button>
        </CounterContainer>
      </CardFooter>
    </CardContainer>
  )
}