"use client";

import type { Banner as BannerType } from "@/types";
import Banner from "./Banner";
import Image from "next/image";
import Link from "next/link";

interface BannerSectionProps {
  banners: BannerType[];
}

const FallbackBanner = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-black">
      <Image
        src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200&q=80"
        alt="Street Archive"
        fill
        className="object-cover opacity-60 grayscale"
        quality={90}
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black/20" />
      <div className="relative h-full flex items-center justify-start text-left px-8 md:px-20">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm font-black text-white/60 uppercase tracking-[0.5em] mb-6">
             Limited Archive 2026
          </p>
          <h2 className="text-6xl md:text-9xl font-black text-white mb-8 italic tracking-tighter leading-[0.8] uppercase">
            Future <br /> Essentials
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg font-medium tracking-tight">
            Stop settling for mid fits. Our latest drop is engineered for the 1%. 
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-zinc-200 transition-all hover:scale-110 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
          >
            Secure the Fit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function BannerSection({ banners }: BannerSectionProps) {
  if (!banners || banners.length === 0) {
    return <FallbackBanner />;
  }

  return (
    <div className="space-y-0">
      {banners.map((banner) => (
        <Banner key={banner._id} banner={banner} />
      ))}
    </div>
  );
}