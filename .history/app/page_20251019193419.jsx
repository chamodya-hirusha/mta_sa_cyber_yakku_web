"use client";
import React, { useState } from 'react';

import MainNavigation from '../components/MainNavigation';
import HeaderBar from '../components/HeaderBar';
import ProductCard from '../components/ProductCard';
import CartSidebar from '../components/CartSidebar';
import ContentCardsRow from '../components/ContentCardsRow';
import HeroSection1 from '../components/HeroSection1';
import HeroSection2 from '../components/HeroSection2';
import ProductCarousel from '../components/ProductCarousel';  // Import separated carousel

export default function CyberYakkuShop() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const allProducts = [
    { id: 1, name: 'Cyber Agent', category: 'skins', price: 4.99, image: '👨‍💼', rating: 4.8, sales: 234, featured: true, discount: 0 },
    { id: 2, name: 'Neon Punk', category: 'skins', price: 4.99, image: '👁️', rating: 4.6, sales: 189, discount: 0 },
    { id: 3, name: 'Street Legend', category: 'skins', price: 4.99, image: '👕', rating: 4.7, sales: 156, featured: true, discount: 15 },
    { id: 4, name: 'Corporate Elite', category: 'skins', price: 6.99, image: '🎩', rating: 4.9, sales: 312, featured: true, discount: 0 },
    { id: 5, name: 'Neon Racer', category: 'vehicles', price: 9.99, image: '🏎️', rating: 4.7, sales: 423, featured: true, discount: 0 },
    { id: 6, name: 'Cyber Truck', category: 'vehicles', price: 12.99, image: '🚙', rating: 4.5, sales: 267, discount: 20 },
    { id: 7, name: 'Street King', category: 'vehicles', price: 14.99, image: '🏍️', rating: 4.8, sales: 345, discount: 0 },
    { id: 8, name: 'Luxury Edition', category: 'vehicles', price: 19.99, image: '🚗', rating: 4.9, sales: 512, featured: true, discount: 0 },
    { id: 9, name: '$50k Credits', category: 'currency', price: 2.99, image: '💵', rating: 4.9, sales: 1203, discount: 0 },
    { id: 10, name: '$250k Credits', category: 'currency', price: 9.99, image: '💰', rating: 4.8, sales: 876, featured: true, discount: 10 },
    { id: 11, name: '$1M Credits Bundle', category: 'currency', price: 24.99, image: '🤑', rating: 4.7, sales: 654, featured: true, discount: 0 },
  ];

  const headerTabs = [
    { id: 'Home', label: 'Home', icon: '🛍️' },
    { id: 'featured', label: 'Featured', icon: '⭐' },
    { id: 'discount', label: 'On Sale', icon: '💰' },
  ];

  const trendingProducts = allProducts.filter(p => p.featured).slice(0, 6);
  const popularProducts = [...allProducts].sort((a, b) => b.sales - a.sales).slice(0, 6);
  const discountProducts = allProducts.filter(p => p.discount > 0).slice(0, 6);

  const filteredProducts = activeTab === 'Home'
    ? allProducts
    : activeTab === 'featured'
      ? allProducts.filter(p => p.featured)
      : allProducts.filter(p => p.discount > 0);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-slate-950 flex">
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

        {/* Content */}
        <main className="relative flex-1 overflow-y-auto xs:pt-20 md:pt-10 xl:pt-10">
          {activeTab === 'Home' ? (
            <>
              {/* Hero Section 1 - Featured Game */}
              <div className="px-0 overflow-y-auto sm:px-4 md:px-6 lg:px-6 xl:px-auto py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <HeroSection1 />
              </div>


              {/* Header */}
              <div className="px-2 sm:px-4  md:px-6 lg:px-6 xl:px-6">
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

              {/* Hero Section 2 - Special Offer */}
              <div className="px-0 sm:px-4 md:px-6 lg:px-8 xl:px-6">
                <HeroSection2 />
              </div>

              {/* Product Carousels */}
              <div className="px-0 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <ProductCarousel title="Trending Now" icon="🔥" products={trendingProducts} addToCart={addToCart} />
                <ProductCarousel title="Popular Now" icon="⭐" products={popularProducts} addToCart={addToCart} />
                <ProductCarousel title="Discount Now" icon="💰" products={discountProducts} addToCart={addToCart} />
              </div>
            </>
          ) : (
            <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
              <h2 className="text-2xl font-bold text-white mb-8">
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
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        cart={cart}
        showCart={showCart}
        onClose={() => setShowCart(false)}
        onRemove={removeFromCart}
        total={total}
      />

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
