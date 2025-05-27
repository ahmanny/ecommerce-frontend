"use client";

import { useCreateProduct } from "@/services/products/productQueries";
import ProductForm from "./ProductFormT";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddProductForm() {
  const { mutate, isPending, isError, error } = useCreateProduct();
  const router = useRouter();

  const handleAddProduct = (formData: FormData) => {
    mutate(formData, {
      onSuccess: () => {
        toast.success("Product updated successfully!");
        router.push("/admin/products");
      },
    });
  };

  return (
    <ProductForm
      mode="add"
      onSubmit={handleAddProduct}
      mutation={{ isPending, isError, error }}
    />
  );
}
