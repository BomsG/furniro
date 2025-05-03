import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/Components/Nav";

const popinsFonts = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--Poppins",
});

export const metadata: Metadata = {
  title: "Furniro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${popinsFonts.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
