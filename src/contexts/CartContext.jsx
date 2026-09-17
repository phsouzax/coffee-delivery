import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext({})

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')
    if (storedCart) {
      return JSON.parse(storedCart)
    }
    return []
  })

  // Salva no localStorage sempre que o carrinho mudar
  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartItems])

  // Adiciona café ao carrinho tratando preço e quantidade como números
  function addCoffeeToCart(coffee) {
    const coffeeExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    )

    if (coffeeExistsInCart < 0) {
      setCartItems((state) => [
        ...state,
        {
          ...coffee,
          price: Number(coffee.price),
          quantity: Number(coffee.quantity),
        },
      ])
    } else {
      setCartItems((state) =>
        state.map((item, index) => {
          if (index === coffeeExistsInCart) {
            return {
              ...item,
              quantity: item.quantity + Number(coffee.quantity),
            }
          }
          return item
        })
      )
    }
  }

  // Atualiza a quantidade diretamente (+ ou - no checkout)
  function updateCoffeeQuantity(coffeeId, quantity) {
    const newQuantity = Number(quantity)

    if (newQuantity <= 0) {
      removeCoffeeFromCart(coffeeId)
      return
    }

    setCartItems((state) =>
      state.map((item) => {
        if (item.id === coffeeId) {
          return { ...item, quantity: newQuantity }
        }
        return item
      })
    )
  }

  // Remove um item do carrinho
  function removeCoffeeFromCart(coffeeId) {
    setCartItems((state) => state.filter((item) => item.id !== coffeeId))
  }

  // Limpa o carrinho após finalizar o pedido
  function clearCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        updateCoffeeQuantity,
        removeCoffeeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}