import type React from "react";
import type { Metadata } from "next";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/inter/vietnamese-400.css";
import "@fontsource/inter/vietnamese-700.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-700.css";
import "@fontsource/space-grotesk/vietnamese-500.css";
import "@fontsource/space-grotesk/vietnamese-700.css";
import "@fontsource/silkscreen/latin-400.css";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";



export const metadata: Metadata = {
  title: "Lê Quốc Trạng | Fullstack Developer",
  description:
    "Portfolio of Lê Quốc Trạng, a Fullstack Developer specializing in React, Node.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
