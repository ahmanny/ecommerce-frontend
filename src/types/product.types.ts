export interface IProduct {
    __v: number
    _id: string
    title: string
    colors: string[]
    description: string
    sku: string
    price: number
    quantity_available: number
    sizes: string[]
    stock_status: string
    slug: string
    categories: any[]
    highlights: string[]
    images: any[];
    gender: string
    material: string
    reviews: any[]
    totalSold: number,
    averageRating: number,
    reviewCount: number,
}

export interface IHomeProductResponse {
    featured: IProduct[]
    bestSelling: IProduct[]
    latest: IProduct[]
}

