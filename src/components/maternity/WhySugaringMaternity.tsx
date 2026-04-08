"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const features = [
  {
    icon: "eco",
    titleKo: "100% 천연",
    titleEn: "100% Natural",
    descKo: "레몬, 설탕, 물만 사용. 피부와 아기에 닿는 화학 물질, 향료, 수지가 전혀 없습니다.",
    descEn: "Just lemon, sugar, and water. Absolutely no chemicals, fragrances, or resins touching your skin or baby.",
  },
  {
    icon: "thermostat",
    titleKo: "체온 적용",
    titleEn: "Body Temperature",
    descKo: "체온에서 시술하여 화상 위험이 전혀 없고 안전한 혈액 순환을 촉진합니다.",
    descEn: "Applied at body temperature, ensuring zero risk of burns and promoting safe blood circulation.",
  },
  {
    icon: "spa",
    titleKo: "부드러운 기법",
    titleEn: "Gentle Technique",
    descKo: "모발에만 달라붙고 살아있는 피부 세포에는 붙지 않아 불편함과 자극을 최소화합니다.",
    descEn: "Adheres only to hair, not live skin cells, significantly minimizing discomfort and irritation.",
  },
];

export default function WhySugaringMaternity() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative flex flex-col w-full py-16 bg-white">
      <div className="max-w-[1024px] mx-auto w-full px-4 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight text-text-main">
              {isKo ? (
                <>
                  슈가링이<br />
                  <span className="text-primary italic">가장 안전한 선택</span>인 이유
                </>
              ) : (
                <>
                  Why Sugaring is the<br />
                  <span className="text-primary italic">Safest Choice</span>
                </>
              )}
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              {isKo
                ? "임신은 감각과 민감도를 높입니다. 유기농 슈가 페이스트는 먹을 수 있는 단순한 성분으로 만들어져 이 소중한 시기에 완벽한 선택입니다. 수지도 독소도 없이 순수함만 있습니다."
                : "Pregnancy heightens your senses and sensitivity. Our organic sugar paste is made from simple, edible ingredients, making it the perfect choice during this delicate time. No resins, no toxins, just purity."}
            </p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnUzpJcylZsuLcbb764kBZyNYMeyKdsVTq1V6zuNJfZHFl3VAeXlNYSYbheKQJ4q5w8q2vsrch1DkawyVlUuolHqHMp8t0_Wy3Y6YBVpwitKZbCYhgc7V0FOIg0tCluAMBnCGqPu7rjitXEuuGDAc1ZKDkqHJ0YfV30xJBIUtV6JlRqh8-EBE9lgIFLWXZ9iDo5UvIYkNbWZurwVFSJUT9ngGgJ4RRURTkGxQNBkBULDbZsmhAqA4y03JrfNNQdkK_KYM75XlXZWc')",
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.icon}
              className="group flex flex-col gap-4 rounded-2xl border border-[#e3e1de] bg-background-light p-8 transition-all hover:shadow-md hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold leading-tight text-text-main">
                  {isKo ? feature.titleKo : feature.titleEn}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {isKo ? feature.descKo : feature.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
