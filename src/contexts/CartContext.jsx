import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext({})

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('@coffee-delivery:cart-1.0.0')
    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)
    localStorage.setItem('@coffee-delivery:cart-1.0.0', stateJSON)
  }, [cartItems])

  function addCoffeeToCart(coffee, quantity) {
    setCartItems((state) => {
      const itemAlreadyExists = state.findIndex((item) => item.id === coffee.id)

      if (itemAlreadyExists < 0) {
        return [...state, { ...coffee, quantity }]
      } else {
        return state.map((item, index) => {
          if (index === itemAlreadyExists) {
            return { ...item, quantity: item.quantity + quantity }
          }
          return item
        })
      }
    })
  }

  function changeCartItemQuantity(cartItemId, type) {
    setCartItems((state) =>
      state.map((item) => {
        if (item.id === cartItemId) {
          const newQuantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1
          return {
            ...item,
            quantity: newQuantity > 0 ? newQuantity : 1,
          }
        }
        return item
      })
    )
  }

  function removeCartItem(coffeeId) {
    setCartItems((state) => state.filter((item) => item.id !== coffeeId))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}