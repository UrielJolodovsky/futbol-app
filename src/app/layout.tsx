import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <header className="text-xl font-semibold leading-8">Fútbol App</header>
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
