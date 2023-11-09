import React, { createContext, useState } from 'react'
import { products } from '../App'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < products.length; i++) {
    cart[i] = 0
  }
  return cart
}

export const ShopContextProvider = props => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFroCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const contextValue = { cartItems, addToCart, removeFroCart }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
