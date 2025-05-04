import BreadCrumbOne from "@/components/layouts/breadcrumbs/BreadCrumbOne";

export default function SearchLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-white">
      <div className="py-7 bg-[#F6F6F6]">
        <div className="w-full">
          <BreadCrumbOne />
        </div>
      </div>
      <div className="px-6 lg:px-28">{children}</div>
    </div>
  );
}
