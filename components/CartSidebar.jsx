import React from 'react';
import { ShoppingCart, X } from 'lucide-react';

export default function CartSidebar({ cart, showCart, onClose, onRemove, total }) {
  if (!showCart) return null;
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:static lg:bg-transparent lg:backdrop-blur-none">
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-slate-950 border-l border-purple-500/30 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-red-900/20">
          <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-purple-400 hover:text-red-400 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-12 h-12 text-purple-500/30 mx-auto mb-4" />
              <p className="text-purple-400/60">Your cart is empty</p>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-gradient-to-r from-purple-900/20 to-red-900/10 p-4 rounded-lg border border-purple-500/20 hover:border-red-400/40 transition-all"
              >
                <div>
                  <p className="text-white font-semibold">{item.name}</p>
                  <p className="text-purple-400 text-sm">${item.price}</p>
                </div>
                <button
                  onClick={() => onRemove(idx)}
                  className="text-red-500 hover:text-red-400 transition-colors p-2 hover:bg-red-500/10 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="border-t border-purple-500/20 p-6 space-y-4 bg-gradient-to-t from-red-900/10 to-transparent">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm text-purple-300">
                <span>Subtotal:</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-purple-300">
                <span>Items:</span>
                <span>{cart.length}</span>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-red-500/0"></div>
            <div className="flex justify-between items-center text-lg">
              <span className="text-white font-semibold">Total:</span>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
                ${total}
              </span>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-purple-500 via-red-500 to-pink-500 hover:from-purple-600 hover:via-red-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
