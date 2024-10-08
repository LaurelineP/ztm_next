import type { Metadata } from "next";
import { Comfortaa, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"]
});
const comfortaa = Comfortaa( {
  weight: "300",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Coffee Connoisseur",
  description: "Locate Coffee shops around",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>{children}</body>
    </html>
  );
}
