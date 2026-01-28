"use client";

import { useLocale } from "next-intl";
import { placeInfo, contact } from "@/lib/data";

export default function CTASection() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden">
      {/* Decorative Background Elements - Bloom Style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent-green/20 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-secondary-bg/10 blur-2xl"></div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Bloom-style Badge */}
        <span className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider mb-8 border border-white/20">
          <span className="material-symbols-outlined text-base">local_florist</span>
          {isKo ? "예약 안내" : "Book Your Visit"}
        </span>

        {/* Title - Bloom Typography */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {isKo ? (
            <>
              소중한 당신을 위한
              <br />
              편안한 휴식을 선물하세요
            </>
          ) : (
            <>
              Gift Yourself
              <br />
              a Moment of Rest
            </>
          )}
        </h2>

        {/* Subtitle */}
        <p className="text-white/85 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
          {isKo
            ? "따뜻하고 아늑한 공간에서 전문가의 섬세한 케어를 받아보세요. 임산부를 위한 특별한 혜택이 준비되어 있습니다."
            : "Experience gentle, expert care in our warm and cozy space. Special benefits await expectant mothers."}
        </p>

        {/* Bloom-style Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA - White on Primary */}
          <a
            href={placeInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-primary text-lg font-bold h-14 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-white/95"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            {isKo ? "네이버 예약하기" : "Book on Naver"}
          </a>

          {/* Secondary CTA - Ghost Style */}
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white text-lg font-semibold h-14 px-10 rounded-full transition-all duration-300 border-2 border-white/40 hover:border-white/60"
          >
            <span className="material-symbols-outlined">call</span>
            {isKo ? "전화 문의" : "Call Us"}
          </a>
        </div>

        {/* Trust Badges - Bloom Style */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-14 pt-10 border-t border-white/20">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90">
            <span className="material-symbols-outlined text-lg">eco</span>
            <span className="text-sm font-medium">
              {isKo ? "100% 천연" : "100% Natural"}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90">
            <span className="material-symbols-outlined text-lg">pregnant_woman</span>
            <span className="text-sm font-medium">
              {isKo ? "임산부 전문" : "Maternity Care"}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90">
            <span className="material-symbols-outlined text-lg">verified</span>
            <span className="text-sm font-medium">
              {isKo ? "724+ 리뷰" : "724+ Reviews"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
