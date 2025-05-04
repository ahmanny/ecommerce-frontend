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
import { HiFilter } from "react-icons/hi";
import Filter from "@/components/product/ProductList/Filter";

export default function FilterDrawer() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div>
      <DrawerRoot
        placement={"start"}
        open={isFilterOpen}
        onOpenChange={(details) => setIsFilterOpen(details.open)}
      >
        <DrawerTrigger asChild>
          <button className="p-1 rounded-sm">
            <HiFilter className="text-[28px]" />
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
              width={"200px"}
              roundedBottomRight={"lg"}
              roundedTopRight={"lg"}
            >
              <DrawerBody overflowY={"auto"}>
                <Filter />
              </DrawerBody>
            </DrawerContent>
          </DrawerPositioner>
        </Portal>
      </DrawerRoot>
    </div>
  );
}
