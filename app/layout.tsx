import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Menu } from "./components/menu";

import "./globals.css";

// Load Inter font with specific weights
const inter = Inter({
  subsets: ["latin"], // Optional, only include Latin subset
  weight: ["100", "300", "400", "500", "700", "900"], // Provide weights as an array
});

export const metadata: Metadata = {
  title: "Henrique Castriciano",
  description:
    "Grupo de escoteiros 52, Natal, Rio Grande do Norte. Venha conhecer nosso grupo e transformar a vida de vários jovens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const interClassName = inter.className; // Garante consistência

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${interClassName}  text-gray-900 bg-white antialiased flex flex-col w-full min-h-screen items-center `}
      >
        <Menu />
        {children}
      </body>
    </html>
  );
}
