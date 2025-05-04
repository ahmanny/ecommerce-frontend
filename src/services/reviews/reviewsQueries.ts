import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addReview, getProductReviews } from "./reviewsServices"


export const useFetchProductReviews = (id: string) => {
    return useQuery({
        queryKey: ['product-reviews', id],
        queryFn: () => getProductReviews(id),
        enabled: !!id
    })
}

// create review mutation 
export const useAddReview = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addReview,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["product-reviews"] });
            queryClient.invalidateQueries({ queryKey: ["product"] });
        }
    })
}
