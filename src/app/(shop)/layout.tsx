// ShopLayout.tsx
import Footer from "@/components/layouts/shop/Footer";
import Header from "@/components/layouts/shop/Header";
import NotificationBar from "@/components/layouts/shop/NotificationBar";

export default function ShopLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className=" container mx-auto">
        <NotificationBar />
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
