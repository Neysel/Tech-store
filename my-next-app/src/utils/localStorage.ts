export const localStorageUtil = {
  getCartKey: (userId?: string) => {
    return userId ? `techero_cart_${userId}` : 'techero_cart_guest';
  },

  getItem: (key: string) => {
    if (typeof window !== 'undefined') {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.error('Error parsing localStorage item:', error);
        return null;
      }
    }
    return null;
  },

  setItem: (key: string, value: any) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error('Error setting localStorage item:', error);
      }
    }
  },

  removeItem: (key: string) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  },

  // User-specific cart methods
  getCart: (userId?: string) => {
    const key = localStorageUtil.getCartKey(userId);
    const cart = localStorageUtil.getItem(key);
    console.log(`Getting cart for ${userId || 'guest'}:`, cart);
    return cart || { items: [], total: 0 }; // Return default if null
  },

  setCart: (cartData: any, userId?: string) => {
    const key = localStorageUtil.getCartKey(userId);
    console.log(`Setting cart for ${userId || 'guest'}:`, cartData);
    localStorageUtil.setItem(key, cartData);
  },

  clearCart: (userId?: string) => {
    const key = localStorageUtil.getCartKey(userId);
    console.log(`Clearing cart for ${userId || 'guest'}`);
    localStorageUtil.removeItem(key);
  }
};