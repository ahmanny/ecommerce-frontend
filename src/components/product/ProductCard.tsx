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
      className="block h-full "
    >
      <div className="flex flex-col h-full p-4 justify-between rounded-lg md:w-fit bg-white">
        {/* Image wrapper that grows to fill space */}
        <div className="flex-grow bg-[#F6F6F6] rounded-lg flex justify-center items-center overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="object-contain h-full"
          />
        </div>

        {/* Text section */}
        <div className="mt-4">
          <h1 className="text-sm md:text-lg lg:text-xl capitalize text-[#0E1422] line-clamp-2">
            {product.title}
          </h1>
          <div className="lg:flex items-center justify-between mt-2">
            <div className=" capitalize md:uppercase border rounded-full px-3 py-1 text-xs md:text-sm truncate">
              {product.stock_status}
            </div>
            <h1 className="text-sm md:text-lg font-bold text-[#5C5F6A]">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
