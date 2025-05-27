"use client";

import UpdateProductForm from "@/components/admin/productsManagement/UpdateProductForm";
import PageSkeleton from "@/components/ui/loaders/skeletons/PageSkeleton";
import EmptyState from "@/components/ui/states/EmptyState";
import ErrorState from "@/components/ui/states/ErrorState";
import { useFetchProduct } from "@/services/products/productQueries";
import { useParams } from "next/navigation";
export default function page() {
  const { id: productId } = useParams();

  const {
    data: product,
    isLoading,
    isError,
    refetch,
  } = useFetchProduct(productId as string);

  if (isLoading) return <PageSkeleton />;
  if (isError)
    return <ErrorState message="Error loading product" onRetry={refetch} />;
  if (!product) return <EmptyState message="Product not found" />;
  return (
    <div className="bg-background-b1 p-8 w-full h-full">
      {/* page heading */}
      <div className=" pb-8 border-b-[1px] border-solid border-gray-300 mb-12">
        <h1 className="  heading-h5 text-foreground-f3 capitalize">
          {product.title}
        </h1>
      </div>
      {/* edit product form */}
      <UpdateProductForm product={product} />
    </div>
  );
}
