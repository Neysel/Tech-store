// app/not-found.tsx
"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './not-found.module.css';
import Header from '../header/Header';
import Footer from '../footer/footer';
import Link from 'next/link';
import { FaHome, FaArrowLeft, FaSearch, FaShoppingCart, FaHeadphones, FaLaptop } from 'react-icons/fa';

const NotFoundPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/products/all_products?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <><Header /> 
    <div className={styles.notFound}>
              
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
        
        {/* Particles */}
        <div className={styles.particles}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle}></div>
          ))}
        </div>
      </div>


      
      <main className={styles.mainContent}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorTitle}>Page Not Found</h2>
        
        <p className={styles.errorMessage}>
          Oops! The page you&apos;re looking for seems to have wandered off into the digital void. 
          Don&apos;t worry, let&apos;s find our way back together.
        </p>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <Link href="/" className={styles.homeButton}>
            <FaHome className={styles.icon} />
            Go Home
          </Link>
          
          <button onClick={handleBack} className={styles.backButton}>
            <FaArrowLeft className={styles.icon} />
            Go Back
          </button>
        </div>

        {/* Search Box */}
        {/* <div className={styles.searchBox}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for products, categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              <FaSearch />
            </button>
          </form>
        </div> */}

        {/* Popular Links */}
        <div className={styles.suggestions}>
          <h3 className={styles.suggestionsTitle}>Popular Pages:</h3>
          <div className={styles.suggestionLinks}>
            <Link href="/products/all_products" className={styles.suggestionLink}>
              <FaShoppingCart /> All Products
            </Link>
            <Link href="/products/headphones" className={styles.suggestionLink}>
              <FaHeadphones /> Headphones
            </Link>
            <Link href="/basket" className={styles.suggestionLink}>
              <FaShoppingCart /> Shopping Cart
            </Link>
            {/* <Link href="/products/laptops" className={styles.suggestionLink}>
              <FaLaptop /> Laptops
            </Link> */}
          </div>
        </div>
      </main>

     
    </div>
     <Footer />
    </>
  );
};

export default NotFoundPage;