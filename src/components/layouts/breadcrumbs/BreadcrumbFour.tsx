import React from "react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbLink } from "@chakra-ui/react";
interface BreadcrumbSubProps {
  breadcrumbItems: string[];
}

export default function BreadcrumbFour({
  breadcrumbItems,
}: BreadcrumbSubProps) {
  return (
    <>
      <Breadcrumb.Root className="flex gap-1 items-center capitalize text-lg  font-semibold">
        {breadcrumbItems.map((breadcrumbItem, index) => (
          <Breadcrumb.List key={index}>
            {index === breadcrumbItems.length - 1 || index === 0 ? (
              <>
                {index === 0 ? (
                  <Breadcrumb.Item className="breadcrump_item">
                    <Breadcrumb.CurrentLink className="text-foreground-f5">
                      {breadcrumbItem}
                    </Breadcrumb.CurrentLink>
                  </Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item className="breadcrump_item">
                    <Breadcrumb.CurrentLink>
                      {breadcrumbItem}
                    </Breadcrumb.CurrentLink>
                  </Breadcrumb.Item>
                )}
                {index === 0 && <Breadcrumb.Separator className="text-lg" />}
              </>
            ) : (
              <>
                <Breadcrumb.Item className="breadcrump_item">
                  <BreadcrumbLink
                    as={Link}
                    href={`/${breadcrumbItems[index - 1]}/${breadcrumbItem}`}
                  >
                    {breadcrumbItem}
                  </BreadcrumbLink>
                </Breadcrumb.Item>
                <Breadcrumb.Separator className=" text-base md:text-lg" />
              </>
            )}
          </Breadcrumb.List>
        ))}
      </Breadcrumb.Root>
    </>
  );
}
