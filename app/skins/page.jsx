"use client";
import React, { useState } from 'react';
import SideNav from '../../components/sidebar/SideNav';
import HeaderBar from '../../components/header/HeaderBar';
import ProductCard from '../../components/product/ProductCard';
import CartSidebar from '../../components/sidebar/CartSidebar';
import MobileNavigationMenu from '../../components/navigation/MobileNavigationMenu';
import { skinsProducts } from './data/skinsData';



export default function SkinsPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const headerTabs = [
    { id: 'all', label: 'All Skins', icon: '👕' },
    { id: 'featured', label: 'Featured', icon: '⭐' },
    { id: 'discount', label: 'On Sale', icon: '💰' },
  ];

  const filteredProducts =
    activeTab === 'all'
      ? skinsProducts
      : activeTab === 'featured'
      ? skinsProducts.filter(p => p.featured)
      : skinsProducts.filter(p => p.discount > 0);

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
        activeTab="skins"
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
        <MobileNavigationMenu activeTab="skins" />

        {/* Content */}
        <main className="relative flex-1 overflow-y-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-white mb-8">
            {headerTabs.find(t => t.id === activeTab)?.label || 'Skins'}
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
