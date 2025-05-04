import React, { JSX } from "react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
  DrawerTitle,
  DrawerHeader,
  DrawerTrigger,
  DrawerCloseTrigger,
} from "@/components/ui/drawers";
import { useUiStore } from "@/store/UiStore";
import {
  CloseButton,
  DrawerPositioner,
  Portal,
  useBreakpointValue,
} from "@chakra-ui/react";
import ProfileNavBar from "@/components/navs/ProfileNavbar";

interface ProfileNavDrawerProps {
  button: JSX.Element;
}

export default function ProfileNavDrawer({ button }: ProfileNavDrawerProps) {
  const { isProfileNavOpen, setProfileNavOpen } = useUiStore();
  return (
    <div>
      <DrawerRoot
        open={isProfileNavOpen}
        onOpenChange={(details) => setProfileNavOpen(details.open)}
      >
        <DrawerTrigger asChild>{button}</DrawerTrigger>
        <Portal>
          <DrawerBackdrop />
          <DrawerPositioner
            position={"fixed"}
            top={"0"}
            bottom={"0"}
            left={"0"}
            right={"0"}
          >
            <DrawerContent roundedBottomRight={"lg"} roundedTopRight={"lg"}>
              <DrawerHeader>
                <div className="flex items-center justify-between !mb-3">
                  <DrawerTitle className="!text-2xl !font-semibold">
                    My Account
                  </DrawerTitle>
                  <DrawerCloseTrigger asChild>
                    <CloseButton className="hover:!bg-slate-200" />
                  </DrawerCloseTrigger>
                </div>
              </DrawerHeader>
              <DrawerBody>
                <ProfileNavBar />
              </DrawerBody>
            </DrawerContent>
          </DrawerPositioner>
        </Portal>
      </DrawerRoot>
    </div>
  );
}
