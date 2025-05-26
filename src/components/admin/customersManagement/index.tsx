import {
  customers,
  CustomersTableHeader,
} from "@/lib/contants/regular.constants";
import DataTables from "../dataTable";

export default function CustomersManagement() {
  return (
    <div>
      <DataTables
        tableHeaders={CustomersTableHeader}
        componentFor="customers"
        data={customers}
      />
    </div>
  );
}
