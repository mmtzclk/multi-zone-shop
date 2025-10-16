import "./globals.css";
import { ReactNode } from "react";
import Providers from "./providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-dvh antialiased">
        <header className="border-b">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex gap-4">
            <a href="/">Home</a>
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
