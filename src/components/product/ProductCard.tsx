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
      <div className="flex flex-col h-full p-4 justify-between rounded-lg w-full bg-background-b1">
        {/* Image wrapper that grows to fill space */}
        <div className=" w-full aspect-square bg-background-b2 rounded-lg flex justify-center items-center overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text section */}
        <div className="mt-4">
          <h1 className="text-sm md:text-lg lg:text-xl capitalize text-foreground-f1 line-clamp-2">
            {product.title}
          </h1>
          <div className="lg:flex items-center justify-between mt-2">
            <div className=" capitalize md:uppercase border rounded-full py-1 text-xs md:text-sm">
              {product.stock_status}
            </div>
            <h1 className="text-sm md:text-lg font-bold text-foreground-f5">
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
