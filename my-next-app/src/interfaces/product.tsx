export interface Product {
  product_id: string;
  category: string;
  name: string;
  brand: string;
  price: number;
  currency?: string;
  in_stock?: boolean;
  image?: string;
  description: string;
  specifications?: {
    color?: string;
    battery_life_hours?: number;
    noise_cancellation?: boolean;
    connectivity?: string[];
  };
  warranty_months?: number;
}