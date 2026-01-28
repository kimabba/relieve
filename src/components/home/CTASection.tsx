"use client";

import { useTranslations } from "next-intl";
import { placeInfo } from "@/lib/data";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="section-padding bg-primary/5 dark:bg-primary/10">
      <div className="container-main text-center">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-text-muted dark:text-gray-400 mb-8 max-w-md mx-auto">
          {t("subtitle")}
        </p>
        <a
          href={placeInfo.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-lg font-bold h-14 px-10 rounded-lg transition-colors shadow-lg"
        >
          <span className="material-symbols-outlined">calendar_month</span>
          {t("button")}
        </a>
      </div>
    </section>
  );
}
