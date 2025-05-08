"use client";
import { Skeleton, SkeletonText } from "@chakra-ui/react";

export default function ProductSkeleton() {
  return (
    <div className="flex flex-col h-full p-4 justify-between rounded-lg w-full bg-white">
      {/* Image Skeleton */}
      <div className="w-full aspect-square bg-[#F6F6F6] rounded-lg flex justify-center items-center overflow-hidden">
        <Skeleton height="100%" width="100%" />
      </div>

      {/* Text Skeletons */}
      <div className="mt-2">
        {/* Title */}
        <Skeleton height="10px" width="60px" />

        {/* Stock + Price */}
        <div className="lg:flex items-center justify-between mt-2 space-y-2 lg:space-y-0">
          <Skeleton height="15px" width="50px" borderRadius="full" />
          <Skeleton height="10px" width="40px" />
        </div>
      </div>
    </div>
  );
}
