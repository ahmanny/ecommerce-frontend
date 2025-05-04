"use client";

import { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { FiSearch } from "react-icons/fi";

interface SearchInputProps {
  initialQuery?: string;
  onSubmit: (query: string) => void;
  onQueryChange?: (query: string) => void; // for live filtering
  className?: string;
  autoFocus?: boolean;
}

export default function SearchInput({
  initialQuery = "",
  onSubmit,
  onQueryChange,
  className = "",
  autoFocus = false,
}: SearchInputProps) {
  const [query, setQuery] = useState(initialQuery);

  const debouncedUpdate = useMemo(
    () =>
      debounce((q: string) => {
        onQueryChange?.(q);
      }, 300),
    [onQueryChange]
  );

  useEffect(() => {
    const trimmed = query.trim();
    debouncedUpdate(trimmed);
    return () => debouncedUpdate.cancel();
  }, [query, debouncedUpdate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    onQueryChange?.(trimmed); // optional
    onSubmit(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <FiSearch
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-2xl cursor-pointer"
        onClick={() => onSubmit(query.trim())}
      />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products"
        autoFocus={autoFocus}
        className="border border-neutral-300 p-2 pl-10 w-full rounded-md outline-none focus:border-blue-500"
      />
    </form>
  );
}
