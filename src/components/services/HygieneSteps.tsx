"use client";

import { useLocale } from "next-intl";

const hygieneData = {
  ko: {
    sectionLabel: "5단계 위생",
    title: "의료급 위생 시스템",
    description:
      "단순 청소가 아닌 멸균입니다. 5단계 의료급 프로세스로 모든 도구가 완벽하게 무균 상태임을 보장합니다.",
    steps: [
      {
        icon: "layers",
        step: "01",
        title: "일회용 배리어",
        description: "모든 표면에 의료용 일회용 배리어를 사용합니다.",
      },
      {
        icon: "cleaning_services",
        step: "02",
        title: "초음파 세척",
        description: "고주파 초음파로 도구를 세척합니다.",
      },
      {
        icon: "wb_sunny",
        step: "03",
        title: "UV 멸균",
        description: "의료급 UV-C 라이트로 99.9% 세균을 제거합니다.",
        highlight: true,
      },
      {
        icon: "lock",
        step: "04",
        title: "밀봉 보관",
        description: "멸균된 도구는 시술 시까지 진공 밀봉됩니다.",
      },
      {
        icon: "medical_services",
        step: "05",
        title: "이중 장갑",
        description: "모든 시술에서 이중 장갑을 착용합니다.",
      },
    ],
  },
  en: {
    sectionLabel: "5-Step Protection",
    title: "Medical-Grade Hygiene",
    description:
      "We don't just clean; we sterilize. Our 5-step medical-grade process ensures every tool touching your skin is completely free of pathogens.",
    steps: [
      {
        icon: "layers",
        step: "01",
        title: "Disposable Barriers",
        description: "Every surface is covered with single-use medical barriers.",
      },
      {
        icon: "cleaning_services",
        step: "02",
        title: "Ultrasonic Clean",
        description: "Tools undergo high-frequency sound wave cleaning.",
      },
      {
        icon: "wb_sunny",
        step: "03",
        title: "UV Sterilization",
        description: "Medical-grade UV-C light eliminates 99.9% of bacteria.",
        highlight: true,
      },
      {
        icon: "lock",
        step: "04",
        title: "Sealed Storage",
        description: "Sterilized tools are vacuum-sealed until your session.",
      },
      {
        icon: "medical_services",
        step: "05",
        title: "Gloved Handling",
        description: "Estheticians double-glove for every procedure.",
      },
    ],
  },
};

export default function HygieneSteps() {
  const locale = useLocale();
  const content = locale === "ko" ? hygieneData.ko : hygieneData.en;

  return (
    <section className="bg-accent-gold/5 dark:bg-accent-gold/10 py-20 lg:py-28 border-y border-accent-gold/10 dark:border-accent-gold/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
        {/* Header */}
        <div className="text-center max-w-2xl">
          <span className="text-accent-gold font-bold tracking-widest uppercase text-xs mb-3 block">
            {content.sectionLabel}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-6">
            {content.title}
          </h2>
          <p className="text-text-muted dark:text-gray-300">
            {content.description}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {content.steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-background-dark p-6 rounded-2xl flex flex-col items-center text-center gap-4 transition-shadow ${
                step.highlight
                  ? "shadow-lg border-2 border-accent-gold/20 scale-105 z-10"
                  : "shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-md"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  step.highlight
                    ? "bg-accent-gold text-white shadow-lg shadow-accent-gold/30"
                    : "bg-secondary-bg dark:bg-white/10 text-accent-gold"
                }`}
              >
                <span className="material-symbols-outlined">{step.icon}</span>
              </div>

              {/* Content */}
              <div>
                <span className="block text-xs font-bold text-accent-gold mb-1 uppercase tracking-wider">
                  Step {step.step}
                </span>
                <h4 className="font-bold text-text-main dark:text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-text-muted dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
