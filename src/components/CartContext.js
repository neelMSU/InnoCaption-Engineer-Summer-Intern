import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();//Creating a new context for the cart

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);//Initially cart state empty

  const addToCart = (product) => {// Add item to cart state
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {// remove items from cart
    setCart(cart.filter(product => product.id !== productId));
  };

  const editCartItem = (productId, quantity) => { //To update the quantity
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, editCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
