import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ProductDetail from './ProductDetailPage';
import authReducer from '@/features/auth/authSlice'
import cartReducer from '@/features/basket/cartSlice'

// Mock next/image
jest.mock('next/image', () => {
  return function MockImage(props: any) {
    return <img {...props} />;
  };
});

const mockUseSearchParams = jest.fn();
jest.mock('next/navigation', () => ({
  useSearchParams: () => mockUseSearchParams(),
  useParams: () => ({}),
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
}));

const ProductDetailAny = ProductDetail as any;

const createMockStore = (preloadedState: any) => {
  return configureStore({
    reducer: combineReducers({
      cart: cartReducer,
      auth: authReducer,
    }),
    preloadedState,
  });
};

jest.mock('../../mock_data/data.json', () => ({
  inventory: [
    {
      product_id: '1',
      name: 'Test Product',
      brand: 'Test Brand',
      price: 99.99,
      currency: 'USD',
      in_stock: true,
      description: 'This is a test product description',
      image: '/test-image.jpg',
      category: 'electronics',
      warranty_months: 12,
      specifications: {
        color: 'Black',
        battery_life_hours: 24,
        noise_cancellation: true,
        connectivity: ['Bluetooth', 'USB-C'],
      },
    },
    {
      product_id: '2',
      name: 'Out of Stock Product',
      brand: 'Test Brand',
      price: 49.99,
      currency: 'USD',
      in_stock: false,
      description: 'This product is out of stock',
      image: '/test-image-2.jpg',
      category: 'electronics',
    }
  ]
}), { virtual: true });

describe('ProductDetail Component', () => {
  // Store the original useSearchParams mock
//   const originalUseSearchParams = jest.requireMock('next/navigation').useSearchParams;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseSearchParams.mockReturnValue({
      get: (key: string) => key === 'id' ? '1' : null
    });
  });

  // Test 1: renders product details correctly
  it('renders product details correctly', async () => {
    const store = createMockStore({
      cart: { items: [], total: 0 },
      auth: { currentUser: null, isLoggedIn: false },
    });

    render(
      <Provider store={store}>
        <ProductDetailAny />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Test Product' })).toBeInTheDocument();
    });
  });

  // Test 2: adds product to cart when Add to Cart button is clicked
  it('adds product to cart when Add to Cart button is clicked', async () => {
    const store = createMockStore({
      cart: { items: [], total: 0 },
      auth: { currentUser: { user_id: '123' }, isLoggedIn: true },
    });

    render(
      <Provider store={store}>
        <ProductDetailAny />
      </Provider>
    );

   await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Test Product' })).toBeInTheDocument();
    });

    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addToCartButton);

    expect(addToCartButton).toBeInTheDocument();
    expect(addToCartButton).not.toBeDisabled();
  });

  // Test 3: disables Add to Cart button when product is out of stock
  it('disables Add to Cart button when product is out of stock', async () => {
    // Mock the data.json with out of stock product
    mockUseSearchParams.mockReturnValue({
      get: (key: string) => key === 'id' ? '2' : null
    });

    const store = createMockStore({
      cart: { items: [], total: 0 },
      auth: { currentUser: null, isLoggedIn: false },
    });

    // We need to dynamically import after the mock
    const { default: ProductDetailOutOfStock } = await import('./ProductDetailPage');
    const ProductDetailOutOfStockAny = ProductDetailOutOfStock as any;

    render(
      <Provider store={store}>
        <ProductDetailOutOfStockAny />
      </Provider>
    );

     await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Out of Stock Product' })).toBeInTheDocument();
    });

    const addToCartButton = screen.getByRole('button', { name: /out of stock/i });
    expect(addToCartButton).toBeInTheDocument();
    expect(addToCartButton).toBeDisabled();
    expect(addToCartButton).toHaveTextContent('Out of Stock');
  });

  // Test 4: shows product not found for invalid product ID
  it('shows product not found for invalid product ID', async () => {
      // Mock to return non-existent product ID
    mockUseSearchParams.mockReturnValue({
      get: (key: string) => key === 'id' ? '999' : null
    });

    const store = createMockStore({
      cart: { items: [], total: 0 },
      auth: { currentUser: null, isLoggedIn: false },
    });

    render(
      <Provider store={store}>
        <ProductDetailAny />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Product Not Found' })).toBeInTheDocument();
    });

    expect(screen.getByText("The product you're looking for doesn't exist.")).toBeInTheDocument();
  });
});