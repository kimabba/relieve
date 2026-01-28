"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Hero() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <header className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background with Bloom warm gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-secondary-bg via-background-light to-accent-green/10">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content - Bloom centered layout */}
      <div className="relative h-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[600px] lg:min-h-[700px]">
        <div className="max-w-3xl text-center animate-fade-in-up py-20">
          {/* Bloom-style Badge */}
          <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/80 backdrop-blur-sm text-text-main text-xs font-semibold uppercase tracking-wider mb-8 border border-primary/20 shadow-stitch">
            <span className="material-symbols-outlined text-primary text-sm">local_florist</span>
            {isKo ? "임산부 전용 슈가링 케어" : "Maternity Sugaring Care"}
          </span>

          {/* Title - Bloom typography */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-main leading-[1.15] mb-6 tracking-tight">
            {isKo ? (
              <>
                소중한 당신을 위한
                <br />
                <span className="text-primary">따뜻하고 안전한</span> 케어
              </>
            ) : (
              <>
                Warm & Safe Care
                <br />
                for <span className="text-primary">Your Precious Journey</span>
              </>
            )}
          </h1>

          {/* Subtitle - Bloom style */}
          <p className="text-lg text-text-muted mb-10 leading-relaxed max-w-xl mx-auto">
            {isKo
              ? "천연 성분으로 만든 순수한 슈가링. 임산부를 위해 특별히 설계된 부드럽고 안전한 케어로 편안한 휴식을 경험하세요."
              : "Pure sugaring with natural ingredients. Experience comfortable relaxation with gentle, safe care designed for expectant mothers."}
          </p>

          {/* Bloom-style CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-base font-semibold h-14 px-8 rounded-full transition-all duration-300 shadow-stitch-md hover:shadow-stitch-lg hover:-translate-y-0.5"
            >
              {isKo ? "케어 메뉴 보기" : "View Treatments"}
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-white hover:bg-secondary-bg text-text-main border-2 border-primary/20 hover:border-primary/40 text-base font-medium h-14 px-8 rounded-full transition-all duration-300 shadow-stitch"
            >
              {isKo ? "더 알아보기" : "Learn More"}
            </Link>
          </div>

          {/* Trust indicators - Bloom style */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10">
            <div className="flex items-center gap-3 px-5 py-3 bg-white/60 rounded-full shadow-stitch-sm">
              <span className="material-symbols-outlined text-primary">verified</span>
              <span className="text-sm font-medium text-text-main">
                {isKo ? "724+ 리뷰" : "724+ Reviews"}
              </span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/60 rounded-full shadow-stitch-sm">
              <span className="material-symbols-outlined text-accent-green">eco</span>
              <span className="text-sm font-medium text-text-main">
                {isKo ? "100% 천연성분" : "100% Natural"}
              </span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/60 rounded-full shadow-stitch-sm">
              <span className="material-symbols-outlined text-primary">star</span>
              <span className="text-sm font-medium text-text-main">
                {isKo ? "평점 4.9" : "4.9 Rating"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
