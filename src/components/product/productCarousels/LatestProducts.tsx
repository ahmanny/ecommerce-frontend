"use client";

import { IProduct } from "@/types/product.types";
import ProductCarousel from ".";

interface LatestProductsProps {
  latestProducts: IProduct[];
  isLoading: boolean;
}

export default function LatestProducts({
  latestProducts,
  isLoading,
}: LatestProductsProps) {
  return (
    <div className="w-full px-20 py-10">
      <ProductCarousel
        emptyMessage="No Latest Products available"
        isLoading={isLoading}
        productsToBeDisplayed={latestProducts}
      />
    </div>
  );
}
