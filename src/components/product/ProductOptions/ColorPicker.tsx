"use client";
// This component is a color selector that allows users to choose a color from a list of colors.

interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  errors?: any;
  classSize?: string;
}

export default function ColorPicker({
  classSize = "h-10 w-10",
  colors,
  selectedColor,
  setSelectedColor,
  errors,
}: ColorPickerProps) {
  return (
    <div>
      {errors && (
        <label className="block text-base uppercase font-semibold text-[#5C5F6A]">
          Available Colors
        </label>
      )}
      <div className=" flex space-x-2">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            className={`p-1 rounded-full ${
              selectedColor === color
                ? "border-black border-2"
                : "border-2 border-transparent"
            }`}
            onClick={() => setSelectedColor(color)}
          >
            <span
              className={`${classSize} rounded-full  block`}
              style={{ backgroundColor: color }}
            ></span>
          </button>
        ))}
      </div>
      {errors?.color?.message && (
        <p className="text-red-500 text-sm ">{String(errors.color.message)}</p>
      )}
    </div>
  );
}
