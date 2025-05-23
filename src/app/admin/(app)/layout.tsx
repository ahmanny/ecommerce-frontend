"use client";

import AdminNavBar from "@/components/layouts/admin/AdminNavBar";
import BreadCrumbTwo from "@/components/layouts/breadcrumbs/BreadCrumbTwo";
import LogoutButton from "@/components/ui/buttons/LogoutButton";
import { ColorModeButton } from "@/components/ui/color-mode";
import AdminNavDrawer from "@/components/ui/drawers/AdminNavDrawer";

export default function AdminAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-background-b2 justify-center w-full gap-[20px] lg:gap-[48px]">
      <div className="hidden md:block lg:w-[260px] bg-background-b1">
        <AdminNavBar />
      </div>
      <div className=" flex-1 pt-5">
        <div className=" h-[75px] flex justify-between items-center  pr-8">
          <div>
            <div className="block md:hidden">
              <AdminNavDrawer />
            </div>
            <BreadCrumbTwo />
          </div>
          <div className="flex items-center gap-2">
            <ColorModeButton />
            <LogoutButton routeTo="/admin/login" iconOnly />
          </div>
        </div>
        <div className=" py-16">{children}</div>
      </div>
    </div>
  );
}
