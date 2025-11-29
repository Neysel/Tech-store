// utils/localStorage.ts
export const localStorageUtil = {
  getCartKey: (userId?: string) => {
    return userId ? `cart_${userId}` : 'cart_guest';
  },

  getItem: (key: string) => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  },

  setItem: (key: string, value: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
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
    return localStorageUtil.getItem(key);
  },

  setCart: (cartData: any, userId?: string) => {
    const key = localStorageUtil.getCartKey(userId);
    localStorageUtil.setItem(key, cartData);
  },

  clearCart: (userId?: string) => {
    const key = localStorageUtil.getCartKey(userId);
    localStorageUtil.removeItem(key);
  }
};