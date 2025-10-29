// SideNav links data
export const sideNavLinks = [
  {
    name: "Home",
    path: "/",
    icon: "🛍️"
  },
  {
    name: "skins",
    path: "/skins",
    icon: "👕"
  },
  {
    name: "vehicles",
    path: "/vehicles",
    icon: "🏎️"
  },
  {
    name: "currency",
    path: "/currency",
    icon: "💵"
  },
];

// Menu links data
export const menuLinks = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "about",
    path: "/about"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "contact",
    path: "/contact"
  },
  {
    name: "membership",
    path: "/membership"
  }
];

// Navigation data for different categories
export const navigationData = {
  vehicles: {
    title: "Vehicles",
    description: "Browse our collection of premium vehicles",
    categories: [
      {
        name: "Brand",
        items: [
          { name: "BMW", count: 12, href: "/vehicles/brand/bmw" },
          { name: "Mercedes-Benz", count: 8, href: "/vehicles/brand/mercedes" },
          { name: "Audi", count: 15, href: "/vehicles/brand/audi" },
          { name: "Porsche", count: 6, href: "/vehicles/brand/porsche" },
          { name: "Tesla", count: 10, href: "/vehicles/brand/tesla" },
          { name: "Ferrari", count: 4, href: "/vehicles/brand/ferrari" }
        ]
      },
      {
        name: "Car Type",
        items: [
          { name: "Sports Cars", count: 18, href: "/vehicles/type/sports" },
          { name: "SUVs", count: 22, href: "/vehicles/type/suv" },
          { name: "Sedans", count: 16, href: "/vehicles/type/sedan" },
          { name: "Coupes", count: 12, href: "/vehicles/type/coupe" },
          { name: "Convertibles", count: 8, href: "/vehicles/type/convertible" },
          { name: "Electric", count: 14, href: "/vehicles/type/electric" }
        ]
      },
      {
        name: "Model",
        items: [
          { name: "BMW M3", count: 3, href: "/vehicles/model/bmw-m3" },
          { name: "Mercedes C-Class", count: 5, href: "/vehicles/model/mercedes-c-class" },
          { name: "Audi A4", count: 4, href: "/vehicles/model/audi-a4" },
          { name: "Porsche 911", count: 2, href: "/vehicles/model/porsche-911" },
          { name: "Tesla Model S", count: 6, href: "/vehicles/model/tesla-model-s" },
          { name: "Ferrari 488", count: 1, href: "/vehicles/model/ferrari-488" }
        ]
      }
    ]
  },
  skins: {
    title: "Skins",
    description: "Customize your vehicles with premium skins",
    categories: [
      {
        name: "Skin Type",
        items: [
          { name: "Racing Stripes", count: 25, href: "/skins/type/racing-stripes" },
          { name: "Carbon Fiber", count: 18, href: "/skins/type/carbon-fiber" },
          { name: "Matte Finish", count: 22, href: "/skins/type/matte-finish" },
          { name: "Chrome", count: 15, href: "/skins/type/chrome" },
          { name: "Custom Graphics", count: 30, href: "/skins/type/custom-graphics" },
          { name: "Vintage", count: 12, href: "/skins/type/vintage" }
        ]
      },
      {
        name: "Color",
        items: [
          { name: "Red", count: 20, href: "/skins/color/red" },
          { name: "Blue", count: 18, href: "/skins/color/blue" },
          { name: "Black", count: 25, href: "/skins/color/black" },
          { name: "White", count: 22, href: "/skins/color/white" },
          { name: "Gold", count: 8, href: "/skins/color/gold" },
          { name: "Silver", count: 15, href: "/skins/color/silver" }
        ]
      },
      {
        name: "Brand",
        items: [
          { name: "BMW Skins", count: 12, href: "/skins/brand/bmw" },
          { name: "Mercedes Skins", count: 8, href: "/skins/brand/mercedes" },
          { name: "Audi Skins", count: 15, href: "/skins/brand/audi" },
          { name: "Porsche Skins", count: 6, href: "/skins/brand/porsche" },
          { name: "Tesla Skins", count: 10, href: "/skins/brand/tesla" },
          { name: "Ferrari Skins", count: 4, href: "/skins/brand/ferrari" }
        ]
      }
    ]
  },
  currency: {
    title: "Currency",
    description: "Purchase in-game currency and packages",
    categories: [
      {
        name: "Currency Type",
        items: [
          { name: "Cyber Coins", count: 8, href: "/currency/type/cyber-coins" },
          { name: "Premium Credits", count: 6, href: "/currency/type/premium-credits" },
          { name: "Gold Tokens", count: 10, href: "/currency/type/gold-tokens" },
          { name: "Silver Coins", count: 12, href: "/currency/type/silver-coins" },
          { name: "Diamond Points", count: 4, href: "/currency/type/diamond-points" },
          { name: "Platinum Bars", count: 7, href: "/currency/type/platinum-bars" }
        ]
      },
      {
        name: "Package Size",
        items: [
          { name: "Starter Pack", count: 5, href: "/currency/pack/starter" },
          { name: "Standard Pack", count: 8, href: "/currency/pack/standard" },
          { name: "Premium Pack", count: 6, href: "/currency/pack/premium" },
          { name: "Deluxe Pack", count: 4, href: "/currency/pack/deluxe" },
          { name: "Ultimate Pack", count: 3, href: "/currency/pack/ultimate" },
          { name: "VIP Pack", count: 2, href: "/currency/pack/vip" }
        ]
      },
      {
        name: "Value Range",
        items: [
          { name: "Under $10", count: 12, href: "/currency/range/under-10" },
          { name: "$10 - $25", count: 15, href: "/currency/range/10-25" },
          { name: "$25 - $50", count: 10, href: "/currency/range/25-50" },
          { name: "$50 - $100", count: 8, href: "/currency/range/50-100" },
          { name: "Over $100", count: 5, href: "/currency/range/over-100" },
          { name: "Special Offers", count: 6, href: "/currency/range/special" }
        ]
      }
    ]
  }
};

