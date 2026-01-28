"use client";

import { useTranslations, useLocale } from "next-intl";
import { safetyPromises } from "@/lib/data";

export default function SafetyPromise() {
  const t = useTranslations("safety");
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-16 bg-accent-green/5 dark:bg-accent-green/10 border-y border-primary/10">
      <div className="container-main">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {/* Title */}
          <div className="text-center md:text-left md:w-1/3">
            <h3 className="font-display text-2xl font-bold text-text-main dark:text-white mb-2">
              {t("title")}
            </h3>
            <p className="text-sm text-text-muted dark:text-gray-400">
              {t("subtitle")}
            </p>
          </div>

          {/* Safety Cards */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
            {safetyPromises.map((promise) => (
              <div
                key={promise.icon}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#32322a] rounded-lg shadow-sm"
              >
                <span className="material-symbols-outlined text-3xl text-accent-green mb-3">
                  {promise.icon}
                </span>
                <span className="font-bold text-text-main dark:text-white text-sm text-center mb-1">
                  {isKo ? promise.title : promise.titleEn}
                </span>
                <span className="text-xs text-text-muted dark:text-gray-400 text-center">
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
