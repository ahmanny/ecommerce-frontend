import { useMutation } from "@tanstack/react-query";
import { fogottenPassword, loginAdmin, loginUser, logoutUser, registerUser, resetPassword } from "./authServices";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useUserStore } from "@/store/UserStore";
import { useCartStore } from "@/store/CartStore";
import { useFetchUserWishlist } from "../wishlist/wishlistQueries";
import { useFetchUserCart, useSyncCartFromBackend } from "../cart/cartQueries";
import { logout } from "@/lib/utils/logout.utils";
import { useFetchCategories } from "../categories/categoriesQueries";


// user sign up
export const useSignupUser = () => {
    const userStore = useUserStore.getState();
    const { items } = useCartStore()
    const { refetch: fetchCategories } = useFetchCategories()
    const syncCartMutation = useSyncCartFromBackend();

    return useMutation({
        mutationFn: registerUser,
        onSuccess: async (data) => {
            // save the access token 
            setCookie(null, "access-token", data.tokens.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
                secure: process.env.NODE_ENV === "production",
            });
            setCookie(null, "refresh-token", data.tokens.refresh_token, { path: "/", maxAge: 60 * 60 * 24 * 7 });
            setCookie(null, "user-role", data.user.role, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            userStore.login(data.user, true)
            if (items.length !== 0) {
                await syncCartMutation.mutateAsync({ items });
            }
            fetchCategories()
        }
    })
}

// user Login 
export const useLoginUser = () => {
    const { items } = useCartStore(); // Zustand — safe
    const userStore = useUserStore(); // Zustand — safe

    const { refetch: fetchUserCart } = useFetchUserCart();
    const { refetch: fetchUserWishlist } = useFetchUserWishlist();
    const { refetch: fetchCategories } = useFetchCategories();
    const syncCartMutation = useSyncCartFromBackend();

    return useMutation({
        mutationFn: loginUser,
        onSuccess: async (data) => {
            setCookie(null, "access-token", data.tokens.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
                secure: process.env.NODE_ENV === "production",
            });

            setCookie(null, "refresh-token", data.tokens.refresh_token, {
                path: "/",
                maxAge: 60 * 60 * 24 * 7,
            });

            setCookie(null, "user-role", data.user.role, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });

            userStore.login(data.user, true);

            if (items.length !== 0) {
                await syncCartMutation.mutateAsync({ items });
            }

            fetchCategories();
            fetchUserCart();
            fetchUserWishlist();
        },
    });
};



// user Login 
export const useLoginAdmin = () => {
    const userStore = useUserStore.getState();
    const { refetch: fetchCategories } = useFetchCategories()

    return useMutation({
        mutationFn: loginAdmin,
        onSuccess: (data) => {
            // save the access token 
            setCookie(null, "access-token", data.tokens.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
                secure: process.env.NODE_ENV === "production",
            });
            setCookie(null, "refresh-token", data.tokens.refresh_token, { path: "/", maxAge: 60 * 60 * 24 * 7 });
            setCookie(null, "user-role", data.user.role, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            userStore.login(data.user, true)
            fetchCategories()
        }
    })
}


// forgotten password 
export const useFogottenPassword = () => {
    return useMutation({
        mutationFn: fogottenPassword,
        onSuccess: (data) => {
            console.log(data);
        }
    })
}

// reset password hook
export const useResetPassword = () => {
    return useMutation({
        mutationFn: resetPassword,
        onSuccess: (data) => {
            console.log(data);
        }
    })
}



// log out user
export const useLogoutUser = () => {
    return useMutation({
        mutationFn: async () => {
            const cookies = parseCookies();
            const refresh_token = cookies["refresh-token"];

            if (!refresh_token) {
                throw new Error("Refresh token not found");
            }

            return await logoutUser({ refresh_token });
        },
        onSuccess: async () => {
            await logout()
        }
    })
}

// log out admin
export const useLogoutAdmin = () => {
    return useMutation({
        mutationFn: async () => {
            const cookies = parseCookies();
            const refresh_token = cookies["refresh-token"];

            if (!refresh_token) {
                throw new Error("Refresh token not found");
            }

            return await logoutUser({ refresh_token });
        },
        onSuccess: async () => {
            await logout()
        }
    })
}