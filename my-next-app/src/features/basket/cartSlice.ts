import { CartItem, CartState } from '@/interfaces/basket';
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { localStorageUtil } from '@/utils/localStorage';

// Load initial state from localStorage
const getInitialState = (): CartState => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorageUtil.getItem('cart');
    return savedCart || { items: [], total: 0 };
  }
  return { items: [], total: 0 };
};

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{item: Omit<CartItem, 'quantity'>, userId?: string}>) => {
  //  console.log('addToCart reducer called with:', action.payload);
       const { item, userId } = action.payload;

      const existingItem = state.items.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
          // console.log('Increased quantity for existing item:', existingItem);
      } else {
        state.items.push({ ...item, quantity: 1 });
        //  console.log('Added new item to cart:', newItem);
      }
      
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        // console.log('Updated cart state:', state);

      localStorageUtil.setCart(state, userId);
    },
    removeFromCart: (state, action: PayloadAction<{ id: string, userId?: string }>) => {
      const { id, userId } = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      
      localStorageUtil.setCart(state, userId);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number; userId?: string }>) => {
      const { id, quantity, userId } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
        state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        
        localStorageUtil.setCart(state, userId);
      }
    },
    clearCart: (state, action: PayloadAction<{ userId?: string }>) => {
      const { userId } = action.payload;
      state.items = [];
      state.total = 0;
      
      localStorageUtil.clearCart(userId);
    },
     loadCart: (state, action: PayloadAction<{ userId?: string }>) => {
      const { userId } = action.payload;
      const savedCart = localStorageUtil.getCart(userId);
      if (savedCart) {
        state.items = savedCart.items || [];
        state.total = savedCart.total || 0;
      } else {
        state.items = [];
        state.total = 0;
      }
    },
    switchUserCart: (state, action: PayloadAction<{ fromUserId?: string; toUserId?: string }>) => {
      // When user logs in/out, switch between carts
      const { fromUserId, toUserId } = action.payload;
      const currentCart = { ...state };
      
      // Save current cart for the old user
      if (fromUserId) {
        localStorageUtil.setCart(currentCart, fromUserId);
      }
      
      // Load cart for the new user
      const newCart = localStorageUtil.getCart(toUserId) || { items: [], total: 0 };
      state.items = newCart.items;
      state.total = newCart.total;
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;