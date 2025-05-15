// import React from "react";

// const Footer = () => {
//   return (
//     <footer>
//         <section className="">
//           <h1 className="text-[24px] font-bold">Funiro.</h1>
//       </section>
//       <section></section>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-[#333] py-16 px-10">
      <hr className="mb-20 border-t border-gray-200" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Company */}
        <div>
          <h3 className="text-[24px] font-bold mb-10">Funiro</h3>
          <p className="text-[#9F9F9F] text-[16px]">
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </p>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-[#9F9F9F] text-[16px] mb-10">Help</h3>
          <ul className="space-y-6">
            <li>
              <a href="#" className="text-[16px] font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-semibold">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-semibold">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-[#9F9F9F] text-[16px] mb-10">Shop</h3>
          <ul className="space-y-6">
            <li>
              <a href="#" className="text-[16px] font-semibold">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-semibold">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-semibold">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-[#9F9F9F] text-[16px] mb-10">Social</h3>
          <form className="flex gap-2 items-center">
            <input type="email" placeholder="Enter Your Email Address" />
            <button className="border-none font-semibold">Subscribe</button>
          </form>
        </div>
      </div>

      <hr className="mt-20 border-t border-gray-200" />

      <div className="mt-5 text-[16px] font-medium mx-20">
        © {new Date().getFullYear()} Funiro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
