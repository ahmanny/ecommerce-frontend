import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Admin App",
  description: "Built with Next.js and React Query",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
