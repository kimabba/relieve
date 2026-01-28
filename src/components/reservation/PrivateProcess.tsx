"use client";

import { useLocale } from "next-intl";

const processData = {
  ko: {
    sectionLabel: "프라이빗 프로세스",
    sectionTitle: "우리만의 프로세스",
    sectionDescription:
      "100% 프라이빗하고 안전한 경험을 보장합니다. 예약 순간부터 고객님의 편안함에만 집중합니다.",
    steps: [
      {
        icon: "lock",
        step: "01",
        title: "프라이빗 예약",
        description:
          "예약 시간 동안 전체 시술실을 고객님만을 위해 사용합니다. 완벽한 프라이버시와 조용한 환경을 보장합니다.",
      },
      {
        icon: "medical_services",
        step: "02",
        title: "안전 상담",
        description:
          "시술 전 임신 주차와 피부 민감도를 확인합니다. 모든 전문가가 산전 케어 안전 교육을 이수했습니다.",
      },
      {
        icon: "spa",
        step: "03",
        title: "슈가링 시술",
        description:
          "설탕, 레몬, 물로 만든 100% 천연 저온 유기농 슈가 페이스트를 사용합니다. 민감한 피부에 순하고 아기에게 안전합니다.",
      },
    ],
  },
  en: {
    sectionLabel: "Our Process",
    sectionTitle: "The Private Process",
    sectionDescription:
      "We ensure a 100% private and safe experience. From the moment you book, our focus is entirely on your well-being.",
    steps: [
      {
        icon: "lock",
        step: "01",
        title: "Private Booking",
        description:
          "We block out the entire suite for your appointment. You are the only client in the facility, ensuring complete privacy and quiet.",
      },
      {
        icon: "medical_services",
        step: "02",
        title: "Safety Consultation",
        description:
          "Before we begin, we review your trimester and skin sensitivity. Our specialists are trained in prenatal care safety.",
      },
      {
        icon: "spa",
        step: "03",
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
    <section className="py-20 lg:py-28 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stitch-style Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">
            {content.sectionLabel}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
            {content.sectionTitle}
          </h2>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {content.sectionDescription}
          </p>
        </div>

        {/* Stitch-style 3-Column Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#32322a] rounded-[12px] p-8 shadow-stitch hover:shadow-stitch-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Step Number Badge */}
              <span className="absolute top-6 right-6 text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {step.step}
              </span>

              {/* Icon */}
              <div className="icon-circle-lg mb-6 group-hover:bg-accent-teal/20 transition-colors bg-accent-teal/10">
                <span className="material-symbols-outlined text-2xl text-accent-teal">
                  {step.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed text-sm">
                {step.description}
              </p>

              {/* Bottom Accent */}
              <div className="w-12 h-1 bg-accent-teal/20 rounded-full mt-6 group-hover:bg-accent-teal/40 group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
