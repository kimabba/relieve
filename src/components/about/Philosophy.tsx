"use client";

import { useLocale } from "next-intl";

const philosophyData = {
  ko: {
    sectionLabel: "우리의 철학",
    title: "자연과 전문성의 조화",
    description:
      "릴리브는 임산부의 아름다움과 편안함을 위해 탄생했습니다. 천연 성분과 전문 기술의 완벽한 조화를 통해 안전하고 효과적인 슈가링 경험을 제공합니다.",
    features: [
      {
        icon: "eco",
        title: "100% 천연 성분",
        description: "설탕, 레몬, 물로만 만든 순수 천연 슈가 페이스트",
      },
      {
        icon: "favorite",
        title: "부드러운 케어",
        description: "임산부 피부에 최적화된 저온 시술로 자극 최소화",
      },
      {
        icon: "verified",
        title: "전문가 시술",
        description: "산전 케어 전문 교육을 이수한 에스테티션",
      },
    ],
    quote: "모든 어머니는 특별한 케어를 받을 자격이 있습니다.",
    quoteAuthor: "릴리브 팀",
  },
  en: {
    sectionLabel: "Our Philosophy",
    title: "Harmony of Nature & Expertise",
    description:
      "Relieve was born for the beauty and comfort of expectant mothers. Through the perfect harmony of natural ingredients and professional techniques, we provide a safe and effective sugaring experience.",
    features: [
      {
        icon: "eco",
        title: "100% Natural",
        description: "Pure sugar paste made only with sugar, lemon, and water",
      },
      {
        icon: "favorite",
        title: "Gentle Care",
        description:
          "Low-temperature treatment optimized for pregnant skin",
      },
      {
        icon: "verified",
        title: "Expert Care",
        description: "Estheticians trained in prenatal care protocols",
      },
    ],
    quote: "Every mother deserves special care.",
    quoteAuthor: "Relieve Team",
  },
};

export default function Philosophy() {
  const locale = useLocale();
  const content = locale === "ko" ? philosophyData.ko : philosophyData.en;

  return (
    <section className="py-20 lg:py-28 bg-secondary-bg dark:bg-[#32322a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stitch-style Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-label">{content.sectionLabel}</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-6">
            {content.title}
          </h2>
          <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Stitch-style 3-Column Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {content.features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-background-dark rounded-[12px] p-8 shadow-stitch hover:shadow-stitch-md transition-all duration-300 hover:-translate-y-1 text-center"
            >
              {/* Icon */}
              <div className="icon-circle-lg mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-2xl text-primary">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-lg text-text-main dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stitch-style Quote Block */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-background-dark rounded-[12px] p-8 shadow-stitch text-center relative">
            {/* Decorative Quote Mark */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 size-8 rounded-full bg-primary flex items-center justify-center shadow-stitch">
              <span className="material-symbols-outlined text-white text-lg">
                format_quote
              </span>
            </div>

            <blockquote className="pt-4">
              <p className="font-display text-xl lg:text-2xl text-text-main dark:text-white italic leading-relaxed mb-4">
                &ldquo;{content.quote}&rdquo;
              </p>
              <footer className="flex items-center justify-center gap-2">
                <div className="w-8 h-[1px] bg-primary/30" />
                <cite className="text-sm font-medium text-primary not-italic">
                  {content.quoteAuthor}
                </cite>
                <div className="w-8 h-[1px] bg-primary/30" />
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
