import React from "react";
import Image from "next/image";
import Bedroom from "@/public/images/Bedroom.png";
import living from "@/public/images/living.png";
import dining from "@/public/images/dining.png";
import type { StaticImageData } from "next/image";

interface RangeItem {
  img: StaticImageData;
  title: string;
}

const Range = () => {
  const items: RangeItem[] = [
    {
      img: Bedroom,
      title: "Bedroom",
    },
    {
      img: living,
      title: "Living",
    },
    {
      img: dining,
      title: "Dining",
    },
  ];

  return (
    <div className="my-20 text-center">
      <h1 className="text-[32px] font-bold">Browse The Range</h1>
      <p className="text-[20px] font-[300]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex gap-4 justify-center mt-10 flex-wrap">
        {items.map((item, index) => (
          <div key={index}>
            <Image src={item.img} alt={item.title} />
            <h2 className="text-[24px] font-semibold my-3">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Range;
