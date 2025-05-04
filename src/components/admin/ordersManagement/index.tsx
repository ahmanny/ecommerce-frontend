import { orders, OrderTableHeader } from "@/lib/contants/regular.constants";
import React from "react";
import DataTables from "../dataTable";

export default function OrdersManagement() {
  return (
    <div className="w-[80%] h-[800px]">
      <DataTables
        tableHeaders={OrderTableHeader}
        componentFor="orders"
        data={orders}
      />
    </div>
  );
}
