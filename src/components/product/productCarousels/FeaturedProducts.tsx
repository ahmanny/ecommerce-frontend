"use client";

import { IProduct } from "@/types/product.types";
import ProductCarousel from ".";

interface FeaturedProductsProps {
  featuredProducts: IProduct[];
  isLoading: boolean;
}

export default function FeaturedProducts({
  featuredProducts,
  isLoading,
}: FeaturedProductsProps) {
  return (
    <div>
      <ProductCarousel
        isLoading={isLoading}
        productsToBeDisplayed={featuredProducts}
        emptyMessage="No Featured Products available"
      />
    </div>
  );
}
