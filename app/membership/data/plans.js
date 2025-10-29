export const plans = [
  {
    name: 'Rookie',
    color: 'from-slate-600 to-slate-800',
    hoverColor: 'hover:from-slate-700 hover:to-slate-900',
    subscribers: '500 slots',
    price: 0,
    period: 'Free forever',
    features: [
      { label: 'Basic spawn', bold: false },
      { label: 'Standard vehicles', bold: false },
      { label: 'Limited weapons', bold: false },
      { label: 'Community support', bold: false }
    ],
    buttonColor: 'bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900',
    badge: null
  },
  {
    name: 'Street',
    color: 'from-orange-500 to-red-600',
    hoverColor: 'hover:from-orange-600 hover:to-red-700',
    subscribers: '2,000 slots',
    price: 9.99,
    period: 'Per month, cancel anytime',
    features: [
      { label: 'Custom spawns', bold: true },
      { label: 'Premium vehicles', bold: true },
      { label: 'Extended weapons', bold: false },
      { label: 'Priority support', bold: true }
    ],
    buttonColor: 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700',
    badge: null
  },
  {
    name: 'Elite',
    color: 'from-cyan-500 to-blue-600',
    hoverColor: 'hover:from-cyan-600 hover:to-blue-700',
    subscribers: '5,000 slots',
    price: 19.99,
    period: 'Per month, cancel anytime',
    features: [
      { label: 'VIP spawns', bold: true },
      { label: 'Exclusive vehicles', bold: true },
      { label: 'All weapons unlocked', bold: true },
      { label: 'Premium support', bold: true }
    ],
    buttonColor: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700',
    badge: 'POPULAR'
  },
  {
    name: 'Cyber Legend',
    color: 'from-purple-500 to-pink-600',
    hoverColor: 'hover:from-purple-600 hover:to-pink-700',
    subscribers: '10,000 slots',
    price: 39.99,
    period: 'Per month, cancel anytime',
    features: [
      { label: 'Legendary spawns', bold: true },
      { label: 'Custom vehicles', bold: true },
      { label: 'Unlimited arsenal', bold: true },
      { label: 'Dedicated admin support', bold: true }
    ],
    buttonColor: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
    badge: 'BEST VALUE'
  },
  {
    name: 'Yakku God',
    color: 'from-purple-500 to-red-500',
    hoverColor: 'hover:from-purple-600 hover:to-red-600',
    subscribers: 'Unlimited',
    price: 99.99,
    period: 'Per month, cancel anytime',
    features: [
      { label: 'God Mode spawns', bold: true },
      { label: 'Exclusive fleet', bold: true },
      { label: 'Full weapon access', bold: true },
      { label: '24/7 VIP support', bold: true }
    ],
    buttonColor: 'bg-gradient-to-r from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600',
    badge: 'ULTIMATE'
  }
];