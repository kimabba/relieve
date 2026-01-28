"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isKo = locale === "ko";

  const navItems = [
    { href: "/", label: isKo ? "홈" : "Home" },
    { href: "/services", label: isKo ? "서비스" : "Services" },
    { href: "/about", label: isKo ? "소개" : "About" },
    { href: "/location", label: isKo ? "오시는길" : "Location" },
    { href: "/blog", label: isKo ? "블로그" : "Blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/10 dark:border-white/5 shadow-stitch-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Bloom Style */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="size-11 rounded-full bg-secondary-bg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 border border-primary/10">
              <span className="material-symbols-outlined text-2xl text-primary">
                local_florist
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-text-main dark:text-white">
                {isKo ? "릴리브" : "Relieve"}
              </span>
              <span className="text-[10px] text-text-muted dark:text-gray-400 uppercase tracking-wider -mt-0.5">
                {isKo ? "임산부 슈가링 케어" : "Maternity Sugaring"}
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Stitch Style */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2.5 text-sm font-medium rounded-[10px] transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-text-main hover:text-primary hover:bg-primary/5 dark:text-white dark:hover:text-primary"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side - Stitch Style */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-3 px-6 rounded-[10px] transition-all duration-300 shadow-stitch hover:shadow-stitch-md hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              {isKo ? "예약하기" : "Book Now"}
            </Link>
          </div>

          {/* Mobile Menu Button - Stitch Style */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="size-11 rounded-[10px] bg-secondary-bg dark:bg-white/10 flex items-center justify-center text-text-main dark:text-white hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Stitch Style */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-primary/10 dark:border-white/10 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium py-3.5 px-4 rounded-[10px] transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-text-main hover:text-primary hover:bg-primary/5 dark:text-white dark:hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-primary/10 dark:border-white/10">
                <Link
                  href="/reservation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-base font-semibold py-4 px-6 rounded-[10px] transition-all duration-300 shadow-stitch"
                >
                  <span className="material-symbols-outlined">calendar_month</span>
                  {isKo ? "예약하기" : "Book Now"}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
