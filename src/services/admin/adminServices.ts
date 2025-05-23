import API from "@/lib/axios"
// update a  users details
export const getAdminDashboardStats = async (credential: any) => {
    const { data } = await API.get("/admin/dashboard-stats");
    console.log("Admin Dashboard Stats", data);
    return data;
}


