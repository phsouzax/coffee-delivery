import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Plus, Minus } from 'lucide-react'
import { CartContext } from '../../contexts/CartContext'
import {
  CoffeeCardContainer,
  TagsContainer,
  Tag,
  Title,
  Description,
  CardFooter,
  Price,
  Actions,
  Counter,
  AddCartButton,
} from './styles'

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
    addCoffeeToCart({ ...coffee, quantity })
  }

  return (
    <CoffeeCardContainer
      as={motion.div}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <motion.img
        src={coffee.image}
        alt={coffee.title}
        whileHover={{ scale: 1.08, rotate: 3 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />

      <TagsContainer>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>

      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <Price>
          R$ <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Actions>
          <Counter>
            <button type="button" onClick={handleDecrease}>
              <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={handleIncrease}>
              <Plus size={14} />
            </button>
          </Counter>

          <AddCartButton
            as={motion.button}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
          >
            <ShoppingCart size={22} color="#FFF" fill="#FFF" />
          </AddCartButton>
        </Actions>
      </CardFooter>
    </CoffeeCardContainer>
  )
}