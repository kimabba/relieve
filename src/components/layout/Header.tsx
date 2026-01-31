"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";
import { placeInfo, contact, location } from "@/lib/data";

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isKo = locale === "ko";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavItems = [
    { href: "/", label: isKo ? "홈" : "HOME" },
    { href: "/about", label: isKo ? "소개" : "ABOUT" },
    { href: "/services", label: isKo ? "서비스" : "SERVICES" },
  ];

  const rightNavItems = [
    { href: "/education", label: isKo ? "교육" : "EDUCATION" },
    { href: "/yzone", label: isKo ? "Y존" : "Y-ZONE" },
    { href: "/location", label: isKo ? "오시는 길" : "CONTACT" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-waxly-brown text-waxly-cream text-xs py-2">
        <div className="section-container flex justify-between items-center">
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">location_on</span>
              {isKo ? location.address.formatted : "Gwangju, Korea"}
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">mail</span>
              relieve@email.com
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">call</span>
              {contact.phone}
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a href="https://instagram.com" className="hover:text-white transition-colors">
              <span className="text-xs font-bold">IG</span>
            </a>
            <a href={placeInfo.naverMapUrl} className="hover:text-white transition-colors">
              <span className="text-xs font-bold">N</span>
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-waxly-cream"
        }`}
      >
        <div className="section-container flex justify-between items-center py-4">
          {/* Left Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {leftNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-light tracking-wider transition-colors ${
                  isActive(item.href)
                    ? "text-waxly-brown"
                    : "text-waxly-brownLight hover:text-waxly-brown"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link href="/" className="flex flex-col items-center">
            <span
              className="text-2xl lg:text-3xl text-waxly-brown tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Relieve
            </span>
            <span className="text-[10px] text-waxly-brownLight tracking-[0.3em] uppercase">
              {isKo ? "슈가링 살롱" : "SUGARING SALON"}
            </span>
          </Link>

          {/* Right Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {rightNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-light tracking-wider transition-colors ${
                  isActive(item.href)
                    ? "text-waxly-brown"
                    : "text-waxly-brownLight hover:text-waxly-brown"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-waxly-brown p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-waxly-border py-4">
            <div className="section-container flex flex-col gap-4">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-waxly-brown font-light text-center py-2 hover:text-waxly-brownLight transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={placeInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 py-4 border border-waxly-brown text-waxly-brown text-center font-light hover:bg-waxly-brown hover:text-white transition-all"
              >
                {isKo ? "예약하기" : "BOOK NOW"}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
