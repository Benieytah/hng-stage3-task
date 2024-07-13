import React from "react";

import {
  twitterSvg,
  instaSvg,
  youtubeSvg,
  facebookSvg,
} from "../constants/icons";

const Footer = () => {
  return (
    <footer className="mt-10 lg:mt-0">
      <div className="bg-[#052E70] text-white pt-20">
        <div className="mb-6 flex flex-col lg:flex-row justify-between mx-auto gap-20 px-10 md:px-20 lg:px-20 lg:gap-10 pb-32">
          <div className="flex justify-start items-start w-[240px] h-[159px] left-20 ">
            <span className=" w-60">
              <h1 className="">
                Imagination World, Manchesterm <br /> Kentucky 39495
              </h1>
              <div className="text-[13px] flex gap-2 items-center tracking-wider bg-gray-500 bg-opacity-50 text-gray-200 w-fit p-2 px-3 my-3 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className=""> Systems running smoothly</span>
              </div>
              <ul className="">
                <li className="flex pt-3 gap-2 text-xs">
                  <img src={twitterSvg} className="cursor-pointer" />
                  <img src={youtubeSvg} className="cursor-pointer" />
                  <img src={facebookSvg} className="cursor-pointer" />
                  <img src={instaSvg} className="cursor-pointer" />
                </li>
              </ul>
            </span>
          </div>

          <div className="flex flex-wrap lg:flex-row lg:justify-end items-baseline right-0 gap-12 lg:gap-28 text-sm">
            <div className="text-white ">
              <h2 className="text-semibold py-3 text-base">Products</h2>
              <ul className="text-gray-400 flex flex-col gap-3">
                <li className="cursor-pointer hover:text-gray-300">About us</li>
                <li className="cursor-pointer hover:text-gray-300">Features</li>
                <li className="cursor-pointer hover:text-gray-300">Blog</li>
                <li className="cursor-pointer hover:text-gray-300">Reviews</li>
                <li className="cursor-pointer hover:text-gray-300">Pricing</li>
              </ul>
            </div>

            <div className="text-white ">
              <h2 className="text-semibold py-3 text-base">Company</h2>
              <ul className="text-gray-400 flex flex-col gap-3">
                <li className="cursor-pointer hover:text-gray-300">
                  Integration
                </li>
                <li className="cursor-pointer hover:text-gray-300">Career</li>
                <li className="cursor-pointer hover:text-gray-300">
                  Contact us
                </li>
                <li className="cursor-pointer hover:text-gray-300">FAQs</li>
              </ul>
            </div>

            <div className="text-white ">
              <h2 className="text-semibold py-3 text-base">Resources</h2>
              <ul className="text-gray-400 flex flex-col gap-3">
                <li className="cursor-pointer hover:text-gray-300">
                  Chnagelog
                </li>
                <li className="cursor-pointer hover:text-gray-300">
                  Cookie Policy
                </li>
                <li className="cursor-pointer hover:text-gray-300">
                  Coming Soon
                </li>
                <li className="cursor-pointer hover:text-gray-300">
                  Error 404
                </li>
              </ul>
            </div>

            <div className="text-white ">
              <h2 className="text-semibold py-3 text-base">Utilities</h2>
              <ul className="text-gray-400 flex flex-col gap-3">
                <li className="cursor-pointer hover:text-gray-300">
                  Privacy Policy
                </li>
                <li className="cursor-pointer hover:text-gray-300">
                  Licensing
                </li>
                <li className="cursor-pointer hover:text-gray-300">
                  Terms & Conditions
                </li>
                <li className="cursor-pointer hover:text-gray-300">Password</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="opacity-40" />

        <div className="flex flex-col justify-start items-start mx-auto md:pl-28 p-4">
          <p className="text-sm text-gray-400">
            Copyright &#169; 2024 GGTech. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;