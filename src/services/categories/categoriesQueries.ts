import { useCategoryStore } from "@/store/CategoryStore";
import { getCategories } from "./categoriesServices";
import { useQuery } from "@tanstack/react-query";

export const useFetchCategories = () => {
    const { categories: preloadedCategory, setCategories } = useCategoryStore()

    const {
        data: categories, isLoading, isSuccess, isError, refetch } = useQuery({
            queryKey: ["categories"],
            queryFn: async () => {
                const items = await getCategories();
                setCategories(items)
                return items;
            },
            staleTime: 1000 * 60 * 60,
            initialData: preloadedCategory,
            refetchOnWindowFocus: false
        })
    return { categories, isLoading, isSuccess, isError, refetch };
}