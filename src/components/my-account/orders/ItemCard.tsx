import { Avatar } from "@chakra-ui/react";
import OrderActions from "./OrderActions";

export interface item {
  title: string;
  image: string;
  price: number;
  date: string;
  orderStatus: string;
}

interface ItemProps {
  item: item;
  btnText: string;
  btn: Function;
}

export default function ItemCard({ item, btn, btnText }: ItemProps) {
  const viewItem = () => {
    btn();
  };
  const removeItem = () => {
    console.log("deleted");
  };
  return (
    <div className=" w-full ">
      <div className="flex items-center justify-between mb-4">
        {/* Product Image */}
        <div className="w-[80px] h-[80px] rounded-md overflow-hidden bg-gray-100">
          <Avatar.Root shape="rounded" size="full" colorPalette={"blue"}>
            <Avatar.Fallback name={item.title} />
            <Avatar.Image src={item.image} />
          </Avatar.Root>
        </div>

        {/* Product Details */}
        <div className="flex-1 px-4">
          <h2 className="text-lg lg:text-xl font-semibold capitalize">
            {item.title}
          </h2>
          <p className="date flex items-center gap-2">
            {"Ordered on: "}
            {item.date}
          </p>
          {/* Product Price */}
          <div className="text-lg font-bold mr-4">${item.price.toFixed(2)}</div>
          <div className="block md:hidden">
            <OrderActions orderStatus={item.orderStatus} viewItem={viewItem} />
          </div>
        </div>
        <div className="hidden md:block">
          <OrderActions orderStatus={item.orderStatus} viewItem={viewItem} />
        </div>
      </div>
      <hr />
    </div>
  );
}
