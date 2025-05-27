"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbList,
  BreadcrumbRoot,
  BreadcrumbCurrentLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function BreadCrumbTwo() {
  const pathname = usePathname();

  const parts = useMemo(() => pathname.split("/").filter(Boolean), [pathname]);
  const name = parts.at(-1)?.replace(/-/g, " ");

  const pathSegments = useMemo(() => {
    if (name === "edit") {
      return parts.filter((_, i) => i !== 2); // remove slug
    }
    return parts;
  }, [parts, name]);

  return (
    <BreadcrumbRoot className="flex gap-1 items-center capitalize ">
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isFirst = index === 0;
        const isLast = index === pathSegments.length - 1;

        return (
          <BreadcrumbList key={href}>
            <BreadcrumbItem className="flex gap-1 text-base md:text-[18px] font-semibold">
              {isLast ? (
                <BreadcrumbCurrentLink>{segment}</BreadcrumbCurrentLink>
              ) : isFirst ? (
                <BreadcrumbCurrentLink className="text-[#5C5F6A]">
                  {segment}
                </BreadcrumbCurrentLink>
              ) : (
                <BreadcrumbLink as={Link} href={href}>
                  {segment}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {!isLast && <BreadcrumbSeparator className="text-lg" />}
          </BreadcrumbList>
        );
      })}
    </BreadcrumbRoot>
  );
}
