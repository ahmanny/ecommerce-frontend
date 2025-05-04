import React from "react";
import ProductReviewsHeader from "./ProductReviewsHeader";
import ProductReviewCard from "./ProductReviewCard";
import { useFetchProductReviews } from "@/services/reviews/reviewsQueries";
import PageSkeleton from "@/components/ui/loaders/skeletons/PageSkeleton";
import ErrorState from "@/components/ui/states/ErrorState";
import { formatRelativeDate } from "@/lib/utils/date.utils";
import EmptyState from "@/components/ui/states/EmptyState";

interface ProductReviewsProps {
  productId: string;
  reviewCount: number;
  totalSold: number;
  averageRating: number;
}

export default function ProductReviews({
  productId,
  averageRating,
  totalSold,
  reviewCount,
}: ProductReviewsProps) {
  const {
    data: reviews,
    isLoading,
    isError,
    error,
    refetch,
  } = useFetchProductReviews(productId);
  if (isLoading) {
    return <PageSkeleton />;
  }
  return (
    <div className="w-full">
      {isError && (
        <ErrorState message={error.message} onRetry={() => refetch()} />
      )}
      <div>
        <ProductReviewsHeader
          productId={productId}
          rating={averageRating.toFixed(1)}
          totalReviews={reviewCount}
        />
        <hr />
        {reviews && reviews.length > 0 ? (
          <div>
            {reviews.map((review, index) => (
              <ProductReviewCard
                key={index}
                comment={review.comment}
                rating={review.rating}
                user={review.user}
                date={formatRelativeDate(review.createdAt)}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No reviews yet."
            subtitle="Be the first to write a review."
          />
        )}
      </div>
    </div>
  );
}
