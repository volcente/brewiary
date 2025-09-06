import localFont from "next/font/local";

export const spaceGrotesk = localFont({
  display: "swap",
  variable: "--font-space-grotesk",
  src: "../../../public/fonts/space-grotesk-variable.ttf",
});

export const commitMono = localFont({
  display: "swap",
  variable: "--font-commit-mono",
  src: [
    {
      path: "../../../public/fonts/commit-mono-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/commit-mono-regular-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/commit-mono-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/commit-mono-bold-italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});
