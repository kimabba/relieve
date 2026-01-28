"use client";

import { useLocale } from "next-intl";
import { safetyPromises } from "@/lib/data";

export default function SafetyPromise() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-16 lg:py-20 bg-[#5C6F68]/5 dark:bg-[#5C6F68]/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
          {/* Title */}
          <div className="text-center lg:text-left lg:w-1/3">
            <span className="inline-block text-[#5C6F68] text-sm font-bold uppercase tracking-wider mb-3">
              {isKo ? "안전 약속" : "Safety Promise"}
            </span>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-text-main dark:text-white mb-3">
              {isKo ? "당신의 안전이 최우선입니다" : "Your Safety Comes First"}
            </h3>
            <p className="text-text-muted dark:text-gray-400">
              {isKo
                ? "철저한 위생 관리와 프리미엄 품질로 안심하세요"
                : "Rest assured with our strict hygiene standards and premium quality"}
            </p>
          </div>

          {/* Safety Cards */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
            {safetyPromises.map((promise) => (
              <div
                key={promise.icon}
                className="group flex flex-col items-center justify-center p-8 bg-white dark:bg-[#32322a] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="size-16 rounded-full bg-[#5C6F68]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl text-[#5C6F68]">
                    {promise.icon}
                  </span>
                </div>
                <span className="font-bold text-text-main dark:text-white text-center mb-2">
                  {isKo ? promise.title : promise.titleEn}
                </span>
                <span className="text-sm text-text-muted dark:text-gray-400 text-center leading-relaxed">
                  {isKo ? promise.description : promise.descriptionEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
