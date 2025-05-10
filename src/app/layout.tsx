import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aiqfome",
  description:
    "1º app de delivery do Brasil, maior do interior e o melhor pra sua cidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={nunitoSans.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
