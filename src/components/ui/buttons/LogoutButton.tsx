"use client";
import { useLogoutUser } from "@/services/auth/authQueries";
import { TbLogout } from "react-icons/tb";
import SpinnerOne from "../loaders/spinners/SpinnerOne";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface LogoutButtonProps {
  iconOnly?: boolean;
}
export default function LogoutButton({ iconOnly }: LogoutButtonProps) {
  const logout = useLogoutUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleLogout = () => {
    setLoading(true);

    // Simulate the logout process and hide the loader after 4 seconds
    setTimeout(() => {
      setLoading(false);
      router.push("/admin/login");
    }, 4000);
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="capitalize text-[#5C5F6A] flex  mx-auto px-5 py-2 gap-3 hover:bg-[#F6F6F6] items-center rounded-md "
      >
        {loading ? (
          <SpinnerOne />
        ) : (
          <>
            <TbLogout className="text-3xl" />
            {!iconOnly && <span className="text-[20px]">Logout</span>}
          </>
        )}
      </button>
    </div>
  );
}
