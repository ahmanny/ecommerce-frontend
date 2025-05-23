"use client";

import InputField from "@/components/ui/form/InputField";
import NumberInput from "@/components/ui/form/NumberInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const settingsFormSchema = z.object({
  siteName: z.string().min(3, "site name must be more than 3 characters"),
  supportEmail: z.string().email("invalid Email"),
  monthlyGoal: z.coerce.number().min(100, "monthly goal must be more than 100"),
});

export default function SettingsComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(settingsFormSchema) });

  function submitChanges(data: any) {
    console.log(data);
    reset();
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitChanges)}
        className=" flex flex-col gap-[45px] w-[320px] text-foreground-f5"
      >
        <div className="flex flex-col gap-[18px]">
          <InputField
            name="siteName"
            label="Site Name"
            errors={errors}
            register={register}
          />
          <InputField
            name="supportEmail"
            label="Support Email"
            errors={errors}
            register={register}
          />
          <NumberInput
            name="monthlyGoal"
            label="Monthly Order Goal"
            errors={errors}
            register={register}
          />
        </div>
        <button type="submit" className="btn !w-1/2">
          Save Changes
        </button>
      </form>
    </div>
  );
}
