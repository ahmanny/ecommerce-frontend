import { IProduct } from "@/types/product.types";
import FeaturedProducts from "../product/productCarousels/FeaturedProducts";
import LatestProducts from "../product/productCarousels/LatestProducts";
import HorizontalTab from "../ui/tabs/HorizontalTab";

interface HomepageTabProps {
  featuredProducts: IProduct[];
  latestProducts: IProduct[];
  isLoading: boolean;
}
export default function HomepageTab({
  featuredProducts,
  latestProducts,
  isLoading,
}: HomepageTabProps) {
  const tabsContent = [
    {
      value: "featured",
      content: (
        <FeaturedProducts
          isLoading={isLoading}
          featuredProducts={featuredProducts}
        />
      ),
    },
    {
      value: "latest",
      content: (
        <LatestProducts isLoading={isLoading} latestProducts={latestProducts} />
      ),
    },
  ];
  return (
    <div>
      <HorizontalTab tabsContent={tabsContent} />
    </div>
  );
}
