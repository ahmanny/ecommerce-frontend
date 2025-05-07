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
      <div className="mt-4">
        {/* Title */}
        <SkeletonText noOfLines={1} wordSpacing={"2"} />

        {/* Stock + Price */}
        <div className="lg:flex items-center justify-between mt-4 space-y-2 lg:space-y-0">
          <Skeleton height="15px" width="80px" borderRadius="full" />
          <Skeleton height="10px" width="60px" />
        </div>
      </div>
    </div>
  );
}
