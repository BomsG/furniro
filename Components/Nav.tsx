import React from "react";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import { GoPerson, GoSearch } from "react-icons/go";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

const Nav = () => {
  return (
    <div className="my-7 mx-10">
      <nav className="flex justify-between items-center">
        <Image src={Logo} alt="logo" width={150} height={100} />
        <ul className="flex gap-10 items-center">
          <li className="text-[16px] font-[600]">Home</li>
          <li className="text-[16px] font-[600]">Shop</li>
          <li className="text-[16px] font-[600]">About</li>
          <li className="text-[16px] font-[600]">Contact</li>
        </ul>
        <div className="flex gap-10">
          <GoPerson size={30} />
          <GoSearch size={30} />
          <MdFavoriteBorder size={30} />
          <MdOutlineShoppingCart size={30} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
