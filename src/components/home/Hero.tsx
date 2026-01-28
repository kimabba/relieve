"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Hero() {
  const locale = useLocale();
  const isKo = locale === "ko";

  const features = [
    { ko: "피부에 화학성분 無", en: "No chemicals on skin", icon: "eco" },
    { ko: "자극 없음", en: "No irritation", icon: "healing" },
    { ko: "알레르기 걱정 無", en: "No allergy risk", icon: "shield" },
    { ko: "전신 제모 가능", en: "Full body care", icon: "spa" },
  ];

  return (
    <header className="relative w-full min-h-[650px] lg:min-h-[750px] overflow-hidden">
      {/* Pink + Purple Split Gradient Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-pink-100 to-violet-300"></div>
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-violet-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[650px] lg:min-h-[750px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-16">

          {/* Left Content */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/90 backdrop-blur-sm text-violet-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
              {isKo ? "프리미엄 슈가링" : "Premium Sugaring"}
            </span>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-[1.1] mb-6">
              {isKo ? (
                <>
                  <span className="text-pink-500">Beauty</span> Life
                  <br />
                  <span className="text-violet-600 text-3xl sm:text-4xl lg:text-5xl">슈가링으로 완성하세요</span>
                </>
              ) : (
                <>
                  <span className="text-pink-500">Beauty</span> Life
                  <br />
                  <span className="text-violet-600 text-3xl sm:text-4xl lg:text-5xl">with Sugaring</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
              {isKo
                ? "100% 천연 성분으로 민감한 피부도 안심. 부드럽고 오래가는 슈가링의 차이를 경험하세요."
                : "100% natural ingredients safe for sensitive skin. Experience the gentle, long-lasting difference of sugaring."}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white text-base font-bold h-14 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                {isKo ? "시술 메뉴 보기" : "View Treatments"}
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link
                href="/reservation"
                className="inline-flex items-center justify-center bg-white/80 hover:bg-white text-violet-700 border-2 border-violet-300 hover:border-violet-400 text-base font-semibold h-14 px-8 rounded-full transition-all duration-300 shadow-lg"
              >
                {isKo ? "예약하기" : "Book Now"}
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="block text-2xl font-bold text-violet-700">724+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{isKo ? "리뷰" : "Reviews"}</span>
              </div>
              <div className="w-px h-10 bg-violet-300"></div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-pink-500">4.9</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{isKo ? "평점" : "Rating"}</span>
              </div>
              <div className="w-px h-10 bg-violet-300"></div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-violet-700">100%</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{isKo ? "천연" : "Natural"}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="order-1 lg:order-2 flex flex-col gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1 border border-white/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="size-12 rounded-full bg-gradient-to-br from-pink-400 to-violet-400 flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-white text-xl">{feature.icon}</span>
                </div>
                <span className="font-semibold text-gray-700 text-lg">
                  {isKo ? feature.ko : feature.en}
                </span>
                <span className="ml-auto material-symbols-outlined text-pink-400">check_circle</span>
              </div>
            ))}

            {/* Additional Trust Badge */}
            <div className="mt-4 p-6 bg-gradient-to-r from-violet-500/90 to-pink-500/90 backdrop-blur-sm rounded-2xl text-white shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-2xl">workspace_premium</span>
                <span className="font-bold text-lg">{isKo ? "국제대회 수상" : "Award Winner"}</span>
              </div>
              <p className="text-sm text-white/90">
                {isKo ? "슈가링 국제대회 그랑프리 수상 전문가" : "Grand Prix winner at International Sugaring Competition"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
