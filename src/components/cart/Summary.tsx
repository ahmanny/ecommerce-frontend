"use client";
import { useCartStore } from "@/store/CartStore";
import { BeatLoader } from "react-spinners";
import CheckoutButton from "../ui/buttons/CheckoutButton";

interface SummaryProps {
  submitBtnText?: string;
  isLoading?: boolean;
}
export default function Summary({ submitBtnText, isLoading }: SummaryProps) {
  const { items } = useCartStore();
  // Calculate Prices
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;
  return (
    <div>
      <div className="flex justify-between mb-5">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-5">
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between mb-5">
        <span>Tax:</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <hr className="my-6" />
      <div className="flex justify-between text-lg font-semibold">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      {submitBtnText ? (
        <button
          type="submit"
          className="primary-p1 text-custom-50 h-[40px] w-full rounded"
        >
          {isLoading ? <BeatLoader color="#3498db" /> : submitBtnText}
        </button>
      ) : (
        <CheckoutButton classes="primary-p1 text-custom-50" />
      )}
    </div>
  );
}
