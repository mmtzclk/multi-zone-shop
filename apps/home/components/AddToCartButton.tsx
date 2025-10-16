"use client";
import { useCart } from "@repo/cart-store";
import { Product } from "@repo/types";

export default function AddToCartButton(props: { product: Product }) {
  const { add } = useCart();
  return (
    <button
      onClick={() => add(props.product, 1)}
      className="inline-flex items-center px-4 py-2 rounded-2xl bg-black text-white hover:opacity-90"
    >
      Sepete Ekle
    </button>
  );
}
