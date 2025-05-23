"use client";

import { Breadcrumb } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export default function BreadCrumbOne() {
  const pathname = usePathname();
  const siteName = "Ecommerce";
  const title = pathname.split("/").pop()?.replace(/-/g, " ") || "Home";

  return (
    <div className="w-full px-6 lg:px-24 ">
      <h1 className="text-[20px] font-bold mb-3 capitalize">{title}</h1>
      <Breadcrumb.Root className="flex gap-1 items-center capitalize text-lg font-semibold">
        <Breadcrumb.List>
          <Breadcrumb.Item className="flex gap-1 text-[16px]">
            <Breadcrumb.CurrentLink className="text-foreground-f5">
              {siteName}
            </Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className="text-xl" />
          <Breadcrumb.Item className="flex gap-1 text-[16px]">
            <Breadcrumb.CurrentLink>{title}</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </div>
  );
}
