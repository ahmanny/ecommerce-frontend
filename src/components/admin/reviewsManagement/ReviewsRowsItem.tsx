import { AdminManagementIReview } from "@/types/review.types";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Avatar, Menu, Portal, Table } from "@chakra-ui/react";

export default function ReviewsRowsItem({
  item,
}: {
  item: AdminManagementIReview;
}) {
  return (
    <>
      <Table.Cell></Table.Cell>
      <Table.Cell>
        <Avatar.Root shape="rounded" size="lg" colorPalette={"blue"}>
          <Avatar.Fallback name={item.name} />
          <Avatar.Image src={item.image} />
        </Avatar.Root>
      </Table.Cell>
      <Table.Cell>
        <div>{item.name}</div>
      </Table.Cell>
      <Table.Cell
        minW={"250px"}
        css={{
          whiteSpace: "wrap" ,
        }}
      >
        {item.comment}
      </Table.Cell>
      <Table.Cell className="flex items-center justify-center ">
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
