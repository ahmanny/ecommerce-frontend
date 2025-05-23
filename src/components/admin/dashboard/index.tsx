"use client";

import { useFetchAdminDashboardStats } from "@/services/admin/adminQueries";
import BestSelling from "./BestSelling";
import RecentOrders from "./RecentOrders";
import StatCard from "./StatCard";
import { transFormOrderData } from "@/lib/utils/order.utils";
import { useEffect, useState } from "react";
import { OrderI } from "@/types/orders.types";
import PageSkeleton from "@/components/ui/loaders/skeletons/PageSkeleton";
import { calculateTotal } from "@/lib/utils/ex.utils";

export default function AdminDashBoard() {
  const { data, isLoading } = useFetchAdminDashboardStats();
  const [recentOrders, setRecentOrders] = useState<OrderI[]>([]);
  // const [recentOrders, setRecentOrders] = useState<OrderI[]>([]);

  useEffect(() => {
    if (!isLoading && data?.recentOrders) {
      setRecentOrders(transFormOrderData(data?.recentOrders));
    }
  }, [data]);

  const goals = 1000;
  if (isLoading) return <PageSkeleton />;
  return (
    <div className="px-4 md:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <StatCard
          title="Total sales"
          total={`$${calculateTotal(data?.dailySales || [])}`}
          subtitle="this month"
          chartType="line"
          data={data?.dailySales?.map((item: any) => ({
            date: item.date,
            value: item.total,
          }))}
        />
        <StatCard
          title="customers"
          total={`${calculateTotal(data?.dailyCustomers || [])}`}
          subtitle="this month"
          chartType="bar"
          data={data?.dailyCustomers?.map((item: any) => ({
            date: item.date,
            value: item.total,
          }))}
        />
        <StatCard
          title="orders"
          total="734"
          subtitle={`monthly goals : ${goals}`}
          chartType="progress"
          goal={goals}
        />
      </div>
      <div className=" grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
        <div className="col-span-1">
          <BestSelling
            totalSales={`$${data?.bestSelling?.totalSales}`}
            data={data?.bestSelling?.productSales?.map((item: any) => ({
              name: item.title,
              value: item.totalRevenue,
            }))}
          />
        </div>
        <div className="col-span-2">
          <RecentOrders order={recentOrders} />
        </div>
      </div>
    </div>
  );
}
