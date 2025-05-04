import API from "@/lib/axios"
import { IWishlistItem } from "@/types/wishlist.types"
import { dataTagSymbol } from "@tanstack/react-query";

// Get all similar products related to a product by the id
export const getUserWishlist = async (): Promise<IWishlistItem[]> => {
    const { data } = await API.get("/wishlist/get");

    const transformedItems: IWishlistItem[] = data.wishlist.items.map(
        (item: any) => ({
            _id: item._id,
            productId: item.productId._id,
            addedAt: item.addedAt,
            title: item.productId.title,
            image: item.productId.images[0],
            price: item.productId.price,
            colors: item.productId.colors,
            sizes: item.productId.sizes,
        })
    );
    return transformedItems;
}



//toggle wishilist 
export const toggleWishlist = async (credential: { productId: string }) => {
    const { data } = await API.post("/wishlist/toggle", credential)
    return data
}


//delete wishilist 
export const deleteWishlist = async (wishlistId: string) => {
    const { data } = await API.delete(`/wishlist/delete/${wishlistId}`)
    return data
}
