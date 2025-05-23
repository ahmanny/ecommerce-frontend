"use client";

import BreadCrumbOne from "@/components/layouts/breadcrumbs/BreadCrumbOne";
import ProfileNavBar from "@/components/navs/ProfileNavbar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="">
        <div className="py-4 bg-background-b2  h-[140px] flex flex-col justify-center items-center">
          <BreadCrumbOne />
        </div>
        <div className=" w-full py-[60px]">
          <div className="flex gap-[48px] px-8 lg:px-0">
            <div className="hidden md:block w-fit lg:w-[260px]">
              <ProfileNavBar />
            </div>
            <div className=" flex-1">
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
