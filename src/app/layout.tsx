import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Futbol App",
  description: "Futbol App web created insiping by Goncy app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-black min-h-screen'>
        <header className="text-white flex justify-between items-center p-2">
          <Link className="text-xl font-semibold leading-8" href='/'>Fútbol App</Link>
          <nav>
            <ul className="flex gap-4 text-white/60">
              <li className="hover:text-white/85">
                <Link href='/'>Partidos</Link>
              </li>
              <li className="hover:text-white/85">
                <Link href='/jugadores'>Jugadores</Link>
              </li>
              <li className="hover:text-white/85">
                <Link href='/armador'>Armador de equipos</Link>
              </li>
            </ul>
          </nav>
          </header>
        <main className="py-8">
          {children}
        </main>
        <footer>
          <p className="text-white text-center opacity-80">© {new Date().getFullYear()} Uriel Jolodovsky - Fútbol App</p>
        </footer>
        </body>
    </html>
  );
}
