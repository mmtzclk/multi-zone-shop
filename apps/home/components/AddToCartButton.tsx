"use client";

import { useState } from "react";
import { useCart } from "@repo/cart-store";
import { Product } from "@repo/types";
import { RiCheckLine } from "react-icons/ri";
import { CgSpinnerAlt } from "react-icons/cg";
import { toast } from "sonner";

type Props = {
  product: Product;
  qty: number;
  successDurationMs?: number;
};

export default function AddToCartButton({
  product,
  qty,
  successDurationMs = 3500,
}: Props) {
  const { add } = useCart();
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  const handleClick = async () => {
    if (status !== "idle") return;
    try {
      setStatus("loading");

      await sleep(2000);
      await Promise.resolve(add(product, qty));
      setStatus("success");
      toast("Product added to cart", {
        duration: 7000,
        action: {
          label: "Cart",
          onClick: () => (window.location.href = "/cart"),
        },
      });

      const t = setTimeout(() => setStatus("idle"), successDurationMs);
      return () => clearTimeout(t);
    } catch {
      setStatus("idle");
    }
  };

  const isBusy = status !== "idle";

  return (
    <button
      onClick={handleClick}
      disabled={isBusy}
      className={[
        "h-12 xl:h-13 flex items-center justify-center px-6 whitespace-nowrap",
        "font-medium text-center flex-1 rounded-full",
        "bg-black text-white hover:opacity-90",
        isBusy ? "opacity-90 cursor-default" : "",
      ].join(" ")}
      aria-live="polite"
    >
      {status === "loading" && (
        <span className="inline-flex items-center gap-2">
          <CgSpinnerAlt className="size-4 animate-spin" />
          Adding...
        </span>
      )}

      {status === "success" && (
        <span className="inline-flex items-center gap-2">
          <RiCheckLine className="size-5" />
          Added to Cart
        </span>
      )}

      {status === "idle" && <>Add to Cart</>}
    </button>
  );
}
