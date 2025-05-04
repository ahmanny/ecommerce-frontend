import BreadCrumbOne from "@/components/layouts/breadcrumbs/BreadCrumbOne";

export default function CartLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-white">
      <div className="py-4 bg-[#F6F6F6]  h-[140px] flex flex-col justify-center items-center">
        <BreadCrumbOne />
      </div>
      <div className="mx-auto min-h-screen py-2 w-full">{children}</div>
    </div>
  );
}
