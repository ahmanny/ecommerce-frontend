import AddressForm from "@/components/my-account/forms/AddressForm";

export default function page() {
  return (
    <div className="lg:w-[600px]">
      <h1 className="heading-h5 text-foreground-f1">Shipping Address</h1>
      <AddressForm />
    </div>
  );
}
