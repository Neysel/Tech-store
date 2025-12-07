"use client"
import * as React from 'react';
import { Product } from '../../interfaces/product';
import style from './sideMenu.module.css';
import { usePathname } from 'next/navigation';

interface SideMenuProps {
  products: Product[];
  setFilteredProducts: (products: Product[]) => void;
  setFiltering: (filtering: boolean) => void;
  searchQuery: string;
  // New props for filtering
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
    priceRange,
    setPriceRange,
    selectedBrands,
    setSelectedBrands,
    selectedColors,
    setSelectedColors
  } = props;

const pathname = usePathname(); 

  let minValue = 40
  let currentMaxValue = 400
  let maxValue = 2000

   // Refs for the slider elements
  let sliderOneRef = React.useRef<HTMLInputElement>(null);
  let sliderTwoRef = React.useRef<HTMLInputElement>(null);
  let displayValOneRef = React.useRef<HTMLSpanElement>(null);
  let displayValTwoRef = React.useRef<HTMLSpanElement>(null);
  let sliderTrackRef = React.useRef<HTMLDivElement>(null);
  let [sliderValues, setSliderValues] = React.useState<[number, number]>([minValue, currentMaxValue]);
  let minGap = 0;
  let sliderMaxValue = maxValue;


  
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
    return { min: 0, max: maxValue };
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

  // Handle min price change
  const handleMinPriceChange = (min: number) => {
    setPriceRange([min, priceRange[1]]);
  };

  // Handle max price change
  const handleMaxPriceChange = (max: number) => {
    setPriceRange([priceRange[0], max]);
  };

  // Handle slider change
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const value = Number(event.target.value);
    if (type === 'min') {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  /////////////////////////
  // Double range slider functions
  /////////////////////////
  
  const slideOne = React.useCallback((value: number) => {
    if (sliderValues[1] - value <= minGap) {
      const newMin = sliderValues[1] - minGap;
      setSliderValues([newMin, sliderValues[1]]);
    } else {
      setSliderValues([value, sliderValues[1]]);
    }
  }, [sliderValues]);

  const slideTwo = React.useCallback((value: number) => {
    if (value - sliderValues[0] <= minGap) {
      const newMax = sliderValues[0] + minGap;
      setSliderValues([sliderValues[0], newMax]);
    } else {
      setSliderValues([sliderValues[0], value]);
    }
  }, [sliderValues]);

  const fillColor = React.useCallback(() => {
    if (!sliderTrackRef.current) return;
    
    const percent1 = (sliderValues[0] / sliderMaxValue) * 100;
    const percent2 = (sliderValues[1] / sliderMaxValue) * 100;
    sliderTrackRef.current.style.height = `5px`
    sliderTrackRef.current.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;

  }, [sliderValues]);


 // Update display values and fill color when slider values change
  React.useEffect(() => {
    if (displayValOneRef.current) {
      displayValOneRef.current.textContent = sliderValues[0].toString();
    }
    if (displayValTwoRef.current) {
      displayValTwoRef.current.textContent = sliderValues[1].toString();
    }
    fillColor();
  }, [sliderValues, fillColor]);

;


  // Clear all filters
  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setPriceRange([priceStats.min, priceStats.max]);
  };


  const isActiveSimple = (href: string) => {
    // For category links like "/products/headphones"
    
    if (!pathname) return false;
    const category = href.replace('/products/', '');
    return pathname.includes(`/products/${category}`);
  };
  
  return (
    <div className={style.sideMenu}>
      <h2>Filters</h2>
      <div>
      {/* Price Range Filter */}
      <div className={style.filterSection}>
        {/* <h3>Price Range</h3> */}
  <div className={style.wrapper}>
        <div className={style.values}>
          <div> MIN : <span ref={displayValOneRef}>{sliderValues[0]}</span>
          <span>$</span></div>

          {/* <span>–</span> */}
          <div> MAX : <span ref={displayValTwoRef}>{sliderValues[1]}</span>
          <span>$</span>
          </div>

        </div>

        <div className={`${style.container_slider}`}>
          <div className={`${style.sliderTrack} ${style.sliderContainer}`}  ref={sliderTrackRef}></div>
          <input 
            type="range" 
             min={priceStats.min}
            max={priceStats.max} 
            // value={sliderValues[0]} 
            value={sliderValues[0]}
            ref={sliderOneRef}
            onChange={(e) => 
              {
                slideOne(Number(e.target.value));handleSliderChange(e, 'min');
              }}
            className={`${style.sliderInput} ${style.priceSlider}`}
          />
          <input 
            type="range" 
            min={priceStats.min}
            max={priceStats.max}
            value={sliderValues[1]} 
            ref={sliderTwoRef}
            onChange={(e) => {
              slideTwo(Number(e.target.value));
              handleSliderChange(e, 'max');
            }}
            className={`${style.sliderInput} ${style.priceSlider}`}
          />
        </div>
      </div>
        <div className={style.priceInputs}>
          <input
            type="number"
            // value={priceRange[0]}
            value={sliderValues[0]}
            onChange={(e) => handleMinPriceChange(Number(e.target.value))}
            min={priceStats.min}
            max={priceStats.max}
            className={style.priceInput}
          />
          <input
            type="number"
            // value={priceRange[1]}
            value={sliderValues[1]}
            onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
            min={priceStats.min}
            max={priceStats.max}
            className={style.priceInput}
          />
        </div>
        {/* <div className={style.sliderContainer}>
          <label>Min: ${priceRange[0]}</label>
          <input
            type="range"
            min={priceStats.min}
            max={priceStats.max}
            value={priceRange[0]}
            onChange={(e) => handleSliderChange(e, 'min')}
            className={style.priceSlider}
          />
          <label>Max: ${priceRange[1]}</label>
          <input
            type="range"
            min={priceStats.min}
            max={priceStats.max}
            value={priceRange[1]}
            onChange={(e) => handleSliderChange(e, 'max')}
            className={style.priceSlider}
          />
        </div> */}
      </div>

      {/* Brand Filter */}
      <div className={style.filterSection}>
        <h3>Brands</h3>
        <div className={style.checkboxGroup}>
          {brands.map(brand => (
            <label key={brand} className={style.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className={style.checkboxInput}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      {colors.length > 0 && (
        <div className={style.filterSection}>
          <h3>Colors</h3>
          <div className={style.checkboxGroup}>
            {colors.map(color => (
              <label key={color} className={style.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color)}
                  onChange={() => handleColorChange(color)}
                  className={style.checkboxInput}
                />
                {color}
              </label>
            ))}
          </div>
        </div>
      )}   


      {/* Clear Filters Button */}
      <button onClick={clearFilters} className={style.clearFiltersBtn}>
        Clear All Filters
      </button>

      </div>

      <div className='nav_module'>
 <nav className={style.nav}>
          <a 
            href="/products/all_products" 
            className={`${style.navLink} ${isActiveSimple('/products/all_products') ? style.active : ''}`}
          >
            All products
          </a>
          <a 
            href="/products/headphones" 
            className={`${style.navLink} ${isActiveSimple('/products/headphones') ? style.active : ''}`}
          >
            Headphones
          </a>
          <a 
            href="/products/microphone_stands" 
            className={`${style.navLink} ${isActiveSimple('/products/microphone_stands') ? style.active : ''}`}
          >
            Microphone stands
          </a>
          <a 
            href="/products/microphones" 
            className={`${style.navLink} ${isActiveSimple('/products/microphones') ? style.active : ''}`}
          >
            Microphones
          </a>
          <a 
            href="/products/portable_loudspeakers" 
            className={`${style.navLink} ${isActiveSimple('/products/portable_loudspeakers') ? style.active : ''}`}
          >
            Portable loudspeakers
          </a>
          <a 
            href="/products/earphones" 
            className={`${style.navLink} ${isActiveSimple('/products/earphones') ? style.active : ''}`}
          >
            Earphones
          </a>
        </nav>
      </div>

    </div>
  );
};

export default SideMenu;