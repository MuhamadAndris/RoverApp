import {  useMemo, useState, type ReactNode } from "react";
import type { TransactionItem } from "@/types/transaction";
import { CartContext } from "./cart-context";

export function CartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<TransactionItem[]>([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const addToCart = (item: TransactionItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === item.id);

      if (existing) {
        return prev.map((item) =>
          item.id === item.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  const editPrice = (id:string, newPrice:number) => {
    setCartItems((prev) => 
      prev.map((product) => 
        product.id === id 
          ? {...product, netto: newPrice}
          : product
      )
    )
  }

  const decreaseQty = (id: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalQty = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.qty, 0),
    [cartItems]
  );

  const totalValue = useMemo(
    () =>
      cartItems.reduce(
        (acc, item) => acc + item.qty * item.finalPrice,
        0
      ),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        cartItems,
        totalQty,
        totalValue,
        addToCart,
        removeFromCart,
        decreaseQty,
        clearCart,
        editPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}