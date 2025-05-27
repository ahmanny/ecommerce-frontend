import React from "react";
import BreadCrumbTwo from "../breadcrumbs/BreadCrumbTwo";
import { ColorModeButton } from "@/components/ui/color-mode";
import AdminNavDrawer from "@/components/ui/drawers/AdminNavDrawer";
import LogoutButton from "@/components/ui/buttons/LogoutButton";

export default function AdminHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="lg:hidden">
        <AdminNavDrawer />
      </div>
      <BreadCrumbTwo />
      <div className="flex justify-center items-center">
        <ColorModeButton />
        <LogoutButton routeTo="/admin/login" iconOnly />
      </div>
    </div>
  );
}
