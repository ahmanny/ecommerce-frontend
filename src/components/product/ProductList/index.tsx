"use client";

import React from "react";
import Filter from "./Filter";
import FiltersApplied from "./Filter/FiltersApplied";
import ProductsGrid from "./ProductGrid";
import { useFetchProducts } from "@/services/products/productQueries";

export default function ProductList() {
  const { data: products, isLoading, isError, error } = useFetchProducts();

  return (
    <div>
      <div className="flex  w-full gap-[48px] overflow-hidden">
        <div className="hidden md:flex w-40 sm:w-48 lg:w-60 p-4 h-fit py-8 border border-gray-300 rounded-lg">
          <Filter />
        </div>
        <div className=" flex-1 pt-5">
          <FiltersApplied />
          <ProductsGrid isLoading={isLoading} products={products ?? []} />
        </div>
      </div>
    </div>
  );
}
