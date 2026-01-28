"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Hero() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <header className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image with Stitch-style Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVIaYYMSSK6GivUSwyg1AYyb3_4DY9V0TZy83V9BL_Jqd9W-bK81gM8ENuFYXeALaHgXbiXxOLyS5tnAtwxkEGmL-XS7qbeBjduWG4rzDijWmwhcEYJ9kINEtwZUxiNftVHoXUaK1ktKQZrJwjafVI29r-pXq1Q4SWdKmTWKohtXOICpwAeB5q2w-znRHa3g-SvEITdHsDpkKlmov-2lwmRLU2Bqo41Zhqfwi_cREBF4hEqhvDL1wrNPrRwBWcS8Rni29vTWR8Tlc")`,
        }}
      >
        {/* Stitch gradient overlay - darker on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content - Stitch left-aligned layout */}
      <div className="relative h-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[600px] lg:min-h-[700px]">
        <div className="max-w-xl animate-fade-in-up py-20">
          {/* Stitch-style Badge */}
          <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-8 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            {isKo ? "프리미엄 슈가링 전문" : "Premium Sugaring Specialist"}
          </span>

          {/* Title - Stitch typography */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            {isKo ? (
              <>
                당신의 여정을 위한
                <br />
                <span className="text-primary">안전하고 부드러운</span> 케어
              </>
            ) : (
              <>
                Safe & Gentle Care
                <br />
                for <span className="text-primary">Your Journey</span>
              </>
            )}
          </h1>

          {/* Subtitle - Stitch style */}
          <p className="text-lg text-white/90 mb-10 font-light leading-relaxed max-w-md">
            {isKo
              ? "천연 유기농 슈가링의 순수함을 경험하세요. 임산부를 위해 특별히 설계된 부드럽고 효과적이며 안전한 케어입니다."
              : "Experience the purity of organic sugaring. A gentle, effective, and safe ritual designed specifically for expectant mothers."}
          </p>

          {/* Stitch-style CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-base font-semibold h-14 px-8 rounded-[12px] transition-all duration-300 shadow-stitch-md hover:shadow-stitch-lg hover:-translate-y-0.5"
            >
              {isKo ? "시술 메뉴 보기" : "View Treatments"}
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 text-base font-medium h-14 px-8 rounded-[12px] transition-all duration-300"
            >
              {isKo ? "전문가 소개" : "Our Philosophy"}
            </Link>
          </div>

          {/* Trust indicators - Stitch style */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <span className="block text-2xl font-bold text-white">724+</span>
              <span className="text-xs text-white/70 uppercase tracking-wider">
                {isKo ? "리뷰" : "Reviews"}
              </span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-white">100%</span>
              <span className="text-xs text-white/70 uppercase tracking-wider">
                {isKo ? "천연성분" : "Natural"}
              </span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-primary">★ 4.9</span>
              <span className="text-xs text-white/70 uppercase tracking-wider">
                {isKo ? "평점" : "Rating"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
