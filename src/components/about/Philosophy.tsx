"use client";

import { useTranslations } from "next-intl";

export default function Philosophy() {
  const t = useTranslations("about");

  return (
    <section className="section-padding bg-secondary-bg dark:bg-[#32322a]">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          <span className="material-symbols-outlined text-5xl text-primary mb-6">
            spa
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-6">
            {t("philosophy")}
          </h2>
          <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed">
            {t("philosophyDesc")}
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="icon-circle w-16 h-16 mb-4">
                <span className="material-symbols-outlined text-2xl text-primary">
                  eco
                </span>
              </div>
              <h3 className="font-bold text-text-main dark:text-white mb-2">
                100% Natural
              </h3>
              <p className="text-sm text-text-muted dark:text-gray-400">
                천연 성분만 사용
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="icon-circle w-16 h-16 mb-4">
                <span className="material-symbols-outlined text-2xl text-primary">
                  favorite
                </span>
              </div>
              <h3 className="font-bold text-text-main dark:text-white mb-2">
                Gentle Care
              </h3>
              <p className="text-sm text-text-muted dark:text-gray-400">
                피부에 부드러운 케어
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="icon-circle w-16 h-16 mb-4">
                <span className="material-symbols-outlined text-2xl text-primary">
                  verified
                </span>
              </div>
              <h3 className="font-bold text-text-main dark:text-white mb-2">
                Expert Care
              </h3>
              <p className="text-sm text-text-muted dark:text-gray-400">
                전문가의 꼼꼼한 시술
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
