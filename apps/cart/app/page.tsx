"use client";
import Image from "next/image";
import { useCart } from "@repo/cart-store";
import { BiTrash } from "react-icons/bi";
import { PiArrowRight, PiMinusBold, PiPlusBold } from "react-icons/pi";
import { RiDiscountPercentLine } from "react-icons/ri";

export default function CartPage() {
  const { items, remove, setQty, subtotal, count } = useCart();

  const delivery = 15;
  const discount = subtotal * 0.2;
  const total = subtotal - discount + delivery;

  return (
    <div>
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-display mb-6">
        YOUR CART ({count})
      </h1>

      {items.length === 0 ? (
        <p className="opacity-70">Your cart is empty</p>
      ) : (
        <>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-7 rounded-[20px] border border-black/10 px-4 lg:px-6 py-3.5 lg:py-5 h-fit">
              <ul className="flex flex-col divide-y divide-black/10">
                {items.map((it) => (
                  <li
                    key={it.id}
                    className="py-4 lg:py-6 first:pt-0 last:pb-0 flex gap-4"
                  >
                    <a
                      href={`/products/${it.id}`}
                      className="size-24 md:size-28 lg:size-31 relative rounded-lg bg-paper overflow-hidden"
                    >
                      <Image
                        src={it.image}
                        alt={it.title}
                        fill
                        className="object-contain p-2 lg:p-3 group-hover:scale-110 duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                        sizes="(min-width:1024px)33vw,(min-width:640px)50vw,100vw"
                      />
                    </a>
                    <div className="flex-1">
                      <div className="flex gap-4 justify-between items-start">
                        <a
                          href={`/products/${it.id}`}
                          className="flex-1 font-bold text-lg xl:text-xl line-clamp-1"
                        >
                          {it.title}
                        </a>
                        <button onClick={() => remove(it.id)}>
                          <BiTrash className="size-5 lg:size-6 text-danger" />
                        </button>
                      </div>
                      <div className="flex flex-col xl:gap-1 mb-2 text-[13px] xl:text-sm">
                        <div>
                          <span>Size: </span>
                          <span className="text-black/60">Large</span>
                        </div>
                        <div>
                          <span>Color: </span>
                          <span className="text-black/60">White</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-5">
                        <div className="font-bold text-xl xl:text-2xl">
                          ${(it.price * it.qty).toFixed(2)}
                        </div>
                        <div className="h-9 xl:h-11 flex items-center gap-2 md:gap-4 xl:gap-6 px-3.5 lg:px-5 rounded-4xl bg-muted">
                          <button>
                            <PiMinusBold
                              onClick={() => setQty(it.id, it.qty - 1)}
                              className="size-3.5 xl:size-5"
                            />
                          </button>
                          <span className="min-w-5 lg:min-w-8 text-center text-xs md:text-sm font-medium">
                            {it.qty}
                          </span>
                          <button>
                            <PiPlusBold
                              onClick={() => setQty(it.id, it.qty + 1)}
                              className="size-3.5 xl:size-5"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-5 rounded-[20px] border border-black/10 px-4 lg:px-6 py-3.5 lg:py-5 h-fit">
              <h2 className="text-xl lg:text-2xl font-bold mb-4 xl:mb-6">
                Order Summary
              </h2>
              <div className="flex flex-col gap-3.5 xl:gap-5 text-base md:text-lg xl:text-xl">
                <div className="flex items-center justify-between gap-5">
                  <div className="text-black/60">Subtotal</div>
                  <div className="font-bold">${subtotal.toFixed(2)}</div>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <div className="text-black/60">Discount (-20%)</div>
                  <div className="font-bold text-danger">
                    -${discount.toFixed(2)}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <div className="text-black/60">Delivery Fee</div>
                  <div className="font-bold ">${delivery}</div>
                </div>
              </div>
              <div className="h-px w-full bg-black/10 my-3.5 xl:my-5"></div>
              <div className="flex items-center justify-between gap-5 mb-6">
                <div className="text-lg xl:text-xl">Total</div>
                <div className="text-xl xl:text-2xl font-bold ">
                  ${total.toFixed(2)}
                </div>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex-1">
                  <RiDiscountPercentLine className="absolute left-4 top-1/2 -translate-y-1/2 size-5 lg:size-6 text-black/40 pointer-events-none" />
                  <input
                    type="text"
                    className="h-10 lg:h-12 pl-11 lg:pl-14 pr-4 text-sm lg:text-base rounded-4xl bg-muted placeholder:text-black/40 outline-none w-full"
                    placeholder="Add promo code"
                  />
                </div>
                <button className="h-10 lg:h-12 flex items-center px-9 rounded-full bg-black text-white font-medium text-sm lg:text-base">
                  Apply
                </button>
              </div>
              <button className="h-12 xl:h-15 flex items-center justify-center gap-3 text-center bg-black text-white font-medium px-6 w-full rounded-full text-sm lg:text-base">
                <span>Go to Checkout</span>
                <PiArrowRight className="size-5 lg:size-6" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
