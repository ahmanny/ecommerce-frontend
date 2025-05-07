"use client";
import React from "react";
import { useWishlistStore } from "@/store/WishlistStore";
import EmptyState from "@/components/ui/states/EmptyState";
import WhishlistItemCard from ".";

export default function UserWishList() {
  const { items } = useWishlistStore();
  return (
    <div className=" py-14 space-y-4">
      {items.length > 0 ? (
        items.map((item) => (
          <WhishlistItemCard key={item.title} item={item} date="23 june 2020" />
        ))
      ) : (
        <EmptyState message="No wishlist added" />
      )}
    </div>
  );
}
