"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/about", label: t("about") },
    { href: "/location", label: t("location") },
    { href: "/blog", label: t("blog") },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#e5e0d8] dark:border-[#3a3a30]">
      <div className="container-main">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined text-3xl">spa</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-text-main dark:text-white">
              {locale === "ko" ? "릴리브" : "Relieve"}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-text-main hover:text-primary dark:text-white dark:hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              href="/reservation"
              className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-colors shadow-sm"
            >
              {t("book")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-main dark:text-white p-2"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#e5e0d8] dark:border-[#3a3a30]">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-text-main hover:text-primary dark:text-white dark:hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/reservation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary hover:bg-primary-dark text-white text-base font-bold py-3 px-6 rounded-lg transition-colors shadow-sm text-center mt-2"
              >
                {t("book")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
