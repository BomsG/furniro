import React from "react";
import { VscSettings } from "react-icons/vsc";
import { IoGrid } from "react-icons/io5";
import { BsViewList } from "react-icons/bs";

const Filter = () => {
  return (
    <div className="w-full py-10 bg-[#FFF3E3] mb-20 flex items-center justify-between px-20">
      <section className="flex items-center gap-6">
        <span className="text-[20px] flex items-center gap-2">
          <VscSettings size={20} /> Filter
        </span>
        <IoGrid size={20} />
        <BsViewList size={20} />
        <div className="w-[3px] h-[50px] bg-[#9F9F9F]"></div>
        <h2 className="text-[16px]">Showing 1-16 of 32 results</h2>
      </section>
      <section className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <h3 className="text-[20px]">Show</h3>
          <h4 className="bg-white px-3 h-[50px] flex justify-center items-center text-[20px]">
            16
          </h4>
        </div>
        <div className="flex items-center gap-4">
          <h3 className=" text-[20px]">Short by</h3>
          <h4 className="bg-white pl-3 pr-20 h-[50px] flex justify-center items-center text-[20px]">
            Default
          </h4>
        </div>
      </section>
    </div>
  );
};

export default Filter;
