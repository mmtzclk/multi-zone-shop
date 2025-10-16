"use client";
import Image from "next/image";
import { useCart } from "@repo/cart-store";

export default function CartPage() {
  const { items, remove, setQty, clear, subtotal, count } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-semibold">Sepet ({count})</h1>

      {items.length === 0 ? (
        <p className="mt-2 opacity-70">Sepetiniz henüz boş.</p>
      ) : (
        <>
          <ul className="mt-6 space-y-4">
            {items.map((it) => (
              <li
                key={it.id}
                className="flex items-center gap-4 border rounded-2xl p-4"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-medium">{it.title}</div>
                  <div className="opacity-70">${it.price}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => setQty(it.id, it.qty - 1)}
                      className="size-8 rounded-lg border"
                    >
                      -
                    </button>
                    <span className="min-w-8 text-center">{it.qty}</span>
                    <button
                      onClick={() => setQty(it.id, it.qty + 1)}
                      className="size-8 rounded-lg border"
                    >
                      +
                    </button>
                    <button
                      onClick={() => remove(it.id)}
                      className="ml-4 text-sm underline"
                    >
                      Kaldır
                    </button>
                  </div>
                </div>
                <div className="font-semibold">
                  ${(it.price * it.qty).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between">
            <button onClick={clear} className="text-sm underline">
              Sepeti Temizle
            </button>
            <div className="text-xl font-semibold">
              Ara toplam: ${subtotal.toFixed(2)}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
