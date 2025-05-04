"use client";

import React, { useEffect } from "react";
import ShippingForm from "./ShippingForm";
import OrderSummaryCard from "./OrderSummary";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { useCreateOrder } from "@/services/orders/ordersQueries";
import { useUserStore } from "@/store/UserStore";
import { useCartStore } from "@/store/CartStore";
import {
  ShippingFormData,
  shippingSchema,
} from "@/lib/validators/authValidator";
import EmptyState from "../ui/states/EmptyState";
import { useRouter } from "next/navigation";

export default function CheckOut() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });
  const createOrderMutation = useCreateOrder();
  const { user } = useUserStore();
  const { items, clearCart } = useCartStore();

  // Calculate total
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;
  // ✅ Prefill form when user data is available
  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        address: user.shippingAddress?.address,
        city: user.shippingAddress?.city,
        state: user.shippingAddress?.state,
        zipCode: user.shippingAddress?.zipCode,
        country: user.shippingAddress?.country,
      });
    }
  }, [user, reset]);
  // function to handle submit form click.
  function submitForm(data: ShippingFormData) {
    const orderData = {
      shippingDetails: data,
      items: items,
      summary: {
        subtotal,
        tax,
        total,
      },
    };
    toast.success("sent to backend successfully!");
    console.log("Submitting Order:", orderData);
    createOrderMutation.mutate(orderData, {
      onSuccess: () => {
        toast.success("Order placed successfully!");
        clearCart();
      },
    });
    console.log("here");
  }
  return (
    <div>
      {items.length > 0 ? (
        <form
          onSubmit={handleSubmit(submitForm)}
          className=" flex flex-col lg:flex-row  py-14 justify-between lg:items-center"
        >
          {/* Left: Shipping form */}
          <div className="lg:w-[600px]">
            <h3 className="sub_heading_2 h-12 px-10">Shipping Address</h3>
            <hr />
            <div className=" py-16 px-10">
              <ShippingForm register={register} errors={errors} />
            </div>
          </div>
          {/* Right: Summary with submit button */}
          <div className="lg:w-[400px] px-10">
            <OrderSummaryCard isLoading={createOrderMutation.isPending} />
          </div>
        </form>
      ) : (
        <div className=" w-full">
          <EmptyState
            message="There is no item in cart"
            subtitle="Click on start shopping to add items to cart"
            btnText="Start Shopping"
            action={() => router.push("/products/search")}
          />
        </div>
      )}
    </div>
  );
}
