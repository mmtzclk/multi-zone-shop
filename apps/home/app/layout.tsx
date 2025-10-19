import "./globals.css";
import { ReactNode } from "react";
import Providers from "./providers";
import { satoshi, archivoBlack } from "@repo/fonts";
import Header from "@/components/Header";
import { Toaster } from "sonner";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className={`${archivoBlack.variable} ${satoshi.variable}`}>
      <body className="min-h-dvh antialiased">
        <Providers>
          <Header />
          <main className="overflow-x-hidden">{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
