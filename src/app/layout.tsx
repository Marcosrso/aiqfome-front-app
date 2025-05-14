import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Header from "@/app/header";
import Footer from "@/app/footer";

import { api } from "@/services/api";

import { User } from "@/interfaces/user";

import "./globals.css";
import UserHydration from "./user-hydration";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aiqfome",
  description:
    "1º app de delivery do Brasil, maior do interior e o melhor pra sua cidade",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User = await api<User>("user");

  return (
    <html lang="pt-br">
      <body className={nunitoSans.variable}>
        <UserHydration user={user}/>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
