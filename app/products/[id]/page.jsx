"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ShoppingCart, ArrowLeft, Star, Heart, Box, Shield, Eye, Sparkles } from 'lucide-react';
import SideNav from '../../../components/sidebar/SideNav';
import HeaderBar from '../../../components/header/HeaderBar';
import CartSidebar from '../../../components/sidebar/CartSidebar';
import MobileNavigationMenu from '../../../components/navigation/MobileNavigationMenu';
import ProductImageGallery from '../../../components/product/ProductImageGallery';
import ProductCard from '../../../components/product/ProductCard';
import { allProducts } from '../../../lib/demoData';
import { defaultProducts } from '../../../lib/productData';

export default function SingleProductPage() {
  const params = useParams();
  const router = useRouter();
  const productId = parseInt(params.id);
  
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [viewersCount, setViewersCount] = useState(Math.floor(Math.random() * 12) + 3);
  // Combine products from both sources and find the product
  const allProductsCombined = [...allProducts, ...defaultProducts];
  const product = allProductsCombined.find(p => p.id === productId);

  // Simulate viewers count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setViewersCount(prev => Math.max(1, prev + Math.floor(Math.random() * 3) - 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Generate variants/colors based on product category
  const getVariants = () => {
    if (!product) return [];
    const baseColors = ['#8B5CF6', '#EF4444', '#10B981', '#3B82F6', '#F59E0B'];
    return baseColors.map((color, index) => ({
      id: index + 1,
      name: ['Purple', 'Red', 'Green', 'Blue', 'Orange'][index],
      color,
      available: true,
    }));
  };

  const variants = getVariants();
  const currentVariant = selectedVariant || variants[0];

  // Get related products (same category)
  const relatedProducts = allProductsCombined
    .filter(p => p.id !== productId && p.category === product?.category)
    .slice(0, 4);

  const addToCart = (product) => {
    const productToAdd = { ...product, variant: currentVariant };
    for (let i = 0; i < quantity; i++) {
      setCart(prev => [...prev, productToAdd]);
    }
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const headerTabs = [
    { id: 'Home', label: 'Home', icon: '🛍️' },
  ];

  // Mock reviews
  const reviews = [
    { id: 1, name: 'Alex C.', rating: 5, comment: 'Absolutely love this skin! Perfect quality and instant delivery.', date: '2 days ago' },
    { id: 2, name: 'Sarah M.', rating: 5, comment: 'Great purchase, looks amazing in-game. Highly recommended!', date: '5 days ago' },
    { id: 3, name: 'Mike T.', rating: 4, comment: 'Solid product, fast delivery. Very satisfied!', date: '1 week ago' },
  ];

  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen pt-15 flex items-center justify-center" style={{ backgroundColor: 'rgb(var(--bg-color))', color: 'rgb(var(--text-color))' }}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link href="/" className="text-purple-400 hover:text-purple-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const originalPrice = product.discount > 0 
    ? (product.price / (1 - product.discount / 100)).toFixed(2)
    : null;

  return (
    <div className="min-h-screen pt-15 flex" style={{ backgroundColor: 'rgb(var(--bg-color))', color: 'rgb(var(--text-color))' }}>
      {/* Side Navigation */}
      <SideNav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidenavOpen={sidenavOpen}
        setShowSidenav={setShowSidenav}
        activeTab=""
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
          activeTab=""
          setActiveTab={() => {}}
        />

        {/* Mobile Navigation Menu */}
        <MobileNavigationMenu activeTab="" />

        {/* Content */}
        <main className="relative flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors hover:translate-x-[-4px]"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            {/* Product Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
              {/* Product Images */}
              <div className="space-y-6">
                <ProductImageGallery product={product} />

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-500/20 rounded-full backdrop-blur-sm">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-purple-200 font-medium">30-Day Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-500/20 rounded-full backdrop-blur-sm">
                    <Box className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-purple-200 font-medium">Instant Delivery</span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                {/* Category & Viewers */}
                <div className="flex items-center justify-between">
                  {product.category && (
                    <div className="text-sm text-purple-400 uppercase tracking-wide">
                      {product.category}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Eye className="w-4 h-4" />
                    <span>{viewersCount} people viewing</span>
                  </div>
                </div>

                {/* Product Name */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {product.name}
                </h1>

                {/* Rating & Sales */}
                {product.rating && (
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 transition-all ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-gray-400">
                        {product.rating?.toFixed(1)} ({product.sales?.toLocaleString() || 0} sales)
                      </span>
                    </div>
                  </div>
                )}

                {/* Price */}
                <div className="flex items-baseline gap-4 py-2">
                  <span className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
                    ${product.price?.toFixed(2) || '0.00'}
                  </span>
                  {originalPrice && (
                    <span className="text-2xl text-gray-500 line-through">
                      ${originalPrice}
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                      Save ${((product.price * product.discount) / (100 - product.discount)).toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Variant/Color Selection */}
                <div className="space-y-3 pt-4 border-t border-purple-500/20">
                  <label className="text-white font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    Color Variant:
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`relative w-12 h-12 rounded-lg border-2 transition-all duration-300 hover:scale-110 ${
                          currentVariant.id === variant.id
                            ? 'border-purple-400 ring-2 ring-purple-400/50 scale-110'
                            : 'border-purple-500/30 hover:border-purple-400/50'
                        }`}
                        style={{ backgroundColor: variant.color }}
                        aria-label={`Select ${variant.name} variant`}
                      >
                        {currentVariant.id === variant.id && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4 pt-4 border-t border-purple-500/20">
                  <label className="text-white font-medium">Quantity:</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-white transition-all duration-300 hover:scale-110 active:scale-95 font-bold text-lg"
                    >
                      −
                    </button>
                    <span className="text-2xl font-semibold text-white w-16 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-white transition-all duration-300 hover:scale-110 active:scale-95 font-bold text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/25 flex items-center justify-center gap-3 group"
                  >
                    <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        // 3D Preview / In-game Preview
                        alert('3D Preview feature coming soon!');
                      }}
                      className="py-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Box className="w-5 h-5" />
                      Preview
                    </button>
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`py-3 border rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
                        isFavorite
                          ? 'bg-red-500/20 border-red-500/50 text-red-400'
                          : 'bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/30 text-white'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500' : ''}`} />
                      {isFavorite ? 'Saved' : 'Save'}
                    </button>
                  </div>
                </div>

                {/* Trust Features */}
                <div className="pt-4 border-t border-purple-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>Instant Digital Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>Secure Payment Processing</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>30-Day Money Back Guarantee</span>
                  </div>
                  {product.featured && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-yellow-400">⭐</span>
                      <span>Featured Product</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Customer Reviews Preview */}
            <div className="mb-16 pt-8 border-t border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Customer Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-6 bg-gradient-to-br from-slate-900/50 to-purple-900/20 border border-purple-500/20 rounded-xl space-y-3 hover:border-purple-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">{review.date}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{review.comment}</p>
                    <p className="text-purple-400 text-sm font-medium">— {review.name}</p>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-purple-400 hover:text-purple-300 transition-colors">
                View All Reviews →
              </button>
            </div>

            {/* Product Description */}
            <div className="mb-16 pt-8 border-t border-purple-500/20 space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-purple-400 to-red-400 rounded-full"></span>
                Product Description
              </h2>
              {product.description ? (
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed text-lg max-w-4xl">
                    {product.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="pt-4 space-y-4">
                    <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                    <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.category === 'skins' && (
                        <>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-purple-400 mt-1 text-xl">▸</span>
                            <span>Premium quality character customization</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-purple-400 mt-1 text-xl">▸</span>
                            <span>Unique animations and visual effects</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-purple-400 mt-1 text-xl">▸</span>
                            <span>Compatible with all character customization options</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-purple-400 mt-1 text-xl">▸</span>
                            <span>Instant activation upon purchase</span>
                          </li>
                        </>
                      )}
                      {product.category === 'vehicles' && (
                        <>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-purple-400 mt-1 text-xl">▸</span>
                            <span>High-performance vehicle with unique stats</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-purple-400 mt-1 text-xl">▸</span>
                            <span>Customizable paint jobs and accessories</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-purple-400 mt-1 text-xl">▸</span>
                            <span>Enhanced engine sounds and visual effects</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-purple-400 mt-1 text-xl">▸</span>
                            <span>Instant delivery to your garage</span>
                          </li>
                        </>
                      )}
                      {product.category === 'currency' && (
                        <>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-purple-400 mt-1 text-xl">▸</span>
                            <span>Instant digital delivery</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-purple-400 mt-1 text-xl">▸</span>
                            <span>Use for vehicles, properties, and in-game items</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-purple-400 mt-1 text-xl">▸</span>
                            <span>No expiration date</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-purple-400 mt-1 text-xl">▸</span>
                            <span>Safe and secure transaction</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* Product Specifications */}
                  <div className="pt-4 p-6 bg-gradient-to-br from-purple-900/30 to-slate-900/50 border border-purple-500/20 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Product Information:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="space-y-1">
                        <span className="text-gray-400 block">Category</span>
                        <span className="text-purple-300 font-medium capitalize text-base">{product.category}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-gray-400 block">Rating</span>
                        <span className="text-yellow-400 font-medium text-base">{product.rating?.toFixed(1)} / 5.0</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-gray-400 block">Total Sales</span>
                        <span className="text-purple-300 font-medium text-base">{(product.sales || 0).toLocaleString()}+</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-gray-400 block">Status</span>
                        <span className="text-green-400 font-medium text-base">In Stock</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 italic">No description available for this product.</p>
              )}
            </div>

            {/* Related Products / Similar Skins */}
            {relatedProducts.length > 0 && (
              <div className="pt-8 border-t border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Similar {product.category === 'skins' ? 'Skins' : 'Products'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((relatedProduct) => (
                    <ProductCard
                      key={relatedProduct.id}
                      product={relatedProduct}
                      addToCart={addToCart}
                    />
                  ))}
                </div>
              </div>
            )}
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
