"use client";
import { CartProvider } from "@repo/cart-store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
