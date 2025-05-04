"use client";

import { Stack, Tabs, Text, useBreakpointValue } from "@chakra-ui/react";
import { JSX, useState } from "react";
interface tab {
  label: string;
  value: string;
  icon: JSX.Element;
  content: JSX.Element;
}

interface tabsProps {
  tabsContent: tab[];
}
export default function VerticalTab({ tabsContent }: tabsProps) {
  //   get current tab from url, fallback to first tab if not present
  const currentTab = "details";
  const [value, setValue] = useState(tabsContent[0]?.value || "");
  const tabOrientation = useBreakpointValue<"horizontal" | "vertical">({
    base: "horizontal",
    md: "vertical",
  });

  return (
    <div>
      <Tabs.Root
        value={value}
        onValueChange={(v) => setValue(v.value)}
        orientation={tabOrientation}
        variant={"subtle"}
        size={"lg"}
        fitted
        defaultValue={currentTab}
      >
        <Stack
          direction={tabOrientation === "horizontal" ? "column" : "row"}
          alignItems={"flex-start"}
        >
          <Tabs.List
            maxW={{ base: "100%", md: "200px", lg: "245px" }}
            maxH="500px"
            justifyContent={
              tabOrientation === "horizontal" ? "space-between" : undefined
            }
            flexWrap={tabOrientation === "horizontal" ? "wrap" : undefined}
          >
            {tabsContent.map((tab) => {
              const IsActive = tab.value === value;
              return (
                <Tabs.Trigger key={tab.value} value={tab.value}>
                  <Stack
                    direction={tabOrientation === "horizontal" ? "row" : "row"}
                    px={4}
                    py={3}
                    w={{ base: "160px", md: "200px", lg: "245px" }}
                    // h="45px"
                    borderRadius="lg"
                    bg={IsActive ? "#f6f6f6" : "transparent"}
                    color={IsActive ? "#0E1422" : "#5C5F6A"}
                    _hover={{ bg: "#f0f0f0" }}
                    alignItems="center"
                    gap={tabOrientation === "horizontal" ? 2 : 5}
                  >
                    {tab.icon}
                    <Text fontSize={"lg"}>{tab.label}</Text>
                  </Stack>
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
          {tabsContent.map((tab) => (
            <Tabs.Content key={tab.value} value={tab.value}>
              {tab.content}
            </Tabs.Content>
          ))}
        </Stack>
      </Tabs.Root>
    </div>
  );
}
