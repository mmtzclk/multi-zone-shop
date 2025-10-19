"use client";

import Link from "next/link";
import { useCart } from "@repo/cart-store";
import {
  RiAccountCircleLine,
  RiCloseFill,
  RiMenuFill,
  RiSearchLine,
  RiShoppingCart2Line,
} from "react-icons/ri";

export default function Header() {
  const { count } = useCart();

  return (
    <>
      <div className="py-2 bg-black">
        <div className="container-block flex items-center justify-between gap-4">
          <div />
          <div className="text-white text-xs md:text-sm text-center">
            Sign up and get 20% off to your first order.
            <a href="#" className="font-medium underline pl-1">
              Sign Up Now
            </a>
          </div>
          <button aria-label="Close announcement">
            <RiCloseFill className="text-white size-5" />
          </button>
        </div>
      </div>
      <header className="sticky top-0 z-10 bg-white border-b border-black/10">
        <div className="container-block flex items-center justify-between gap-6 lg:gap-10 py-4 lg:py-6">
          <div className="flex items-center gap-4">
            <button className="block lg:hidden" aria-label="Open menu">
              <RiMenuFill className="size-6" />
            </button>
            <Link href={"/"}>
              <img src="/logo.svg" className="w-32 lg:w-40" alt="Logo" />
            </Link>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-4 xl:gap-6">
              <li>
                <Link href={"/products"}>Shop</Link>
              </li>
              <li>
                <Link href={"/products"}>On Sale</Link>
              </li>
              <li>
                <Link href={"/products"}>New Arrivals</Link>
              </li>
              <li>
                <Link href={"/products"}>Brands</Link>
              </li>
            </ul>
          </nav>

          <div className="flex-1 hidden sm:block">
            <div className="relative">
              <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 size-5 lg:size-6 text-black/40 pointer-events-none" />
              <input
                type="text"
                className="h-10 lg:h-12 pl-11 lg:pl-14 pr-4 text-sm lg:text-base rounded-4xl bg-muted placeholder:text-black/40 outline-none w-full"
                placeholder="Search for products..."
              />
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <button className="sm:hidden" aria-label="Search">
              <RiSearchLine className="size-6" />
            </button>

            <a href="/cart" className="relative" aria-label="Cart">
              <RiShoppingCart2Line className="size-6" />
              <span className="absolute -right-1 -top-1 size-4 flex items-center justify-center rounded-full bg-black text-white text-[10px]">
                {count}
              </span>
            </a>

            <a href="/" aria-label="Account">
              <RiAccountCircleLine className="size-6" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
