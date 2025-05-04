import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createProduct, deleteProduct, GetHomeProducts, getProductById, getProducts, getSimilarProducts, updateProduct } from "./productServices"
import { useFetchCategories } from "../categories/categoriesQueries"

// fetch all products
export const useFetchProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    })
}

// fetch home products
export const useFetchHomeProducts = () => {
    return useQuery({
        queryKey: ["home-products"],
        queryFn: GetHomeProducts,
    })
}

// fetch a product by id
export const useFetchProduct = (id: string) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
        enabled: !!id
    })
}
// fetch similaar products
export const useFetchSimilarProduct = (id: string) => {
    return useQuery({
        queryKey: ["similar-products", id],
        queryFn: () => getSimilarProducts(id),
        enabled: !!id
    })
}


// create product mutation (admin side)
export const useCreateProduct = () => {
    const { refetch: fetchCategories } = useFetchCategories()
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createProduct,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            fetchCategories()
        }
    })
}

// update Product mutation (admin side)
export const useUpdateProduct = () => {
    const { refetch: fetchCategories } = useFetchCategories()
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, product }: { id: string, product: any }) => updateProduct(id, product),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            fetchCategories()
        }
    })
}


// delete Product  mutation (admin side)
export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    // reset user store after api calls
    return useMutation({
        mutationFn: deleteProduct,
        // On success, refresh the cache to reflect deletion
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
        }
    });
}