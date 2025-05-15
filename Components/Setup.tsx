"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/image1.png", alt: "Image 1" },
  { src: "/images/show2.png", alt: "Image 2" },
  { src: "/images/show3.png", alt: "Image 3" },
  { src: "/images/show4.png", alt: "Image 4" },
  { src: "/images/show5.png", alt: "Image 5" },
  { src: "/images/show6.png", alt: "Image 6" },
  { src: "/images/show7.png", alt: "Image 7" },
  { src: "/images/show8.png", alt: "Image 8" },
  { src: "/images/show9.png", alt: "Image 9" },
];

const Setup = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <h3 className="text-[20px] text-[#616161] font-semibold">
          Share your setup with
        </h3>
        <h1 className="text-[40px] font-bold">#FuniroFurniture</h1>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 mt-10 space-y-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg break-inside-avoid"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={100}
                height={200}
                className="w-full max-h-[400px] object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Setup;
