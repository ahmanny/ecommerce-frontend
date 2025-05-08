"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAddToCart } from "@/services/cart/cartQueries";
import { useCartStore } from "@/store/CartStore";
import { useUserStore } from "@/store/UserStore";
import ColorPicker from "../../product/ProductOptions/ColorPicker";
import SizeSelector from "../../product/ProductOptions/SizeSelector";
import QuantitySelector from "../../product/ProductOptions/QuantitySelector";
import { IWishlistItem } from "@/types/wishlist.types";

type wishlistFormData = {
  color: string;
  size: string;
  quantity: number;
};

const steps = ["color", "size", "quantity"];

interface Props {
  item: IWishlistItem;
}

export default function WishlistAddToCartForm({ item }: Props) {
  const { user } = useUserStore();
  const addToCartStore = useCartStore((state) => state.addToCart);
  const addCartItem = useAddToCart();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<wishlistFormData>({
    defaultValues: {
      color: "",
      size: "",
      quantity: 1,
    },
  });

  const quantity = watch("quantity");
  const selectedColor = watch("color");
  const selectedSize = watch("size");

  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: wishlistFormData) => {
    if (step === 1 && !data.color) {
      toast.error("Please select a color");
      return;
    }

    if (step === 2 && !data.size) {
      toast.error("Please select a size");
      return;
    }

    if (step === 3 && (!data.quantity || data.quantity <= 0)) {
      toast.error("Please enter a valid quantity");
      return;
    }

    if (step < steps.length) {
      setStep(step + 1);
    } else {
      setIsLoading(true);
      const variantId = `${item._id}-${data.color}-${data.size}`;
      const cartItem = {
        uniqueId: variantId,
        productId: item.productId,
        title: item.title,
        price: item.price,
        quantity: data.quantity,
        image: item.image,
        color: data.color,
        size: data.size,
      };

      if (user) {
        addCartItem.mutate(cartItem, {
          onSuccess: () => {
            addToCartStore(cartItem);
            toast.success(`${cartItem.title} added to cart!`);
            reset();
            setStep(0);
            setIsLoading(false);
          },
        });
      } else {
        addToCartStore(cartItem);
        toast.success(`${cartItem.title} added to cart!`);
        reset();
        setStep(0);
        setIsLoading(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap gap-2 items-center"
    >
      {step === 0 && (
        <button
          type="button"
          onClick={() => setStep(step + 1)}
          className="border border-black py-[8px] px-2 md:px-[18px] capitalize rounded-md"
        >
          Add to cart
        </button>
      )}

      {step === 1 && (
        <ColorPicker
          classSize="h-5 w-5 md:h-10 md:w-10"
          colors={item.colors}
          selectedColor={selectedColor}
          setSelectedColor={(color) => setValue("color", color)}
        />
      )}

      {step === 2 && (
        <SizeSelector
          classSize="h-6 w-6 md:h-12 md:w-12"
          sizes={item.sizes}
          selectedSize={selectedSize}
          setSelectedsize={(size) => setValue("size", size)}
        />
      )}

      {step === 3 && (
        <QuantitySelector
          quantity={quantity}
          setQuantity={(val) => setValue("quantity", val)}
        />
      )}

      <div className="flex items-center gap-2">
        {step > 0 && step < steps.length + 1 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="border border-black py-3 px-4 capitalize rounded-lg"
          >
            <IoIosArrowBack />
          </button>
        )}

        {step > 0 && (
          <button
            type="submit"
            className="border border-black py-3 px-4 capitalize rounded-lg"
          >
            {step < steps.length + 1 ? (
              <IoIosArrowForward />
            ) : isLoading ? (
              <BeatLoader color="#1e1616" />
            ) : (
              "Add to cart"
            )}
          </button>
        )}
      </div>
    </form>
  );
}
