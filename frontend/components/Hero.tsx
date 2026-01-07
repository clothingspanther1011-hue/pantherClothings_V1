"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { HeroSlide } from "@/types";

interface HeroProps {
  slides?: HeroSlide[];
  whatsappNumber?: string;
}

const defaultSlides: HeroSlide[] = [
  {
    _id: "default-1",
    title: "STREET ARCHIVE: 001",
    subtitle: "Main Character Energy",
    description: "Premium staples for those who refuse to blend in. Stop settling for mid fits.",
    image: { asset: { _ref: "", _type: "reference" } },
    imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1200&q=80",
    ctaText: "Secure the Fit",
    ctaLink: "/products",
    order: 0,
    isActive: true
  },
  {
    _id: "default-2",
    title: "THE LATEST DROP",
    subtitle: "Zero Gatekeeping",
    description: "The trend cycle moves fast. We move faster. Cop the newest arrivals before they're ghosted.",
    image: { asset: { _ref: "", _type: "reference" } },
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    ctaText: "Cop Now",
    ctaLink: "/products",
    order: 1,
    isActive: true
  },
  {
    _id: "default-3",
    title: "HEAVYWEIGHT ONLY",
    subtitle: "Built Different",
    description: "Ultra-thick fabrics and boxy cuts. Quality that actually lives up to the hype.",
    image: { asset: { _ref: "", _type: "reference" } },
    imageUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1200&q=80",
    ctaText: "Browse Collection",
    ctaLink: "/products",
    order: 2,
    isActive: true
  }
];

export default function Hero({
  slides = defaultSlides,
  whatsappNumber = "7084721011"
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const getImageUrl = (slide: HeroSlide): string => {
    return slide.imageUrl || defaultSlides[0].imageUrl || "";
  };

  return (
    <section className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] min-h-[500px] max-h-[900px] overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide._id}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="absolute inset-0">
            <Image
              src={getImageUrl(slide)}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              quality={85}
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          </div>



          <div className="relative h-full flex items-center z-20"> {/* Changed: Added z-20, removed pointer-events-none */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl pb-20 lg:pb-0">

                {/* Subtitle */}
                <div className="inline-block mb-4 animate-fade-in"> {/* Removed pointer-events-auto */}
                  <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white uppercase bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
                    {slide.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 sm:mb-6 leading-[0.9] tracking-tighter animate-slide-up italic">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-lg animate-slide-up-delay font-medium">
                  {slide.description}
                </p>

                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-2 relative"> {/* Added relative */}
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
                  >
                    {/* SVG icon here */}
                    <span>Join the Tribe</span>
                  </a>

                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-bold border-2 border-white/20 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                  >
                    <span>{slide.ctaText}</span>
                    {/* SVG arrow here */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${currentSlide === index
                ? "w-12 h-1 bg-white"
                : "w-3 h-1 bg-white/30 hover:bg-white/60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 hidden md:block animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Keep Scrolling</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}