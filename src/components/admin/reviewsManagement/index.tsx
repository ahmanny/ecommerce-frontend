"use client";

import { reviews, ReviewsTableHeader } from "@/lib/contants/regular.constants";
import DataTables from "../dataTable";
export default function ReviewsManagement() {
  return (
    <div className=" w-full h-full">
      <DataTables
        tableHeaders={ReviewsTableHeader}
        componentFor="reviews"
        data={reviews}
      />
    </div>
  );
}
