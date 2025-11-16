"use client"
import React, { useEffect, useState } from "react";
import style from './headphones.module.css';
import SideMenu from "../sideMenu/SideMenu";
import Link from "next/dist/client/link";
import Image from "next/image";

const Headphones: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [filtering, setFiltering] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");
  const [shoppingList, setShoppingList] = useState<any[]>([]); // State to store the shopping list
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (err: any) {
        setError(err.message);
      }
    };

    const fetchShoppingList = async () => {
      try {
        const shoppingListData = await getShoppingCartList();
        setShoppingList(shoppingListData.lineItems || []);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
    fetchShoppingList();
  }, []);

function fetchProducts() {
    // Placeholder function to simulate fetching products
    return Promise.resolve([]);
  }

  function getShoppingCartList() {
    // Placeholder function to simulate fetching shopping list
    return Promise.resolve({ lineItems: [] });
  } 

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setSearchQuery(query);
  }

  function handleSortChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const option = event.target.value;
    setSortOption(option);
  }

  let currentProducts: any[] = []
  let price: number = 200;
  let totalPages: number = 1; 
  
    return (
    <div className={style.headphones}>
            <h2>header</h2>
            <h3>headphones component</h3>
            {/* Additional content and structure for the Headphones component can be added here */}
    
    <div className={style.container}>
        <div className={style.componentWrapper}>


      {/* <div className={style.breadcrumbWrapper}>
      </div> */}
      <SideMenu
        products={products}
        setFilteredProducts={setFilteredProducts}
        setFiltering={setFiltering}
        searchQuery={searchQuery} // Pass searchQuery to SideMenu
      />
      <div className={style.productsWrapper}>
        <div className={style.topBar}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className={style.searchInput}
          />
          <select
            value={sortOption}
            onChange={handleSortChange}
            className={style.sortDropdown}
          >
            <option value="">Sort by</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
        <div>products.....</div>
        {filtering && (
          <div id="product_grid" className={style.productGrid}>
            {currentProducts.map((product) => (
              <div key={product.id} className={style.productCard}>
                <Link href={`/catalogue/${product.id}`} id={product.id}>
                  {product.imageUrls[0] && (
                    <Image
                      src={product.imageUrls[0]}
                      priority={true}
                      height={200}
                      width={220}
                      alt={product.name}
                      className={style.productImage}
                    />
                  )}
                  <h2 className={style.productName}>{product.name}</h2>
                  <p className={style.productDescription}>
                    {product.description}
                  </p>
                  {product.prices[0] && (
                    <div className={style.productPrice}>
                      {product.discount ? (
                        <>
                          <p className={style.originalPrice}>
                            {price}$
                          </p>
                          <p className={style.discountedPrice}>
                              {price}$  
                          </p>
                        </>
                      ) : (
                        <p className={style.productPriceAmount}>
                              {price}$
                        </p>
                      )}
                    </div>
                  )}
                </Link>
                <button 
                className="cart_functions"
                //   onClick={() => addToCart(product)}
                //   className={style.addToCartButton}
                //   disabled={isProductInCart(product)}
                >
                  {/* {isProductInCart(product) ? "In Cart" : "Add to Cart"} */}
                </button>
              </div>
            ))}
          </div>
        )}
        </div>

        </div>
        <div className={style.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={style.button_pagination}
          >
            PREV
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={style.button_pagination}
          >
            NEXT
          </button>
        </div>
      
 
            </div>
        </div>
    );
}

export default Headphones;
