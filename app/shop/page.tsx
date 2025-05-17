import React from "react";
import Image from "next/image";
import hereos from "@/public/images/shopH.png";
import { BiChevronRight } from "react-icons/bi";
import Products from "@/Components/Products";
import Filter from "@/Components/Filter";
import Warranty from "@/Components/Warranty";

const page = () => {
  return (
    <div>
      <section className="relative w-full h-[300px] overflow-hidden flex justify-center items-center">
        <Image
          src={hereos}
          alt="bedroom"
          fill
          className="w-full h-full max-h-[300px] object-cover z-0"
        />
        <div className="relative z-10 ">
          <h3 className="text-[48px] font-medium">Shop</h3>
          <div className="flex  items-center">
            <li className="list-none text-[16px] hover:font-semibold">Home</li>
            <BiChevronRight size={20} />
            <li className="list-none text-[16px] hover:font-semibold">Shop</li>
          </div>
        </div>
      </section>
      <section>
        <Filter />
        <Products mode="pagination" itemsPerPage={8} />
        <Warranty />
      </section>
    </div>
  );
};

export default page;
