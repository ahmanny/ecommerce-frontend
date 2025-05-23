import BreadCrumbOne from "@/components/layouts/breadcrumbs/BreadCrumbOne";

export default function CheckOutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="py-4 bg-background-b2  h-[140px] flex flex-col justify-center items-center">
        <BreadCrumbOne />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
