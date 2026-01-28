"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function WhySugaring() {
  const t = useTranslations("whySugaring");

  return (
    <section className="section-padding bg-secondary-bg dark:bg-[#32322a]">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="flex-1 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD_vTA09i4Sx9TA8Jdj2mIszEbeT-jyfFAH5TIucCDGBJqGkM-u4xPxSTgrPhBEUGFyB5S6F7rWmMLfT3fEpKC1LcU5ejAlBjerrwYUUpNCM6eiTmzl5NCZeOyCU3fsrPGeS0fvvQrEZVnnyxw0N3DfYbwgBnkKhXbWMpchd3Dyzl9zBfWcztDd2bSEKUQ4QWuw1k3nmZaf_cFeRJsPa_cmMePl9-Z2al-zLyiVPyeWF53W0zYcXYO6JGGMFjAc3pHV4E45bU6Bp8"
                alt="Natural sugaring ingredients - sugar, lemon, and water"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-12 w-32 h-32 bg-background-light dark:bg-background-dark rounded-full p-4 flex items-center justify-center shadow-lg hidden md:flex">
              <div className="text-center">
                <span className="block text-primary font-bold text-xl">100%</span>
                <span className="block text-text-muted dark:text-gray-400 text-xs uppercase tracking-wide">
                  Natural
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-6">
              {t("title")}
            </h2>
            <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed mb-6">
              {t("description1")}
            </p>
            <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed mb-8">
              {t("description2")}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="icon-circle">
                  <span className="material-symbols-outlined text-primary">
                    water_drop
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    {t("feature1Title")}
                  </h4>
                  <p className="text-sm text-text-muted dark:text-gray-400">
                    {t("feature1Desc")}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="icon-circle">
                  <span className="material-symbols-outlined text-primary">eco</span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    {t("feature2Title")}
                  </h4>
                  <p className="text-sm text-text-muted dark:text-gray-400">
                    {t("feature2Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
