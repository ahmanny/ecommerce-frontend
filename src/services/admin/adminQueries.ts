import { useQuery } from "@tanstack/react-query";
import { getAdminDashboardStats } from "./adminServices";


export const useFetchAdminDashboardStats = () => {
    return useQuery({
        queryKey: ["orders"],
        queryFn: getAdminDashboardStats,
    })
}