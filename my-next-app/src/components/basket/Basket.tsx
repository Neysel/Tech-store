"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { clearCart, removeFromCart, updateQuantity } from '@/features/basket/cartSlice';
import { RootState } from '@/store';
import { CartItem, CartState } from '@/interfaces/basket';
import Header from '../header/Header';
import { checkAuth, logout } from '@/features/auth/authSlice';
import { useRouter } from 'next/navigation';

const Basket = () => {

     const { items, total } = useAppSelector((state: RootState) => state.cart);
    const { currentUser, isLoggedIn } = useAppSelector((state) => state.auth);  
  const dispatch = useAppDispatch();
   const router = useRouter(); 

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch(removeFromCart({ id, userId: currentUser?.user_id }));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity, userId: currentUser?.user_id  }));
    }
  };

    const handleCheckout = () => {
    if (!isLoggedIn) {
      alert('Please log in to proceed with checkout');
      // redirect to login page here
      // router.push('/login');
      return;
    }
    
    // Proceed with checkout logic
    // console.log('Proceeding to checkout for user:', currentUser?.user_id );
     router.push('/checkout');
  };

  if (items.length === 0) {
    return (
      <>
      <Header/>
      <div className="max-w-md mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Your Basket</h2>
        <p className="text-gray-500 mb-4">Your basket is empty</p>
        <Link href="/products/all_products" className="text-blue-600 hover:text-blue-800">
          Continue Shopping
        </Link>
      </div>
      </>
    );
  }

    return ( 
        <>
           <Header/>
               <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Basket</h2>
        <button
          onClick={() => dispatch(clearCart({userId: currentUser?.user_id }))}
          className="text-red-600 hover:text-red-800 text-sm"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {items.map((item: CartItem) => (
          <div key={item.id} className="flex items-center border-b pb-4">
            {item.image && (
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-lg mr-4"
              />
            )}
            
            <div className="flex-grow">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <div className="ml-4 text-right">
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => dispatch(removeFromCart({id: item.id, userId: currentUser?.user_id }))}
                className="text-red-500 hover:text-red-700 text-sm mt-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center text-xl font-bold mb-4">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button 
         onClick={handleCheckout}
                 className={`w-full py-3 px-6 rounded-lg font-semibold mb-2 ${
            isLoggedIn 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-400 text-gray-200 cursor-not-allowed'
          }`}
          disabled={!isLoggedIn || items.length === 0}
        >
         {isLoggedIn ? 'Proceed to Checkout' : 'Please Login to Checkout'}
        </button>
        <Link href="/products/all_products" className="block text-center text-blue-600 hover:text-blue-800">
          Continue Shopping
        </Link>
      </div>
    </div>
        </>
     );
}
 
export default Basket;