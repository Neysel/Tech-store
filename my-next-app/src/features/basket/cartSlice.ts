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
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);

       // Save to localStorage
      if (userId) {
        localStorageUtil.setCart({ items: state.items, total: state.total }, userId);
      } else {
        localStorageUtil.setCart({ items: state.items, total: state.total });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string, userId?: string }>) => {
      const { id, userId } = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      
       // Save to localStorage
      if (userId) {
        localStorageUtil.setCart({ items: state.items, total: state.total }, userId);
      } else {
        localStorageUtil.setCart({ items: state.items, total: state.total });
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number; userId?: string }>) => {
      const { id, quantity, userId } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
        state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        
         // Save to localStorage
      if (userId) {
        localStorageUtil.setCart({ items: state.items, total: state.total }, userId);
      } else {
        localStorageUtil.setCart({ items: state.items, total: state.total });
      }
      }
    },
    clearCart: (state, action: PayloadAction<{ userId?: string }>) => {
      const { userId } = action.payload;
      state.items = [];
      state.total = 0;
      
      if (userId) {
        localStorageUtil.clearCart(userId);
      } else {
        localStorageUtil.clearCart();
      }
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

    mergeCarts: (state, action: PayloadAction<{ userId: string }>) => {
      const { userId } = action.payload;
      
      // Get guest cart (no userId)
      const guestCart = localStorageUtil.getCart() || { items: [], total: 0 };
      // Get user's existing cart
      const userCart = localStorageUtil.getCart(userId) || { items: [], total: 0 };
      
      console.log('Merging carts - Guest:', guestCart, 'User:', userCart);
      
      // Create a map to track items by product ID for efficient merging
      const itemsMap = new Map<string, CartItem>();
      
      // First, add all items from user's existing cart
      userCart.items.forEach((item: CartItem) => {
        itemsMap.set(item.id, { ...item });
      });
      
      // Then merge guest cart items
      guestCart.items.forEach((guestItem: CartItem) => {
        const existingItem = itemsMap.get(guestItem.id);
        
        if (existingItem) {
          // If item exists in both carts, sum the quantities
          existingItem.quantity += guestItem.quantity;
        } else {
          // If item only exists in guest cart, add it
          itemsMap.set(guestItem.id, { ...guestItem });
        }
      });
      
      // Convert map back to array
      const mergedItems = Array.from(itemsMap.values());
      const mergedTotal = mergedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      // Update the state with merged cart
      state.items = mergedItems;
      state.total = mergedTotal;
      
      // Save merged cart to user's storage
      localStorageUtil.setCart({ items: mergedItems, total: mergedTotal }, userId);
      
      // Clear guest cart after successful merge
      localStorageUtil.clearCart();
      
      console.log('Merged cart result:', { items: mergedItems, total: mergedTotal });
    },
  switchUserCart: (state, action: PayloadAction<{ fromUserId?: string; toUserId?: string }>) => {
      const { fromUserId, toUserId } = action.payload;
      const currentCart = { items: [...state.items], total: state.total };
      
      // Save current cart for the old user (if any)
      if (fromUserId) {
        localStorageUtil.setCart(currentCart, fromUserId);
      }
      
      // Load cart for the new user (or guest)
      const newCart = localStorageUtil.getCart(toUserId) || { items: [], total: 0 };
      state.items = newCart.items;
      state.total = newCart.total;
      
      console.log(`Switched cart - From: ${fromUserId || 'guest'}, To: ${toUserId || 'guest'}`);
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, loadCart, mergeCarts,
  switchUserCart } = cartSlice.actions;
export default cartSlice.reducer;