import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const CART_STORAGE_KEY = "biblio-tec-cart";

function leerCarritoInicial() {
  try {
    const guardado = localStorage.getItem(CART_STORAGE_KEY);
    return guardado ? JSON.parse(guardado) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(leerCarritoInicial);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(book) {
    if (!book || book.stock <= 0) return;

    setCartItems((actuales) => {
      const existente = actuales.find((item) => item.id === book.id);

      if (existente) {
        if (existente.quantity >= book.stock) return actuales;
        return actuales.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...actuales, { ...book, quantity: 1 }];
    });
  }

  function updateQuantity(bookId, quantity) {
    setCartItems((actuales) => actuales.map((item) => {
      if (item.id !== bookId) return item;
      const cantidadSegura = Math.max(1, Math.min(item.stock, Number(quantity) || 1));
      return { ...item, quantity: cantidadSegura };
    }));
  }

  function removeFromCart(bookId) {
    setCartItems((actuales) => actuales.filter((item) => item.id !== bookId));
  }

  function clearCart() {
    setCartItems([]);
  }

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const value = useMemo(() => ({
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  }), [cartItems, totalItems, totalPrice]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe utilizarse dentro de CartProvider");
  return context;
}
