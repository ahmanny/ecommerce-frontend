"use client";
import { item } from "@/components/my-account/orders/ItemCard";
import UserOrders from "@/components/my-account/orders/UserOrders";
import PageSkeleton from "@/components/ui/loaders/skeletons/PageSkeleton";
import ErrorState from "@/components/ui/states/ErrorState";
import { useFetchUserOrders } from "@/services/orders/ordersQueries";
import { useEffect, useState } from "react";

export default function Page() {
  const { orders, error, isLoading, isError, refetch } = useFetchUserOrders(); // Assuming you have this hook
  const [items, setItems] = useState<item[]>([]);

  useEffect(() => {
    if (orders) {
      setItems(orders);
    }
  }, [orders]);

  if (isLoading) return <PageSkeleton />;
  if (isError) return <ErrorState message={error?.message} onRetry={refetch} />;

  return (
    <div>
      {items.length > 0 && <h1 className="heading_2">Orders</h1>}
      {/* Display the orders here */}
      <UserOrders items={items} />
    </div>
  );
}
