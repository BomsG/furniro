import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.png";
import { GoPerson, GoSearch } from "react-icons/go";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Nav = () => {
  return (
    <div className="my-7 mx-10">
      <nav className="flex justify-between items-center">
        <Image src={Logo} alt="logo" width={150} height={100} />

        {/* Navigation Links */}
        <ul className="flex gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="text-[16px] font-[600]">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Icons Section */}
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
