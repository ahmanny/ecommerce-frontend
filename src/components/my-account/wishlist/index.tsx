"use client";

import { Avatar } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import toast from "react-hot-toast";
import { IWishlistItem } from "@/types/wishlist.types";
import { useDeleteWishlist } from "@/services/wishlist/wishlistQueries";
import WishlistAddToCartForm from "./WishlistAddToCartForm";
import { formatDate } from "@/lib/utils/date.utils";

interface ItemProps {
  item: IWishlistItem;
}

export default function WhishlistItemCard({ item }: ItemProps) {
  const wishlistDelete = useDeleteWishlist();

  const removeItem = () => {
    const wishlistId = item._id;
    wishlistDelete.mutate(wishlistId, {
      onSuccess: () => {
        toast.success(`Product removed from wishlist`);
      },
    });
  };

  return (
    <div className="w-full">
      <div className="flex md:items-center justify-between lg:mb-4">
        {/* Product Image */}
        <div className="w-[80px] h-[80px] rounded-md overflow-hidden bg-gray-100">
          <Avatar.Root shape="rounded" size="full" colorPalette={"blue"}>
            <Avatar.Fallback name={item.title} />
            <Avatar.Image src={item.image} />
          </Avatar.Root>
        </div>

        {/* Product Details */}
        <div className="flex-1 px-4">
          <h2 className="text-base md:text-lg font-semibold capitalize">
            {item.title}
          </h2>
          <p className="date flex items-center gap-2">
            {"Added on: "}
            {formatDate(item.addedAt)}
          </p>
          <div className="text-lg font-bold mr-4 mt-4 lg:hidden">
            ${item.price.toFixed(2)}
          </div>

          <button
            type="button"
            className="hidden lg:block"
            onClick={removeItem}
          >
            Remove Item
          </button>
        </div>

        {/* Price and Add to Cart Form */}
        <div className="hidden lg:flex gap-[40px] items-center">
          <div className="text-lg font-bold mr-4">${item.price.toFixed(2)}</div>
          <WishlistAddToCartForm item={item} />
        </div>
      </div>

      {/* Remove button for smaller screens */}
      <div className="flex justify-between items-center mb-4 lg:hidden">
        <button type="button" onClick={removeItem}>
          Remove Item
        </button>
        <WishlistAddToCartForm item={item} />
      </div>
      <hr />
    </div>
  );
}
