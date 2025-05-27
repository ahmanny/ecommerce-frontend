import { AdminManagementIOrder } from "@/types/orders.types";
import { Avatar, Menu, Portal, Table } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function OrdersRowsItem({
  item,
}: {
  item: AdminManagementIOrder;
}) {
  const router = useRouter();
  return (
    <>
      <Table.Cell className="flex items-center justify-center">
        <Avatar.Root shape="rounded" size="lg" colorPalette={"blue"}>
          <Avatar.Fallback name={item.order} />
          <Avatar.Image src={item.image} />
        </Avatar.Root>
      </Table.Cell>
      <Table.Cell minW={"170px"}>{item.order}</Table.Cell>
      <Table.Cell minW={"100px"}>{item.date}</Table.Cell>
      <Table.Cell minW={"50px"}>{item.total}</Table.Cell>
      <Table.Cell minW={"90px"}>{item.status}</Table.Cell>
      <Table.Cell className="flex items-center justify-center">
        <Menu.Root>
          <Menu.Trigger asChild>
            <button>
              <HiOutlineDotsHorizontal />
            </button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="edit">Edit</Menu.Item>
                <Menu.Item
                  value="delete"
                  color="fg.error"
                  _hover={{ bg: "bg.error", color: "fg.error" }}
                >
                  Delete...
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Table.Cell>
    </>
  );
}
