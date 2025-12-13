"use client"
import React, { Suspense, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import mockData from '../../../../mock_data/data.json';
import { Product } from '../../../../interfaces/product';
import Image from 'next/image';
import Link from 'next/link';

import ProductItemPage from '@/components/productPage/ProductDetailPage';;

export default function MicrophoneProductItemPage() {
return (
<Suspense fallback={<div>Loading product info...</div>}>
        <ProductItemPage />
</Suspense>
);
}