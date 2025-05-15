"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineCompare, MdFavoriteBorder } from "react-icons/md";
import { product, Product } from "@/products";

type ProductsProps = {
  mode?: "showMore" | "pagination"; // optional mode
  itemsPerPage?: number;
};

const actionItems = [
  { icon: <CiShare2 />, title: "Share" },
  { icon: <MdOutlineCompare />, title: "Compare" },
  { icon: <MdFavoriteBorder />, title: "Like" },
];

const Products = ({ mode = "showMore", itemsPerPage = 8 }: ProductsProps) => {
  const [showMore, setShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Product.length / itemsPerPage);

  let displayedProducts: product[] = [];

  if (mode === "showMore") {
    displayedProducts = showMore ? Product : Product.slice(0, itemsPerPage);
  } else {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayedProducts = Product.slice(startIndex, endIndex);
  }

  return (
    <div className="flex justify-center">
      <main>
        <div className="grid grid-cols-4 gap-3 mx-20">
          {displayedProducts.map((product) => (
            <div key={product.id} className="group relative p-4">
              <Image
                src={product.image}
                alt={product.alt}
                className="w-[285px] h-[305px]"
              />
              <div className="bg-[#F4F5F7] p-5">
                <h1 className="text-[34px] font-semibold">{product.name}</h1>
                <h2 className="text-[#898989] text-[16px]">
                  {product.category}
                </h2>
                <h3 className="text-[20px]">
                  ₦{product.price.toLocaleString()}
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#363737]/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div>
                  <button className="text-center text-[16px] text-[#B88E2F] bg-white w-full py-2 font-semibold">
                    Add to cart
                  </button>
                  <div className="flex items-center gap-3 mt-5">
                    {actionItems.map((item, index) => (
                      <h3
                        key={index}
                        className="text-[16px] font-semibold flex items-center gap-2"
                      >
                        <span>{item.icon}</span>
                        {item.title}
                      </h3>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        {mode === "showMore" && Product.length > itemsPerPage && (
          <div className="flex justify-center my-20">
            <button
              onClick={() => setShowMore(!showMore)}
              className="border-2 border-[#B88E2F] text-16px font-semibold w-[300px] px-10 py-3 hover:bg-[#898989] hover:text-white hover:border-none"
            >
              {showMore ? "SHOW LESS" : "SHOW MORE"}
            </button>
          </div>
        )}

        {mode === "pagination" && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border ${
                  currentPage === i + 1
                    ? "bg-[#B88E2F] text-white"
                    : "bg-white text-black"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
