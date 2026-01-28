"use client";

import { useLocale } from "next-intl";

const features = [
  {
    icon: "eco",
    titleKo: "100% 천연 성분",
    titleEn: "100% Natural",
    descKo: "설탕, 레몬, 물 세 가지 천연 성분만으로 만든 순수한 페이스트",
    descEn: "Pure paste made from just sugar, lemon, and water",
  },
  {
    icon: "water_drop",
    titleKo: "수용성",
    titleEn: "Water Soluble",
    descKo: "따뜻한 물로 쉽게 세척, 끈적임 없음",
    descEn: "Easy cleanup with warm water, no sticky residue",
  },
  {
    icon: "favorite",
    titleKo: "저자극성",
    titleEn: "Hypoallergenic",
    descKo: "가장 민감한 피부에도 안전",
    descEn: "Safe for the most sensitive skin types",
  },
];

export default function WhySugaring() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#32322a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bloom-style Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-medium tracking-widest text-sm uppercase mb-4">
            <span className="material-symbols-outlined text-lg">spa</span>
            {isKo ? "왜 슈가링인가요?" : "Why Sugaring?"}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-6">
            {isKo ? "자연에서 온 부드러운 케어" : "Gentle Care from Nature"}
          </h2>
          <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed">
            {isKo
              ? "슈가링은 설탕, 레몬, 물로만 만들어 임산부에게도 안전합니다. 체온과 비슷한 온도로 화상 걱정 없이, 털 성장 방향으로 제거하여 통증을 최소화합니다."
              : "Made only with sugar, lemon, and water, sugaring is safe even for expectant mothers. Applied at body temperature with no burn risk, removing hair in its natural growth direction to minimize discomfort."}
          </p>
        </div>

        {/* Bloom-style 3-Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-secondary-bg/50 dark:bg-background-dark rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              {/* Bloom Icon Circle */}
              <div className="size-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl text-primary">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-3">
                {isKo ? feature.titleKo : feature.titleEn}
              </h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                {isKo ? feature.descKo : feature.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Bloom-style Benefits Section */}
        <div className="mt-16 bg-gradient-to-r from-secondary-bg to-accent-green/10 rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Benefits List */}
            <div className="flex-1 space-y-6">
              <h3 className="font-display text-2xl font-bold text-text-main dark:text-white">
                {isKo ? "임산부를 위한 안심 케어" : "Safe Care for Expectant Mothers"}
              </h3>

              <div className="space-y-4">
                {[
                  { ko: "체온과 비슷한 온도로 화상 위험 없음", en: "Applied at body temperature - no burn risk", icon: "thermostat" },
                  { ko: "화학 물질 없이 100% 천연 성분만 사용", en: "100% natural ingredients, no chemicals", icon: "eco" },
                  { ko: "모발 성장 방향으로 제거하여 통증 최소화", en: "Hair removed in natural growth direction", icon: "healing" },
                  { ko: "피부 각질 제거 효과로 부드러운 피부", en: "Natural exfoliation for smoother skin", icon: "spa" },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white/60 dark:bg-white/10 rounded-xl p-4">
                    <span className="material-symbols-outlined text-accent-green text-xl mt-0.5">
                      {benefit.icon}
                    </span>
                    <span className="text-text-main dark:text-gray-200 font-medium">
                      {isKo ? benefit.ko : benefit.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Stats */}
            <div className="flex-shrink-0 flex flex-col gap-4">
              <div className="bg-white dark:bg-background-dark rounded-2xl p-6 text-center shadow-stitch-md min-w-[160px]">
                <span className="block text-4xl font-bold text-primary mb-1">100%</span>
                <span className="text-sm text-text-muted">{isKo ? "천연 성분" : "Natural"}</span>
              </div>
              <div className="bg-white dark:bg-background-dark rounded-2xl p-6 text-center shadow-stitch-md min-w-[160px]">
                <span className="block text-4xl font-bold text-accent-green mb-1">0</span>
                <span className="text-sm text-text-muted">{isKo ? "화학 첨가물" : "Chemicals"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
