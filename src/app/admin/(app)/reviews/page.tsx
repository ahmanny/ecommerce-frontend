import ReviewsManagement from "@/components/admin/reviewsManagement";

async function fetchData() {
  return new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate 3s delay
}

export default async function ReviewsPage() {
  return (
    <div>
      <ReviewsManagement />
    </div>
  );
}
