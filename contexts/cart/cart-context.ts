import { createContext } from "react";
import type { TransactionItem } from "@/types/transaction";

interface CartContextType {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  cartItems: TransactionItem[];
  totalQty: number;
  totalValue: number;

  addToCart: (item: TransactionItem) => void;
  removeFromCart: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
  editPrice: (id:string, newPrice:number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);