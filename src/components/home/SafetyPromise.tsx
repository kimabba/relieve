"use client";

import { useLocale } from "next-intl";
import { safetyPromises } from "@/lib/data";

export default function SafetyPromise() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#E0F2F1] to-[#B2DFDB]/30">
      <div className="section-container">
        {/* Joy-style Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-joy-teal font-bold tracking-widest uppercase text-xs mb-2 block">
            {isKo ? "안전 약속" : "Safety Promise"}
          </span>
          <h2 className="section-title mb-4">
            {isKo ? "엄마와 아기 모두 안심" : "Safe for Mom and Baby"}
          </h2>
          <p className="text-joy-textLight text-lg">
            {isKo
              ? "철저한 위생 관리와 천연 성분으로 안전하게 케어합니다"
              : "Safe care with strict hygiene standards and natural ingredients"}
          </p>
        </div>

        {/* Joy-style 3-Column Trust Signals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {safetyPromises.map((promise) => (
            <div
              key={promise.icon}
              className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-soft hover:-translate-y-1 transition-all duration-300"
            >
              {/* Joy Icon Circle with teal accent */}
              <div className="w-16 h-16 rounded-full bg-joy-teal/15 flex items-center justify-center mb-6 group-hover:bg-joy-teal/25 transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-joy-teal">
                  {promise.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-serif text-lg font-bold text-joy-dark mb-3">
                {isKo ? promise.title : promise.titleEn}
              </h3>
              <p className="text-sm text-joy-textLight leading-relaxed">
                {isKo ? promise.description : promise.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        {/* Hospital-Grade Hygiene Banner */}
        <div className="mt-14 bg-white rounded-3xl shadow-soft p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-joy-teal/20 to-joy-teal/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-4xl text-joy-teal">
              shield_with_heart
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-serif text-2xl font-bold text-joy-dark mb-3">
              {isKo ? "임산부 전용 케어 시스템" : "Maternity Care System"}
            </h3>
            <p className="text-joy-textLight leading-relaxed">
              {isKo
                ? "모든 도구는 UV 멸균기와 초음파 세척을 거쳐 개별 포장됩니다. 임산부 전용 쿠션과 편안한 자세로 안전하게 케어합니다."
                : "All tools undergo UV sterilization and ultrasonic cleaning before being individually packaged. Safe care with pregnancy cushions and comfortable positioning."}
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 lg:gap-12">
            <div className="text-center px-4 py-3 bg-joy-teal/10 rounded-xl">
              <span className="block text-3xl font-bold text-joy-teal">99.9%</span>
              <span className="text-xs text-joy-textLight uppercase tracking-wider">
                {isKo ? "멸균율" : "Sterile"}
              </span>
            </div>
            <div className="text-center px-4 py-3 bg-joy-teal/10 rounded-xl">
              <span className="block text-3xl font-bold text-joy-teal">5</span>
              <span className="text-xs text-joy-textLight uppercase tracking-wider">
                {isKo ? "단계 위생" : "Steps"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
