"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  qty: number;
  rating?: { rate: number; count: number };
};

type CartState = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: number) => void;
  setQty: (id: number, qty: number) => void;
  clear: () => void;
  subtotal: number;
  count: number;
};

const CartCtx = createContext<CartState | null>(null);

const STORAGE_KEY = "cartItems";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        setItems(JSON.parse(e.newValue));
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const api = useMemo<CartState>(() => {
    const add: CartState["add"] = (item, qty = 1) => {
      setItems((prev) => {
        const i = prev.findIndex((x) => x.id === item.id);
        if (i >= 0) {
          const next = [...prev];
          next[i] = { ...next[i], qty: next[i].qty + qty };
          return next;
        }
        return [...prev, { ...item, qty }];
      });
    };
    const remove: CartState["remove"] = (id) =>
      setItems((prev) => prev.filter((x) => x.id !== id));
    const setQty: CartState["setQty"] = (id, qty) =>
      setItems((prev) =>
        prev.map((x) => (x.id === id ? { ...x, qty: Math.max(1, qty) } : x))
      );
    const clear: CartState["clear"] = () => setItems([]);
    const subtotal = items.reduce((s, x) => s + x.qty * x.price, 0);
    const count = items.length;

    return { items, add, remove, setQty, clear, subtotal, count };
  }, [items]);

  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}
