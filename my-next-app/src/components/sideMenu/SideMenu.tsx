"use client"
import * as React from 'react';
import { Product } from '../../interfaces/product';
import style from './sideMenu.module.css';

interface SideMenuProps {
  products: Product[];
  setFilteredProducts: (products: Product[]) => void;
  setFiltering: (filtering: boolean) => void;
  searchQuery: string;
  // Add new props for filtering
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
}

const SideMenu: React.FC<SideMenuProps> = (props) => {
  const {
    products,
    setFilteredProducts,
    setFiltering,
    searchQuery,
    priceRange,
    setPriceRange,
    selectedBrands,
    setSelectedBrands,
    selectedColors,
    setSelectedColors
  } = props;

  console.log("SideMenu props:", props);

  // Get unique brands and colors from products
  const brands = React.useMemo(() => {
    return Array.from(new Set(products.map(product => product.brand))).sort();
  }, [products]);

  const colors = React.useMemo(() => {
    const allColors = products.flatMap(product => 
      product.specifications?.color ? [product.specifications.color] : []
    );
    return Array.from(new Set(allColors)).sort();
  }, [products]);

  // Get min and max price from products
  const priceStats = React.useMemo(() => {
    if (products.length === 0) return { min: 0, max: 1000 };
    const prices = products.map(p => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  }, [products]);

  // Handle brand selection
  const handleBrandChange = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(newBrands);
  };

  // Handle color selection
  const handleColorChange = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter(c => c !== color)
      : [...selectedColors, color];
    setSelectedColors(newColors);
  };

  // Handle price range change
  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setPriceRange([priceStats.min, priceStats.max]);
  };

  return (
    <div className="side-menu">
      <h2>Filters</h2>
      
      {/* Price Range Filter */}
      <div className="filter-section">
        <h3>Price Range</h3>
        <div className="price-inputs">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => handlePriceRangeChange(Number(e.target.value), priceRange[1])}
            min={priceStats.min}
            max={priceStats.max}
            className="price-input"
          />
          <span> - </span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => handlePriceRangeChange(priceRange[0], Number(e.target.value))}
            min={priceStats.min}
            max={priceStats.max}
            className="price-input"
          />
        </div>
        <input
          type="range"
          min={priceStats.min}
          max={priceStats.max}
          value={priceRange[1]}
          onChange={(e) => handlePriceRangeChange(priceRange[0], Number(e.target.value))}
          className="price-slider"
        />
      </div>

      {/* Brand Filter */}
      <div className="filter-section">
        <h3>Brands</h3>
        <div className="checkbox-group">
          {brands.map(brand => (
            <label key={brand} className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="checkbox-input"
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      {colors.length > 0 && (
        <div className="filter-section">
          <h3>Colors</h3>
          <div className="checkbox-group">
            {colors.map(color => (
              <label key={color} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color)}
                  onChange={() => handleColorChange(color)}
                  className="checkbox-input"
                />
                {color}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Clear Filters Button */}
      <button onClick={clearFilters} className="clear-filters-btn">
        Clear All Filters
      </button>
    </div>
  );
};

export default SideMenu;