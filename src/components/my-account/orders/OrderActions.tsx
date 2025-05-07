import React from "react";
interface OrderActionsProps {
  orderStatus: string;
  viewItem: () => void;
}

export default function OrderActions({
  orderStatus,
  viewItem,
}: OrderActionsProps) {
  return (
    <div className="flex gap-7 justify-between items-center capitalize">
      {/* if the card is for wish list items or ordered list  */}
      <div className="text-lg font-bold mr-4 border-b border-gray-400">
        {orderStatus}
      </div>
      <button
        type="button"
        onClick={viewItem}
        className="border border-[#0E1422] py-[6px] px-8 md:py-[12px] md:px-[24px] capitalize rounded-lg"
      >
        view item
      </button>
    </div>
  );
}
