import { ColorModeButton } from "@/components/ui/color-mode";
import AdminNavDrawer from "@/components/ui/drawers/AdminNavDrawer";
import React from "react";

export default function page() {
  return (
    <div className="bg-white dark:bg-red-400">
      test
      <div>
        <h1 className="heading-h1 font-sans">hello</h1>
        <h1 className="heading-h2 font-mono">hello</h1>
        <h1 className="heading-h3">hello</h1>
        <h1 className="heading-h4">hello</h1>
        <h1 className="heading-h5">hello</h1>
        <h1 className="heading-h6">hello</h1>
        <ColorModeButton />
        <AdminNavDrawer />
      </div>
    </div>
  );
}
