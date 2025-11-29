"use client"
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import mockData from '../../mock_data/data.json'
import Image from 'next/image';
import { Product } from '@/interfaces/product';
import style from './ProductDetailPage.module.css'
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { addToCart } from '@/features/basket/cartSlice';
import Header from '../header/Header';


export default function ProductItemPage() {
  const searchParams = useSearchParams();
  const productId = searchParams?.get('id');
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const { currentUser, isLoggedIn,  } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (productId) {
      // Find the product in mock data
      const foundProduct = mockData.inventory.find(
        (item: Product) => item.product_id === productId
      ) as Product;
      
      setProduct(foundProduct || null);
      setLoading(false);
    }
  }, [productId]);


 // Add to cart handler
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        item: {
          id: product.product_id,
          name: product.name,
          price: product.price,
          image: product.image,
        },
        userId: currentUser?.user_id // Pass user ID if logged in
      }));
    }
  };

  if (loading) {
    return <div className="container mx-auto p-8">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p>The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <>  
              <Header/>
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

      {/* Product Details */}
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

          <div className="mb-6">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              product.in_stock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.in_stock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <div className="mb-6">
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* Add to Cart Button */}
          <button
           onClick={handleAddToCart}
            className={`w-full py-3 px-6 rounded-lg font-semibold ${style.add_to_card_button} ${
              product.in_stock
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!product.in_stock}
          >
            {product.in_stock ? 'Add to Cart' : 'Out of Stock'}
          </button>

          {/* Additional Info */}
          {product.warranty_months && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                📦 {product.warranty_months} months warranty
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Specifications */}
      {product.specifications && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specifications.color && (
              <div className="flex justify-between py-2 border-b">
                <span className="font-semibold">Color</span>
                <span>{product.specifications.color}</span>
              </div>
            )}
            
            {product.specifications.battery_life_hours && (
              <div className="flex justify-between py-2 border-b">
                <span className="font-semibold">Battery Life</span>
                <span>{product.specifications.battery_life_hours} hours</span>
              </div>
            )}
            
            {product.specifications.noise_cancellation !== undefined && (
              <div className="flex justify-between py-2 border-b">
                <span className="font-semibold">Noise Cancellation</span>
                <span>{product.specifications.noise_cancellation ? 'Yes' : 'No'}</span>
              </div>
            )}
            
            {product.specifications.connectivity && product.specifications.connectivity.length > 0 && (
              <div className="flex justify-between py-2 border-b">
                <span className="font-semibold">Connectivity</span>
                <span>{product.specifications.connectivity.join(', ')}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
        </>
  );
}