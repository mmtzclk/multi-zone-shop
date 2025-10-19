"use client";

import { useState } from "react";
import ColorPicker from "@/components/ColorPicker";
import AddToCartWithQty from "@/components/AddToCartWithQty";
import Divider from "@/components/Divider";
import { Product } from "@repo/types";
import OptionPicker from "./OptionPicker";

export default function ProductActions({ product }: { product: Product }) {
  const [color, setColor] = useState<string>("#ffffff");

  return (
    <>
      <Divider />
      <ColorPicker
        colors={["#ffffff", "#4F4631", "#314F4A", "#31344F"]}
        value={color}
        onChange={setColor}
        label="Select Color"
      />

      <Divider />

      <OptionPicker
        label="Select Weight"
        options={[
          { value: "sm", label: "Small" },
          { value: "md", label: "Medium" },
          { value: "lg", label: "Large" },
          { value: "xl", label: "X-Large", disabled: true },
        ]}
        defaultValue="lg"
      />
      <Divider />

      <AddToCartWithQty product={product} />
    </>
  );
}
