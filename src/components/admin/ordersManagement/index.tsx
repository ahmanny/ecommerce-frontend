import { orders, OrderTableHeader } from "@/lib/contants/regular.constants";
import React from "react";
import DataTables from "../dataTable";

export default function OrdersManagement() {
  return (
    <div className=" w-full h-full">
      <DataTables
        tableHeaders={OrderTableHeader}
        componentFor="orders"
        data={orders}
      />
    </div>
  );
}
