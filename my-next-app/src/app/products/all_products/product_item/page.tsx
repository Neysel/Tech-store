"use client"
import React from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import mockData from '../../../../mock_data/data.json';
import { Product } from '../../../../interfaces/product';
import Image from 'next/image';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.slug?.[0] as string;

  // Find the product in mock data
  const product = mockData.inventory.find(
    (item: Product) => item.product_id === productId
  );

  if (!product) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p>The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex space-x-2 text-sm text-gray-500">
          <li><a href="/" className="hover:text-gray-700">Home</a></li>
          <li>/</li>
          <li><a href={`/${product.category.toLowerCase()}`} className="hover:text-gray-700">{product.category}</a></li>
          <li>/</li>
          <li className="text-gray-900">{product.name}</li>
        </ol>
      </nav>

      {/* Product Details - same as before */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="product-image">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full rounded-lg"
            />
          ) : (
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
          
          <div className="mb-6">
            <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            {product.currency && <span className="text-gray-500 ml-2">{product.currency}</span>}
          </div>

          {/* Rest of your product details */}
          <button
            className={`w-full py-3 px-6 rounded-lg font-semibold ${
              product.in_stock
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!product.in_stock}
          >
            {product.in_stock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
}