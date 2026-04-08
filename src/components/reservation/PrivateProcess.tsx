"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const steps = [
  {
    icon: "lock",
    titleKo: "프라이빗 예약",
    titleEn: "Private Booking",
    descKo: "예약 시간 동안 전체 시술실을 고객님만을 위해 사용합니다. 완벽한 프라이버시와 조용한 환경을 보장합니다.",
    descEn: "We block out the entire suite for your appointment. You are the only client in the facility, ensuring complete privacy.",
  },
  {
    icon: "medical_services",
    titleKo: "안전 상담",
    titleEn: "Safety Consultation",
    descKo: "시술 전 임신 주차와 피부 민감도를 확인합니다. 모든 전문가가 산전 케어 안전 교육을 이수했습니다.",
    descEn: "Before we begin, we review your trimester and skin sensitivity. Our specialists are trained in prenatal care.",
  },
  {
    icon: "spa",
    titleKo: "슈가링 시술",
    titleEn: "Sugaring Treatment",
    descKo: "100% 천연 저온 유기농 슈가 페이스트를 사용합니다. 민감한 피부에 순하고 아기에게 안전합니다.",
    descEn: "We use an all-natural, low-temperature organic sugar paste. Gentle on sensitive skin and safe for baby.",
  },
];

export default function PrivateProcess() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main mb-4">
            {isKo ? "우리만의 프로세스" : "Our Private Process"}
          </h2>
          <p className="text-text-muted text-base leading-relaxed">
            {isKo
              ? "100% 프라이빗하고 안전한 경험을 보장합니다. 예약 순간부터 고객님의 편안함에만 집중합니다."
              : "We ensure a 100% private and safe experience. From the moment you book, our focus is entirely on your well-being."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.icon}
              className="flex flex-col gap-4 rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-2xl">{step.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-lg font-bold text-text-main">
                  {isKo ? step.titleKo : step.titleEn}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {isKo ? step.descKo : step.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
