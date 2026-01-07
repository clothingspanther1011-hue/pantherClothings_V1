"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.jpg";

interface FooterProps {
  whatsappNumber?: string;
}

export default function Footer({ whatsappNumber = "7084721011" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: "Men's Collection", href: "/products?category=men" },
      { name: "Women's Collection", href: "/products?category=women" },
      { name: "New Arrivals", href: "/products?filter=new" },
      { name: "Best Sellers", href: "/products?filter=bestsellers" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Shipping Policy", href: "/shipping-policy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  };

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/pantherclothings1011", icon: Instagram },
    { name: "Facebook", href: "https://facebook.com/pantherclothing", icon: Facebook },
    { name: "Twitter", href: "https://twitter.com/pantherclothing", icon: Twitter },
  ];

  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* 1. TOP SECTION: THE WHATSAPP "NEWSLETTER" CTA */}
      <div className="bg-white text-black py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Join the <span className="italic">Panther</span> Tribe
            </h2>
            <p className="mt-2 text-gray-600 font-medium tracking-tight">
              Get early access to drops & exclusive WhatsApp-only offers.
            </p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi! I want to join the Panther tribe.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl group"
          >
            Connect via WhatsApp
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          {/* Brand & Mission (Spans 5 columns) */}
          <div className="md:col-span-5 flex flex-col space-y-8">
            <Link href="/" className="inline-block group">
              {/* LARGE CIRCULAR LOGO */}
              <div className="relative h-28 w-28 md:h-36 md:w-36 rounded-full overflow-hidden border-4 border-white/10 bg-white p-1 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:scale-105 group-hover:border-white/30">
                <Image
                  src={logo}
                  alt="Panther Clothing"
                  fill
                  className="object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed font-medium">
              Premium streetwear for those who move in silence. Designed in India, respected everywhere.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections (Spans 7 columns) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.25em] mb-8 text-white/50">Shop</h4>
              <ul className="space-y-4">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-semibold tracking-wide">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.25em] mb-8 text-white/50">Support</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-semibold tracking-wide">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] mb-8 text-white/50">Headquarters</h4>
              <ul className="space-y-5 text-gray-400 text-sm">
                <li className="flex gap-4 items-start group">
                  <MapPin size={20} className="text-white shrink-0 group-hover:animate-bounce" />
                  <span className="font-medium leading-tight">Narnaund, Haryana, India</span>
                </li>
                <li className="flex gap-4 items-start group">
                  <Mail size={20} className="text-white shrink-0" />
                  <span className="break-all font-medium leading-tight group-hover:text-white transition-colors">
                    clothingspanther1011@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BAR */}
      <div className="border-t border-white/5 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © {currentYear} Panther Clothing. Built for the bold.
          </p>
          
          <div className="flex gap-10">
            <Link href="/privacy" className="text-gray-600 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors">Privacy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors">Terms</Link>
          </div>
          
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
            Made with <span className="text-white mx-1 inline-block animate-pulse">♥</span> Radhesh
          </p>
        </div>
      </div>
    </footer>
  );
}