// Related items data for popup windows
export const relatedItemsData = {
  vehicles: {
    brands: {
      "BMW": {
        carTypes: ["Sports Cars", "Sedans", "SUVs"],
        models: ["BMW M3", "BMW X5", "BMW i8", "BMW Z4"],
        skins: ["BMW Racing Stripes", "BMW Carbon Fiber", "BMW M-Sport"]
      },
      "Mercedes-Benz": {
        carTypes: ["Luxury Sedans", "SUVs", "Coupes"],
        models: ["Mercedes C-Class", "Mercedes E-Class", "Mercedes G-Class"],
        skins: ["Mercedes AMG", "Mercedes Chrome", "Mercedes Sport"]
      },
      "Audi": {
        carTypes: ["Sports Cars", "Sedans", "SUVs"],
        models: ["Audi A4", "Audi Q7", "Audi R8", "Audi TT"],
        skins: ["Audi Quattro", "Audi S-Line", "Audi RS Package"]
      }
    },
    carTypes: {
      "Sports Cars": {
        brands: ["BMW", "Audi", "Porsche", "Ferrari"],
        models: ["BMW M3", "Audi R8", "Porsche 911", "Ferrari 488"],
        skins: ["Racing Stripes", "Carbon Fiber", "Performance Graphics"]
      },
      "SUVs": {
        brands: ["BMW", "Mercedes-Benz", "Audi", "Tesla"],
        models: ["BMW X5", "Mercedes G-Class", "Audi Q7", "Tesla Model X"],
        skins: ["Off-Road Graphics", "Adventure Themes", "Utility Packages"]
      }
    },
    models: {
      "BMW M3": {
        brand: "BMW",
        carType: "Sports Cars",
        skins: ["BMW M-Sport", "BMW Racing Stripes", "BMW Carbon Fiber"],
        price: "$65,000",
        features: ["V8 Engine", "Carbon Fiber Body", "Sport Suspension"]
      },
      "Mercedes C-Class": {
        brand: "Mercedes-Benz",
        carType: "Luxury Sedans",
        skins: ["Mercedes AMG", "Mercedes Chrome", "Mercedes Sport"],
        price: "$45,000",
        features: ["Luxury Interior", "Advanced Safety", "Premium Audio"]
      }
    }
  },
  skins: {
    skinTypes: {
      "Racing Stripes": {
        brands: ["BMW", "Mercedes-Benz", "Audi", "Porsche"],
        colors: ["Red", "Blue", "White", "Black"],
        vehicles: ["Sports Cars", "Coupes", "Convertibles"]
      },
      "Carbon Fiber": {
        brands: ["BMW", "Audi", "Porsche", "Tesla"],
        colors: ["Black", "Silver", "Gold"],
        vehicles: ["Sports Cars", "SUVs", "Electric"]
      }
    },
    colors: {
      "Red": {
        skinTypes: ["Racing Stripes", "Custom Graphics", "Vintage"],
        brands: ["BMW", "Ferrari", "Porsche"],
        vehicles: ["Sports Cars", "Coupes", "Convertibles"]
      },
      "Black": {
        skinTypes: ["Carbon Fiber", "Matte Finish", "Chrome"],
        brands: ["BMW", "Mercedes-Benz", "Audi"],
        vehicles: ["All Types"]
      }
    },
    brands: {
      "BMW Skins": {
        skinTypes: ["Racing Stripes", "Carbon Fiber", "M-Sport"],
        colors: ["Red", "Blue", "White", "Black"],
        vehicles: ["BMW M3", "BMW X5", "BMW i8"]
      }
    }
  },
  currency: {
    currencyTypes: {
      "Cyber Coins": {
        packages: ["Starter Pack", "Standard Pack", "Premium Pack"],
        valueRanges: ["Under $10", "$10 - $25", "$25 - $50"],
        uses: ["Vehicle Purchases", "Skin Customization", "Upgrades"]
      },
      "Premium Credits": {
        packages: ["Premium Pack", "Deluxe Pack", "Ultimate Pack"],
        valueRanges: ["$25 - $50", "$50 - $100", "Over $100"],
        uses: ["Exclusive Vehicles", "Premium Skins", "VIP Access"]
      }
    },
    packages: {
      "Starter Pack": {
        currencyTypes: ["Cyber Coins", "Silver Coins"],
        valueRanges: ["Under $10"],
        contents: ["1000 Cyber Coins", "500 Silver Coins", "Basic Vehicle"]
      },
      "Premium Pack": {
        currencyTypes: ["Cyber Coins", "Premium Credits"],
        valueRanges: ["$25 - $50"],
        contents: ["5000 Cyber Coins", "1000 Premium Credits", "Premium Vehicle"]
      }
    },
    valueRanges: {
      "Under $10": {
        currencyTypes: ["Cyber Coins", "Silver Coins"],
        packages: ["Starter Pack", "Basic Pack"],
        features: ["Basic Currency", "Entry Level Items"]
      },
      "$50 - $100": {
        currencyTypes: ["Premium Credits", "Gold Tokens"],
        packages: ["Deluxe Pack", "Ultimate Pack"],
        features: ["Premium Currency", "Exclusive Items"]
      }
    }
  }
};

