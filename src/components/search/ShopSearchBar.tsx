"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFilterStore } from "@/store/FilterStore";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import SearchInput from "./SearchInput";

export default function ShopSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setSearchQuery } = useFilterStore();
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const initialQuery = searchParams.get("q") || "";

  const handleSearchSubmit = (q: string) => {
    setSearchQuery(q);
    router.push(q ? `/products/search?q=${q}` : `/products/search`);
    setShowMobileSearch(false);
  };

  const handleQueryChange = (q: string) => {
    setSearchQuery(q);
  };

  return (
    <div className="relative flex items-center">
      {/* Desktop Search */}
      <div className="hidden sm:block w-[150px] md:w-[290px] lg:w-[350px] xl:w-[400px]">
        <SearchInput
          initialQuery={initialQuery}
          onSubmit={handleSearchSubmit}
          onQueryChange={handleQueryChange}
        />
      </div>

      {/* Mobile Icon */}
      <div className="block sm:hidden">
        <button
          onClick={() => setShowMobileSearch(true)}
          className="text-gray-600"
        >
          <FiSearch size={24} />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed top-0 left-0 w-full p-4 bg-white z-50 transform transition-all duration-300 ease-in-out ${
          showMobileSearch
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center">
          <div className="flex-grow">
            <SearchInput
              initialQuery={initialQuery}
              onSubmit={handleSearchSubmit}
              onQueryChange={handleQueryChange}
              autoFocus
            />
          </div>
          <button
            onClick={() => setShowMobileSearch(false)}
            className="ml-2 text-gray-600"
          >
            <IoClose size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
