"use client";

import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { RiKey2Line } from "react-icons/ri";
import { BsTruck } from "react-icons/bs";
import Navs from ".";
import LogoutButton from "../ui/buttons/LogoutButton";

const adminDashBoardNavs = [
  { title: "orders", href: "/orders", icon: <TiShoppingCart /> },
  { title: "wishlist", href: "/wishlist", icon: <FaRegHeart /> },
  { title: "address", href: "/address", icon: <BsTruck /> },
  { title: "password", href: "/change-password", icon: <RiKey2Line /> },
  {
    title: "account detail",
    href: "/account-detail",
    icon: <IoPersonOutline />,
  },
];

export default function ProfileNavBar() {
  return (
    <div className="flex flex-col items-center w-full py-10 lg:border-r">
      <div className="w-full">
        <div className="flex flex-col gap-4">
          <Navs parentHref="/my-account" navs={adminDashBoardNavs} />
          <LogoutButton routeTo="/" iconOnly={false} />
        </div>
      </div>
    </div>
  );
}
