"use client";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import CheckoutButton from "../../buttons/CheckoutButton";
import { useUiStore } from "@/store/UiStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

interface CartDrawerFooterProps {
  cartPriceTotal: number;
}

export default function CartDrawerFooter({
  cartPriceTotal,
}: CartDrawerFooterProps) {
  const { setCartOpen } = useUiStore();
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();
  function gotoCart() {
    setIsloading(true);
    router.push("/cart");
    setCartOpen(false);
    setIsloading(false);
  }
  return (
    <div className="!flex !flex-col w-full">
      <hr className="my-6" />
      <div className="flex justify-between text-lg font-semibold">
        <span>Total:</span>
        <span>${cartPriceTotal.toFixed(2)}</span>
      </div>
      <div className="my-10 flex flex-col">
        <Button
          onClick={gotoCart}
          className="primary-p1 text-xl text-custom-50 h-[40px] w-full rounded-md"
        >
          {isLoading ? <BeatLoader color="#3498db" /> : "View cart"}
        </Button>
        <CheckoutButton classes="text-center underline text-xl mt-3" />
      </div>
    </div>
  );
}
