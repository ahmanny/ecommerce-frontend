"use client";

import { Table } from "@chakra-ui/react";
import { BiSortAlt2 } from "react-icons/bi";
import { useEffect, useState } from "react";
import Pagination from "../../ui/pagination";
import OrdersRowsItem from "../ordersManagement/OrdersRowsItem";
import { AdminManagementIOrder } from "@/types/orders.types";
import { AdminManagementICustomer } from "@/types/user.types";
import CustomersRowsItem from "../customersManagement/CustomersRowsItem";
import { AdminManagementIReview } from "@/types/review.types";
import ReviewsRowsItem from "../reviewsManagement/ReviewsRowsItem";
import { IProduct } from "@/types/product.types";
import ProductsRowsItem from "../productsManagement/ProductsRowsItem";
import AdminSearchBar from "@/components/search/AdminSearchBar";

interface TableProps {
  tableHeaders: string[];
  componentFor?: "products" | "orders" | "customers" | "reviews";
  data?:
    | IProduct[]
    | AdminManagementIOrder[]
    | AdminManagementICustomer[]
    | AdminManagementIReview[];
  addBtnText?: string;
  addBtnAction?: () => void;
}

const isProduct = (item: any): item is IProduct =>
  "sku" in item && "stock_status" in item;
const isOrder = (item: any): item is AdminManagementIOrder =>
  "order" in item && "date" in item;
const isReview = (item: any): item is AdminManagementIReview =>
  "review" in item && "name" in item;
const isCustomer = (item: any): item is AdminManagementICustomer =>
  "email" in item && "shippingAddress" in item;

export default function DataTables({
  tableHeaders,
  componentFor,
  data = [],
  addBtnText,
  addBtnAction,
}: TableProps) {
  const [filteredItems, setFilteredItems] = useState(data);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    // Ensure filteredItems updates when data changes
    setFilteredItems(data);
    // reset pagination when data updates
    setCurrentPage(0);
  }, [data]);

  const paginatedData = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <div className="bg-white h-fit flex justify-between  flex-col p-5 ">
      <div>
        <div className="flex p-5 px-16 justify-between items-center">
          <h1 className=" text-[#0E1422] text-[18px] capitalize">
            {componentFor}
          </h1>
          <div className=" flex gap-4">
            {/* add to table button */}
            {addBtnText && (
              <div className="w-32">
                <button
                  onClick={addBtnAction}
                  type="submit"
                  className="btn text-base !h-[35px]"
                >
                  {addBtnText}
                </button>
              </div>
            )}
            {/* search within product table */}
            {componentFor === "products" && (
              <AdminSearchBar<IProduct>
                items={data as IProduct[]} // Use `data` instead of `filteredItems`
                searchKey="title"
                onSearch={setFilteredItems}
              />
            )}
            {/* search within orders table */}

            {componentFor === "orders" && (
              <AdminSearchBar<AdminManagementIOrder>
                items={data as AdminManagementIOrder[]}
                searchKey="order"
                onSearch={setFilteredItems}
              />
            )}
            {/* search within customers table */}

            {componentFor === "customers" && (
              <AdminSearchBar<AdminManagementICustomer>
                items={data as AdminManagementICustomer[]}
                searchKey="name"
                onSearch={setFilteredItems}
              />
            )}
            {/* search within reviews table */}

            {componentFor === "reviews" && (
              <AdminSearchBar<AdminManagementIReview>
                items={data as AdminManagementIReview[]}
                searchKey="name"
                onSearch={setFilteredItems}
              />
            )}
          </div>
        </div>
        <Table.Root size="lg" className="text-[#5C5F6A] h-[95%]">
          <Table.Header>
            <Table.Row className="border-y-[0.1px] border-solid py-10 border-neutral-300">
              <Table.ColumnHeader></Table.ColumnHeader>
              <Table.ColumnHeader className="text-[#5C5F6A] text-[24px]">
                <BiSortAlt2 />
              </Table.ColumnHeader>
              {tableHeaders.map((header, index) => (
                <Table.ColumnHeader
                  key={index}
                  className="text-[#5C5F6A] text-[16px] capitalize"
                >
                  {header}
                </Table.ColumnHeader>
              ))}
              <Table.ColumnHeader>Action</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>

          <Table.Body className=" capitalize">
            {paginatedData.length === 0 ? (
              <Table.Row>
                <Table.Cell
                  colSpan={tableHeaders.length + 2}
                  className="text-center"
                >
                  No data available
                </Table.Cell>
              </Table.Row>
            ) : (
              paginatedData.map((item, index) => (
                <Table.Row key={index}>
                  {componentFor === "products" && isProduct(item) && (
                    <ProductsRowsItem item={item} /> // Using ProductsRow component for products
                  )}
                  {componentFor === "orders" && isOrder(item) && (
                    <OrdersRowsItem item={item} />
                  )}
                  {componentFor === "customers" && isCustomer(item) && (
                    <CustomersRowsItem item={item} />
                  )}
                  {componentFor === "reviews" && isReview(item) && (
                    <ReviewsRowsItem item={item} />
                  )}
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table.Root>
      </div>

      {/* pagination for table  */}
      <Pagination
        pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
