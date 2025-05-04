"use client";

import { Breadcrumb } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export default function BreadCrumbThree() {
  const pathname = usePathname();
  const siteName = "Ecommerce";
  const title = pathname.split("/").pop()?.replace(/-/g, " ") || "Home";

  return (
    <>
      <Breadcrumb.Root className="flex gap-1 items-center capitalize text-lg font-semibold">
        <Breadcrumb.List>
          <Breadcrumb.Item className="flex gap-1 text-[16px]">
            <Breadcrumb.CurrentLink className="text-[#5C5F6A]">
              {siteName}
            </Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className="text-xl" />
          <Breadcrumb.Item className="flex gap-1 text-[16px]">
            <Breadcrumb.CurrentLink>{title}</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </>
  );
}
