export interface user {
    name: string;
    email: string;
    image: string;
}

export interface IReview {
    user: user;
    product: string;
    rating: number;
    comment: string;
    isVerifiedBuyer: boolean;
    createdAt: string;
}

export interface AdminManagementIReview {
    id: number;
    name: string;
    image?: string;
    comment: string;
    rating: number;
}