"use client";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import CartDrawer from "@/components/ui/drawers/CartDrawer";
import ShopSearchBar from "@/components/search/ShopSearchBar";
import AccountButton from "@/components/ui/buttons/AccountButton";
import { ColorModeButton } from "@/components/ui/color-mode";
// import SearchProducts from "@/components/searchBars/SearchProducts";

export default function Header() {
  return (
    <div className=" sticky top-0 z-40 h-[45px] pt-2 bg-background-b1  w-full ">
      <div className=" px-4 lg:px-12 flex items-center justify-between">
        {/* Left: Logo */}
        <div className=" flex items-center">
          <div className="flex">
            <FaCartPlus className=" text-xl sm:text-3xl " />
            <h1 className="heading-h3 text-foreground-f1">Ecommerce</h1>
          </div>
        </div>
        {/* Center: Nav Links - Desktop */}
        <div className="hidden lg:flex gap-5 body-p2 text-foreground-f5 ">
          <Link href={"/"}>Home</Link>
          <button className=" flex justify-center items-center gap-2 ">
            <p>Categories</p> <IoIosArrowDown className=" font-light mt-1" />
          </button>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className=" flex justify-center items-center gap-6">
          {/* Center: Search Bar */}
          <ShopSearchBar />
          {/* Right: Icons */}
          <CartDrawer />
          <AccountButton />
          <ColorModeButton />
        </div>
      </div>
    </div>
  );
}
