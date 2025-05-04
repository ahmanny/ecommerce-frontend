"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IProduct } from "@/types/product.types";
import ProductSkeleton from "@/components/ui/loaders/skeletons/ProductSkeleton";
import ProductCard from "../ProductCard";
import EmptyState from "@/components/ui/states/EmptyState";

interface ProductCarouselProps {
  productsToBeDisplayed: IProduct[];
  isLoading: boolean;
  emptyMessage: string;
}

export default function ProductCarousel({
  productsToBeDisplayed,
  isLoading,
  emptyMessage,
}: ProductCarouselProps) {
  return (
    <div className="w-full py-10">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={2}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <SwiperSlide key={i}>
                <ProductSkeleton />
              </SwiperSlide>
            ))
          : productsToBeDisplayed.map((product) => (
              <SwiperSlide key={product._id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
        .
      </Swiper>
      {!isLoading && productsToBeDisplayed.length === 0 && (
        <EmptyState message={emptyMessage} />
      )}
    </div>
  );
}
