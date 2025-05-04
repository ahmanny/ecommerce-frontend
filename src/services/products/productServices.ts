import API from "@/lib/axios";
import { IHomeProductResponse, IProduct } from "@/types/product.types";


interface IProductResponse {
    product: IProduct
}
interface ISimilarProductResponse {
    similarProducts: IProduct[]
}

// Get all products
export const getProducts = async (): Promise<IProduct[]> => {
    const { data } = await API.get<IProduct[]>("/products/all-products")
    return data
}

// Get home products
export const GetHomeProducts = async (): Promise<IHomeProductResponse> => {
    const { data } = await API.get<IHomeProductResponse>("/products/home-products")
    return data
}

// Get product by ID
export const getProductById = async (id: string): Promise<IProduct> => {
    const { data } = await API.get<IProductResponse>(`/products/${id}`)
    return data.product
}

// Get all similar products related to a product by the id
export const getSimilarProducts = async (id: string): Promise<IProduct[]> => {
    const { data } = await API.get<ISimilarProductResponse>(`/products/${id}/similar`)
    return data.similarProducts
}



// create a new Product (admin side)
export const createProduct = async (product: any) => {
    const { data } = await API.post("/products/create", product)
    return data
}

// update a  Product (admin side)
export const updateProduct = async (id: string, product: any) => {
    const { data } = await API.put(`/products/${id}/update`, product)
    return data
}

// delete Product (admin side)
export const deleteProduct = async (id: string) => {
    const { data } = await API.delete(`/products/delete/${id}`);
    return data
}