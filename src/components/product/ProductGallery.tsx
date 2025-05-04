"use client";

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ProductGalleryProps {
  images: string[];
}
export default function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const nextImage = () => {
    if (currentImage < images.length - 1) setCurrentImage(currentImage + 1);
  };

  const prevImage = () => {
    if (currentImage > 0) setCurrentImage(currentImage - 1);
  };

  return (
    <div className="bg-[#f6f6f6] rounded-md py-4 px-2">
      <div
        className="flex flex-col items-center justify-center gap-4 relative"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        <div className="relative w-full max-w-[500px] aspect-square">
          <img
            src={images[currentImage]}
            alt="Product"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Arrows */}
          {showArrows && currentImage > 0 && (
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full"
            >
              <IoIosArrowBack className="text-2xl md:text-3xl" />
            </button>
          )}
          {showArrows && currentImage < images.length - 1 && (
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full"
            >
              <IoIosArrowForward className="text-2xl md:text-3xl" />
            </button>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 md:h-3 md:w-3 rounded-full transition ${
                index === currentImage ? "bg-black scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
