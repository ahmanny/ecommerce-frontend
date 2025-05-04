"use client";
import BreadcrumbFour from "@/components/layouts/breadcrumbs/BreadcrumbFour";
import RelatedProducts from "@/components/product/productCarousels/RelatedProducts";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductOptions from "@/components/product/ProductOptions";
import ProductTab from "@/components/product/productTab";
import PageSkeleton from "@/components/ui/loaders/skeletons/PageSkeleton";
import EmptyState from "@/components/ui/states/EmptyState";
import ErrorState from "@/components/ui/states/ErrorState";
import { useFetchProduct } from "@/services/products/productQueries";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const siteName = "Ecommerce";
  const params = useParams();
  const { slug } = params as { slug: string };
  const productId = slug.split("-").pop();
  const {
    data: product,
    isLoading,
    isError,
    refetch,
  } = useFetchProduct(productId as string);

  if (isLoading) return <PageSkeleton />;
  if (isError)
    return <ErrorState message="Error loading product" onRetry={refetch} />;
  if (!product)
    return (
      <EmptyState message={`Product with the ID-${productId} was not found`} />
    );
  return (
    <div>
      <div className="py-5 px-6 lg:px-28">
        <BreadcrumbFour
          breadcrumbItems={[siteName, "products", product.title]}
        />
      </div>
      <div className="flex flex-col gap-32 px-6 lg:px-28">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side - Gallery */}
          <div className="w-full lg:w-1/2">
            <ProductGallery images={product.images} />
          </div>

          {/* Right Side - Info + Options */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <ProductInfo
              averageRating={product.averageRating}
              reviewCount={product.reviewCount}
              totalSold={product.totalSold}
              title={product.title}
              image={product.images[0]}
              price={product.price}
              stock_status={product.stock_status}
            />
            <ProductOptions
              available_colors={product.colors}
              available_sizes={product.sizes}
              image={product.images[0]}
              price={product.price}
              productId={product._id}
              title={product.title}
            />
          </div>
        </div>

        <div>
          <ProductTab
            averageRating={product.averageRating}
            productDetails={product.description}
            productHighlights={product.highlights}
            productId={product._id}
            reviewCount={product.reviewCount}
            totalSold={product.totalSold}
          />
        </div>
        <div>
          <RelatedProducts productId={product._id} />
        </div>
      </div>
    </div>
  );
}
