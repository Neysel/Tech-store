// app/checkout/page.tsx
"use client"
import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { clearCart } from '@/features/basket/cartSlice';    
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../header/Header';
import style from './Checkout.module.css';


const CheckoutPage = () => {
  const { items, total } = useAppSelector((state) => state.cart);
  const { currentUser, isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    email: currentUser?.email || '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  });

  // Redirect if not logged in or cart is empty
  React.useEffect(() => {
    if (!isLoggedIn) {
      router.push('/basket');
      return;
    }
    if (items.length === 0) {
      router.push('/products/all_products');
      return;
    }
  }, [isLoggedIn, items.length, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = async () => {
    if (!customerInfo.address || !customerInfo.city || !customerInfo.zipCode || !customerInfo.country) {
      alert('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success alert
      alert('THIS IS TEST - Payment successful! Thank you for your purchase.');
      
      // Clear cart after successful payment
      dispatch(clearCart({ userId: currentUser?.user_id }));
      
      // Redirect to success page or home
      router.push('/products/all_products');
      
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

   if (!isLoggedIn || items.length === 0) {
    return (
      <>
        <Header />
        <div className={ style.checkout}>
          <div className={ style.container}>
            <div className={ style.redirectMessage}>
              <h2>Redirecting...</h2>
              <p>Please wait while we redirect you.</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={ style.checkout}>
        <div className={ style.container}>
          <h2>Checkout</h2>
          
          <div className={ style.checkoutLayout}>
            {/* Left Column - Customer Info & Payment */}
            <div>
              {/* Customer Information */}
              <div className={ style.card}>
                <h3 className={ style.cardTitle}>Customer Information</h3>
                
                <div className={ style.formGroup}>
                  <label className={`${ style.label} ${ style.required}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    className={ style.input}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className={ style.formGroup}>
                  <label className={`${ style.label} ${ style.required}`}>
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    className={ style.input}
                    placeholder="Street address"
                    required
                  />
                </div>
                
                <div className={ style.grid}>
                  <div className={ style.formGroup}>
                    <label className={`${ style.label} ${ style.required}`}>
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={customerInfo.city}
                      onChange={handleInputChange}
                      className={ style.input}
                      required
                    />
                  </div>
                  
                  <div className={ style.formGroup}>
                    <label className={`${ style.label} ${ style.required}`}>
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={customerInfo.zipCode}
                      onChange={handleInputChange}
                      className={ style.input}
                      required
                    />
                  </div>
                </div>
                
                <div className={ style.formGroup}>
                  <label className={`${ style.label} ${ style.required}`}>
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={customerInfo.country}
                    onChange={handleInputChange}
                    className={ style.input}
                    required
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className={ style.card}>
                <h3 className={ style.cardTitle}>Payment Method</h3>
                <div className={ style.paymentMethods}>
                  <div className={ style.paymentOption}>
                    <input
                      type="radio"
                      id="card"
                      name="payment"
                      defaultChecked
                      className={ style.radio}
                    />
                    <label htmlFor="card" className={ style.paymentLabel}>
                      Credit/Debit Card
                    </label>
                  </div>
                  <div className={ style.paymentOption}>
                    <input
                      type="radio"
                      id="paypal"
                      name="payment"
                      className={ style.radio}
                    />
                    <label htmlFor="paypal" className={ style.paymentLabel}>
                      PayPal
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <div className={ style.card}>
                <h3 className={ style.cardTitle}>Order Summary</h3>
                
                <div className={ style.orderItems}>
                  {items.map((item) => (
                    <div key={item.id} className={ style.orderItem}>
                      <div className={ style.itemInfo}>
                        <div className={ style.itemImageContainer}>
                          {item.image ? (
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className={ style.itemImage}
                            />
                          ) : (
                            <div className={ style.itemImage}>No image</div>
                          )}
                        </div>
                        <div className={ style.itemDetails}>
                          <h4>{item.name}</h4>
                          <p className={ style.itemQuantity}>Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <div className={ style.itemPrice}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className={ style.totalSection}>
                  <div className={ style.totalRow}>
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className={ style.totalRow}>
                    <span>Shipping</span>
                    <span>$0.00</span>
                  </div>
                  <div className={ style.totalRow}>
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                  <div className={ style.totalRow}>
                    <span className={ style.grandTotal}>Grand Total</span>
                    <span className={ style.grandTotalAmount}>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment Button */}
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={ style.paymentButton}
                >
                  {isProcessing ? (
                    <>
                      <span className={ style.spinner}></span>
                      Processing Payment...
                    </>
                  ) : (
                    `Pay $${total.toFixed(2)}`
                  )}
                </button>

                <Link 
                  href="/basket" 
                  className={ style.backLink}
                >
                  ← Back to Basket
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;