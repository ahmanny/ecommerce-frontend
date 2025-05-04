"use client";
import React from "react";
import WhishlistItemCard from "./wishlist";
import { useWishlistStore } from "@/store/WishlistStore";
import EmptyState from "../ui/states/EmptyState";

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
