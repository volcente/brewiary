import { Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--font-space-grotesk",
  adjustFontFallback: true,
  preload: true,
});
