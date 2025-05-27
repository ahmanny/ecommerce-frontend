"use client";

import DataTables from "@/components/admin/dataTable";
import { useFetchProducts } from "@/services/products/productQueries";
import { useRouter } from "next/navigation";
import PageSkeleton from "@/components/ui/loaders/skeletons/PageSkeleton";
import { ProductTableHeader } from "@/lib/contants/regular.constants";
export default function ProductsManagement() {
  const router = useRouter();
  const { data: products, isLoading, isError, error } = useFetchProducts();

  if (isLoading) {
    return <PageSkeleton />;
  }

  if (error) {
    return <p>Error fetching users: {error.message}</p>;
  }

  return (
    <div>
      <div className=" w-full h-full">
        <DataTables
          tableHeaders={ProductTableHeader}
          componentFor="products"
          data={products}
          addBtnText="Add product"
          addBtnAction={() => router.push("/admin/products/add-product")}
        />
      </div>
    </div>
  );
}
