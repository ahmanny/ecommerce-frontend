import React from "react";
import BreadCrumbTwo from "../breadcrumbs/BreadCrumbTwo";
import { ColorModeButton } from "@/components/ui/color-mode";
import AdminNavDrawer from "@/components/ui/drawers/AdminNavDrawer";
import LogoutButton from "@/components/ui/buttons/LogoutButton";

export default function AdminHeader() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="lg:hidden">
          <AdminNavDrawer />
        </div>
        <div className="hidden md:flex">
          <BreadCrumbTwo />
        </div>
        <div className="flex justify-center items-center">
          <ColorModeButton />
          <LogoutButton routeTo="/admin/login" iconOnly />
        </div>
      </div>
      <div className=" flex items-center md:hidden">
        <BreadCrumbTwo />
      </div>
    </div>
  );
}
