import API from "@/lib/axios";

// Get all categories
export const getCategories = async () => {
    const { data } = await API.get("/categories/get");
    const transformedItems: string[] = data.map(
        (item: any) =>
            item.name
    );
    return transformedItems;
}
