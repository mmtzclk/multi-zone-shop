"use client";
import { useState } from "react";
import { Product } from "@repo/types";
import AddToCartButton from "./AddToCartButton";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";

export default function AddToCartWithQty(props: { product: Product }) {
  const [qty, setQty] = useState(1);
  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => q + 1);

  return (
    <div className="flex items-center gap-5">
      <div className="h-12 xl:h-13 flex items-center gap-4 xl:gap-6 px-5 rounded-4xl bg-muted">
        <button>
          <PiMinusBold onClick={dec} className="size-4 xl:size-6" />
        </button>
        <span className="min-w-8 text-center font-medium">{qty}</span>
        <button>
          <PiPlusBold onClick={inc} className="size-4 xl:size-6" />
        </button>
      </div>
      <AddToCartButton product={props.product} qty={qty} />
    </div>
  );
}
