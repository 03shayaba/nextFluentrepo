'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('nextfluent_cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveCart = (items) => {
    setCartItems(items);
    try {
      localStorage.setItem('nextfluent_cart', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  };

  const addToCart = (course) => {
    const exists = cartItems.find(item => item.id === course.id);
    if (!exists) {
      const updated = [...cartItems, { ...course, quantity: 1 }];
      saveCart(updated);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (courseId) => {
    const updated = cartItems.filter(item => item.id !== courseId);
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const cartTotal = cartItems.reduce((acc, item) => {
    const priceNum = parseInt((item.currentPrice || item.price || '0').replace(/[^0-9]/g, '')) || 0;
    return acc + priceNum;
  }, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      cartTotal,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
