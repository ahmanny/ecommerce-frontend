"use client";

import { useBreakpointValue } from "@chakra-ui/react"; // Import the hook
import { DrawerPositioner, Portal } from "@chakra-ui/react";
import { BsCart4 } from "react-icons/bs";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
  DrawerTitle,
  DrawerHeader,
  DrawerTrigger,
  DrawerCloseTrigger,
  DrawerFooter,
} from "@/components/ui/drawers";
import { useUiStore } from "@/store/UiStore";
import { useCartStore } from "@/store/CartStore";
import { CloseButton } from "../../close-button";
import CartDrawerItem from "./CartDrawerItem";
import CartDrawerFooter from "./CartDrawerFooter";
import EmptyState from "../../states/EmptyState";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
  const router = useRouter();
  const { isCartOpen, setCartOpen } = useUiStore();
  const { items } = useCartStore();
  const cartPriceTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Use Chakra UI's useBreakpointValue for responsive drawer size
  const drawerSize = useBreakpointValue<
    "sm" | "md" | "lg" | "full" | "xl" | "xs"
  >({
    base: "full", // Full screen on small screens
    sm: "md", // Medium drawer size on small screens
    md: "md", // Keep medium drawer for medium screens
    lg: "lg", // Large drawer for large screens
  });

  return (
    <div>
      <DrawerRoot
        open={isCartOpen}
        onOpenChange={(details) => setCartOpen(details.open)}
        size={drawerSize} // Dynamically setting size
      >
        <DrawerTrigger asChild>
          <button className="relative">
            <BsCart4 className=" text-[18px] sm:text-[22px]" />
            <p className="absolute top-[-11px] right-[-13px] bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-sm">
              {items.length}
            </p>
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
            <DrawerContent roundedBottomLeft={"lg"} roundedTopLeft={"lg"}>
              <DrawerHeader>
                <div className="flex items-center justify-between !mb-3">
                  <DrawerTitle className="!text-2xl !font-semibold">
                    Shopping Cart
                  </DrawerTitle>
                  <DrawerCloseTrigger asChild>
                    <CloseButton className="hover:!bg-slate-200" />
                  </DrawerCloseTrigger>
                </div>
              </DrawerHeader>

              <DrawerBody overflowY={"auto"}>
                <div className="flex flex-col justify-center gap-7">
                  {items.length > 0 ? (
                    items.map((item) => (
                      <div key={item.uniqueId}>
                        <CartDrawerItem item={item} />
                        <hr className="mt-7" />
                      </div>
                    ))
                  ) : (
                    <EmptyState
                      message="Your cart is empty."
                      subtitle="Click 'Start shopping' to add items to your cart"
                      btnText="Start Shopping"
                      action={() => router.push("/products/search")}
                    />
                  )}
                </div>
              </DrawerBody>
              <DrawerFooter>
                <CartDrawerFooter cartPriceTotal={cartPriceTotal} />
              </DrawerFooter>
            </DrawerContent>
          </DrawerPositioner>
        </Portal>
      </DrawerRoot>
    </div>
  );
}
