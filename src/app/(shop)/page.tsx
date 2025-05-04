"use client";

import BrowseFashion from "@/components/homepage/BrowseFashion";
import Hero from "@/components/homepage/Hero";
import HomepageTab from "@/components/homepage/HomepageTab";
import SpecialOffer from "@/components/homepage/SpecialOffer";
import BestsellingProducts from "@/components/product/productCarousels/BestsellingProducts";
import { useFetchHomeProducts } from "@/services/products/productQueries";

export default function page() {
  const { data, isLoading, isError } = useFetchHomeProducts();
  return (
    <div className="w-full flex flex-col justify-center">
      <Hero />
      <div className=" py-20">
        <SpecialOffer />
      </div>
      <div className="px-14">
        <BestsellingProducts
          isLoading={isLoading}
          bestSelling={data?.bestSelling || []}
        />
      </div>
      <BrowseFashion />
      <div className=" py-40 px-14">
        <HomepageTab
          isLoading={isLoading}
          featuredProducts={data?.featured || []}
          latestProducts={data?.latest || []}
        />
      </div>
    </div>
  );
}
