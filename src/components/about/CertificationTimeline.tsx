"use client";

import { useTranslations, useLocale } from "next-intl";
import { certifications } from "@/lib/data";

export default function CertificationTimeline() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="section-padding bg-background-light dark:bg-background-dark">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-text-main dark:text-white mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              workspace_premium
            </span>
            {t("certifications")}
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {/* Timeline Items */}
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ${
                      cert.highlight
                        ? "bg-primary text-white"
                        : "bg-secondary-bg dark:bg-[#32322a] text-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">
                      {cert.highlight ? "star" : "check"}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`p-4 rounded-lg ${
                      cert.highlight
                        ? "bg-primary/10 dark:bg-primary/20 border border-primary/30"
                        : "bg-secondary-bg dark:bg-[#32322a]"
                    }`}
                  >
                    {cert.year && (
                      <span className="text-sm font-bold text-primary mb-1 block">
                        {cert.year}
                      </span>
                    )}
                    <h3
                      className={`font-medium ${
                        cert.highlight
                          ? "text-text-main dark:text-white font-bold"
                          : "text-text-main dark:text-white"
                      }`}
                    >
                      {isKo ? cert.title : cert.titleEn}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
