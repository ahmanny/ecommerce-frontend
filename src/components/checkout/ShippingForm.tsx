"use client";

"use client";

import InputField from "../ui/form/InputField";

interface ShippingFormProps {
  register: any;
  errors: any;
}
export default function ShippingForm({ register, errors }: ShippingFormProps) {
  return (
    <div>
      <div className=" flex flex-col gap-[15px]">
        <InputField
          label="Street Address"
          name="address"
          register={register}
          errors={errors}
        />
        {/* city and state input */}
        <div className="flex gap-8 w-full">
          <div className=" flex-col flex w-1/2">
            <InputField
              label="City"
              name="city"
              register={register}
              errors={errors}
            />
          </div>
          <div className=" flex-col flex w-1/2">
            <InputField
              label="State"
              name="state"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        {/* zip code and country input  */}
        <div className="flex gap-8 w-full ">
          <div className=" flex-col flex w-1/2">
            <InputField
              label="Zip Code"
              name="zipCode"
              register={register}
              errors={errors}
            />
          </div>
          <div className=" flex-col flex w-1/2 ">
            <InputField
              label="Country"
              name="country"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        {/* email and full name input */}
        <div className="flex gap-8 w-full mt-8 ">
          <div className=" flex-col flex w-1/2">
            <InputField
              label="Email"
              name="email"
              register={register}
              errors={errors}
            />
          </div>
          <div className=" flex-col flex w-1/2 ">
            <InputField
              label="Full Name"
              name="name"
              register={register}
              errors={errors}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
