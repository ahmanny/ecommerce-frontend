"use client";

import AddReview from "./AddReview";

interface ProductReviewsHeaderProps {
  rating: any;
  totalReviews: number;
  productId: string;
}

export default function ProductReviewsHeader({
  rating,
  totalReviews,
  productId,
}: ProductReviewsHeaderProps) {
  return (
    <div className="w-full flex flex-col gap-6 pb-10">
      <h1 className="heading-h5 text-foreground-f1">Reviews</h1>
      <div className="flex gap-4 items-center ">
        <h1 className="heading-h3">{rating}</h1>
        <p className="text-foreground-f5"> —{totalReviews} Reviews</p>
      </div>
      <AddReview productId={productId} />
    </div>
  );
}
