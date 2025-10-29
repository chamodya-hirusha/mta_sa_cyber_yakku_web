import Link from "next/link";
import Image from "next/image";
import FooterSection from "./FooterSection";
import SocialLinks from "./SocialLinks";
import Newsletter from "./Newsletter";
import { footerData } from "../../lib/footerData";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-950 border-t border-fuchsia-400/40 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700/25 via-transparent to-indigo-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-800/20 via-transparent to-purple-900/25"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/5 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
                <span className="text-white font-bold text-sm">CY</span>
              </div>
              <span className="text-xl font-bold text-white">{footerData.company.name}</span>
            </Link>
            <p className="text-purple-200/80 text-sm leading-relaxed max-w-md">
              {footerData.company.description}
            </p>
            <SocialLinks socialLinks={footerData.socialLinks} />
          </div>

          {/* Footer Sections */}
          {footerData.sections.map((section, index) => (
            <FooterSection key={index} section={section} />
          ))}

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <Newsletter newsletter={footerData.newsletter} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-purple-400 text-sm">
              {footerData.copyright}
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-purple-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-purple-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-purple-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}