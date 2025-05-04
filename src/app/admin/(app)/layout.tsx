"use client";

import AdminNavBar from "@/components/layouts/admin/AdminNavBar";
import BreadCrumbTwo from "@/components/layouts/breadcrumbs/BreadCrumbTwo";
import LogoutButton from "@/components/ui/buttons/LogoutButton";

export default function AdminAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-[#F6F6F6] justify-center w-full gap-[48px]">
      <div className=" w-[260px] bg-white">
        <AdminNavBar />
      </div>
      <div className=" flex-1 pt-5">
        <div className=" h-[75px] flex justify-between items-center  pr-8">
          <BreadCrumbTwo />
          <LogoutButton iconOnly />
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </div>
  );
}
