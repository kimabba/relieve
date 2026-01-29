"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { menuItems, type MenuItem } from "@/lib/data";
import { motion } from "framer-motion";

type Category = "firstVisit" | "premium" | "annual" | "lash";

interface CategoryInfo {
  key: Category;
  icon: string;
  colorClass: string;
}

const categories: CategoryInfo[] = [
  { key: "firstVisit", icon: "celebration", colorClass: "from-[#FFD700] to-[#FFA500]" },
  { key: "premium", icon: "diamond", colorClass: "from-[#9B8AC4] to-[#B8A5E3]" },
  { key: "annual", icon: "card_membership", colorClass: "from-[#FFB5C5] to-[#FFC0CB]" },
  { key: "lash", icon: "visibility", colorClass: "from-[#5BA8A8] to-[#73C7C7]" },
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
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9B8AC4] via-[#A890D3] to-[#B8A5E3]" />
        <div className="absolute top-20 right-[10%] w-32 h-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-20 left-[15%] w-24 h-24 rounded-full bg-[#FFB5C5]/20 blur-xl" />

        <div className="relative min-h-[50vh] flex items-center pt-32 pb-16">
          <div className="section-container text-center">
            <motion.span
              className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="material-symbols-outlined text-base">content_cut</span>
              {isKo ? "시술 안내" : "Services"}
            </motion.span>
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 drop-shadow-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {isKo ? "시술 메뉴 & 가격" : "Services & Pricing"}
            </motion.h1>
            <motion.p
              className="text-white/90 text-lg lg:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {isKo
                ? "프리미엄 슈가링과 왁싱 서비스를 합리적인 가격에 경험하세요"
                : "Experience premium sugaring and waxing services at reasonable prices"}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="py-20 lg:py-28 bg-[#FFFAF4]">
        <div className="section-container">

          {/* Categories */}
          <div className="space-y-8">
            {categories.map((category, catIndex) => {
              const items = getItemsByCategory(category.key);
              if (items.length === 0) return null;

              return (
                <motion.div
                  key={category.key}
                  className="bg-white rounded-3xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.colorClass} flex items-center justify-center`}>
                      <span className="material-symbols-outlined text-xl text-white">
                        {category.icon}
                      </span>
                    </div>
                    <h2
                      className="text-2xl font-bold text-gray-800"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {t(category.key)}
                    </h2>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        className="flex justify-between items-start p-4 rounded-2xl bg-[#FFFAF4] hover:bg-[#FFF5EE] transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-1">
                            {isKo ? item.name : item.nameEn}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {isKo ? item.description : item.descriptionEn}
                          </p>
                        </div>
                        <div className="text-right ml-4">
                          <span className="text-lg font-bold text-[#9B8AC4]">
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
              className="inline-flex items-center justify-center gap-3 bg-[#9B8AC4] hover:bg-[#8577B0] text-white text-lg font-bold h-16 px-12 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="material-symbols-outlined">calendar_month</span>
              {isKo ? "예약하기" : "Book Now"}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
