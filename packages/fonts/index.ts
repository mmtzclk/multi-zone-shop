import { Archivo_Black } from "next/font/google";
import localFont from "next/font/local";

export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const satoshi = localFont({
  src: [
    { path: "./satoshi/Satoshi-Light.otf", weight: "300", style: "normal" },
    { path: "./satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "./satoshi/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "./satoshi/Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "./satoshi/Satoshi-Black.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial"],
});
