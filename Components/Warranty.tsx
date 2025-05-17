import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import { BsPatchCheck } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";

const Warranty = () => {
  return (
    <div className="w-full py-20 bg-[#FFF3E3] mt-20 flex items-center justify-between px-20">
      <section className="flex items-center gap-2">
        <GiTrophyCup size="60px" />
        <div>
          <h1 className="text-[25px] font-semibold">High Quality</h1>
          <p className="text-[#898989] text-[20px]">
            crafted from top materials
          </p>
        </div>
      </section>
      <section className="flex items-center gap-2">
        <BsPatchCheck size="60px" />
        <div>
          <h1 className="text-[25px] font-semibold">Warranty Protection</h1>
          <p className="text-[#898989] text-[20px]">Over two years</p>
        </div>
      </section>
      <section className="flex items-center gap-2">
        <FaShippingFast size="60px" />
        <div>
          <h1 className="text-[25px] font-semibold">Free Shipping</h1>
          <p className="text-[#898989] text-[20px]">Order over 150 $</p>
        </div>
      </section>
      <section className="flex items-center gap-2">
        <RiCustomerService2Line size="60px" />
        <div>
          <h1 className="text-[25px] font-semibold">24 / 7 Support</h1>
          <p className="text-[#898989] text-[20px]">Dedicated support</p>
        </div>
      </section>
    </div>
  );
};

export default Warranty;
