import "./globals.css";
import { ReactNode } from "react";
import Providers from "./providers";
import { satoshi, archivoBlack } from "@repo/fonts";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className={`${archivoBlack.variable} ${satoshi.variable}`}>
      <body className="min-h-dvh antialiased">
        <header className="border-b">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex gap-4">
            <Link href="/">Home</Link>
            <a href="/cart">Cart</a>
          </nav>
        </header>
        <Providers>
          <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
