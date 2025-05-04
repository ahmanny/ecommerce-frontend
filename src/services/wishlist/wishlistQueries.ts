import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteWishlist, getUserWishlist, toggleWishlist } from "./wishlistServices";
import { useUserStore } from "@/store/UserStore";
import { useWishlistStore } from "@/store/WishlistStore";

// fetch home products
export const useFetchUserWishlist = () => {
    const { isLoggedIn } = useUserStore()
    const wishlistStore = useWishlistStore.getState();

    const { data: wishilist, isSuccess, error, isLoading, isError, refetch } = useQuery({
        queryKey: ["user-wishlist"],
        queryFn: async () => {
            const items = await getUserWishlist();
            wishlistStore.setItems(items)
            return items
        },
        enabled: !!isLoggedIn,
        staleTime: 1000 * 60 * 15
    });
    return { wishilist, isSuccess, isLoading, isError, error, refetch }
}


// create product mutation (admin side)
export const useToggleWishlist = () => {
    const { refetch: fetchUserWishlist, isError: categoriesError } = useFetchUserWishlist()

    return useMutation({
        mutationFn: toggleWishlist,
        onSuccess: (data) => {
            fetchUserWishlist()
        }
    })
}

// wishilist toggle hook
export const useDeleteWishlist = () => {
    // set user from the store
    const { refetch: fetchUserWishlist } = useFetchUserWishlist()

    return useMutation({
        mutationFn: deleteWishlist,
        onSuccess: (data) => {
            fetchUserWishlist()
        }
    })
}