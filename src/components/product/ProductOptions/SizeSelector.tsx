interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  setSelectedsize: (size: string) => void;
  errors?: any;
}

export default function SizeSelector({
  sizes,
  selectedSize,
  setSelectedsize,
  errors,
}: SizeSelectorProps) {
  return (
    <div>
      {errors && (
        <label className="block text-base uppercase font-semibold text-[#5C5F6A] mb-3">
          select size
        </label>
      )}
      <div className=" flex space-x-2">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            className={` h-6 w-6 md:h-12 md:w-12 border text-sm rounded-md flex items-center  justify-center ${
              selectedSize === size ? "border-black" : ""
            }`}
            onClick={() => setSelectedsize(size)}
          >
            {size}
          </button>
        ))}
      </div>
      {errors?.size?.message && (
        <p className="text-red-500 text-sm ">{String(errors.size.message)}</p>
      )}
    </div>
  );
}
