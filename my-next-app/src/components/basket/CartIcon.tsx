// src/components/basket/CartIcon.tsx
"use client"
import React from 'react';
import { useAppSelector } from '@/hooks/redux';
import Link from 'next/link';
import style from './CartIcon.module.css'

export default function CartIcon() {
  const { items, total } = useAppSelector((state) => state.cart);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  console.log('CartIcon - Items:', items, 'Total items:', itemCount);

  return (
    <div  className="relative p-4 rounded-lg">
      <div className="flex items-center space-x-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="font-semibold">Cart</span>
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {itemCount}
          </span>
        )}
      </div>
      {itemCount > 0 && (
        <div className="text-sm text-gray-600">
          Total: ${total.toFixed(2)}
        </div>
      )}
    </div>
  );
}