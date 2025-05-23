import React from "react";
import { FaStar } from "react-icons/fa";
import ShareButton from "../ui/buttons/ShareButton";

interface ProductInfoProps {
  title: string;
  image: string;
  stock_status: string;
  price: number;
  reviewCount: number;
  totalSold: number;
  averageRating: number;
}

export default function ProductInfo({
  image,
  stock_status,
  title,
  price,
  averageRating,
  reviewCount,
  totalSold,
}: ProductInfoProps) {
  return (
    <div className="flex flex-col gap-12">
      {/* name and review star display */}
      <div>
        <div className=" flex justify-between items-center">
          <h1 className="heading-h3">{title}</h1>
          <ShareButton productImage={image} productName={title} />
        </div>
        <div className="flex justify-center items-center w-fit gap-3">
          <div className="bg-background-b2 rounded-full flex p-2 justify-center items-center gap-3">
            <FaStar className="text-foreground-f5 text-xl" />
            <p>
              {averageRating.toFixed(1)} — {reviewCount} Reviews
            </p>
          </div>
          <div className="uppercase label-l2 border rounded-full p-2">
            {stock_status}
          </div>
        </div>
      </div>
      {/* price of product display */}
      <div>
        <h1 className="heading-h3 text-foreground-f5">
          {new Intl.NumberFormat("en-Us", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </h1>
      </div>
    </div>
  );
}
