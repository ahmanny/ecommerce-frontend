import BreadCrumbOne from "@/components/layouts/breadcrumbs/BreadCrumbOne";

export default function SearchLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-background-b1">
      <div className="py-7 bg-background-b2">
        <div className="w-full">
          <BreadCrumbOne />
        </div>
      </div>
      <div className="px-6 lg:px-28">{children}</div>
    </div>
  );
}
