import API from "@/lib/axios";
import { formatDate } from "@/lib/utils/date.utils";

// create order
export const createOrder = async (order: any) => {
    const { data } = await API.post("/order/create", order);
    return data;
}


// get  all orders
export const getAllOrders = async () => {
    const { data } = await API.get("/order/all-orders");
    return data
}


// fetch  user orders
export const getUserOrders = async () => {
    const { data } = await API.get("/order/get-user-orders");
    // Transforming data to match the `item` interface
    const transformedItems = data.userOrders.orders.flatMap((order: any) =>
        order.items.map((item: any) => ({
            title: item.productId.title, // Item title from the product data
            image: item.productId.images[0], // Assuming images[0] is the main image
            price: order.summary.total, // order price total
            color: item.color, // Color (optional)
            size: item.size, // Size (optional)
            date: formatDate(order.createdAt), // Order creation date
            orderStatus: order.order_status, // Optional: order status
        }))
    );
    return transformedItems
}

// fetch  user orders
export const getOrderById = async (id: string) => {
    const { data } = await API.get(`/order/get/${id}`);
    return data
}

export const fetchRecentOrders = async () => {
    const { data } = await API.get("/order/recent")
    return data
}
