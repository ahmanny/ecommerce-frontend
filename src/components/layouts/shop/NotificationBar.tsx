"use client";

import Link from "next/link";

export default function NotificationBar() {
  return (
    <div className=" bg-custom-900 dark:bg-custom-50 w-full h-[40px] flex justify-center items-center text-custom-0 dark:text-custom-900  gap-1 mb-4">
      <p className="body-p1">Get 25% OFF on your first order</p>{" "}
      <Link href="/search" className="body-p2">
        Order Now
      </Link>
    </div>
  );
}
