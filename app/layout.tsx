import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Menu } from "./components/menu";

import { Analytics } from "@vercel/analytics/next";
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
        <footer className="p-6 bg-white flex w-full  justify-center items-center border-t border-gray-200">
          <div className="flex p-6 max-w-[1024px] w-full justify-between">
            <div>
              <p>Grupo Escoteiro Henrique Castriciano</p>
              <ul>
                <li>
                  <a
                    className="text-green-600 hover:text-green-800 hover:underline text-sm"
                    href="https://maps.app.goo.gl/NkZgfP19BNGi2UFn6"
                  >
                    Sede campestre: Local das atividades
                  </a>
                </li>
                <li>
                  <a
                    className="text-green-600 hover:text-green-800 hover:underline text-sm"
                    href="https://cenr.com.br/"
                  >
                    Centro Educacional Noilde Ramalho
                  </a>
                </li>
                <li>
                  <a
                    className="text-green-600 hover:text-green-800 hover:underline text-sm"
                    href="https://www.escoteiros.org.br/"
                  >
                    Escoteiros do Brasil
                  </a>
                </li>
              </ul>
            </div>
            <p>©</p>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
