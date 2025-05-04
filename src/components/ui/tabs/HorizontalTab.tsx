"use client";
import { Tabs } from "@chakra-ui/react";

interface HorizontalTabProps {
  tabsContent: {
    value: string;
    content: React.JSX.Element;
  }[];
}

export default function HorizontalTab({ tabsContent }: HorizontalTabProps) {
  return (
    <div className="w-full">
      <Tabs.Root defaultValue={tabsContent[0].value} variant="plain">
        <Tabs.List className="flex justify-center">
          {tabsContent.map((tab, _) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              _selected={{
                color: "#202533",
                borderBottom: "none",
                borderRadius: "full",
                border: "1px solid",
                borderColor: "#E9E9EB",
              }}
              _focus={{ boxShadow: "none" }}
              borderBottom="none"
              color={"#5C5F6A"}
              px={4}
              py={2}
              className="!capitalize"
            >
              {tab.value}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabsContent.map((tab, _) => (
          <Tabs.Content key={tab.value} value={tab.value}>
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}
