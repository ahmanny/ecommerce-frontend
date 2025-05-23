import { useCartStore } from "@/store/CartStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createOrder, getAllOrders, getOrderById, getUserOrders } from "./ordersServices";
import { useOrderStore } from "@/store/OrderStore";


// create order 
export const useCreateOrder = () => {
    const { clearCart } = useCartStore();

    return useMutation({
        mutationFn: createOrder,
        // on success clear cart items
        onSuccess: (data) => {
            clearCart();
        }
    })
}

// fetch all orders
export const useFetchAllOrders = () => {
    return useQuery({
        queryKey: ["orders"],
        queryFn: getAllOrders,
    })
}
// fetch user's order
export const useFetchUserOrders = () => {
    return useQuery({
        queryKey: ["user-orders"],
        queryFn: getUserOrders,
        staleTime: 1000 * 60 * 60,
    })
}

// fetch a single order by ID
export const useFetchOrder = (id: string) => {
    return useQuery({
        queryKey: ["order", id],
        queryFn: () => getOrderById(id),
        enabled: !!id
    })
}
