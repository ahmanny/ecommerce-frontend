"use client";

import { useFetchSimilarProduct } from "@/services/products/productQueries";
import ErrorState from "../../ui/states/ErrorState";
import ProductCarousel from ".";

interface RelatedProductsProps {
  productId: string;
}

export default function RelatedProducts({ productId }: RelatedProductsProps) {
  const {
    data: similarProducts,
    isLoading,
    isError,
    error,
    refetch,
  } = useFetchSimilarProduct(productId);

  if (isError)
    return <ErrorState message={error.message} onRetry={() => refetch()} />;
  return (
    <div className="space-y-8">
      <div>
        <h1 className="heading">You might also like</h1>
        <h2 className="sub_heading">SIMILAR PRODUCTS</h2>
      </div>
      <div>
        <ProductCarousel
          isLoading={isLoading}
          emptyMessage="No Product is related to this product"
          productsToBeDisplayed={similarProducts || []}
        />
      </div>
    </div>
  );
}
