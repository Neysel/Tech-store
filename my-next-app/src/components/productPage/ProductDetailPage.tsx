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
  const { currentUser, isLoggedIn } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (productId) {
      const foundProduct = mockData.inventory.find(
        (item: Product) => item.product_id === productId
      ) as Product;
      
      setProduct(foundProduct || null);
      setLoading(false);
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        item: {
          id: product.product_id,
          name: product.name,
          price: product.price,
          image: product.image,
        },
        userId: currentUser?.user_id
      }));
    }
  };

  if (loading) {
    return (
      <div className={style.productDetailContainer}>
        <Header />
        <div className={style.loadingContainer}>
          <div className={style.loadingSpinner}></div>
          <p style={{ color: '#94a3b8' }}>Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={style.productDetailContainer}>
        <Header />
        <div className={style.errorContainer}>
          <h1 className={style.errorTitle}>Product Not Found</h1>
          <p className={style.errorMessage}>The product you're looking for doesn't exist.</p>
          <a href="/products/all_products" className={style.backButton}>Browse Products</a>
        </div>
      </div>
    );
  }

  return (
    <>  
      <Header />
      <div className={style.productDetailContainer}>
        <div className={style.glowEffect}></div>
        <div className={style.container}>
          {/* Breadcrumb */}
          {/* <nav className={style.breadcrumb}>
            <ol>
              <li><a href="/">Home</a></li>
              <li className={style.separator}>/</li>
              <li><a href={`/${product.category.toLowerCase()}`}>{product.category}</a></li>
              <li className={style.separator}>/</li>
              <li className={style.current}>{product.name}</li>
            </ol>
          </nav> */}

          {/* Product Details */}
          <div className={style.productGrid}>
            {/* Product Image */}
            <div className={style.productImageContainer}>
              {product.image ? (
                <div className={style.productImageWrapper}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={style.productImage}
                    priority
                  />
                </div>
              ) : (
                <div className={style.noImagePlaceholder}>
                  <span>No Image Available</span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className={style.productInfo}>
              <h1 className={style.productTitle}>{product.name}</h1>
              <p className={style.productBrand}>{product.brand}</p>
              
              <div className={style.priceSection}>
                <div className={style.price}>
                  ${product.price.toFixed(2)}
                  {product.currency && <span className={style.currency}>{product.currency}</span>}
                </div>
              </div>

              <div className={style.stockStatus}>
                <span className={`${style.statusBadge} ${
                  product.in_stock ? style.inStock : style.outOfStock
                }`}>
                  {product.in_stock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              <div className={style.productDescription}>
                {product.description}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`${style.addToCartButton} ${!product.in_stock ? style.disabled : ''}`}
                disabled={!product.in_stock}
              >
                {product.in_stock ? 'Add to Cart' : 'Out of Stock'}
              </button>

              {/* Additional Info */}
              {product.warranty_months && (
                <div className={style.warrantyInfo}>
                  <p className={style.warrantyText}>
                    <span className={style.warrantyIcon}>📦</span>
                    {product.warranty_months} months warranty
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Specifications */}
          {product.specifications && (
            <div className={style.specifications}>
              <h2>Specifications</h2>
              <div className={style.specsGrid}>
                {product.specifications.color && (
                  <div className={style.specItem}>
                    <span className={style.specLabel}>Color</span>
                    <span className={style.specValue}>{product.specifications.color}</span>
                  </div>
                )}
                
                {product.specifications.battery_life_hours && (
                  <div className={style.specItem}>
                    <span className={style.specLabel}>Battery Life</span>
                    <span className={style.specValue}>{product.specifications.battery_life_hours} hours</span>
                  </div>
                )}
                
                {product.specifications.noise_cancellation !== undefined && (
                  <div className={style.specItem}>
                    <span className={style.specLabel}>Noise Cancellation</span>
                    <span className={style.specValue}>{product.specifications.noise_cancellation ? 'Yes' : 'No'}</span>
                  </div>
                )}
                
                {product.specifications.connectivity && product.specifications.connectivity.length > 0 && (
                  <div className={style.specItem}>
                    <span className={style.specLabel}>Connectivity</span>
                    <span className={style.specValue}>{product.specifications.connectivity.join(', ')}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}