"use client";

import { useLocale } from "next-intl";

const aftercareData = {
  ko: {
    sectionLabel: "시술 후 관리",
    title: "사후 관리 가이드",
    description:
      "임산부 전용 슈가링 기법은 순하지만, 적절한 사후 관리로 피부를 더욱 건강하고 빛나게 유지할 수 있습니다.",
    steps: [
      {
        icon: "schedule",
        title: "시술 직후",
        description:
          "헐렁하고 통기성 좋은 면 소재 옷을 입으세요. 뜨거운 샤워나 사우나 같은 열기를 피해주세요.",
      },
      {
        icon: "calendar_today",
        title: "24시간 후",
        description:
          "권장 천연 오일로 보습을 시작하세요. 피부를 부드럽고 촉촉하게 유지합니다.",
      },
      {
        icon: "event_repeat",
        title: "3일 후",
        description:
          "슈가 스크럽으로 부드럽게 각질 제거를 시작하세요. 인그로운 헤어 예방을 위해 주 2~3회 반복합니다.",
      },
    ],
  },
  en: {
    sectionLabel: "Aftercare",
    title: "Post-Treatment Rituals",
    description:
      "Our specialized maternity sugaring technique is gentle, but proper aftercare ensures your skin remains calm and radiant.",
    steps: [
      {
        icon: "schedule",
        title: "Immediately After",
        description:
          "Wear loose, cotton clothing to allow skin to breathe. Avoid heat sources like hot showers or saunas.",
      },
      {
        icon: "calendar_today",
        title: "24 Hours Later",
        description:
          "Begin moisturizing with our recommended organic oils to keep skin supple and hydrated.",
      },
      {
        icon: "event_repeat",
        title: "3 Days Later",
        description:
          "Exfoliate gently with a sugar scrub to prevent ingrown hairs. Continue 2-3 times per week.",
      },
    ],
  },
};

export default function AftercareTips() {
  const locale = useLocale();
  const content = locale === "ko" ? aftercareData.ko : aftercareData.en;

  return (
    <div className="bg-secondary-bg dark:bg-white/5 p-6 lg:p-8 rounded-2xl border border-accent-gold/10">
      {/* Section Header */}
      <div className="border-b border-primary/20 pb-4 mb-6">
        <span className="text-accent-gold font-bold tracking-widest uppercase text-xs mb-2 block">
          {content.sectionLabel}
        </span>
        <h4 className="font-display text-xl font-bold text-text-main dark:text-white">
          {content.title}
        </h4>
        <p className="mt-2 text-text-muted dark:text-gray-400 text-sm">
          {content.description}
        </p>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-0">
        {content.steps.map((step, index) => (
          <div key={index} className="flex gap-4 group">
            {/* Icon Column */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-accent-gold/10 text-accent-gold flex items-center justify-center shrink-0 border border-accent-gold/20 group-hover:bg-accent-gold group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[20px]">
                  {step.icon}
                </span>
              </div>
              {index < content.steps.length - 1 && (
                <div className="w-[1px] bg-accent-gold/20 h-full my-2" />
              )}
            </div>

            {/* Content */}
            <div className={index < content.steps.length - 1 ? "pb-6 pt-2" : "pt-2"}>
              <h5 className="text-base font-bold text-text-main dark:text-white font-display">
                {step.title}
              </h5>
              <p className="text-text-muted dark:text-gray-400 text-sm mt-1 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
