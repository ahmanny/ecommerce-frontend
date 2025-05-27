"use client";

import AdminHeader from "@/components/layouts/admin/AdminHeader";
import AdminNavBar from "@/components/layouts/admin/AdminNavBar";

export default function AdminAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" container mx-auto flex flex-col md:flex-row bg-background-b2 ">
      <div className="hidden lg:block lg:w-[260px] bg-background-b1">
        <AdminNavBar />
      </div>
      <div className="pt-5 flex-1 px-1 md:mx-[20px] lg:mx-[48px]">
        <AdminHeader />
        <div className="py-12">{children}</div>
      </div>
    </div>
  );
}
