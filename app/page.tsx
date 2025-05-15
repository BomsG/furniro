import Feature from "@/Components/Feature";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Products from "@/Components/Products";
import Range from "@/Components/Range";
import Setup from "@/Components/Setup";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Range />
      <h1 className="text-[40px] font-bold text-center my-10">OUR PRODUCTS</h1>
      <Products mode="showMore" />
      <Feature />
      <Setup />
    </div>
  );
}
