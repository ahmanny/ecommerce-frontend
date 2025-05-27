"use client";

import React, { useState } from "react";
import { Button, Drawer, DrawerPositioner, Portal } from "@chakra-ui/react";
// import Filter from ".";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawers";
import { MdMenu } from "react-icons/md";
import AdminNavBar from "@/components/layouts/admin/AdminNavBar";

export default function AdminNavDrawer() {
  const [isNavDrawer, setIsNavDrawerOpen] = useState(false);
  return (
    <div>
      <DrawerRoot
        placement={"start"}
        open={isNavDrawer}
        onOpenChange={(details) => setIsNavDrawerOpen(details.open)}
      >
        <DrawerTrigger asChild>
          <button className="p-1 rounded-sm">
            <MdMenu className="text-[18px] sm:text-[28px]" />
          </button>
        </DrawerTrigger>
        <Portal>
          <DrawerBackdrop />
          <DrawerPositioner
            position={"fixed"}
            top={"0"}
            bottom={"0"}
            left={"0"}
            right={"0"}
          >
            <DrawerContent
              width={"fit"}
              roundedBottomRight={"lg"}
              roundedTopRight={"lg"}
            >
              <DrawerBody>
                <AdminNavBar />
              </DrawerBody>
            </DrawerContent>
          </DrawerPositioner>
        </Portal>
      </DrawerRoot>
    </div>
  );
}
