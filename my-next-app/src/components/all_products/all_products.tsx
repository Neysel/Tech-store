    "use client"
    import React, { useEffect, useState, useMemo } from "react";
    import style from './all_products.module.css';
    import SideMenu from "../sideMenu/SideMenu";
    import Link from "next/dist/client/link";
    import Image from "next/image";
    import mockData from "../../mock_data/data.json";
    import { Product } from "../../interfaces/product";


interface AllProductsProps {
  category?: string; // Add this line
}

    const all_products: React.FC<AllProductsProps > = ({ category }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [filtering, setFiltering] = useState<boolean>(true);
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
             console.log("products", products);
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
    }, [category ]);


// Calculate sorted and searched products
let sortedAndSearchedProducts = React.useMemo(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    // Apply sorting
    if (sortOption) {
      switch (sortOption) {
        case "name-asc":
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          result.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "price-asc":
          result.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          result.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }
    }
    
    return result;
  }, [products, searchQuery, sortOption]);
    

// Update filtered products when sortedAndSearchedProducts changes
useEffect(() => {
    setFilteredProducts(sortedAndSearchedProducts);
    setCurrentPage(1); // Reset to first page when filters change
  }, [sortedAndSearchedProducts]);

  // Pagination calculations
  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentProducts = sortedAndSearchedProducts.slice(indexOfFirstItem, indexOfLastItem);
  let totalPages = Math.ceil(sortedAndSearchedProducts.length / itemsPerPage);

  async function fetchProducts(): Promise<Product[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      


      
      if (Array.isArray(mockData.inventory)) {
          let filteredData = mockData.inventory; 

             if (category) {
          filteredData = mockData.inventory.filter(product => 
            product.category.toLowerCase() === category.toLowerCase()
          );
        }

          return filteredData as Product[];
      } 
      
      console.warn("Mock data structure not recognized, returning empty array");
      return [];
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
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

    
        return (
        <div className={style.headphones}>
                <h2>header</h2>
                <h3>{category ? `${category}` : 'All Products'}</h3>
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

            {/* <div>products.....</div> */}

              {searchQuery && (
                <span> matching "{searchQuery}"</span>
              )}

            {filtering && (
              <div id="product_grid" className={style.productGrid}>
                {currentProducts.length > 0 ? (
                  currentProducts.map((product) => (
                    <div key={product.product_id} className={style.productCard}>
                      <Link 
                        href={{
                        pathname: '/products/all_products/product_item',
                        query: { 
                          id: product.product_id,
                          category: category || 'all'
                        }
                        // http://localhost:3000/products/all_products/product_item?id=ELEC-001
                      }}
                       as={`/products/${category ? category.toLowerCase() : 'all_products'}/product_item?id=${product.product_id}`}
                      
                      id={product.product_id}>
                        {product.image ? (
                          <Image
                            src={product.image}
                            priority={true}
                            height={200}
                            width={220}
                            alt={product.name}
                            className={style.productImage}
                          />
                        ) : (
                          <div className={style.placeholderImage}>No Image</div>
                        )}
                        <h2 className={style.productName}>{product.name}</h2>
                        <p className={style.productDescription}>
                          {product.description}
                        </p>
                        {product.price && (
                          <div className={style.productPrice}>
                            Price: ${product.price.toFixed(2)}
                            {product.in_stock === false && (
                              <span className={style.outOfStock}> - Out of Stock</span>
                            )}
                          </div>
                        )}
                      </Link>
                      <button 
                        className="cart_functions"
                        disabled={!product.in_stock}
                      >
                        {product.in_stock ? "Add to Cart" : "Out of Stock"}
                      </button>
                    </div>
                  ))
                ) : (
                  <div className={style.noProducts}>
                    No products found. Try adjusting your search or filters.
                  </div>
                )}
              </div>
            )}
            </div>

            </div>
             {/* {totalPages > 1 && ( */}
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
                 {/* )}             */}
                </div>
            </div>
        );
    }

    export default all_products;
