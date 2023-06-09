import React, { createContext, useState, useEffect, useCallback } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  calculateTotal: () => {},
  calculateItemSubtotal: () => {},
  total: 0,
  totalUnits: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalUnits, setTotalUnits] = useState(0);

  console.log(cart);

  const calculateItemSubtotal = useCallback((amount, price) => {
    const itemQuantity = parseInt(amount);
    const itemPrice = parseFloat(price);
    return itemQuantity * itemPrice;
  }, []);

  const calculateTotal = useCallback(() => {
    let totalAmount = 0;
    cart.forEach((item) => {
      const itemSubtotal = calculateItemSubtotal(item.price, item.amount);
      totalAmount += itemSubtotal;
    });
    return totalAmount;
  }, [cart, calculateItemSubtotal]);

  const calculateTotalUnits = useCallback(() => {
    let totalUnits = 0;
    cart.forEach((item) => {
      totalUnits += parseInt(item.amount);
    });
    return totalUnits;
  }, [cart]);

  useEffect(() => {
    const totalAmount = calculateTotal();
    const totalUnits = calculateTotalUnits();
    setTotal(totalAmount);
    setTotalUnits(totalUnits);
  }, [cart, calculateTotal, calculateTotalUnits]);

  const addItem = (item, amount) => {
    const isInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (isInCart) {
      console.log("Producto ya comprado: ", item);
    } else {
      setCart((prev) => [...prev, { ...item, amount }]);
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        calculateTotal,
        calculateItemSubtotal,
        total,
        totalUnits,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
