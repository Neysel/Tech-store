import AllProducts from '../../../components/all_products/all_products';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return <AllProducts category="microphone_stands" />;
}