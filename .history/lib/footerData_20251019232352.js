// Footer data and configuration
export const footerData = {
  company: {
    name: "CYBER YAKKU",
    description: "Experience the ultimate gaming marketplace with exclusive skins, vehicles, and premium items.",
    logo: "/cyber-yakku-logo.svg"
  },
  sections: [
    {
      title: "Products",
      links: [
        { name: "Skins", href: "/skins" },
        { name: "Vehicles", href: "/vehicles" },
        { name: "Currency", href: "/currency" },
        { name: "Premium Items", href: "/premium" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Bug Reports", href: "/bugs" },
        { name: "Status", href: "/status" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" }
      ]
    }
  ],
  socialLinks: [
    { name: "Discord", href: "https://discord.gg/cyberyakku", icon: "💬" },
    { name: "Twitter", href: "https://twitter.com/cyberyakku", icon: "🐦" },
    { name: "YouTube", href: "https://youtube.com/cyberyakku", icon: "📺" },
    { name: "Instagram", href: "https://instagram.com/cyberyakku", icon: "📷" },
    { name: "Google", href: "https://google.com", icon: "🔍" }
  ],
  newsletter: {
    title: "Stay Updated",
    description: "Get the latest updates on new releases and exclusive offers.",
    placeholder: "Enter your email",
    buttonText: "Subscribe"
  },
  copyright: `© ${new Date().getFullYear()} CYBER YAKKU. All rights reserved.`
};