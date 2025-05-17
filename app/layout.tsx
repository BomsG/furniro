import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";
import { CartProvider } from "@/Components/context/CartContext";
import CartDrawer from "@/Components/context/CartDrawer";

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
        <CartProvider>
          <Nav />
          {children}
          <CartDrawer />s
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
