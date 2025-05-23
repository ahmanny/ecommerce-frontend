export interface AdminManagementIOrder {
    id: number;
    order: string;
    date: string;
    total: number;
    image?: string;
    status: string;
}

export interface OrderI {
    title: string;
    image: string;
    price: string;
    date: string;
    orderStatus: string;
    itemCount: number;
}