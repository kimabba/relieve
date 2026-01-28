"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <header className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVIaYYMSSK6GivUSwyg1AYyb3_4DY9V0TZy83V9BL_Jqd9W-bK81gM8ENuFYXeALaHgXbiXxOLyS5tnAtwxkEGmL-XS7qbeBjduWG4rzDijWmwhcEYJ9kINEtwZUxiNftVHoXUaK1ktKQZrJwjafVI29r-pXq1Q4SWdKmTWKohtXOICpwAeB5q2w-znRHa3g-SvEITdHsDpkKlmov-2lwmRLU2Bqo41Zhqfwi_cREBF4hEqhvDL1wrNPrRwBWcS8Rni29vTWR8Tlc")`,
        }}
      >
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl animate-fade-in-up">
          {/* Badge */}
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/30">
            {t("badge")}
          </span>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            {isKo ? (
              <>
                당신의 여정을 위한
                <br />
                안전하고 부드러운 케어
              </>
            ) : (
              <>
                Safe & Gentle Care
                <br />
                for Your Journey
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/90 mb-8 font-light leading-relaxed max-w-md">
            {isKo
              ? "천연 유기농 슈가링의 순수함을 경험하세요. 임산부를 위해 특별히 설계된 부드럽고 효과적이며 안전한 케어입니다."
              : "Experience the purity of organic sugaring. A gentle, effective, and safe ritual designed specifically for expectant mothers."}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="bg-primary hover:bg-primary-dark text-white text-base font-bold h-12 px-8 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              {isKo ? "시술 메뉴 보기" : "View Treatments"}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/40 text-base font-medium h-12 px-8 rounded-lg transition-colors flex items-center justify-center"
            >
              {isKo ? "전문가 소개" : "Our Philosophy"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
