import "./globals.css";
import { ReactNode } from "react";
import Providers from "./providers";
import { satoshi, archivoBlack } from "@repo/fonts";
import Link from "next/link";
import {
  RiAccountCircleLine,
  RiCloseFill,
  RiMenuFill,
  RiSearchLine,
  RiShoppingCart2Line,
} from "react-icons/ri";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className={`${archivoBlack.variable} ${satoshi.variable}`}>
      <body className="min-h-dvh antialiased">
        <div className="py-2 bg-black">
          <div className="container-block flex items-center justify-between gap-4">
            <div></div>
            <div className="text-white text-xs md:text-sm text-center">
              Sign up and get 20% off to your first order.
              <a href="#" className="font-medium underline pl-1">
                Sign Up Now
              </a>
            </div>
            <button>
              <RiCloseFill className="text-white size-5" />
            </button>
          </div>
        </div>
        <header className="sticky top-0 z-10 bg-white">
          <div className="container-block flex items-center justify-between gap-6 lg:gap-10 py-4 lg:py-6">
            <div className="flex items-center gap-4">
              <button className="block lg:hidden">
                <RiMenuFill className="size-6" />
              </button>
              <Link href={"/"}>
                <img src="/logo.svg" className="w-32 lg:w-40" alt="" />
              </Link>
            </div>
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-4 xl:gap-6">
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">On Sale</a>
                </li>
                <li>
                  <a href="#">New Arrivals</a>
                </li>
                <li>
                  <a href="#">Brands</a>
                </li>
              </ul>
            </nav>
            <div className="flex-1 hidden sm:block">
              <div className="relative">
                <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 size-5 lg:size-6 text-black/40" />
                <input
                  type="text"
                  className="h-10 lg:h-12 pl-11 lg:pl-14 pr-4 text-sm lg:text-base rounded-4xl bg-muted placeholder:text-black/40 outline-none w-full"
                  placeholder="Search for products..."
                />
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <button>
                <RiSearchLine className="size-6 block sm:hidden" />
              </button>
              <a href="/cart">
                <RiShoppingCart2Line className="size-6 " />
              </a>
              <a href="/cart">
                <RiAccountCircleLine className="size-6 " />
              </a>
            </div>
          </div>
        </header>
        <Providers>
          <main className="overflow-x-hidden">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
