import Hero from "@/Components/Hero";
import Products from "@/Components/Products";
import Range from "@/Components/Range";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Range />
      <Products />
    </div>
  );
}
