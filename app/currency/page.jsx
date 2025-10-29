"use client";
import React, { useState } from 'react';
import SideNav from '../../components/sidebar/SideNav';
import HeaderBar from '../../components/header/HeaderBar';
import ProductCard from '../../components/product/ProductCard';
import CartSidebar from '../../components/sidebar/CartSidebar';
import MobileNavigationMenu from '../../components/navigation/MobileNavigationMenu';
import { currencyProducts, headerTabs } from './data/currencyData';

export default function CurrencyPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('all');


  const filteredProducts =
    activeTab === 'all'
      ? currencyProducts
      : activeTab === 'featured'
      ? currencyProducts.filter(p => p.featured)
      : currencyProducts.filter(p => p.discount > 0);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="min-h-screen pt-15 flex" style={{ backgroundColor: 'rgb(var(--bg-color))', color: 'rgb(var(--text-color))' }}>
      {/* Side Navigation */}
      <SideNav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidenavOpen={sidenavOpen}
        setShowSidenav={setShowSidenav}
        activeTab="currency"
        setActiveTab={() => {}}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Background gradients */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Header */}
        <HeaderBar
          cartCount={cart.length}
          onCartClick={() => setShowCart(!showCart)}
          onMenuClick={() => setShowSidenav(!sidenavOpen)}
          headerTabs={headerTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Mobile Navigation Menu */}
        <MobileNavigationMenu activeTab="currency" />

        {/* Content */}
        <main className="relative flex-1 overflow-y-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-white mb-8">
            {headerTabs.find(t => t.id === activeTab)?.label || 'Currency'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </main>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        cart={cart}
        showCart={showCart}
        onClose={() => setShowCart(false)}
        onRemove={removeFromCart}
        total={total}
      />


    </div>
  );
}
