import React from "react";
import Image from "next/image";
import hero from "@/public/images/hero.png";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-end items-center">
      <Image
        src={hero}
        alt="bedroom"
        fill
        className="w-full h-full object-cover z-0"
      />
      <div className="relative z-10 bg-[#FFF3E3] w-[580px] py-10 px-10 mx-10 rounded-lg">
        <h2 className="text-[16px] font-[500] tracking-wider">New Arrivals</h2>
        <h1 className="text-[52px] font-bold text-[#B88E2F] leading-16">
          Discover Our New Collection
        </h1>
        <p className="text-[18px] leading-[24px] font-[400]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="py-3 px-10 font-bold bg-[#B88E2F] my-10">
          <a href="#" className="text-white text-[16px]">
            {" "}
            BUY NOW
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
