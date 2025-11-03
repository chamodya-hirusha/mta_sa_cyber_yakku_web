"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { XCircle, ArrowLeft, ShoppingCart } from 'lucide-react';

export default function CheckoutCancelPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');

  return (
    <div className="min-h-screen pt-15 flex items-center justify-center" style={{ backgroundColor: 'rgb(var(--bg-color))', color: 'rgb(var(--text-color))' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 border border-purple-500/20 rounded-xl p-8 sm:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
              <XCircle className="w-12 h-12 text-red-400" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Payment Cancelled
          </h1>
          
          <p className="text-gray-300 text-lg mb-8">
            Your payment was cancelled. No charges have been made.
          </p>
          
          {orderId && (
            <p className="text-purple-400 text-sm mb-8">
              Order ID: <span className="font-mono font-semibold">{orderId}</span>
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/checkout"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Try Again
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Back to Shop
            </Link>
          </div>

          <p className="text-xs text-gray-400 mt-8">
            Your items are still in your cart. You can complete your purchase anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

