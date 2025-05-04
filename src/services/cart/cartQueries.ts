import { useCartStore } from "@/store/CartStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCart, deleteCart, getUserCart, syncCartFromBackend } from "./cartServices";
import { useUserStore } from "@/store/UserStore";

// sync backend cart with cart in store
export const useSyncCartFromBackend = () => {
    const queryClient = useQueryClient();
    const cartStore = useCartStore.getState();

    return useMutation({
        mutationFn: syncCartFromBackend,
        // on success save user to zustand and save token to cookie using nookies
        onSuccess: (data) => {
            cartStore.clearCart();
            queryClient.invalidateQueries({ queryKey: ["user-cart"] })
        }
    })
}

// add cart
export const useAddToCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addToCart,
        // on success save user to zustand and save token to cookie using nookies
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["user-cart"] })
        }
    })
}

export const useDeleteCart = () => {
    const queryClient = useQueryClient();
    // reset user store after api calls
    return useMutation({
        mutationFn: deleteCart,
        // On success, refresh the cache to reflect deletion
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user-cart"] });
        }
    });
}


export const useFetchUserCart = () => {
    const { isLoggedIn } = useUserStore()
    const cartStore = useCartStore.getState();

    const { data: cart, isSuccess, error, isLoading, isError, refetch } = useQuery({
        queryKey: ["user-cart"],
        queryFn: async () => {
            const items = await getUserCart();
            cartStore.setCartItems(items)
            return items
        },
        enabled: !!isLoggedIn,
        gcTime: Infinity,
        staleTime: 1000 * 60 * 15
    });
    return { cart, isSuccess, isLoading, isError, error, refetch }
}