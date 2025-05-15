"use client";
import { useCartStore } from "@/store/CartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

interface CheckoutButtonProps {
  classes: string;
}
export default function CheckoutButton({ classes }: CheckoutButtonProps) {
  const [isLoading, setIsloading] = useState(false);
  const { items } = useCartStore();
  const router = useRouter();
  const submitCart = () => {
    setIsloading(true);
    if (items.length > 0) {
      router.push("/check-out");
      setIsloading(false);
    } else {
      toast.error("Add items to your cart before proceeding to checkout");
      setIsloading(false);
    }
  };
  return (
    <button
      type="button"
      onClick={submitCart}
      className={`w-full py-2 mt-8 rounded ${classes}`}
    >
      {isLoading ? <BeatLoader color="#3498db" /> : "Checkout"}
    </button>
  );
}
