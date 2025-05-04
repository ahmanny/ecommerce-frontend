"use client";
import FilterDrawer from "@/components/ui/drawers/FilterDrawer";
import { useFilterStore } from "@/store/FilterStore";
import { IoMdClose } from "react-icons/io";

export default function FiltersApplied() {
  const {
    selectedCategories,
    selectedGenders,
    selectedMaterials,
    selectedColors,
    selectedSizes,
    priceRange,
    addRemoveCategory,
    addRemoveGender,
    addRemoveMaterial,
    addRemoveColor,
    addRemoveSize,
    setPriceRange,
  } = useFilterStore();

  const filters = [
    ...selectedCategories.map((c) => ({ type: "category", label: c })),
    ...selectedMaterials.map((m) => ({ type: "material", label: m })),
    ...selectedGenders.map((g) => ({ type: "gender", label: g })),
    ...selectedColors.map((c) => ({ type: "color", label: c })),
    ...selectedSizes.map((s) => ({ type: "size", label: s })),
  ];

  const clearFilters = () => {
    selectedCategories.forEach((c) => addRemoveCategory(c));
    selectedMaterials.forEach((m) => addRemoveMaterial(m));
    selectedGenders.forEach((g) => addRemoveGender(g));
    selectedColors.forEach((c) => addRemoveColor(c));
    selectedSizes.forEach((s) => addRemoveSize(s));
    setPriceRange([0, 500]); // Reset price range
  };

  return (
    <div className="flex flex-col gap-3">
      <div className=" flex gap-4 items-center">
        <div className="flex md:hidden">
          <FilterDrawer />
        </div>
        {filters.length === 0 ? (
          <h3 className="text-lg font-bold">No filters applied yet...</h3>
        ) : (
          <h3 className="sub_heading_2">Applied Filters:</h3>
        )}
      </div>
      <div className="flex flex-wrap w-full max-w-full gap-3 overflow-hidden">
        {filters.map((filter, index) => (
          <span
            key={index}
            className="flex items-center border border-[#E6E7E8] px-3 py-2 rounded-full text-base capitalize"
          >
            {/* Display formatted text */}
            {filter.type === "category" && `${filter.label}`}
            {filter.type === "material" && `${filter.label}`}
            {filter.type === "gender" && `${filter.label}`}
            {filter.type === "color" && `${filter.label}`}
            {filter.type === "size" && `Size: ${filter.label}`}
            {/* Format in UI */}
            <button
              onClick={() => {
                if (filter.type === "category") addRemoveCategory(filter.label);
                if (filter.type === "material") addRemoveMaterial(filter.label);
                if (filter.type === "gender") addRemoveGender(filter.label);
                if (filter.type === "color") addRemoveColor(filter.label);
                if (filter.type === "size") addRemoveSize(filter.label);
              }}
              className="ml-2 text-gray-600 hover:text-red-600"
            >
              <IoMdClose className="text-lg" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
