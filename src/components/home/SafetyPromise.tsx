"use client";

import { useLocale } from "next-intl";
import { safetyPromises } from "@/lib/data";

export default function SafetyPromise() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-20 lg:py-24 bg-accent-green/5 dark:bg-accent-green/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stitch-style Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent-green font-medium tracking-widest text-sm uppercase mb-3 block">
            {isKo ? "안전 약속" : "Safety Promise"}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
            {isKo ? "당신의 안전이 최우선입니다" : "Your Safety Comes First"}
          </h2>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {isKo
              ? "철저한 위생 관리와 프리미엄 품질로 안심하세요"
              : "Rest assured with our strict hygiene standards and premium quality"}
          </p>
        </div>

        {/* Stitch-style 3-Column Trust Signals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {safetyPromises.map((promise) => (
            <div
              key={promise.icon}
              className="group flex flex-col items-center text-center p-8 bg-white dark:bg-[#32322a] rounded-[12px] shadow-stitch hover:shadow-stitch-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stitch Icon Circle with accent-green */}
              <div className="size-16 rounded-full bg-accent-green/10 flex items-center justify-center mb-6 group-hover:bg-accent-green/20 transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-accent-green">
                  {promise.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-text-main dark:text-white mb-3">
                {isKo ? promise.title : promise.titleEn}
              </h3>
              <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                {isKo ? promise.description : promise.descriptionEn}
              </p>

              {/* Stitch-style bottom accent line */}
              <div className="w-12 h-1 bg-accent-green/20 rounded-full mt-6 group-hover:bg-accent-green/40 group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Hospital-Grade Hygiene Banner - Stitch Style */}
        <div className="mt-14 bg-white dark:bg-[#32322a] rounded-[12px] shadow-stitch p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Icon */}
          <div className="size-20 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-4xl text-accent-green">
              verified_user
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-display text-2xl font-bold text-text-main dark:text-white mb-3">
              {isKo ? "의료급 위생 시스템" : "Hospital-Grade Hygiene"}
            </h3>
            <p className="text-text-muted dark:text-gray-400 leading-relaxed">
              {isKo
                ? "모든 도구는 UV 멸균기와 초음파 세척을 거쳐 개별 포장됩니다. 5단계 의료급 프로세스로 완벽한 무균 상태를 보장합니다."
                : "All tools undergo UV sterilization and ultrasonic cleaning before being individually packaged. Our 5-step medical-grade process ensures complete sterilization."}
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 lg:gap-12">
            <div className="text-center">
              <span className="block text-3xl font-bold text-accent-green">99.9%</span>
              <span className="text-xs text-text-muted dark:text-gray-400 uppercase tracking-wider">
                {isKo ? "멸균율" : "Sterile"}
              </span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-accent-green">5</span>
              <span className="text-xs text-text-muted dark:text-gray-400 uppercase tracking-wider">
                {isKo ? "단계 프로세스" : "Step Process"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
