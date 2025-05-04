"use client";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import CartDrawer from "@/components/ui/drawers/CartDrawer";
import ShopSearchBar from "@/components/search/ShopSearchBar";
import AccountButton from "@/components/ui/buttons/AccountButton";
// import SearchProducts from "@/components/searchBars/SearchProducts";

export default function Header() {
  return (
    <div className=" sticky top-0 z-40 bg-white h-[45px] pt-2  w-full ">
      <div className=" px-6 lg:px-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className=" flex items-center">
          <div className="flex">
            <FaCartPlus className=" text-xl sm:text-3xl " />
            <h1 className=" text-[#0E1422] font-bold text-[16px] sm:text-[22px]">
              Ecommerce
            </h1>
          </div>
        </div>
        {/* Center: Nav Links - Desktop */}
        <div className="hidden lg:flex gap-5 ">
          <Link href={"/"}>Home</Link>
          <button className=" flex justify-center items-center gap-2 ">
            <p>Categories</p> <IoIosArrowDown className=" font-light mt-1" />
          </button>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className=" flex justify-center items-center gap-7">
          {/* Center: Search Bar */}
          <ShopSearchBar />
          {/* Right: Icons */}
          <CartDrawer />
          <AccountButton />
        </div>
      </div>
    </div>
  );
}
