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
        {/* Logo - P1: 포커스 상태 추가 */}
        <Link href="/" className="flex items-center gap-2 focus-ring rounded-full">
          <div className="w-9 h-9 bg-joy-teal rounded-full flex items-center justify-center text-white font-serif font-bold italic text-lg">
            R
          </div>
          <span className="font-serif text-xl font-bold text-joy-dark tracking-tight">
            Relieve
          </span>
        </Link>

        {/* Desktop Menu - P1: 포커스 상태 추가 */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                item.highlight
                  ? "bg-joy-yellow text-joy-dark hover:bg-[#E5A500] focus-visible:ring-joy-yellow"
                  : isActive(item.href)
                  ? "bg-joy-bg text-joy-pink focus-visible:ring-joy-pink"
                  : "text-joy-text hover:bg-joy-bg focus-visible:ring-joy-teal"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* CTA Button - P1: 포커스 상태 추가 */}
        <div className="hidden md:block">
          <a
            href={placeInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-joy-teal text-white rounded-full text-sm font-bold hover:bg-joy-tealDark transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-joy-teal focus-visible:ring-offset-2"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle - P1: 포커스 상태 & 터치 영역 */}
        <button
          className="md:hidden text-joy-dark p-2 rounded-full touch-target focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-joy-teal focus-visible:ring-offset-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="material-symbols-outlined icon-md">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Mobile Menu Overlay - P1: 일관된 라운드니스 & 포커스 */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full mt-4 bg-white rounded-3xl shadow-lg p-6 flex flex-col gap-4 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-bold text-joy-text text-center py-3 hover:text-joy-pink transition-colors rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-joy-pink"
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
              className="w-full text-center py-4 bg-joy-pink text-white rounded-2xl font-bold shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-joy-pink focus-visible:ring-offset-2"
            >
              {isKo ? "예약하기" : "Book Now"}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
