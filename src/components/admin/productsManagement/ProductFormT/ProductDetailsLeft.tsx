"use client";

import { CreatableMultiSelect } from "@/components/ui/form/CreatableMultiSelect";
import InputField from "@/components/ui/form/InputField";
import NumberInput from "@/components/ui/form/NumberInput";
import TextAreaFileld from "@/components/ui/form/TextAreaFileld";
import { HIGHLIGHT_OPTIONS } from "@/lib/contants/regular.constants";

export default function ProductDetailsLeft({
  register,
  errors,
  control,
  categories,
}: any) {
  return (
    <div className="w-full flex flex-col gap-5">
      <InputField
        label="Title"
        name="title"
        register={register}
        errors={errors}
      />
      <NumberInput
        label="Price (USD)"
        name="price"
        register={register}
        errors={errors}
      />
      <CreatableMultiSelect
        label="Category"
        name="categories"
        control={control}
        options={categories}
        errors={errors}
        placeholder="Select or type categories"
      />
      <InputField
        label="Slug"
        name="slug"
        register={register}
        errors={errors}
        isReadOnly
      />
      <InputField
        label="SKU"
        name="sku"
        register={register}
        errors={errors}
        isReadOnly
      />
      <CreatableMultiSelect
        label="Highlights"
        name="highlights"
        control={control}
        options={HIGHLIGHT_OPTIONS}
        errors={errors}
        placeholder="Select or type highlights"
      />
      <TextAreaFileld
        label="Description"
        name="description"
        register={register}
        errors={errors}
      />
    </div>
  );
}
