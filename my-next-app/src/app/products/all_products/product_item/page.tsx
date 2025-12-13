"use client"

import ProductItemPage from '@/components/productPage/ProductDetailPage';
import { Suspense } from 'react';

export default function ProductItemPageGeneral() {
return (
    <Suspense fallback={<div>Loading product info...</div>}>
        <ProductItemPage />
      </Suspense>

);
}