"use client";

import { useLocale } from "next-intl";
import { safetyPromises } from "@/lib/data";

export default function SafetyPromise() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-accent-green/5 to-accent-green/10 dark:from-accent-green/10 dark:to-accent-green/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bloom-style Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-accent-green font-medium tracking-widest text-sm uppercase mb-4">
            <span className="material-symbols-outlined text-lg">verified_user</span>
            {isKo ? "안전 약속" : "Safety Promise"}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
            {isKo ? "엄마와 아기 모두 안심" : "Safe for Mom and Baby"}
          </h2>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {isKo
              ? "철저한 위생 관리와 천연 성분으로 안전하게 케어합니다"
              : "Safe care with strict hygiene standards and natural ingredients"}
          </p>
        </div>

        {/* Bloom-style 3-Column Trust Signals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {safetyPromises.map((promise) => (
            <div
              key={promise.icon}
              className="group flex flex-col items-center text-center p-8 bg-white/80 dark:bg-[#32322a] rounded-2xl border border-accent-green/20 hover:border-accent-green/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Bloom Icon Circle with accent-green */}
              <div className="size-16 rounded-full bg-accent-green/15 flex items-center justify-center mb-6 group-hover:bg-accent-green/25 transition-colors duration-300">
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
            </div>
          ))}
        </div>

        {/* Hospital-Grade Hygiene Banner - Bloom Style */}
        <div className="mt-14 bg-white dark:bg-[#32322a] rounded-3xl shadow-stitch-md p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 border border-accent-green/10">
          {/* Icon */}
          <div className="size-20 rounded-full bg-gradient-to-br from-accent-green/20 to-accent-green/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-4xl text-accent-green">
              shield_with_heart
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-display text-2xl font-bold text-text-main dark:text-white mb-3">
              {isKo ? "임산부 전용 케어 시스템" : "Maternity Care System"}
            </h3>
            <p className="text-text-muted dark:text-gray-400 leading-relaxed">
              {isKo
                ? "모든 도구는 UV 멸균기와 초음파 세척을 거쳐 개별 포장됩니다. 임산부 전용 쿠션과 편안한 자세로 안전하게 케어합니다."
                : "All tools undergo UV sterilization and ultrasonic cleaning before being individually packaged. Safe care with pregnancy cushions and comfortable positioning."}
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 lg:gap-12">
            <div className="text-center px-4 py-3 bg-accent-green/10 rounded-xl">
              <span className="block text-3xl font-bold text-accent-green">99.9%</span>
              <span className="text-xs text-text-muted dark:text-gray-400 uppercase tracking-wider">
                {isKo ? "멸균율" : "Sterile"}
              </span>
            </div>
            <div className="text-center px-4 py-3 bg-accent-green/10 rounded-xl">
              <span className="block text-3xl font-bold text-accent-green">5</span>
              <span className="text-xs text-text-muted dark:text-gray-400 uppercase tracking-wider">
                {isKo ? "단계 위생" : "Steps"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
