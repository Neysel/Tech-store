"use client"
import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function ProductDetailPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  // Your product detail logic using productId
}