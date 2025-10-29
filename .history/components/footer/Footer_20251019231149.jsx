import Link from "next/link";
import Image from "next/image";
import FooterSection from "./FooterSection";
import SocialLinks from "./SocialLinks";
import Newsletter from "./Newsletter";
import { footerData } from "../../lib/footerData";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-900/20 to-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CY</span>
              </div>
              <span className="text-xl font-bold text-white">{footerData.company.name}</span>
            </Link>
            <p className="text-purple-300 text-sm leading-relaxed max-w-md">
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