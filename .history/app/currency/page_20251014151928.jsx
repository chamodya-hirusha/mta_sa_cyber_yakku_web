"use client";
import React, { useState } from 'react';
import SideNav from '../../components/SideNav';
import HeaderBar from '../../components/HeaderBar';
import ProductCard from '../../components/ProductCard';
import CartSidebar from '../../components/CartSidebar';
import MobileNavigationMenu from '../../components/MobileNavigationMenu';

export default function CurrencyPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const currencyProducts = [
    { id: 9, name: '$50k Credits', category: 'currency', price: 2.99, image: '💵', rating: 4.9, sales: 1203, discount: 0 },
    { id: 10, name: '$250k Credits', category: 'currency', price: 9.99, image: '💰', rating: 4.8, sales: 876, featured: true, discount: 10 },
    { id: 11, name: '$1M Credits Bundle', category: 'currency', price: 24.99, image: '🤑', rating: 4.7, sales: 654, featured: true, discount: 0 },
    { id: 12, name: '$100k Credits', category: 'currency', price: 4.99, image: '💸', rating: 4.6, sales: 432, discount: 15 },
    { id: 13, name: '$500k Credits', category: 'currency', price: 19.99, image: '💎', rating: 4.8, sales: 298, featured: true, discount: 0 },
    { id: 14, name: '$2M Credits Bundle', category: 'currency', price: 39.99, image: '🏆', rating: 4.9, sales: 156, discount: 20 },
    { id: 15, name: '$25k Credits', category: 'currency', price: 1.99, image: '💴', rating: 4.5, sales: 567, discount: 0 },
    { id: 16, name: '$750k Credits', category: 'currency', price: 29.99, image: '💳', rating: 4.7, sales: 234, discount: 12 },
    { id: 17, name: '$5M Credits Bundle', category: 'currency', price: 79.99, image: '👑', rating: 4.9, sales: 89, featured: true, discount: 0 },
    { id: 18, name: '$150k Credits', category: 'currency', price: 6.99, image: '💲', rating: 4.6, sales: 345, discount: 8 },
  ];

  const headerTabs = [
    { id: 'all', label: 'All Currency', icon: '💵' },
    { id: 'featured', label: 'Featured', icon: '⭐' },
    { id: 'discount', label: 'On Sale', icon: '💰' },
  ];

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
    <div className="min-h-screen pt-15 bg-slate-950 flex">
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
