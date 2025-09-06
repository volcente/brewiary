import "./styles/globals.css";

import type { Metadata } from "next";
import Head from "next/head";
import type { PropsWithChildren } from "react";

import { commitMono, spaceGrotesk } from "./styles/fonts";

export const metadata: Metadata = {
  title: "Brewiary",
  description: "Next Generation Coffee Companion",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={`${commitMono.variable} ${spaceGrotesk.variable}`}
      lang="en"
    >
      <Head>dupa</Head>
      <body className="bg-gray-50 font-sans antialiased dark:bg-gray-900">
        {children}
      </body>
    </html>
  );
}
