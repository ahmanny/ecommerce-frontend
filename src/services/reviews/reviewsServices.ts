import API from "@/lib/axios"
import { IReview } from "@/types/review.types"

// get product's reviews 
export const getProductReviews = async (id: string) => {
    const { data } = await API.get<IReview[]>(`/review/product/${id}`)
    return data
}

// create order mutations
export const addReview = async (review: any) => {
    const { data } = await API.post("/review/add", review);
    return data
}