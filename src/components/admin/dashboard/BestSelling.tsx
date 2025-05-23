"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#6366F1", "#A5B4FC", "#CBD5E1"];
interface BestSellingProps {
  data: {
    name: string;
    value: number;
  }[];
  totalSales: string;
}

export default function BestSelling({ data, totalSales }: BestSellingProps) {
  return (
    <div className="p-4 bg-background-b1 rounded-lg shadow flex flex-col">
      <div className=" flex flex-col gap-8">
        {/* heading */}
        <div>
          <h1 className="heading-h4 capitalize">Best Selling</h1>
          <p className="uppercase label-l1 text-foreground-f5">THIS MONTH</p>
        </div>
        {/* divider */}
        <div className="w-full border-b-2 border-solid border-custom-10 dark:border-custom-600"></div>
        {/* total sales */}
        <div className="flex items-center gap-3">
          <p className="heading-h4 mt-2">{totalSales} </p>
          <p className="label-l2 pt-3 text-foreground-f5">— Total Sales</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center ">
        {/* List of best selling products */}
        <div className="mt-4 space-y-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 items-center border border-solid border-custom-10 dark:border-custom-600 w-fit px-3 py-2 rounded-full text-sm capitalize text-foreground-f5"
            >
              <span>{item.name}</span>
              <span> — </span>
              <span className="font-semibold">{`$${item.value} Sales`}</span>
            </div>
          ))}
        </div>

        {/* Donut Chart */}
        <div className=" flex-1 flex justify-center items-center">
          <div className="mt-6 w-[120px] h-[120px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={40}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
