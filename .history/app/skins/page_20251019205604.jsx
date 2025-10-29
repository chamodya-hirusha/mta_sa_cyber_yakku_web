"use client";
import React, { useState } from 'react';
import SideNav from '../../components/SideNav';
import HeaderBar from '../../components/header/HeaderBar';
import ProductCard from '../../components/ProductCard';
import CartSidebar from '../../components/CartSidebar';
import MobileNavigationMenu from '../../components/navigation/MobileNavigationMenu';



export default function SkinsPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const skinsProducts = [
    { id: 1, name: 'Cyber Agent', category: 'skins', price: 4.99, image: '👨‍💼', rating: 4.8, sales: 234, featured: true, discount: 0 },
    { id: 2, name: 'Neon Punk', category: 'skins', price: 4.99, image: '👁️', rating: 4.6, sales: 189, discount: 0 },
    { id: 3, name: 'Street Legend', category: 'skins', price: 4.99, image: '👕', rating: 4.7, sales: 156, featured: true, discount: 15 },
    { id: 4, name: 'Corporate Elite', category: 'skins', price: 6.99, image: '🎩', rating: 4.9, sales: 312, featured: true, discount: 0 },
    { id: 5, name: 'Cyber Warrior', category: 'skins', price: 5.99, image: '🛡️', rating: 4.5, sales: 198, discount: 10 },
    { id: 6, name: 'Neon Ninja', category: 'skins', price: 7.99, image: '🥷', rating: 4.7, sales: 267, discount: 0 },
    { id: 7, name: 'Street Racer', category: 'skins', price: 6.49, image: '🏁', rating: 4.6, sales: 145, discount: 20 },
    { id: 8, name: 'Cyber Samurai', category: 'skins', price: 8.99, image: '⚔️', rating: 4.8, sales: 289, featured: true, discount: 0 },
  ];

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
    <div className="min-h-screen pt-15 bg-slate-950 flex">
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
