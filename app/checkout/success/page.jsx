"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get('order_id');
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    if (orderId) {
      const savedOrder = localStorage.getItem(`order_${orderId}`);
      if (savedOrder) {
        setOrderData(JSON.parse(savedOrder));
        // Clear cart after successful payment
        localStorage.removeItem('cart');
      }
    }
  }, [orderId]);

  return (
    <div className="min-h-screen pt-15 flex items-center justify-center" style={{ backgroundColor: 'rgb(var(--bg-color))', color: 'rgb(var(--text-color))' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 border border-purple-500/20 rounded-xl p-8 sm:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-gray-300 text-lg mb-2">
            Thank you for your purchase!
          </p>
          
          {orderId && (
            <p className="text-purple-400 text-sm mb-8">
              Order ID: <span className="font-mono font-semibold">{orderId}</span>
            </p>
          )}

          {orderData && (
            <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-lg font-semibold text-white mb-4">Order Details</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Items:</span>
                  <span className="text-white">{orderData.cart.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total:</span>
                  <span className="text-green-400 font-semibold">${orderData.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white">{orderData.formData.email}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Continue Shopping
            </Link>
            <Link
              href="/profile"
              className="px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              View Orders
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-xs text-gray-400 mt-8">
            A confirmation email has been sent to {orderData?.formData?.email || 'your email'}
          </p>
        </div>
      </div>
    </div>
  );
}

