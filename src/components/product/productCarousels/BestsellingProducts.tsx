import { IProduct } from "@/types/product.types";
import ProductCarousel from ".";

interface BestsellingProductsProps {
  bestSelling: IProduct[];
  isLoading: boolean;
}

export default function BestsellingProducts({
  bestSelling,
  isLoading,
}: BestsellingProductsProps) {
  return (
    <div className="space-y-8">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="sub_heading">Shop Now</h1>
        <h1 className="heading">Best Selling</h1>
      </div>
      <div>
        <ProductCarousel
          isLoading={isLoading}
          productsToBeDisplayed={bestSelling}
          emptyMessage="No available best selling Products"
        />
      </div>
    </div>
  );
}
