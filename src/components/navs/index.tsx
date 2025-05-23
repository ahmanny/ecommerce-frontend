"use client";
import { useUiStore } from "@/store/UiStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface NavsItemProps {
  title: string;
  href: string;
  icon: JSX.Element;
}
interface NavsProps {
  parentHref: string | "";
  navs: NavsItemProps[];
}
export default function Navs({ navs, parentHref }: NavsProps) {
  const pathName = usePathname();
  const { setProfileNavOpen } = useUiStore();
  return (
    <div className="flex gap-4 flex-col w-full ">
      {navs.map((nav, index) => (
        <Link
          key={index}
          onClick={() => {
            setProfileNavOpen(false);
          }}
          href={`${parentHref}${nav.href}`}
          className={` capitalize hover:bg-custom-10 dark:hover:bg-custom-500 items-center rounded-lg w-[212px] h-[51px] flex mx-auto px-4 gap-3 ${
            pathName.includes(nav.href)
              ? "text-[#0E1422] bg-custom-10 dark:bg-custom-200"
              : "text-foreground-f5"
          }`}
        >
          <span className=" text-3xl">{nav.icon}</span>
          <span className=" text-[20px]">{nav.title}</span>
        </Link>
      ))}
    </div>
  );
}
