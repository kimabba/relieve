"use client";

import { useLocale } from "next-intl";

const trimesterData = {
  ko: {
    sectionLabel: "임산부 케어",
    title: "임신 단계별 케어 가이드",
    description: "각 임신 시기에 맞춘 맞춤형 케어로 안전하고 편안한 시술을 제공합니다.",
    trimesters: [
      {
        icon: "calendar_month",
        label: "1분기",
        period: "1~12주",
        title: "상담 및 민감성 체크",
        description:
          "첫 12주 동안은 호르몬 변화로 피부가 가장 민감합니다. 패치 테스트를 진행하고 짧은 시술로 편안함을 확인합니다.",
        highlights: ["패치 테스트", "짧은 시술", "민감도 확인"],
      },
      {
        icon: "schedule",
        label: "2분기",
        period: "13~26주",
        title: "정기 관리 시작",
        description:
          "임신의 '황금기'입니다. 4~5주마다 정기적인 슈가링으로 모발 성장을 줄일 수 있습니다. 임산부 전용 쿠션으로 허리를 지지합니다.",
        highlights: ["정기 관리", "모발 성장 감소", "전용 쿠션"],
      },
      {
        icon: "favorite",
        label: "3분기",
        period: "27주~",
        title: "출산 준비 케어",
        description:
          "베이비문 왁싱이라고도 합니다. 출산 예정일 2주 전 마지막 시술을 권장합니다. 옆으로 누운 자세로 안전하게 진행합니다.",
        highlights: ["베이비문 왁싱", "안전한 자세", "출산 준비"],
      },
    ],
  },
  en: {
    sectionLabel: "Maternity Care",
    title: "Care by Trimester Guide",
    description: "Customized care for each stage of pregnancy ensures safe and comfortable treatments.",
    trimesters: [
      {
        icon: "calendar_month",
        label: "1st Trimester",
        period: "Weeks 1-12",
        title: "Consultation & Sensitivity",
        description:
          "During the first 12 weeks, your skin is most sensitive due to hormonal surges. We focus on patch testing and shorter appointments to ensure your comfort.",
        highlights: ["Patch Test", "Short Sessions", "Sensitivity Check"],
      },
      {
        icon: "schedule",
        label: "2nd Trimester",
        period: "Weeks 13-26",
        title: "Regular Maintenance",
        description:
          "The 'golden period' of pregnancy. Regular sugaring every 4-5 weeks helps reduce hair growth significantly. We introduce our specialized pregnancy pillows.",
        highlights: ["Regular Care", "Reduced Growth", "Special Pillows"],
      },
      {
        icon: "favorite",
        label: "3rd Trimester",
        period: "Week 27+",
        title: "Pre-Birth Preparation",
        description:
          "Also known as the 'Baby Moon' wax. We recommend your final appointment 2 weeks before your due date. We utilize side-lying positions for safety.",
        highlights: ["Baby Moon", "Safe Positions", "Birth Prep"],
      },
    ],
  },
};

export default function TrimesterGuide() {
  const locale = useLocale();
  const content = locale === "ko" ? trimesterData.ko : trimesterData.en;

  return (
    <section className="py-20 lg:py-28 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stitch-style Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">
            {content.sectionLabel}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
            {content.title}
          </h2>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {content.description}
          </p>
        </div>

        {/* Stitch-style 3-Column Trimester Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.trimesters.map((trimester, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#32322a] rounded-[12px] p-8 shadow-stitch hover:shadow-stitch-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-6 -mt-6 group-hover:bg-primary/10 transition-colors"></div>

              {/* Icon */}
              <div className="icon-circle-lg mb-6 group-hover:bg-primary/20 transition-colors relative z-10">
                <span className="material-symbols-outlined text-2xl text-primary">
                  {trimester.icon}
                </span>
              </div>

              {/* Label & Period */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                  {trimester.label}
                </span>
                <span className="text-xs text-text-muted dark:text-gray-500 bg-primary/10 px-2 py-0.5 rounded-full">
                  {trimester.period}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-3">
                {trimester.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted dark:text-gray-400 leading-relaxed mb-6 text-sm">
                {trimester.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {trimester.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
