"use client";

import { useCartStore } from "@/store/CartStore";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyState from "../ui/states/EmptyState";

export default function CartContainer() {
  const { items } = useCartStore();

  return (
    <div>
      {items.length > 0 ? (
        <div className="flex py-14 gap-36">
          <div className="w-[640px]">
            <h3 className="text-lg font-bold h-12 border-b">Your Cart</h3>
            <div className=" py-16">
              {items.map((item) => (
                <CartItem key={item.uniqueId} item={item} />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <CartSummary />
          </div>
        </div>
      ) : (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <EmptyState message="Your cart is empty." />
        </div>
      )}
    </div>
  );
}
