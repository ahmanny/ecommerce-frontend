import AddProductForm from "@/components/admin/productsManagement/AddProductForm";

export default function page() {
  return (
    <div className="bg-background-b1 p-8 w-full min-h-screen">
      {/* page heading */}
      <div className=" pb-8 border-b-[1px] border-solid border-gray-300 mb-12">
        <h1 className=" heading-h5 text-foreground-f3">Add Product</h1>
      </div>
      {/* add product form */}
      <AddProductForm />
    </div>
  );
}
