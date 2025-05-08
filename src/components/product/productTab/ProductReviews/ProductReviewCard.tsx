import { user } from "@/types/review.types";
import { Avatar, RatingGroup } from "@chakra-ui/react";
import React from "react";
import { Rating } from "./RatingStars";

interface ProductReviewCardProps {
  user: user;
  comment: string;
  rating: number;
  date: string;
}

export default function ProductReviewCard({
  comment,
  date,
  rating,
  user,
}: ProductReviewCardProps) {
  return (
    <div>
      <div className="flex gap-3 md:gap-10 items-start flex-col md:flex-row px-3 py-8">
        {/* user avater image */}
        <div>
          <Avatar.Root shape="full" size="2xl" colorPalette={"blue"}>
            <Avatar.Fallback name={user.name} />
            <Avatar.Image src={user.name} />
          </Avatar.Root>
        </div>
        <div className="flex-1">
          <div className="md:mb-3">
            <h1 className="text-xl">{user.name}</h1>
            <h1 className="date uppercase">{date}</h1>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-[#5C5F6A] text-base">{comment}</p>
            <Rating value={rating} readOnly />
          </div>
        </div>
      </div>
      <hr className="my-2 w-full" />
    </div>
  );
}
