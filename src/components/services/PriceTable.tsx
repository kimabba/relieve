"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { menuItems, type MenuItem } from "@/lib/data";
import { motion } from "framer-motion";

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
    <>
      {/* Hero Section - Waxly Style */}
      <section className="relative min-h-[50vh] overflow-hidden bg-background-light">
        {/* Decorative Curved Line */}
        <svg
          className="absolute bottom-0 right-0 w-[500px] h-[300px] opacity-20 pointer-events-none"
          viewBox="0 0 500 300"
          fill="none"
        >
          <path
            d="M500 0C400 80 300 120 200 160C100 200 50 250 0 300"
            stroke="#6A483C"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        <div className="relative min-h-[50vh] flex items-center pt-32 pb-16">
          <div className="section-container text-center">
            <motion.span
              className="inline-block text-text-main/60 text-sm tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {isKo ? "시술 안내" : "Services"}
            </motion.span>
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl text-text-main mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {isKo ? "투명한 가격 안내" : "Transparent Pricing"}
            </motion.h1>
            <motion.p
              className="text-text-muted font-light text-lg lg:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {isKo
                ? "추가 비용 없이 정직한 가격, 확실한 결과를 약속드립니다"
                : "We promise honest pricing with no hidden costs and guaranteed results"}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="section-container">
          {/* Categories */}
          <div className="space-y-8">
            {categories.map((category, catIndex) => {
              const items = getItemsByCategory(category.key);
              if (items.length === 0) return null;

              return (
                <motion.div
                  key={category.key}
                  className="bg-background-light p-8 border border-primary/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/10">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'wght' 200" }}>
                        {category.icon}
                      </span>
                    </div>
                    <h2
                      className="text-2xl text-text-main"
                    >
                      {t(category.key)}
                    </h2>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        className="flex justify-between items-start p-4 bg-white border border-primary/10 hover:border-primary transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="flex-1">
                          <h3 className="text-text-main mb-1">
                            {isKo ? item.name : item.nameEn}
                          </h3>
                          <p className="text-sm text-text-muted font-light">
                            {isKo ? item.description : item.descriptionEn}
                          </p>
                        </div>
                        <div className="text-right ml-4">
                          <span
                            className="text-lg text-text-main"
                          >
                            ₩{formatPrice(item.price)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Book Now Button */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/reservation"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-light tracking-wider hover:bg-primary-dark transition-all duration-300"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              {isKo ? "예약하기" : "Book Now"}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
