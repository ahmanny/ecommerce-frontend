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
    <div className="bg-background-b1 h-fit flex justify-between  flex-col py-5 ">
      <div>
        <div className="flex p-5 px-16 justify-between items-center">
          <h1 className=" text-foreground-f1 heading-h4 capitalize">
            {componentFor}
          </h1>
          <div className=" flex gap-4">
            {/* add to table button */}
            {addBtnText && (
              <div className="w-32">
                <button
                  onClick={addBtnAction}
                  type="submit"
                  className="text-base h-[35px] primary-p1 text-custom-50  w-full rounded-md"
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
      </div>
      <Table.Root size="lg" bg={"inherit"}>
        <Table.Header>
          <Table.Row className="border-y-[0.1px] border-solid py-10 border-neutral-300 bg-inherit">
            <Table.ColumnHeader></Table.ColumnHeader>
            <Table.ColumnHeader className="text-foreground-f5 text-[24px]">
              <BiSortAlt2 />
            </Table.ColumnHeader>
            {tableHeaders.map((header, index) => (
              <Table.ColumnHeader
                key={index}
                className="text-foreground-f5 text-[16px] capitalize"
              >
                {header}
              </Table.ColumnHeader>
            ))}
            <Table.ColumnHeader>Action</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body className=" capitalize bg-inherit">
          {paginatedData.length === 0 ? (
            <Table.Row className="bg-inherit">
              <Table.Cell
                colSpan={tableHeaders.length + 2}
                className="text-center"
              >
                No data available
              </Table.Cell>
            </Table.Row>
          ) : (
            paginatedData.map((item, index) => (
              <Table.Row key={index} className="bg-inherit">
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

      {/* pagination for table  */}
      <Pagination
        pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
