import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

import { hankenGrotesk } from "~/styles/fonts";

import { Navbar } from "./_components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen w-full grid grid-rows-[auto_1fr] ${hankenGrotesk.variable}`}
      >
        <ThemeProvider
          defaultTheme="system"
          disableTransitionOnChange
          enableColorScheme
          enableSystem
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
