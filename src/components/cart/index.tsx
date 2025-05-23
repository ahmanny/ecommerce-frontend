"use client";

import { useCartStore } from "@/store/CartStore";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyState from "../ui/states/EmptyState";
import { useRouter } from "next/navigation";

export default function CartContainer() {
  const { items } = useCartStore();
  const router = useRouter();

  return (
    <div>
      {items.length > 0 ? (
        <div className="flex flex-col md:flex-row py-4 md:py-14 justify-between ">
          {/* Left: items in cart */}
          <div className="md:w-[550px] lg:w-[600px]">
            <h3 className="heading-h4 text-foreground-f1 h-12 px-10">Your Cart</h3>
            <div className="px-4 md:px-10">
              {items.map((item) => (
                <CartItem key={item.uniqueId} item={item} />
              ))}
            </div>
          </div>
          {/* Right: Summary with checkout button */}
          <div className="md:w-[350px] lg:w-[400px] px-4 md:px-10">
            <CartSummary />
          </div>
        </div>
      ) : (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <EmptyState
            message="Your cart is empty."
            subtitle="Click 'Start shopping' to add items to your cart"
            btnText="Start Shopping"
            action={() => router.push("/products/search")}
          />
        </div>
      )}
    </div>
  );
}
