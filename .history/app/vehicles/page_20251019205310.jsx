"use client";
import React, { useState } from 'react';
import SideNav from '../../components/SideNav';
import HeaderBar from '../../components/header/HeaderBar';
import ProductCard from '../../components/ProductCard';
import CartSidebar from '../../components/CartSidebar';
import MobileNavigationMenu from '../../components/MobileNavigationMenu';

export default function VehiclesPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const vehiclesProducts = [
    { id: 5, name: 'Neon Racer', category: 'vehicles', price: 9.99, image: '🏎️', rating: 4.7, sales: 423, featured: true, discount: 0 },
    { id: 6, name: 'Cyber Truck', category: 'vehicles', price: 12.99, image: '🚙', rating: 4.5, sales: 267, discount: 20 },
    { id: 7, name: 'Street King', category: 'vehicles', price: 14.99, image: '🏍️', rating: 4.8, sales: 345, discount: 0 },
    { id: 8, name: 'Luxury Edition', category: 'vehicles', price: 19.99, image: '🚗', rating: 4.9, sales: 512, featured: true, discount: 0 },
    { id: 9, name: 'Cyber Bike', category: 'vehicles', price: 8.99, image: '🏍️', rating: 4.6, sales: 198, discount: 15 },
    { id: 10, name: 'Neon Hover', category: 'vehicles', price: 15.99, image: '🛸', rating: 4.7, sales: 234, featured: true, discount: 0 },
    { id: 11, name: 'Street Drift', category: 'vehicles', price: 11.99, image: '🏎️', rating: 4.4, sales: 156, discount: 25 },
    { id: 12, name: 'Cyber Jet', category: 'vehicles', price: 24.99, image: '✈️', rating: 4.9, sales: 89, featured: true, discount: 0 },
    { id: 13, name: 'Neon Tank', category: 'vehicles', price: 18.99, image: '🚗', rating: 4.5, sales: 167, discount: 10 },
    { id: 14, name: 'Cyber Submarine', category: 'vehicles', price: 22.99, image: '🚤', rating: 4.8, sales: 123, discount: 0 },
  ];

  const headerTabs = [
    { id: 'all', label: 'All Vehicles', icon: '🏎️' },
    { id: 'featured', label: 'Featured', icon: '⭐' },
    { id: 'discount', label: 'On Sale', icon: '💰' },
  ];

  const filteredProducts =
    activeTab === 'all'
      ? vehiclesProducts
      : activeTab === 'featured'
      ? vehiclesProducts.filter((p) => p.featured)
      : vehiclesProducts.filter((p) => p.discount > 0);

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
        activeTab="vehicles"
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
        <MobileNavigationMenu activeTab="vehicles" />

        {/* Content */}
        <main className="relative flex-1 overflow-y-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-white mb-8">
            {headerTabs.find((t) => t.id === activeTab)?.label || 'Vehicles'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
