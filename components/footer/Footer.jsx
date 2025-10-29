'use client';

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import FooterSection from "./FooterSection";
import SocialLinks from "./SocialLinks";
import Newsletter from "./Newsletter";
import PartnerLogos from "./PartnerLogos";
import { footerData } from "../../lib/footerData";
import BRAINTISA from '../../public/braintisa_logo_tp.png';

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 border-t border-fuchsia-500/30 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 -right-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-fuchsia-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Company Info - Enhanced */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">

              <div className="relative w-62 h-32 bg-white/10 rounded-lg p-4 flex items-center justify-center border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300 flex-shrink-0">
                <Image
                  src={BRAINTISA}
                  alt="Braintisa"
                  width={248}
                  height={248}
                  className="object-contain "
                />
              </div>
            </Link>

            <p className="text-purple-200/90 text-base leading-relaxed max-w-md font-light">
              {footerData.company.description}
            </p>

            <SocialLinks socialLinks={footerData.socialLinks} />

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-500/20 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-purple-200 font-medium">Secure Platform</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerData.sections.map((section, index) => (
            <FooterSection key={index} section={section} />
          ))}

          {/* Newsletter and Partner Logos */}
          <div className="md:col-span-10 lg:col-span-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="order-1">
                <Newsletter newsletter={footerData.newsletter} />
              </div>
              <div className="order-2 -mt-4">
                <PartnerLogos />
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Glow Effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-purple-500/20"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"></div>
          </div>
        </div>

        {/* Bottom Section - Enhanced */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-purple-400/80 text-sm font-light">
              {footerData.copyright}
            </p>
            <div className="hidden md:block w-px h-4 bg-purple-500/20"></div>
            <p className="text-purple-500/60 text-xs">
              Made with ❤️ for a better web
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#privacy"
              className="text-sm text-purple-400/80 hover:text-fuchsia-400 transition-all duration-300 hover:translate-y-[-2px] font-light"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-sm text-purple-400/80 hover:text-fuchsia-400 transition-all duration-300 hover:translate-y-[-2px] font-light"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="text-sm text-purple-400/80 hover:text-fuchsia-400 transition-all duration-300 hover:translate-y-[-2px] font-light"
            >
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 hover:from-purple-600/30 hover:to-fuchsia-600/30 border border-purple-500/30 rounded-full text-purple-200 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
          >
            <span>Back to Top</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}