"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useCategoryStore } from "@/store/CategoryStore";
import { useCreateProduct } from "@/services/products/productQueries";
import { generateSKU, slugify } from "@/lib/utils/product.utils";
import InputField from "@/components/ui/form/InputField";
import NumberInput from "@/components/ui/form/NumberInput";
import { CreatableMultiSelect } from "@/components/ui/form/CreatableMultiSelect";
import {
  genders,
  HIGHLIGHT_OPTIONS,
  materials,
  stockStatus,
} from "@/lib/contants/regular.constants";
import TextAreaFileld from "@/components/ui/form/TextAreaFileld";
import SelectField from "@/components/ui/form/SelectField";
import ColorSelectorField from "@/components/ui/form/ColorSelectorField";
import SizeSelectorField from "@/components/ui/form/SizeSelectorField";
import {
  addProductSchema,
  ProductFormData,
} from "@/lib/validators/productValidator";

interface formProps {
  btnText: string;
}

export default function ProductForm({ btnText }: formProps) {
  const { categories } = useCategoryStore();

  const createMutation = useCreateProduct();
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(addProductSchema),
  });

  // watch for changes in colors,images,sizes
  const selectedImages = watch("images") || [];
  const selectedColors = watch("colors") || [];
  const selectedSizes = watch("sizes") || [];
  const formTitle = watch("title");
  useEffect(() => {
    if (formTitle) {
      const slug = slugify(formTitle);
      const sku = generateSKU(formTitle);
      setValue("sku", sku);
      setValue("slug", slug);
    }
  }, [formTitle, setValue]);

  // handle file uploads for images
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files);
      setImageFiles((p) => [...p, ...newImages]);
      setValue("images", [...selectedImages, ...newImages]);
    }
  };
  // Remove images
  const removeImage = (index: number) => {
    const updatedImages = imageFiles.filter((_, i) => i !== index);
    setImageFiles(updatedImages);
    setValue("images", updatedImages);
  };

  // color upload
  const handleColorChange = (color: string) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((c: any) => c !== color)
      : [...selectedColors, color];
    setValue("colors", updatedColors);
  };

  // Handle size change
  const handleSizeChange = (size: string) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s: any) => s !== size)
      : [...selectedSizes, size];
    setValue("sizes", updatedSizes);
  };
  // on submit function
  const onSubmit = (data: ProductFormData) => {
    const formData = new FormData();
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
    if (imageFiles.length > 0) {
      imageFiles.forEach((file) => {
        formData.append("images", file);
      });
    }
    createMutation.mutate(formData, {
      onSuccess: () => {
        toast.success("Product added successfully!");
        router.push("/admin/products");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="gap-16 flex flex-col">
        <div className="flex gap-20">
          {/* left side of the form with title,price,category,slug,sku,desription inputs*/}
          <div className="w-96 flex flex-col gap-5 text-[#474B57]">
            {/* title input */}
            <InputField
              label="Title"
              name="title"
              register={register}
              errors={errors}
            />
            {/* price input */}
            <NumberInput
              label="Price (USD)"
              name="price"
              register={register}
              errors={errors}
            />
            {/* category input/dropdown */}
            <CreatableMultiSelect
              label="Category"
              errors={errors}
              name="categories"
              control={control}
              options={categories}
              placeholder="select or type categories"
            />
            {/* slug input */}
            <InputField
              label="Slug"
              name="slug"
              isReadOnly={true}
              register={register}
              errors={errors}
            />
            {/* sku input */}
            <InputField
              label="SKU"
              name="sku"
              register={register}
              errors={errors}
              isReadOnly={true}
            />
            {/* category input/dropdown */}
            <CreatableMultiSelect
              label="Highlights"
              errors={errors}
              name="highlights"
              control={control}
              options={HIGHLIGHT_OPTIONS}
              placeholder="select or type categories"
            />
            {/* description input */}
            <TextAreaFileld
              label="Description"
              name="description"
              register={register}
              errors={errors}
            />
          </div>

          {/* right side of the form with gender,material,stack status, quantity,image upload,colorselct,size select input*/}
          <div className="w-96 flex flex-col gap-5 text-[#474B57]">
            {/* select shoe material */}
            <SelectField
              label="Material"
              name="material"
              options={materials}
              register={register}
              errors={errors}
            />
            {/* select shoe gender */}
            <SelectField
              label="Gender"
              name="gender"
              options={genders}
              register={register}
              errors={errors}
            />
            {/* stock_status input */}
            <SelectField
              label="Stock status"
              name="stock_status"
              options={stockStatus}
              register={register}
              errors={errors}
            />
            {/* quantity_available input */}
            <NumberInput
              label="Available quantity"
              name="quantity_available"
              register={register}
              errors={errors}
            />
            {/* upload product image */}
            <div className=" flex-col flex ">
              <label className="block text-sm font-medium">Images</label>
              <input
                type="file"
                id="images"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="images"
                className=" cursor-pointer border-solid border border-gray-400 rounded-lg p-2 flex gap-2 items-center text-gray-500 hover:bg-gray-100"
              >
                <MdOutlineDriveFolderUpload className="text-2xl" />
                Choose product images
              </label>
              {/* image previews */}
              <div className="mt-3 flex gap-4">
                {imageFiles.map((file, index) => (
                  <div
                    key={index}
                    className="relative w-14  h-14 p-3  bg-[#F6F6F6] flex items-center justify-center rounded-md"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-[-13px] right-[-13px] bg-[#f6f6f6] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs"
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                ))}
              </div>
              {errors.images && (
                <p className="text-red-500 text-sm">
                  {String(errors.images.message)}
                </p>
              )}
            </div>

            {/* color selection input */}
            <ColorSelectorField
              handleColorChange={(color) => handleColorChange(color)}
              errors={errors}
              label="Colors"
              name="colors"
              selectedColors={selectedColors}
            />

            {/* size selection check */}
            <SizeSelectorField
              errors={errors}
              handleSizeChange={(size) => handleSizeChange(size)}
              label="Sizes"
              name="sizes"
              selectedSizes={selectedSizes}
            />
          </div>
        </div>

        {/* submit button and error display */}
        <div>
          {createMutation.isError && (
            <p className="text-red-500">{createMutation.error.message}</p>
          )}
          <button type="submit" className="btn !w-48">
            {createMutation.isPending ? (
              <BeatLoader color="#3498db" />
            ) : (
              btnText
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
