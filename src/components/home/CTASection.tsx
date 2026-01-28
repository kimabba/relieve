"use client";

import { useLocale } from "next-intl";
import { placeInfo, contact } from "@/lib/data";

export default function CTASection() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
      {/* Decorative Background Elements - Stitch Style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5"></div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Stitch-style Badge */}
        <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-8 border border-white/20">
          <span className="material-symbols-outlined text-base">spa</span>
          {isKo ? "지금 예약하세요" : "Book Now"}
        </span>

        {/* Title - Stitch Typography */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {isKo ? (
            <>
              당신만을 위한
              <br />
              특별한 케어를 경험하세요
            </>
          ) : (
            <>
              Experience Care
              <br />
              Designed Just for You
            </>
          )}
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
          {isKo
            ? "편안한 환경에서 전문가의 손길로 완벽한 슈가링을 만나보세요. 지금 바로 예약하시고 특별한 혜택을 받아가세요."
            : "Experience perfect sugaring with expert hands in a comfortable environment. Book now and receive exclusive benefits."}
        </p>

        {/* Stitch-style Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA - White on Primary */}
          <a
            href={placeInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-primary text-lg font-bold h-14 px-10 rounded-[12px] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-white/95"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            {isKo ? "네이버 예약하기" : "Book on Naver"}
          </a>

          {/* Secondary CTA - Ghost Style */}
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white text-lg font-semibold h-14 px-10 rounded-[12px] transition-all duration-300 border-2 border-white/40 hover:border-white/60"
          >
            <span className="material-symbols-outlined">call</span>
            {isKo ? "전화 문의" : "Call Us"}
          </a>
        </div>

        {/* Trust Badges - Stitch Style */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-14 pt-10 border-t border-white/20">
          <div className="flex items-center gap-2 text-white/70">
            <span className="material-symbols-outlined text-lg">verified</span>
            <span className="text-sm font-medium">
              {isKo ? "100% 천연 성분" : "100% Natural"}
            </span>
          </div>
          <div className="w-px h-4 bg-white/30"></div>
          <div className="flex items-center gap-2 text-white/70">
            <span className="material-symbols-outlined text-lg">local_hospital</span>
            <span className="text-sm font-medium">
              {isKo ? "의료급 위생" : "Medical-Grade Hygiene"}
            </span>
          </div>
          <div className="w-px h-4 bg-white/30"></div>
          <div className="flex items-center gap-2 text-white/70">
            <span className="material-symbols-outlined text-lg">workspace_premium</span>
            <span className="text-sm font-medium">
              {isKo ? "국제 수상 전문가" : "Award-Winning Expert"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
