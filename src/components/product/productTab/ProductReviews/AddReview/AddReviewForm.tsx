"use client";

import { Button, Dialog } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Rating } from "../RatingStars";
import { BeatLoader } from "react-spinners";
import {
  reviewFormData,
  reviewFormSchema,
} from "@/lib/validators/reviewValidator";
import { useUiStore } from "@/store/UiStore";
import { useAddReview } from "@/services/reviews/reviewsQueries";
import { useUserStore } from "@/store/UserStore";
import InputField from "@/components/ui/form/InputField";
import TextAreaFileld from "@/components/ui/form/TextAreaFileld";

interface AddReviewFormProps {
  productId: string;
}

export default function AddReviewForm({ productId }: AddReviewFormProps) {
  const addReviewMuation = useAddReview();
  const { user, isLoggedIn } = useUserStore();
  const { closeReviewModal } = useUiStore();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<reviewFormData>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      name: "",
      email: "",
      rating: 2,
    },
  });

  // ✅ Prefill form when user data is available
  useEffect(() => {
    if (user && isLoggedIn) {
      reset({
        email: user.email,
        name: user.name,
      });
    }
  }, [user, isLoggedIn, reset]);

  function submitChanges(data: reviewFormData) {
    const reviewData = {
      product: productId,
      rating: data.rating,
      comment: data.comment,
    };
    toast.success("sumitted review");
    addReviewMuation.mutate(reviewData, {
      onSuccess: () => {
        toast.success("Order placed successfully!");
        closeReviewModal();
      },
    });
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitChanges)}
        className=" flex flex-col pt-8 gap-[40px] w-full text-[#474B57]"
      >
        <Dialog.Body>
          <div className="flex flex-col gap-[18px]">
            {/* email input */}
            <InputField
              name="email"
              label="Email"
              register={register}
              errors={errors}
              isReadOnly={user ? true : false}
            />
            {/* fullname input */}
            <InputField
              name="name"
              label="Full name"
              register={register}
              errors={errors}
              isReadOnly={user ? true : false}
            />
            {/* Erite review */}
            <TextAreaFileld
              name="comment"
              label="Review"
              register={register}
              errors={errors}
            />
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <div className=" w-full flex flex-col">
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <Rating
                  defaultValue={2}
                  size="lg"
                  count={5}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors?.rating?.message && (
              <p className="text-red-500 text-sm">
                {String(errors.rating?.message)}
              </p>
            )}
            <button type="submit" className="btn mt-5">
              {addReviewMuation.isPending ? (
                <BeatLoader color="#3498db" />
              ) : (
                "Submit Your Review"
              )}
            </button>
            <Dialog.ActionTrigger asChild>
              <Button className="!text-center !underline !text-xl !py-1">
                Cancel
              </Button>
            </Dialog.ActionTrigger>
            {/* backend errors */}
            {addReviewMuation.isError && (
              <p className=" text-red-500">
                {String(addReviewMuation.error?.message)}
              </p>
            )}
          </div>
        </Dialog.Footer>
      </form>
    </div>
  );
}
