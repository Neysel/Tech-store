// components/cart/CartManager.tsx
"use client"
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { loadCart, mergeCarts, switchUserCart } from '@/features/basket/cartSlice';

export default function CartManager() {
  const dispatch = useAppDispatch();
  const { currentUser, isLoggedIn } = useAppSelector((state) => state.auth);
  const prevIsLoggedIn = useRef(isLoggedIn);
  const prevUserId = useRef(currentUser?.user_id);

  // Load appropriate cart on component mount
  useEffect(() => {
    if (isLoggedIn && currentUser) {
      console.log('CartManager: Loading user cart for', currentUser.user_id);
      dispatch(loadCart({ userId: currentUser.user_id }));
    } else {
      console.log('CartManager: Loading guest cart');
      dispatch(loadCart({}));
    }
  }, []);

  // Handle auth state changes
  useEffect(() => {
    // User just logged in
    if (isLoggedIn && currentUser && !prevIsLoggedIn.current) {
      console.log('CartManager: User logged in, merging carts for', currentUser.user_id);
      dispatch(mergeCarts({ userId: currentUser.user_id }));
    }
    // User just logged out
    else if (!isLoggedIn && prevIsLoggedIn.current && prevUserId.current) {
      console.log('CartManager: User logged out, switching to guest cart');
      dispatch(switchUserCart({ 
        fromUserId: prevUserId.current, 
        toUserId: undefined 
      }));
    }

    // Update previous values
    prevIsLoggedIn.current = isLoggedIn;
    prevUserId.current = currentUser?.user_id;
  }, [isLoggedIn, currentUser, dispatch]);

  return null; // This component doesn't render anything
}