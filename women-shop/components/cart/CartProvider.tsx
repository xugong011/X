"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { CartItem } from "@/types/cart";
import { getProductBySlug } from "@/data/products";

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (slug: string, size: string, color: string) => void;
  updateQuantity: (
    slug: string,
    size: string,
    color: string,
    quantity: number,
  ) => void;
  clear: () => void;
  totalQuantity: number;
  totalAmount: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "xigongfu-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // 从本地存储恢复购物车（仅客户端）
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      // 忽略脏数据
    }
    setLoaded(true);
  }, []);

  // 变更后写回本地存储
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, loaded]);

  function addItem(item: Omit<CartItem, "quantity">, quantity = 1) {
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) =>
          i.slug === item.slug && i.size === item.size && i.color === item.color,
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
        return next;
      }
      return [...prev, { ...item, quantity }];
    });
  }

  function removeItem(slug: string, size: string, color: string) {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.slug === slug && i.size === size && i.color === color),
      ),
    );
  }

  function updateQuantity(
    slug: string,
    size: string,
    color: string,
    quantity: number,
  ) {
    if (quantity <= 0) {
      removeItem(slug, size, color);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.slug === slug && i.size === size && i.color === color
          ? { ...i, quantity }
          : i,
      ),
    );
  }

  function clear() {
    setItems([]);
  }

  const totalQuantity = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalAmount = items.reduce((sum, i) => {
    const product = getProductBySlug(i.slug);
    return sum + (product ? product.price * i.quantity : 0);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clear,
        totalQuantity,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart 必须在 CartProvider 内使用");
  }
  return ctx;
}