"use client";

import { useLocale } from "next-intl";

const processData = {
  ko: {
    sectionTitle: "프라이빗 프로세스",
    sectionDescription:
      "100% 프라이빗하고 안전한 경험을 보장합니다. 예약 순간부터 고객님의 편안함에만 집중합니다.",
    steps: [
      {
        icon: "lock",
        title: "프라이빗 예약",
        description:
          "예약 시간 동안 전체 시술실을 고객님만을 위해 사용합니다. 완벽한 프라이버시와 조용한 환경을 보장합니다.",
      },
      {
        icon: "medical_services",
        title: "안전 상담",
        description:
          "시술 전 임신 주차와 피부 민감도를 확인합니다. 모든 전문가가 산전 케어 안전 교육을 이수했습니다.",
      },
      {
        icon: "spa",
        title: "슈가링 시술",
        description:
          "설탕, 레몬, 물로 만든 100% 천연 저온 유기농 슈가 페이스트를 사용합니다. 민감한 피부에 순하고 아기에게 안전합니다.",
      },
    ],
  },
  en: {
    sectionTitle: "Our Private Process",
    sectionDescription:
      "We ensure a 100% private and safe experience. From the moment you book, our focus is entirely on your well-being.",
    steps: [
      {
        icon: "lock",
        title: "Private Booking",
        description:
          "We block out the entire suite for your appointment. You are the only client in the facility, ensuring complete privacy and quiet.",
      },
      {
        icon: "medical_services",
        title: "Safety Consultation",
        description:
          "Before we begin, we review your trimester and skin sensitivity. Our specialists are trained in prenatal care safety.",
      },
      {
        icon: "spa",
        title: "Sugaring Treatment",
        description:
          "We use an all-natural, low-temperature organic sugar paste that is gentle on sensitive skin and safe for baby.",
      },
    ],
  },
};

export default function PrivateProcess() {
  const locale = useLocale();
  const content = locale === "ko" ? processData.ko : processData.en;

  return (
    <section className="py-16 lg:py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-text-main dark:text-white mb-4">
            {content.sectionTitle}
          </h2>
          <p className="text-text-muted dark:text-gray-400 max-w-[600px] mx-auto">
            {content.sectionDescription}
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#2c2c24] rounded-xl border border-gray-200 dark:border-white/10 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-4">
                <span className="material-symbols-outlined text-2xl">
                  {step.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-text-main dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
