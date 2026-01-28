"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { menuItems, type MenuItem } from "@/lib/data";

type Category = "firstVisit" | "premium" | "annual" | "lash";

interface CategoryInfo {
  key: Category;
  icon: string;
}

const categories: CategoryInfo[] = [
  { key: "firstVisit", icon: "celebration" },
  { key: "premium", icon: "diamond" },
  { key: "annual", icon: "card_membership" },
  { key: "lash", icon: "visibility" },
];

export default function PriceTable() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isKo = locale === "ko";

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(isKo ? "ko-KR" : "en-US").format(price);
  };

  const getItemsByCategory = (category: Category): MenuItem[] => {
    return menuItems.filter((item) => item.category === category);
  };

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

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category) => {
            const items = getItemsByCategory(category.key);
            if (items.length === 0) return null;

            return (
              <div key={category.key} className="card p-8">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/20">
                  <span className="material-symbols-outlined text-2xl text-primary">
                    {category.icon}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-text-main dark:text-white">
                    {t(category.key)}
                  </h2>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-start p-4 rounded-lg bg-secondary-bg/50 dark:bg-background-dark/50 hover:bg-secondary-bg dark:hover:bg-background-dark transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-bold text-text-main dark:text-white mb-1">
                          {isKo ? item.name : item.nameEn}
                        </h3>
                        <p className="text-sm text-text-muted dark:text-gray-400">
                          {isKo ? item.description : item.descriptionEn}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <span className="text-lg font-bold text-primary">
                          ₩{formatPrice(item.price)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Book Now Button */}
        <div className="mt-12 text-center">
          <Link
            href="/reservation"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-lg font-bold h-14 px-10 rounded-lg transition-colors shadow-lg"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            {t("bookNow")}
          </Link>
        </div>
      </div>
    </section>
  );
}
