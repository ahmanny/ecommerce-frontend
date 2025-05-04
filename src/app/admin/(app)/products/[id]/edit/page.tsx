"use client";

import UpdateProduct from "@/components/admin/productsManagement/update/UpdateProduct";
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
    <div className="bg-white p-8 w-[85%]">
      {/* page heading */}
      <div className=" pb-8 border-b-[1px] border-solid border-gray-200 mb-12">
        <h1 className=" text-xl font-semibold capitalize">{product.title}</h1>
      </div>
      {/* edit product form */}
      <UpdateProduct product={product} />
    </div>
  );
}
