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
    return data.userOrders
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
