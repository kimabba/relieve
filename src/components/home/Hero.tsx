"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { placeInfo } from "@/lib/data";

export default function Hero() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-joy-bg">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-joy-pink/10 blur-3xl"></div>
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-joy-teal/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-joy-yellow/10 blur-2xl"></div>
      </div>

      <div className="section-container relative">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Main Hero Card - HSO Pattern */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#FFF5E6] to-[#FFE0B2] rounded-4xl p-8 lg:p-12 relative overflow-hidden">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/80 backdrop-blur-sm text-joy-pink text-xs font-bold uppercase tracking-wider mb-6 shadow-soft">
              <span className="w-2 h-2 rounded-full bg-joy-pink animate-pulse"></span>
              {isKo ? "프리미엄 슈가링" : "Premium Sugaring"}
            </span>

            {/* Hook */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-joy-dark leading-[1.1] mb-6">
              {isKo ? (
                <>
                  부드러운 터치,
                  <br />
                  <span className="text-joy-pink">빛나는 피부</span>
                </>
              ) : (
                <>
                  Gentle Touch,
                  <br />
                  <span className="text-joy-pink">Radiant Skin</span>
                </>
              )}
            </h1>

            {/* Story */}
            <p className="text-lg text-joy-text mb-8 leading-relaxed max-w-lg">
              {isKo
                ? "100% 천연 성분의 슈가링으로 민감한 피부도 안심. 임산부를 위한 프리미엄 케어를 경험하세요."
                : "100% natural sugaring safe for sensitive skin. Experience premium care designed for expectant mothers."}
            </p>

            {/* Offer - CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={placeInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">calendar_month</span>
                {isKo ? "예약하기" : "Book Now"}
              </a>
              <Link
                href="/services"
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                {isKo ? "서비스 보기" : "View Services"}
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Stats Card */}
            <div className="card-mint p-8 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-joy-teal/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-joy-teal">workspace_premium</span>
                </div>
                <span className="font-serif font-bold text-joy-dark">
                  {isKo ? "국제대회 수상" : "Award Winner"}
                </span>
              </div>
              <p className="text-sm text-joy-text leading-relaxed">
                {isKo
                  ? "슈가링 국제대회 그랑프리 수상 전문가가 직접 시술합니다."
                  : "Treatments by a Grand Prix winner at the International Sugaring Competition."}
              </p>
            </div>

            {/* Review Stats */}
            <div className="bg-white rounded-4xl p-8 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-joy-pink">724+</span>
                  <span className="text-xs text-joy-textLight uppercase tracking-wider">
                    {isKo ? "리뷰" : "Reviews"}
                  </span>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-joy-teal">4.9</span>
                  <span className="text-xs text-joy-textLight uppercase tracking-wider">
                    {isKo ? "평점" : "Rating"}
                  </span>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-joy-dark">100%</span>
                  <span className="text-xs text-joy-textLight uppercase tracking-wider">
                    {isKo ? "천연" : "Natural"}
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { ko: "임산부 전문", en: "Maternity Care", icon: "pregnant_woman" },
                { ko: "천연 성분", en: "100% Natural", icon: "eco" },
                { ko: "저자극", en: "Gentle", icon: "spa" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-soft"
                >
                  <span className="material-symbols-outlined text-joy-pink text-base">
                    {feature.icon}
                  </span>
                  <span className="text-sm font-medium text-joy-text">
                    {isKo ? feature.ko : feature.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
