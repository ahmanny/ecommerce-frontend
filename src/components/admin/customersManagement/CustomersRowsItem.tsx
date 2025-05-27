import { AdminManagementICustomer } from "@/types/user.types";
import { Avatar, Menu, Portal, Table } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function CustomersRowsItem({
  item,
}: {
  item: AdminManagementICustomer;
}) {
  return (
    <>
      <Table.Cell></Table.Cell>
      <Table.Cell>
        <Avatar.Root shape="rounded" size="lg" colorPalette={"blue"}>
          <Avatar.Fallback name={item.name} />
          <Avatar.Image src={item.profilePicture} />
        </Avatar.Root>
      </Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.email}</Table.Cell>
      <Table.Cell
        minW={"300px"}
        css={{
          whiteSpace: "wrap",
        }}
      >
        {item.shippingAddress.address}
      </Table.Cell>
      <Table.Cell className="flex justify-center">
        <Menu.Root>
          <Menu.Trigger asChild>
            <button>
              <HiOutlineDotsHorizontal className="text-[15px] sm:text-[18px] lg:text-[24px]" />
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
        </Menu.Root>{" "}
      </Table.Cell>
    </>
  );
}
