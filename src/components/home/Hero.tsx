"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { mainImages } from "@/lib/data";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <header className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${mainImages[0]}")` }}
      >
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container-main flex items-center">
        <div className="max-w-xl animate-fade-in-up">
          {/* Badge */}
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/30">
            {t("badge")}
          </span>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/90 mb-8 font-light leading-relaxed max-w-md">
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="bg-primary hover:bg-primary-dark text-white text-base font-bold h-12 px-8 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              {t("ctaPrimary")}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/40 text-base font-medium h-12 px-8 rounded-lg transition-colors flex items-center justify-center"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
