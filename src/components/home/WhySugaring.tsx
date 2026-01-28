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
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        {/* Joy-style Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">
            {isKo ? "왜 슈가링인가요?" : "Why Sugaring?"}
          </span>
          <h2 className="section-title mb-6">
            {isKo ? "자연에서 온 부드러운 케어" : "Gentle Care from Nature"}
          </h2>
          <p className="text-joy-text text-lg leading-relaxed">
            {isKo
              ? "슈가링은 설탕, 레몬, 물로만 만들어 임산부에게도 안전합니다. 체온과 비슷한 온도로 화상 걱정 없이, 털 성장 방향으로 제거하여 통증을 최소화합니다."
              : "Made only with sugar, lemon, and water, sugaring is safe even for expectant mothers. Applied at body temperature with no burn risk, removing hair in its natural growth direction to minimize discomfort."}
          </p>
        </div>

        {/* Joy-style 3-Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group card-joy text-center hover:-translate-y-1 transition-all duration-300"
            >
              {/* Joy Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-joy-pink/10 mx-auto mb-6 flex items-center justify-center group-hover:bg-joy-pink/20 transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl text-joy-pink">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-joy-dark mb-3">
                {isKo ? feature.titleKo : feature.titleEn}
              </h3>
              <p className="text-joy-textLight leading-relaxed">
                {isKo ? feature.descKo : feature.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Joy-style Benefits Section */}
        <div className="mt-16 card-warm p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Benefits List */}
            <div className="flex-1 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-joy-dark">
                {isKo ? "임산부를 위한 안심 케어" : "Safe Care for Expectant Mothers"}
              </h3>

              <div className="space-y-4">
                {[
                  { ko: "체온과 비슷한 온도로 화상 위험 없음", en: "Applied at body temperature - no burn risk", icon: "thermostat" },
                  { ko: "화학 물질 없이 100% 천연 성분만 사용", en: "100% natural ingredients, no chemicals", icon: "eco" },
                  { ko: "모발 성장 방향으로 제거하여 통증 최소화", en: "Hair removed in natural growth direction", icon: "healing" },
                  { ko: "피부 각질 제거 효과로 부드러운 피부", en: "Natural exfoliation for smoother skin", icon: "spa" },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white/60 rounded-xl p-4">
                    <span className="material-symbols-outlined text-joy-teal text-xl mt-0.5">
                      {benefit.icon}
                    </span>
                    <span className="text-joy-text font-medium">
                      {isKo ? benefit.ko : benefit.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Stats */}
            <div className="flex-shrink-0 flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-6 text-center shadow-soft min-w-[160px]">
                <span className="block text-4xl font-bold text-joy-pink mb-1">100%</span>
                <span className="text-sm text-joy-textLight">{isKo ? "천연 성분" : "Natural"}</span>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-soft min-w-[160px]">
                <span className="block text-4xl font-bold text-joy-teal mb-1">0</span>
                <span className="text-sm text-joy-textLight">{isKo ? "화학 첨가물" : "Chemicals"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
