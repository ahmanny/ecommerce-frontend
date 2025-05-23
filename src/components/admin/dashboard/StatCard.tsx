"use client";

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { format } from "date-fns";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const { date, value } = payload[0].payload;
    const formattedDate = format(new Date(date), "MMM d");
    return (
      <div className="bg-background-b2 border p-2 rounded-md">
        <p className="label-l1">{`${formattedDate} : ${value}`}</p>
      </div>
    );
  }

  return null;
};

interface StatCardProps {
  title: string;
  total: string | number;
  subtitle: string;
  icon?: React.ReactNode;
  chartType?: "bar" | "line" | "progress";
  data?: { date: string; value: number }[];
  goal?: number;
}
export default function StatCard({
  title,
  total,
  subtitle,
  icon,
  chartType,
  data,
  goal,
}: StatCardProps) {
  return (
    <div className=" bg-background-b1 p-5 shadow-md rounded-lg w-full ">
      {/* card heading */}
      <div className="flex items-center justify-between">
        {/* title & subtitle */}
        <div className=" flex flex-col ">
          <h3 className="heading-h5 capitalize">{title}</h3>
          <p className="uppercase label-l1 text-foreground-f5">{subtitle}</p>
        </div>
        {/* value & subtitle */}
        <h1 className="text-[26px] font-bold mt-1">{total} </h1>
      </div>
      {/* Chart / Progress Bar */}
      <div className="mt-3 h-16 flex justify-center flex-col">
        {chartType === "bar" && data ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis hide dataKey="date" />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : chartType === "line" && data ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis hide dataKey="date" />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : chartType === "progress" && goal ? (
          <div className="mt-2">
            <p className="text-xs text-gray-500">
              {goal - Number(total)} Left{" "}
            </p>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
              <div
                className={`h-2 bg-blue-500 rounded-full transition-all duration-500 `}
                style={{ width: `${(Number(total) / goal) * 100}%` }}
              ></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
