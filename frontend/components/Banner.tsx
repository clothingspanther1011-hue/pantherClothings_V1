"use client";

import Image from "next/image";
import Link from "next/link";
import type { Banner } from "@/types";

interface BannerProps {
  banner: Banner;
}

export default function Banner({ banner }: BannerProps) {
  const getImageUrl = (): string => {
    return banner.imageUrl || "";
  };

  const bgColorClass = {
    white: "bg-white",
    black: "bg-black",
    gray: "bg-zinc-100",
    custom: "bg-gradient-to-br from-zinc-900 via-black to-zinc-900",
  }[banner.backgroundColor];

  const textColorClass = banner.textColor === "white" ? "text-white" : "text-black";

  // Full Width Layout - Cinematic Hype
  if (banner.layout === "full") {
    return (
      <section className="relative h-[450px] md:h-[550px] overflow-hidden group">
        <Image
          src={getImageUrl()}
          alt={banner.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          quality={90}
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50 backdrop-grayscale-[0.3]" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            {banner.subtitle && (
              <p className="text-xs md:text-sm font-bold text-white tracking-[0.3em] uppercase mb-4 bg-white/10 backdrop-blur-md inline-block px-4 py-1 rounded-full">
                {banner.subtitle}
              </p>
            )}
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 italic tracking-tighter uppercase leading-[0.8]">
              {banner.title}
            </h2>
            {banner.description && (
              <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl mx-auto font-medium">
                {banner.description}
              </p>
            )}
            {banner.ctaText && banner.ctaLink && (
              <Link
                href={banner.ctaLink}
                className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                {banner.ctaText}
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Centered Overlay Layout - The "Lookbook" Vibe
  if (banner.layout === "centered") {
    return (
      <section className="relative h-[550px] md:h-[650px] overflow-hidden">
        <Image
          src={getImageUrl()}
          alt={banner.title}
          fill
          className="object-cover"
          quality={90}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="relative h-full flex items-end pb-12 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              {banner.subtitle && (
                <p className="text-sm md:text-base font-black text-white uppercase tracking-tighter mb-2 italic">
                  {banner.subtitle}
                </p>
              )}
              <h2 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none uppercase">
                {banner.title}
              </h2>
              {banner.ctaText && banner.ctaLink && (
                <Link
                  href={banner.ctaLink}
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-sm hover:pr-12 transition-all"
                >
                  {banner.ctaText}
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Split Layout - Editorial Style
  const isImageLeft = banner.layout === "split-left";

  return (
    <section className={`relative overflow-hidden ${bgColorClass}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-0 items-stretch ${!isImageLeft ? "md:grid-flow-dense" : ""}`}>
          <div className={`relative h-[400px] md:h-auto ${!isImageLeft ? "md:col-start-2" : ""}`}>
            <Image
              src={getImageUrl()}
              alt={banner.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              quality={90}
              unoptimized
            />
          </div>

          <div className={`flex items-center px-8 md:px-16 py-20 ${!isImageLeft ? "md:col-start-1" : ""}`}>
            <div className="max-w-xl">
              {banner.subtitle && (
                <span className={`text-xs font-bold ${textColorClass} opacity-50 uppercase tracking-[0.4em] mb-6 block`}>
                  {banner.subtitle}
                </span>
              )}
              <h2 className={`text-5xl md:text-7xl font-black ${textColorClass} mb-6 tracking-tighter uppercase italic leading-[0.85]`}>
                {banner.title}
              </h2>
              {banner.description && (
                <p className={`text-lg ${textColorClass} opacity-70 mb-10 font-medium leading-tight`}>
                  {banner.description}
                </p>
              )}
              {banner.ctaText && banner.ctaLink && (
                <Link
                  href={banner.ctaLink}
                  className={`inline-block px-12 py-5 rounded-full font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 ${
                    banner.textColor === "white"
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-black text-white hover:bg-zinc-800"
                  }`}
                >
                  {banner.ctaText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}