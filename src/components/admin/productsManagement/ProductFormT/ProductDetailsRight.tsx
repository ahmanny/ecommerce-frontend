"use client";
import ColorSelectorField from "@/components/ui/form/ColorSelectorField";
import NumberInput from "@/components/ui/form/NumberInput";
import SelectField from "@/components/ui/form/SelectField";
import SizeSelectorField from "@/components/ui/form/SizeSelectorField";
import {
  genders,
  materials,
  stockStatus,
} from "@/lib/contants/regular.constants";

interface ProductDetailsRightProps {
  register: any;
  errors: any;
  selectedColors: string[];
  selectedSizes: string[];
  handleColorChange: (value: string) => void;
  handleSizeChange: (value: string) => void;
  children: React.ReactNode;
}

export default function ProductDetailsRight({
  register,
  errors,
  selectedColors,
  selectedSizes,
  handleColorChange,
  handleSizeChange,
  children,
}: ProductDetailsRightProps) {
  return (
    <div className="w-full flex flex-col gap-5">
      <SelectField
        label="Material"
        name="material"
        options={materials}
        register={register}
        errors={errors}
      />
      <SelectField
        label="Gender"
        name="gender"
        options={genders}
        register={register}
        errors={errors}
      />
      <SelectField
        label="Stock status"
        name="stock_status"
        options={stockStatus}
        register={register}
        errors={errors}
      />
      <NumberInput
        label="Available quantity"
        name="quantity_available"
        register={register}
        errors={errors}
      />
      <div>{children}</div>
      <ColorSelectorField
        label="Colors"
        name="colors"
        selectedColors={selectedColors}
        handleColorChange={handleColorChange}
        errors={errors}
      />
      <SizeSelectorField
        label="Sizes"
        name="sizes"
        selectedSizes={selectedSizes}
        handleSizeChange={handleSizeChange}
        errors={errors}
      />
    </div>
  );
}
