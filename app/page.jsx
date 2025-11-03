"use client";
import React, { useState, useEffect } from 'react';

import MainNavigation from '../components/navigation/MainNavigation';
import HeaderBar from '../components/header/HeaderBar';
import ProductCard from '../components/product/ProductCard';
import CartSidebar from '../components/sidebar/CartSidebar';
import ContentCardsRow from '../components/contentcard/ContentCardsRow';
import HeroSection1 from '../components/hero/HeroSection1';
import HeroSection2 from '../components/hero/HeroSection2';
import ProductCarousel from '../components/product/ProductCarousel';

import { allProducts, headerTabs } from '../lib/demoData';

export default function CyberYakkuShop() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  // Check session cookie to persist login
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    fetch(`${apiUrl}/session`, { credentials: 'include' })
      .then(r => r.json())
      .then(data => {
        if (data?.authenticated) setIsLoggedIn(true);
      })
      .catch(() => {});
  }, []);

  // Filter products
  const trendingProducts = allProducts.filter(p => p.featured).slice(0, 6);
  const popularProducts = [...allProducts].sort((a, b) => b.sales - a.sales).slice(0, 6);
  const discountProducts = allProducts.filter(p => p.discount > 0).slice(0, 6);

  const filteredProducts =
    activeTab === 'Home'
      ? allProducts
      : activeTab === 'featured'
      ? allProducts.filter(p => p.featured)
      : allProducts.filter(p => p.discount > 0);

  // Cart handlers
  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'rgb(var(--bg-color))', color: 'rgb(var(--text-color))' }}
    >
      {/* Main Navigation */}
      <MainNavigation
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidenavOpen={sidenavOpen}
        setShowSidenav={setShowSidenav}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Animated background gradient */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <main className="relative flex-1 pt-20 md:pt-10 xl:pt-10">
          {activeTab === 'Home' ? (
            <>
              {/* Hero Section 1 */}
              <div className="px-0 sm:px-4 md:px-6 lg:px-6 xl:px-6 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <HeroSection1 />
              </div>

              {/* Header */}
              <div className="px-2 sm:px-4 md:px-6 lg:px-6 xl:px-6">
                <HeaderBar
                  cartCount={cart.length}
                  onCartClick={() => setShowCart(!showCart)}
                  onMenuClick={() => setShowSidenav(!sidenavOpen)}
                  headerTabs={headerTabs}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>

              {/* Content Cards Row */}
              <div className="px-2 sm:px-4 md:px-6 lg:px-6 xl:px-6">
                <ContentCardsRow />
              </div>

              {/* Hero Section 2 */}
              <div className="px-0 sm:px-4 md:px-6 lg:px-8 xl:px-6">
                <HeroSection2 />
              </div>

              {/* Product Carousels */}
              <div className="px-0 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <ProductCarousel title="🔥 Trending Now" products={trendingProducts} addToCart={addToCart} />
                <ProductCarousel title="⭐ Popular Now" products={popularProducts} addToCart={addToCart} />
                <ProductCarousel title="💰 Discount Now" products={discountProducts} addToCart={addToCart} />
              </div>
            </>
          ) : (
            <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
              <h2 className="text-2xl font-bold mb-8">
                {headerTabs.find(t => t.id === activeTab)?.label || 'Products'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            </div>
          )}
        </main>

        {/* Cart Sidebar */}
        <CartSidebar
          cart={cart}
          showCart={showCart}
          onClose={() => setShowCart(false)}
          onRemove={removeFromCart}
          total={total}
        />
      </div>

      {/* Overlay for mobile sidenav */}
      {sidenavOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setShowSidenav(false)}
        ></div>
      )}
    </div>
  );
}
