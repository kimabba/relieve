"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";
import { placeInfo } from "@/lib/data";

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

  const navItems = [
    { href: "/services", label: isKo ? "Services" : "Services" },
    { href: "/about", label: isKo ? "Maternity" : "Maternity", highlight: true },
    { href: "/location", label: isKo ? "Location" : "Location" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <div
        className={`relative transition-all duration-300 w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-full shadow-soft px-6 py-3 flex justify-between items-center ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-joy-teal rounded-full flex items-center justify-center text-white font-serif font-bold italic text-lg">
            R
          </div>
          <span className="font-serif text-xl font-bold text-joy-dark tracking-tight">
            Relieve
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                item.highlight
                  ? "bg-joy-yellow text-joy-dark hover:bg-[#FDD835]"
                  : isActive(item.href)
                  ? "bg-joy-bg text-joy-pink"
                  : "text-joy-text hover:bg-joy-bg"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href={placeInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-joy-teal text-white rounded-full text-sm font-bold hover:bg-joy-tealDark transition-colors shadow-md"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-joy-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full mt-4 bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-4 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-bold text-joy-text text-center py-2 hover:text-joy-pink transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex justify-center py-2">
              <LanguageSwitcher />
            </div>
            <a
              href={placeInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 bg-joy-pink text-white rounded-xl font-bold shadow-glow"
            >
              {isKo ? "예약하기" : "Book Now"}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
