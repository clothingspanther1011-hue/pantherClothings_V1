"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import logo from "../assets/logo1.png";

interface NavbarProps {
  whatsappNumber?: string;
}

export default function Navbar({ whatsappNumber = "7084721011" }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = pathname === "/";
  const isSolid = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isSolid 
            ? "bg-white/95 backdrop-blur-md shadow-md py-1" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Increased Height of the flex container to h-24 or h-32 */}
          <div className="flex items-center justify-between h-20 md:h-28 transition-all duration-500">
            
            {/* --- HUGE LOGO SECTION --- */}
            <Link href="/" className="flex items-center group">
              <div className={`relative transition-all duration-500 ease-in-out ${
                isScrolled 
                  ? "h-16 w-36 md:h-20 md:w-48"  // Size when scrolled
                  : "h-20 w-44 md:h-28 md:w-64"  // Initial huge size
              }`}>
                <Image
                  src={logo}
                  alt="Panther Clothing Logo"
                  fill
                  priority
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-bold text-base lg:text-lg uppercase tracking-widest transition-colors duration-300 ${
                    pathname === link.href 
                      ? isSolid ? "text-black border-b-2 border-black" : "text-white border-b-2 border-white"
                      : isSolid ? "text-gray-500 hover:text-black" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-8 py-3 rounded-none font-black uppercase tracking-tighter text-sm transition-all shadow-xl hover:translate-y-[-2px] active:scale-95 ${
                  isSolid ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <Phone size={18} />
                Contact
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`md:hidden p-2 transition-colors ${
                isSolid ? "text-black" : "text-white"
              }`}
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[70] bg-white transition-transform duration-700 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-24 border-b">
          {/* Mobile Menu Logo Size */}
          <div className="relative h-14 w-32">
            <Image src={logo} alt="Logo" fill className="object-contain" />
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-black">
            <X size={35} />
          </button>
        </div>

        <div className="flex flex-col px-10 py-12 space-y-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-4xl font-black uppercase tracking-tighter ${
                pathname === link.href ? "text-black" : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}