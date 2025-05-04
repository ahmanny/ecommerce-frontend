"use client";

import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useUiStore } from "@/store/UiStore";
import ProfileNavDrawer from "../drawers/ProfileNavDrawer";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AccountButton() {
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(false);
  const { setProfileNavOpen } = useUiStore();

  // Update screen size
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); // set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    if (isDesktop) {
      router.push("/my-account/orders");
    } else {
      setProfileNavOpen(true);
    }
  };

  return (
    <>
      {/* Desktop: Profile Icon */}
      {isDesktop && (
        <Link href={"/my-account/orders"}>
          <CgProfile className=" text-[18px] sm:text-[28px] " />
        </Link>
      )}
      {/* Drawer shown only on mobile */}
      {!isDesktop && (
        <ProfileNavDrawer
          button={
            <button onClick={handleClick} className="p-2">
              <CgProfile className="text-[18px] sm:text-[28px]" />
            </button>
          }
        />
      )}
    </>
  );
}
