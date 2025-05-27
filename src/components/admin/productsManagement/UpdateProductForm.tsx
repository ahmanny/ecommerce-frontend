"use client";

import { useUpdateProduct } from "@/services/products/productQueries";
import { IProduct } from "@/types/product.types";
import ProductForm from "./ProductFormT";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UpdateProductForm({ product }: { product: IProduct }) {
  const { mutate, isPending, isError, error } = useUpdateProduct();
  const router = useRouter();

  const handleUpdateProduct = (formData: FormData) => {
    mutate(
      { id: product._id, product: formData },
      {
        onSuccess: () => {
          toast.success("Product updated successfully!");
          router.push("/admin/products");
        },
      }
    );
  };

  return (
    <ProductForm
      mode="edit"
      product={product}
      onSubmit={handleUpdateProduct}
      mutation={{ isPending, isError, error }}
    />
  );
}
