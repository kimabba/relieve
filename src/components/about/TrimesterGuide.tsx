"use client";

import { useLocale } from "next-intl";

const trimesterData = {
  ko: {
    sectionLabel: "임산부 케어",
    title: "임신 단계별 케어 가이드",
    trimesters: [
      {
        icon: "calendar_month",
        label: "1분기 (1~12주)",
        title: "상담 및 민감성 체크",
        description:
          "첫 12주 동안은 호르몬 변화로 피부가 가장 민감합니다. 패치 테스트를 진행하고 짧은 시술로 편안함을 확인합니다.",
      },
      {
        icon: "schedule",
        label: "2분기 (13~26주)",
        title: "정기 관리 시작",
        description:
          "임신의 '황금기'입니다. 4~5주마다 정기적인 슈가링으로 모발 성장을 줄일 수 있습니다. 임산부 전용 쿠션으로 허리를 지지합니다.",
      },
      {
        icon: "favorite",
        label: "3분기 (27주~)",
        title: "출산 준비 케어",
        description:
          "베이비문 왁싱이라고도 합니다. 출산 예정일 2주 전 마지막 시술을 권장합니다. 옆으로 누운 자세로 안전하게 진행합니다.",
      },
    ],
  },
  en: {
    sectionLabel: "Maternity Care",
    title: "Care by Trimester Guide",
    trimesters: [
      {
        icon: "calendar_month",
        label: "1st Trimester",
        title: "Consultation & Sensitivity",
        description:
          "During the first 12 weeks, your skin is most sensitive due to hormonal surges. We focus on patch testing and shorter appointments to ensure your comfort.",
      },
      {
        icon: "schedule",
        label: "2nd Trimester",
        title: "Regular Maintenance",
        description:
          "The 'golden period' of pregnancy. Regular sugaring every 4-5 weeks helps reduce hair growth significantly. We introduce our specialized pregnancy pillows.",
      },
      {
        icon: "favorite",
        label: "3rd Trimester",
        title: "Pre-Birth Preparation",
        description:
          "Also known as the 'Baby Moon' wax. We recommend your final appointment 2 weeks before your due date. We utilize side-lying positions for safety.",
      },
    ],
  },
};

export default function TrimesterGuide() {
  const locale = useLocale();
  const content = locale === "ko" ? trimesterData.ko : trimesterData.en;

  return (
    <section className="py-20 lg:py-28 bg-background-light dark:bg-background-dark">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">
            {content.sectionLabel}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mt-2 text-text-main dark:text-white">
            {content.title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 border-l-2 border-primary/20 space-y-12">
          {content.trimesters.map((trimester, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-0 size-6 rounded-full border-4 border-background-light dark:border-background-dark bg-primary" />

              <div className="flex flex-col gap-3">
                {/* Label with Icon */}
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-xl">
                    {trimester.icon}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider">
                    {trimester.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-display text-text-main dark:text-white">
                  {trimester.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                  {trimester.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
