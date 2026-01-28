"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { menuItems } from "@/lib/data";

export default function ServiceHighlights() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isKo = locale === "ko";

  // Featured services - first visit specials
  const featuredServices = menuItems.filter((item) => item.isFirstVisit);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(isKo ? "ko-KR" : "en-US").format(price);
  };

  return (
    <section className="section-padding bg-background-light dark:bg-background-dark">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-section-header">{t("firstVisit")}</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-text-muted dark:text-gray-400">{t("subtitle")}</p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.name}
              className="group card card-hover overflow-hidden"
            >
              {/* Card Image placeholder - using gradient */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
                <span className="material-symbols-outlined text-6xl text-primary/50">
                  spa
                </span>
              </div>

              <div className="p-8">
                <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-2">
                  {isKo ? service.name : service.nameEn}
                </h3>
                <p className="text-text-muted dark:text-gray-400 mb-6 leading-relaxed text-sm">
                  {isKo ? service.description : service.descriptionEn}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-text-main dark:text-white font-medium text-lg">
                    ₩{formatPrice(service.price)}
                  </span>
                  <Link
                    href="/reservation"
                    className="text-primary font-bold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    {t("bookNow")}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center h-12 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white text-base font-bold rounded-lg transition-colors"
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
