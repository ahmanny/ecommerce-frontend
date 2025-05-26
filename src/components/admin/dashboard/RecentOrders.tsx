import { OrderI } from "@/types/orders.types";

const orders = [
  {
    productName: "Men's Black T-Shirts",
    date: "20 Mar, 2023",
    total: "$75.00",
    status: "Processing",
  },
  {
    productName: "essential neutrals",
    date: "19 Mar, 2023",
    total: "$22.00",
    status: "Processing",
  },
  {
    productName: "Sleek and Cozy Black",
    date: "7 Feb, 2023",
    total: "$57.00",
    status: "Completed",
  },
  {
    productName: "MOCKUP Black",
    date: "29 Jan, 2023",
    total: "$30.00",
    status: "Completed",
  },
  {
    productName: "Monochromatic Wardrobe",
    date: "27 Jan, 2023",
    total: "$27.00",
    status: "Completed",
  },
];

export interface OrderProps {
  order: OrderI[];
}

export default function RecentOrders({ order }: OrderProps) {
  return (
    <div className=" py-10 pb-24 bg-background-b1 rounded-lg ">
      {/* Header Section */}
      <div className="flex gap-4 items-center mb-4 px-3 md:px-6">
        <h1 className="text-lg font-semibold">Recent Orders</h1>
        <button className="px-4 py-2 text-sm bg-background-b2 rounded-full">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="border border-custom-10 dark:border-custom-600  overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-5  font-semibold py-3 px-4 border-b text-foreground-f5">
          <p className="col-span-2">Item</p>
          <p>Date</p>
          <p>Total</p>
          <p>Status</p>
        </div>

        {/* Table Rows */}
        {order.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 py-3 px-4  border-b items-center text-foreground-f5 text-[7px] sm:text-sm "
          >
            <p className="col-span-2 capitalize">{item.title}</p>
            <p className=" capitalize">{item.date}</p>
            <p className=" capitalize">{item.price}</p>
            <p className={`font-medium  capitalize`}>{item.orderStatus}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
