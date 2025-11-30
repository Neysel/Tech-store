import CheckoutPage from "@/components/checkout/Checkout";


interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return <CheckoutPage />;
}