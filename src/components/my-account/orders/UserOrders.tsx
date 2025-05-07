"use client";
import React from "react";
import ItemCard, { item } from "./ItemCard";
import EmptyState from "../../ui/states/EmptyState";
import { useRouter } from "next/navigation";

interface UserOrdersListProps {
  items: item[];
}

export default function UserOrders({ items }: UserOrdersListProps) {
  const viewItem = () => {
    console.log("helo");
  };
  const router = useRouter();
  return (
    <div className=" py-14  md:pr-[32px] ">
      {items.length > 0 ? (
        items.map((item) => (
          <ItemCard
            key={item.title}
            item={item}
            btn={viewItem}
            btnText="view item"
          />
        ))
      ) : (
        <EmptyState
          message=" Your order history is waiting to be filled."
          btnText="Start Shopping"
          action={() => router.push("/products/search")}
        />
      )}
    </div>
  );
}
