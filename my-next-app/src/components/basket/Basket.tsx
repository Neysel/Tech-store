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
import  style from './Basket.module.css';

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
        <div className={ style.basket}>
          <div className={ style.container}>
            <div className={ style.emptyBasket}>
              <h2>Your Basket</h2>
              <p>Your basket is empty</p>
              <Link href="/products/all_products" className={ style.emptyBasketLink}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return ( 
    <>
      <Header/>
      <div className={ style.basket}>
        <div className={ style.container}>
          <div className={ style.header}>
            <h2>Your Basket</h2>
            <button
              onClick={() => dispatch(clearCart({userId: currentUser?.user_id }))}
              className={ style.clearAllButton}
            >
              Clear All
            </button>
          </div>
          
          <div className={ style.basketContent}>
            <div className={ style.cartItems}>
              {items.map((item: CartItem) => (
                <div key={item.id} className={ style.cartItem}>
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className={ style.itemImage}
                    />
                  )}
                  
                  <div className={ style.itemDetails}>
                    <h3 className={ style.itemName}>{item.name}</h3>
                    <p className={ style.itemPrice}>Price: ${item.price.toFixed(2)}</p>
                    
                    <div className={ style.quantityControls}>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className={ style.quantityButton}
                      >
                        -
                      </button>
                      <span className={ style.quantityDisplay}>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className={ style.quantityButton}
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => dispatch(removeFromCart({id: item.id, userId: currentUser?.user_id }))}
                      className={ style.removeButton}
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className={ style.itemTotal}>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={ style.summarySection}>
              <div className={ style.totalRow}>
                <span>Total:</span>
                <span className={ style.totalAmount}>${total.toFixed(2)}</span>
              </div>
              
              <div className={ style.actionButtons}>
                <button 
                  onClick={handleCheckout}
                  className={ style.checkoutButton}
                  disabled={!isLoggedIn || items.length === 0}
                >
                  {isLoggedIn ? 'Proceed to Checkout' : 'Please Login to Checkout'}
                </button>
                <Link href="/products/all_products" className={ style.continueShopping}>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Basket;