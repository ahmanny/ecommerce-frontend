"use client";
import { IProduct } from "@/types/product.types";
import Link from "next/link";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}-${product._id}`}
      className="block w-full"
    >
      <div className="flex flex-col h-full rounded-2xl shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image Section */}
        <div className="bg-[#F6F6F6] flex justify-center items-center aspect-[4/3] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="object-contain w-full h-full p-4"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col justify-between flex-1">
          {/* Title */}
          <h2 className="text-base sm:text-lg md:text-xl font-medium text-[#0E1422] line-clamp-2">
            {product.title}
          </h2>

          {/* Bottom Row: Stock + Price */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs sm:text-sm uppercase px-3 py-1 bg-gray-100 border rounded-full text-gray-700 truncate">
              {product.stock_status}
            </span>
            <span className="text-sm sm:text-base md:text-lg font-bold text-[#5C5F6A]">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
