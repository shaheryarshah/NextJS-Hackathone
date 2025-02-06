"use client"
import Link from "next/link";
import { PiMagnifyingGlass } from "react-icons/pi";


import React, { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store"; // Replace with the actual path to your store's RootState type

export default function Navbar() {
  const item = useSelector((state: RootState) => state.cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row w-auto h-auto md:h-[44px] bg-slate-300 px-4 md:px-0 container px-5 mx-auto ">
      <div className="bg-slate-300 flex flex-col sm:flex-row sm:gap-[50px]  justify-center items-center sm:items-center mx-auto sm:mx-[240px]">
        <p className="flex justify-left sm:text-bold sm:text-2xl text-sm items-center">Hekto</p>
        <div className="flex  items-center justify-left text-sm sm:flex-row gap-[5px] sm:justify-end sm:gap-[50px]">
          <Link className="flex items-center" href="/">
            Home
          </Link>
          <Link className="flex items-center" href="/pages">
            Pages
          </Link>
          <Link className="flex items-center" href="/products">
            Products
          </Link>
          <Link className="flex items-center" href="/blog">
            Blog
          </Link>
          <Link className="flex items-center" href="/shop">
            Shop
          </Link>
          <Link className="flex items-center" href="/contact">
            Contact
          </Link>
          <nav className=" px-4 md:px-8 py-4 flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              <button
                className="text-2xl md:hidden "
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
            <ul
              className={`${isMenuOpen
                  ? "absolute left-0 top-16 w-full bg-[#FFFBF0] shadow-lg"
                  : "hidden"
                } md:flex md:static md:w-auto space-y-2 md:space-y-0 md:space-x-8 text-base font-medium`}
            >
            </ul>
            <div className="flex items-center space-x-4">
              <Link href="/cart"><FiShoppingCart className="text-2xl cursor-pointer mr-2" /></Link>
                    
              <FiUser className="text-2xl cursor-pointer" />
            </div>
          </nav>
        </div>
        <div className="border-2 hidden sm:block sm:flex  ">
          <input
            placeholder="search your product..."
            className=""
            type="text"

          />
          <div className="flex justify-center items-center bg-pink-500 h-[30px] w-[40px]">

            <PiMagnifyingGlass />

          </div>
        </div>
      </div>
    </div>
  );
}
