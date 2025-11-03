"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function ProductImageGallery({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Generate multiple image views - simulate different angles/previews
  const getProductImages = () => {
    if (!product?.image) return [];
    
    if (typeof product.image === 'string' && product.image.startsWith('http')) {
      // For URL images, create variations (in a real app, these would be actual different images)
      return [
        product.image,
        product.image,
        product.image,
        product.image,
      ];
    } else {
      // For emoji/images, use the same
      return [
        product.image,
        product.image,
        product.image,
        product.image,
      ];
    }
  };

  const productImages = getProductImages();
  const currentImage = productImages[selectedIndex];

  const handleMouseMove = (e) => {
    if (!isZoomed || !currentImage?.startsWith('http')) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ 
      x: Math.max(0, Math.min(100, x)), 
      y: Math.max(0, Math.min(100, y)) 
    });
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % productImages.length);
    setIsZoomed(false);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    setIsZoomed(false);
  };

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
    setIsZoomed(false);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Container */}
      <div 
        className="relative aspect-square w-full bg-gradient-to-br from-slate-900/50 to-purple-900/20 border-2 border-purple-500/30 rounded-xl overflow-hidden group cursor-zoom-in transition-all duration-300 shadow-xl"
        onMouseEnter={() => currentImage?.startsWith('http') && setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        {currentImage?.startsWith('http') ? (
          <>
            <Image
              src={currentImage}
              alt={`${product.name} - View ${selectedIndex + 1}`}
              fill
              className={`object-cover transition-transform duration-300 ${
                isZoomed ? 'scale-150' : 'scale-100'
              }`}
              style={{
                objectPosition: isZoomed 
                  ? `${zoomPosition.x}% ${zoomPosition.y}%` 
                  : 'center'
              }}
              priority={selectedIndex === 0}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-9xl">
            {currentImage || '🛍️'}
          </div>
        )}

        {/* Zoom Indicator */}
        {currentImage?.startsWith('http') && (
          <div className={`absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            isZoomed ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          }`}>
            <ZoomIn className="w-8 h-8 text-white/80" />
          </div>
        )}

        {/* Navigation Arrows */}
        {productImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        {/* Fullscreen Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFullscreen(!isFullscreen);
          }}
          className="absolute bottom-4 left-4 p-3 bg-black/60 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20"
          aria-label="Fullscreen"
        >
          <Maximize2 className="w-5 h-5 text-white" />
        </button>

        {/* Image Indicators (Dots) */}
        {productImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {productImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleThumbnailClick(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? 'bg-purple-400 w-6'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {productImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {productImages.map((img, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === selectedIndex
                  ? 'border-purple-400 ring-2 ring-purple-400/50 scale-105'
                  : 'border-purple-500/20 hover:border-purple-400/50'
              }`}
              aria-label={`Thumbnail ${index + 1}`}
            >
              {img?.startsWith('http') ? (
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  {img}
                </div>
              )}
              {index === selectedIndex && (
                <div className="absolute inset-0 bg-purple-400/20" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-10"
          >
            <ZoomOut className="w-6 h-6" />
          </button>
          {currentImage?.startsWith('http') ? (
            <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
              <Image
                src={currentImage}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="text-9xl">{currentImage}</div>
          )}
          {productImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
