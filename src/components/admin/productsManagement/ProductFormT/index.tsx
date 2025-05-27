"use client";

import { generateSKU, slugify } from "@/lib/utils/product.utils";
import {
  addProductSchema,
  ProductFormData,
} from "@/lib/validators/productValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ProductDetailsLeft from "./ProductDetailsLeft";
import { useCategoryStore } from "@/store/CategoryStore";
import ProductDetailsRight from "./ProductDetailsRight";
import ProductImages from "./ProductImages";
import ProductFormFooter from "./ProductFormFooter";
import { IProduct } from "@/types/product.types";

interface ProductFormProps {
  mode: "add" | "edit";
  product?: IProduct;
  onSubmit: (data: FormData) => void;
  mutation: {
    isPending: boolean;
    isError: boolean;
    error: any;
  };
}

export default function ProductForm({
  mode,
  product,
  onSubmit,
  mutation,
}: ProductFormProps) {
  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(addProductSchema),
  });

  const [newimageFiles, setNewImageFiles] = useState<File[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const selectedColors = watch("colors") || [];
  const selectedSizes = watch("sizes") || [];
  const selectedImages = watch("images") || [];

  // Handle setup if editing
  useEffect(() => {
    if (mode === "edit" && product) {
      reset({
        ...product,
        categories: product.categories.map((cat: any) =>
          typeof cat === "string" ? cat : cat.name
        ),
      });
      setImages(product.images);
    }
  }, [product]);

  useEffect(() => {
    const title = watch("title");
    if (title) {
      setValue("slug", slugify(title));
      setValue("sku", generateSKU(title));
    }
  }, [watch("title")]);

  useEffect(() => {
    setValue("newImages", newimageFiles as any);
  }, [newimageFiles]);

  // handle file uploads for images
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewImageFiles([...newimageFiles, ...Array.from(e.target.files)]);
      if (mode === "add") {
        setValue("images", [...selectedImages, ...Array.from(e.target.files)]);
      }
    }
  };
  const removeImage = (index: number) => {
    const updatedImages = newimageFiles.filter((_, i) => i !== index);
    setNewImageFiles(updatedImages);
    if (mode === "add") {
      setValue("images", updatedImages);
    }
  };

  const removeUploadedImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    setValue("images", updated);
  };

  const handleColorChange = (color: string) => {
    const updated = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    setValue("colors", updated);
  };
  const handleSizeChange = (size: string) => {
    const updated = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    setValue("sizes", updated);
  };

  const handleFormSubmit = (data: ProductFormData) => {
    console.log("Form data before submission:", mode);
    const enrichedData = {
      ...data,
      newImages: newimageFiles,
    };
    const formData = new FormData();
    if (mode === "add") {
      Object.entries(data).forEach(([key, value]) => {
        if (
          key === "colors" ||
          key === "sizes" ||
          key === "categories" ||
          key === "highlights"
        ) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value.toString());
        }
      });

      newimageFiles.forEach((file) => {
        formData.append("images", file);
      });
      onSubmit(formData);
    }

    if (mode === "edit") {
      Object.entries(data).forEach(([key, value]) => {
        if (
          key === "colors" ||
          key === "sizes" ||
          key === "categories" ||
          key === "highlights" ||
          key === "reviews"
        ) {
          formData.append(key, JSON.stringify(value));
        } else if (key === "images") {
          formData.append("images", JSON.stringify(value)); // Only strings
        } else {
          formData.append(key, value.toString());
        }
      });

      newimageFiles.forEach((file) => {
        formData.append("newImages", file);
      });
      onSubmit(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-20">
        <div className="w-full md:w-96">
          <ProductDetailsLeft
            {...{
              register,
              control,
              errors,
              categories: useCategoryStore().categories,
            }}
          />
        </div>
        <div className="w-full md:w-96 ">
          <ProductDetailsRight
            {...{
              register,
              errors,
              selectedColors,
              selectedSizes,
              handleColorChange,
              handleSizeChange,
            }}
          >
            <ProductImages
              {...{
                images,
                newimageFiles,
                errors,
                handleFileChange,
                removeImage,
                removeUploadedImage,
              }}
            />
          </ProductDetailsRight>
        </div>
      </div>
      <ProductFormFooter
        isLoading={mutation.isPending}
        isError={mutation.isError}
        errorMessage={mutation.error?.message || ""}
        mode={mode}
      />
    </form>
  );
}
