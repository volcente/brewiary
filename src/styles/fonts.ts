import { Hanken_Grotesk } from "next/font/google";

export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--font-hanken-grotesk",
  adjustFontFallback: true,
  preload: true,
});
