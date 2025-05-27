"use client";

import { useCreateProduct } from "@/services/products/productQueries";
import ProductForm from "./ProductFormT";

export default function AddProductForm() {
  const { mutate, isPending, isError, error } = useCreateProduct();

  const handleAddProduct = (formData: FormData) => {
    mutate(formData);
  };

  return (
    <ProductForm
      mode="add"
      onSubmit={handleAddProduct}
      mutation={{ isPending, isError, error }}
    />
  );
}
