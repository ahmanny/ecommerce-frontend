import CustomersManagement from "@/components/admin/customersManagement";

async function fetchData() {
  return new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate 3s delay
}

export default async function CustomersPage() {
  await fetchData();
  return (
    <div>
      <CustomersManagement />
    </div>
  );
}
