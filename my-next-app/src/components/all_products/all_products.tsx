    "use client"
    import React, { useEffect, useState, useMemo } from "react";
    import style from './all_products.module.css';
    import SideMenu from "../sideMenu/SideMenu";
    import Link from "next/link";
    import Image from "next/image";
    import mockData from "../../mock_data/data.json";
    import { Product } from "../../interfaces/product";
import { useDebounce } from "@/hooks/debounce";


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
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
     const [isLoading, setIsLoading] = useState<boolean>(false);
      const [showLoading, setShowLoading] = useState<boolean>(false); 

    const debouncedSearchQuery = useDebounce(searchQuery, 2000);
    const debouncedPriceRange = useDebounce(priceRange, 2000);
    const debouncedSelectedBrands = useDebounce(selectedBrands, 2000);
    const debouncedSelectedColors = useDebounce(selectedColors, 2000);
    const debouncedSortOption = useDebounce(sortOption, 2000);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const productsData = await fetchProducts();

            console.log("Fetched products data:", productsData);

            setProducts(productsData);
            setFilteredProducts(productsData);

          if (productsData.length > 0) {
          const prices = productsData.map(p => p.price);
          const minPrice = Math.min(...prices);
          const maxPrice = Math.max(...prices);
          setPriceRange([minPrice, maxPrice]);
        }

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
    }, [category]);

        // Show loading when debounced values change
    useEffect(() => {
        setShowLoading(true);
        setIsLoading(true);
    }, [debouncedSearchQuery, debouncedPriceRange, debouncedSelectedBrands, debouncedSelectedColors, debouncedSortOption]);

// Calculate sorted and searched products
    useEffect(() => {
        let result = [...products];
        
        // Apply search filter
        if (debouncedSearchQuery) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
                product.brand.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
                (product.description && product.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase()))
            );
        }
        
        // Apply price range filter
        result = result.filter(product => 
            product.price >= debouncedPriceRange[0] && product.price <= debouncedPriceRange[1]
        );
        
        // Apply brand filter
        if (debouncedSelectedBrands.length > 0) {
            result = result.filter(product => 
                debouncedSelectedBrands.includes(product.brand)
            );
        }
        
        // Apply color filter
        if (debouncedSelectedColors.length > 0) {
            result = result.filter(product => 
                product.specifications?.color && debouncedSelectedColors.includes(product.specifications.color)
            );
        }

        // Apply sorting
        if (debouncedSortOption) {
            switch (debouncedSortOption) {
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
        
        // Set a minimum display time for loading animation (500ms)
        const timer = setTimeout(() => {
            setFilteredProducts(result);
            setCurrentPage(1);
            setIsLoading(false);
            setShowLoading(false);
        }, 500); // Minimum 500ms loading display
        
        return () => clearTimeout(timer);
    }, [
        products, 
        debouncedSearchQuery, 
        debouncedSortOption, 
        debouncedPriceRange, 
        debouncedSelectedBrands, 
        debouncedSelectedColors
    ]);

  // Pagination calculations
    const { currentProducts, totalPages } = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    return { currentProducts, totalPages };
  }, [filteredProducts, currentPage, itemsPerPage]);

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
        {/* Updated SideMenu with all filter props */}
          <SideMenu
            products={products}
            setFilteredProducts={() => {}}
            setFiltering={setFiltering}
            searchQuery={searchQuery}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
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
            {isLoading ? (
  <div>
    <div className={style.loadingContainer}>
      <div className={style.loadingSpinner}></div>
      <div className={style.loadingText}>Applying filters...</div>
    </div>
    <div className={style.skeletonGrid}>
      {[...Array(8)].map((_, index) => (
        <div key={index} className={style.skeletonCard}>
          <div className={style.skeletonImage}></div>
          <div className={`${style.skeletonText} ${style.skeletonTextShort}`}></div>
          <div className={`${style.skeletonText} ${style.skeletonTextMedium}`}></div>
          <div className={`${style.skeletonText} ${style.skeletonTextShort}`}></div>
          <div className={style.skeletonButton}></div>
        </div>
      ))}
    </div>
  </div>
)  : ( 
              <div>
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
              
            ) }

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

