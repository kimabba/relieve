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
    <section className="py-20 lg:py-28 bg-secondary-bg dark:bg-[#32322a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stitch-style Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">{content.sectionLabel}</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
            {content.title}
          </h2>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {content.description}
          </p>
        </div>

        {/* Stitch-style Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {content.steps.map((step, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-background-dark p-6 rounded-[12px] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 relative ${
                step.highlight
                  ? "shadow-stitch-lg ring-2 ring-primary/20 scale-[1.02]"
                  : "shadow-stitch hover:shadow-stitch-md"
              }`}
            >
              {/* Step Number - Absolute positioned */}
              <span className="absolute top-4 right-4 text-3xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {step.step}
              </span>

              {/* Icon */}
              <div
                className={`size-14 rounded-full flex items-center justify-center mb-4 transition-colors ${
                  step.highlight
                    ? "bg-primary text-white shadow-stitch"
                    : "bg-primary/10 text-primary group-hover:bg-primary/20"
                }`}
              >
                <span className="material-symbols-outlined text-2xl">
                  {step.icon}
                </span>
              </div>

              {/* Content */}
              <h4 className="font-display font-bold text-text-main dark:text-white mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-text-muted dark:text-gray-400 leading-relaxed">
                {step.description}
              </p>

              {/* Highlight Badge */}
              {step.highlight && (
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                  99.9%
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Stitch-style Trust Banner */}
        <div className="mt-12 bg-white dark:bg-background-dark rounded-[12px] p-6 shadow-stitch flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="size-12 rounded-full bg-accent-teal/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-accent-teal text-2xl">
              verified_user
            </span>
          </div>
          <div>
            <p className="font-display font-bold text-text-main dark:text-white">
              {locale === "ko"
                ? "의료급 멸균 인증"
                : "Medical-Grade Sterilization Certified"}
            </p>
            <p className="text-sm text-text-muted dark:text-gray-400">
              {locale === "ko"
                ? "모든 위생 프로세스는 의료 기준을 충족합니다"
                : "All hygiene processes meet medical standards"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
