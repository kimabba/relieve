"use client";

import { useLocale } from "next-intl";

const trimesters = [
  {
    icon: "calendar_month",
    labelKo: "임신 1기",
    labelEn: "1st Trimester",
    titleKo: "상담 & 민감도 확인",
    titleEn: "Consultation & Sensitivity",
    descKo:
      "호르몬 변화로 피부가 가장 민감한 시기입니다. 패치 테스트와 짧은 시술로 편안함을 확인하며 적응을 돕습니다.",
    descEn:
      "During the first 12 weeks, your skin is most sensitive due to hormonal surges. We focus on patch testing and shorter appointments to ensure your comfort while your body adjusts.",
  },
  {
    icon: "schedule",
    labelKo: "임신 2기",
    labelEn: "2nd Trimester",
    titleKo: "정기 관리",
    titleEn: "Regular Maintenance",
    descKo:
      "임신의 '황금기'입니다. 4-5주마다 정기적인 슈가링으로 모발 성장을 크게 줄일 수 있습니다. 허리 지지를 위한 임산부 전용 베개를 도입합니다.",
    descEn:
      "The \"golden period\" of pregnancy. Regular sugaring every 4-5 weeks helps reduce hair growth significantly. We introduce our specialized pregnancy pillows for back support.",
  },
  {
    icon: "favorite",
    labelKo: "임신 3기",
    labelEn: "3rd Trimester",
    titleKo: "출산 전 준비",
    titleEn: "Pre-Birth Preparation",
    descKo:
      "'베이비문' 왁싱이라고도 합니다. 출산 예정일 최소 2주 전 마지막 시술을 권장합니다. 산모와 아기의 안전을 위해 옆으로 눕는 자세를 활용합니다.",
    descEn:
      "Also known as the \"Baby Moon\" wax. We recommend your final appointment 2 weeks before your due date. We utilize side-lying positions to ensure safety for you and baby.",
  },
];

export default function TrimesterGuide() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative w-full py-16 bg-background-light">
      <div className="px-4 md:px-10">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">
              {isKo ? "당신의 여정" : "Your Journey"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-text-main">
              {isKo ? "임신 기수별 케어 가이드" : "Care by Trimester Guide"}
            </h2>
          </div>

          <div className="relative pl-8 border-l-2 border-primary/20 space-y-12">
            {trimesters.map((trimester) => (
              <div key={trimester.labelEn} className="relative">
                <div className="absolute -left-[41px] top-0 size-6 rounded-full border-4 border-background-light bg-primary" />
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-xl">{trimester.icon}</span>
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {isKo ? trimester.labelKo : trimester.labelEn}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-main">
                    {isKo ? trimester.titleKo : trimester.titleEn}
                  </h3>
                  <p className="text-text-muted">
                    {isKo ? trimester.descKo : trimester.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
