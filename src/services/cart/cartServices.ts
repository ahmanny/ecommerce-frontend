import API from "@/lib/axios";
import { StoreCartItem } from "@/store/CartStore";

// sync cart  
export const syncCartFromBackend = async ({ items }: { items: any[] }) => {
    const { data } = await API.post("/cart/sync", items);
    return data
}

// add to cart
export const addToCart = async (items: any) => {
    const { data } = await API.post("/cart/add", items);
    return data
}

export const deleteCart = async (id: string) => {
    const { data } = await API.delete(`/cart/delete/${id}`);
    return data
}

export const getUserCart = async () => {
    const { data } = await API.get("/cart/get")
    const transformedItems: StoreCartItem[] = data.cart.items.map(
        (item: any) => ({
            id: item._id,
            uniqueId: `${item.productId._id}-${item.color}-${item.size}`,
            productId: item.productId._id,
            title: item.productId.title,
            price: item.productId.price,
            quantity: item.quantity,
            image: item.productId.images[0],
            color: item.color,
            size: item.size,
        })
    );
    return transformedItems;
}