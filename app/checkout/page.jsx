"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Lock, Mail, Phone, User, Loader2 } from 'lucide-react';
import SideNav from '../../components/sidebar/SideNav';
import HeaderBar from '../../components/header/HeaderBar';
import MobileNavigationMenu from '../../components/navigation/MobileNavigationMenu';

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isGatewayReady, setIsGatewayReady] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  // Get logged in user
  const [user, setUser] = useState(null);

  const [errors, setErrors] = useState({});

  // Load cart and user from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    } else {
      // If no cart, redirect to home
      router.push('/');
    }

    // Get logged in user
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
        const userData = JSON.parse(savedUser);
        // Pre-fill form with user data if available
        if (userData.username) {
          setFormData(prev => ({
            ...prev,
            firstName: userData.firstName || userData.username || '',
            lastName: userData.lastName || '',
            email: userData.email || '',
            phone: userData.phone || '',
          }));
        }
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
  }, [router]);

  // Load PayHere script and mark gateway ready
  useEffect(() => {
    const assignHandlers = () => {
      if (!window.payhere || typeof window.payhere.startPayment !== 'function') return false;
      window.payhere.onCompleted = function onCompleted(orderId) {
        console.log('Payment completed. Order ID:', orderId);
      };
      window.payhere.onDismissed = function onDismissed() {
        console.log('Payment dismissed');
        setIsProcessing(false);
      };
      window.payhere.onError = function onError(error) {
        console.error('Payment error:', error);
        alert('Payment error occurred. Please try again.');
        setIsProcessing(false);
      };
      setIsGatewayReady(true);
      return true;
    };

    const existing = document.querySelector('script[src="https://sandbox.payhere.lk/lib/payhere.js"]');
    if (existing) {
      // Script tag exists: if global ready, assign; otherwise hook to onload
      if (!assignHandlers()) {
        existing.addEventListener('load', () => assignHandlers(), { once: true });
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://sandbox.payhere.lk/lib/payhere.js';
    script.async = true;
    script.onload = () => {
      console.log('PayHere script loaded');
      assignHandlers();
    };
    document.body.appendChild(script);

    // Fallback: poll for readiness (in case onload fired before handlers attach)
    const start = Date.now();
    const timer = setInterval(() => {
      if (assignHandlers()) {
        clearInterval(timer);
      } else if (Date.now() - start > 15000) {
        // Stop polling after 15s
        clearInterval(timer);
      }
    }, 300);

    return () => clearInterval(timer);
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal.toFixed(2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Check if user is logged in
    if (!user || !user.id) {
      alert('Please log in to continue with checkout');
      router.push('/');
      return false;
    }

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{9,10}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateOrderId = () => {
    return 'ORD' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty!');
      router.push('/');
      return;
    }

    setIsProcessing(true);

    try {
      if (!isGatewayReady) {
        // Final check before initiating
        if (!window.payhere) {
          alert('Payment gateway is still initializing. Please wait a moment and try again.');
          setIsProcessing(false);
          return;
        }
      }
      const orderId = generateOrderId();
      const itemsDescription = cart.map(item => item.name).join(', ');

      // Prepare payment data
      const productIds = cart.map(item => item.id); // Get product IDs from cart
      
      const payment = {
        sandbox: true,
        merchant_id: '1228257',
        return_url: `${window.location.origin}/checkout/success?order_id=${orderId}`,
        cancel_url: `${window.location.origin}/checkout/cancel?order_id=${orderId}`,
        notify_url: `${window.location.origin}/api/payhere/notify`,
        order_id: orderId,
        items: itemsDescription.substring(0, 100), // PayHere limit
        amount: total,
        currency: 'LKR',
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: 'N/A', // Digital delivery - no physical address needed
        city: 'N/A',
        country: 'Sri Lanka',
        custom_1: JSON.stringify({ userId: user.id, productIds: productIds }), // Pass user_id and product_ids
        hash: '', // Will be generated on backend for security
      };

      // Save order data to localStorage for later reference
      localStorage.setItem(`order_${orderId}`, JSON.stringify({
        orderId,
        cart: cart,
        total,
        formData,
        userId: user.id, // Store user ID for product assignment
        timestamp: new Date().toISOString(),
      }));

      // Check if PayHere is loaded
      if (typeof window.payhere !== 'undefined') {
        window.payhere.startPayment(payment);
      } else {
        alert('Payment gateway is still initializing. Please wait a moment and try again.');
        setIsProcessing(false);
      }
    } catch (error) {
      console.error('Payment initiation error:', error);
      alert('An error occurred while initiating payment. Please try again.');
      setIsProcessing(false);
    }
  };

  const headerTabs = [{ id: 'Home', label: 'Home', icon: '🛍️' }];

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-15 flex items-center justify-center" style={{ backgroundColor: 'rgb(var(--bg-color))', color: 'rgb(var(--text-color))' }}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <Link href="/" className="text-purple-400 hover:text-purple-300">
            ← Back to Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-15 flex" style={{ backgroundColor: 'rgb(var(--bg-color))', color: 'rgb(var(--text-color))' }}>
      <SideNav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidenavOpen={sidenavOpen}
        setShowSidenav={setShowSidenav}
        activeTab=""
        setActiveTab={() => {}}
      />

      <div className="flex-1 flex flex-col">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>

        <HeaderBar
          cartCount={cart.length}
          onCartClick={() => {}}
          onMenuClick={() => setShowSidenav(!sidenavOpen)}
          headerTabs={headerTabs}
          activeTab=""
          setActiveTab={() => {}}
        />

        <MobileNavigationMenu activeTab="" />

        <main className="relative flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 border border-purple-500/20 rounded-xl p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-purple-400" />
                    Payment Details
                  </h2>

                  <form onSubmit={handlePayment} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <User className="w-5 h-5 text-purple-400" />
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                              errors.firstName ? 'border-red-500' : 'border-purple-500/30'
                            }`}
                            placeholder="John"
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                              errors.lastName ? 'border-red-500' : 'border-purple-500/30'
                            }`}
                            placeholder="Doe"
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                            errors.email ? 'border-red-500' : 'border-purple-500/30'
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                            errors.phone ? 'border-red-500' : 'border-purple-500/30'
                          }`}
                          placeholder="0771234567"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Digital Delivery Notice */}
                    <div className="pt-4 border-t border-purple-500/20 flex items-start gap-3 p-4 bg-purple-900/20 rounded-lg">
                      <Lock className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-300 font-medium mb-1">
                          Digital Product Delivery
                        </p>
                        <p className="text-xs text-gray-400">
                          Products will be instantly added to your account after successful payment. No physical shipping required.
                        </p>
                      </div>
                    </div>

                  </form>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 border border-purple-500/20 rounded-xl p-6 sticky top-4">
                  <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    {cart.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-purple-500/10">
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium">{item.name}</p>
                          <p className="text-gray-400 text-xs">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-4 border-t border-purple-500/20">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Shipping</span>
                      <span className="text-green-400">Free</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-red-500/0 my-4"></div>
                    <div className="flex justify-between text-xl font-bold">
                      <span className="text-white">Total</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
                        ${total}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    disabled={isProcessing || !isGatewayReady}
                    className="w-full mt-6 py-4 bg-gradient-to-r from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/25 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : !isGatewayReady ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Initializing payment...
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        Proceed to Payment
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    Powered by PayHere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

