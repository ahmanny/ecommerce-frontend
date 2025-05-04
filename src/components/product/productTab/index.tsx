import { BsThreeDots } from "react-icons/bs";
import ProductDetails from "./ProductDetails";
import { MdOutlineStarOutline } from "react-icons/md";
import ProductReviews from "./ProductReviews";
import VerticalTab from "@/components/ui/tabs/VerticalTab";

interface ProductTabProps {
  productDetails: string;
  productHighlights: string[];
  averageRating: number;
  reviewCount: number;
  totalSold: number;
  productId: string;
}

export default function ProductTab({
  productId,
  averageRating,
  reviewCount,
  totalSold,
  productDetails,
  productHighlights,
}: ProductTabProps) {
  const tabsContent = [
    {
      label: "Details",
      value: "details",
      icon: <BsThreeDots className="text-3xl" />,
      content: (
        <ProductDetails
          details={productDetails}
          highlights={productHighlights}
        />
      ),
    },
    {
      label: "Reviews",
      value: "reviews",
      icon: <MdOutlineStarOutline className="text-3xl" />,
      content: (
        <ProductReviews
          averageRating={averageRating}
          reviewCount={reviewCount}
          totalSold={totalSold}
          productId={productId}
        />
      ),
    },
  ];
  return (
    <div>
      <VerticalTab tabsContent={tabsContent} />
    </div>
  );
}
