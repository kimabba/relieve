"use client";

import { useTranslations, useLocale } from "next-intl";
import { reviews } from "@/lib/data";

export default function ReviewHighlights() {
  const t = useTranslations("reviews");
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="section-padding bg-secondary-bg dark:bg-[#32322a]">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-text-muted dark:text-gray-400">{t("subtitle")}</p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center px-8 py-4 bg-white dark:bg-background-dark rounded-xl shadow-sm">
            <span className="block text-4xl font-bold text-primary mb-1">
              {reviews.total.toLocaleString()}
            </span>
            <span className="text-sm text-text-muted dark:text-gray-400">
              {t("totalReviews")}
            </span>
          </div>
          <div className="text-center px-8 py-4 bg-white dark:bg-background-dark rounded-xl shadow-sm">
            <span className="block text-4xl font-bold text-primary mb-1">
              {reviews.participantCount.toLocaleString()}
            </span>
            <span className="text-sm text-text-muted dark:text-gray-400">
              {t("participants")}
            </span>
          </div>
        </div>

        {/* Review Keywords */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {reviews.highlights.map((highlight) => (
            <div
              key={highlight.keyword}
              className="flex flex-col items-center p-6 bg-white dark:bg-background-dark rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="material-symbols-outlined text-3xl text-primary mb-3">
                {highlight.icon}
              </span>
              <span className="font-bold text-text-main dark:text-white text-center mb-1">
                {isKo ? highlight.keyword : highlight.keywordEn}
              </span>
              <span className="text-2xl font-bold text-primary">
                {highlight.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
