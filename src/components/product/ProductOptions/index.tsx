"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import SizeSelector from "./SizeSelector";
import ColorPicker from "./ColorPicker";
import QuantitySelector from "./QuantitySelector";
import {
  UserProductFormData,
  userProductFormSchema,
} from "@/lib/validators/productValidator";
import { useAddToCart } from "@/services/cart/cartQueries";
import { useCartStore } from "@/store/CartStore";
import { useUserStore } from "@/store/UserStore";
import AddToWishListButton from "@/components/ui/buttons/AddToWishlistButton";

interface ProductOptionsProps {
  productId: string;
  title: string;
  price: number;
  image: string;
  available_colors: string[];
  available_sizes: string[];
}

export default function ProductOptions({
  image,
  price,
  productId,
  title,
  available_colors,
  available_sizes,
}: ProductOptionsProps) {
  // store and mutations
  const addCartItem = useAddToCart();
  const { addToCart } = useCartStore(); // Zustand store function
  const { isLoggedIn } = useUserStore();

  //   use form hook
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userProductFormSchema),
    defaultValues: {
      size: "",
      color: "",
      quantity: 1,
    },
  });
  //   use state hook and watch
  const [isLoading, setIsLoading] = useState(false);
  const quantity = watch("quantity");
  const selectedColor = watch("color");
  const selectedSizes = watch("size");

  //   submit function
  const onSubmit = (data: UserProductFormData) => {
    setIsLoading(true);
    const variantId = `${productId}-${data.color}-${data.size}`;
    const cartItem = {
      uniqueId: variantId,
      productId: productId,
      title: title,
      price: price,
      quantity: data.quantity,
      image: image,
      color: data.color,
      size: data.size,
    };

    if (isLoggedIn) {
      addCartItem.mutate(cartItem, {
        onSuccess: () => {
          reset(); // Reset form values after adding to cart
          toast.success(`${cartItem.title} added to cart!`);
          addToCart(cartItem);
          setIsLoading(false);
        },
      });
    } else {
      addToCart(cartItem); // Add to Zustand store
      reset(); // Reset form values after adding to cart
      toast.success(`${cartItem.title}  to carts!`);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 md:gap-12"
      >
        {/* available colors display */}
        <div>
          <ColorPicker
            errors={errors}
            colors={available_colors}
            selectedColor={selectedColor}
            setSelectedColor={(color) => setValue("color", color)}
          />
        </div>

        {/* available sizes */}
        <div>
          <SizeSelector
            sizes={available_sizes}
            selectedSize={selectedSizes}
            setSelectedsize={(size) => setValue("size", size)}
            errors={errors}
          />
        </div>

        {/* choose quantity */}
        <div>
          <QuantitySelector
            quantity={quantity}
            setQuantity={(value) => setValue("quantity", value)}
            errors={errors}
          />
        </div>
        <div className="flex gap-5 justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="btn disabled:opacity-50"
          >
            {isLoading ? <BeatLoader color="#3498db" /> : " Add to cart"}
          </button>
          {isLoggedIn && <AddToWishListButton productId={productId} />}
        </div>
      </form>
    </div>
  );
}
