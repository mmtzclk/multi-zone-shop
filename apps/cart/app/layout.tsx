import "./globals.css";
import { ReactNode } from "react";
import Providers from "./providers";
import Header from "./components/Header";
import { satoshi, archivoBlack } from "@repo/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className={`${archivoBlack.variable} ${satoshi.variable}`}>
      <body className="min-h-dvh antialiased">
        <Providers>
          <Header />
          <main className="container-block my-5 lg:my-8 xl:my-12">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
