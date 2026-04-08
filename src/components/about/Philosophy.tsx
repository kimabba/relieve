"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";

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
    <section className="py-20 lg:py-28 bg-background-light overflow-hidden relative">
      {/* Decorative Curved Line */}
      <svg
        className="absolute top-0 left-0 w-[300px] h-[200px] opacity-20 pointer-events-none"
        viewBox="0 0 300 200"
        fill="none"
      >
        <path
          d="M0 0C50 50 100 80 150 100C200 120 250 150 300 200"
          stroke="#6A483C"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-text-muted text-sm tracking-widest uppercase mb-4 block">
            {content.sectionLabel}
          </span>
          <h2
            className="text-3xl lg:text-4xl text-text-main mb-6"
          >
            {content.title}
          </h2>
          <p className="text-text-muted font-light text-lg leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {content.features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 text-center border border-primary/10 hover:border-primary transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-text-main">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'wght' 200" }}>
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <h3
                className="text-lg text-text-main mb-3"
              >
                {feature.title}
              </h3>
              <p className="text-sm text-text-muted font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Block */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-8 text-center relative border border-primary/10">
            {/* Decorative Quote Mark */}
            <div className="text-text-main/20 mb-4">
              <span
                className="text-6xl leading-none"
              >
                &ldquo;&ldquo;
              </span>
            </div>

            <blockquote>
              <p
                className="text-xl lg:text-2xl text-text-main italic leading-relaxed mb-4"
              >
                {content.quote}
              </p>
              <footer className="flex items-center justify-center gap-2">
                <div className="w-8 h-[1px] bg-primary/30" />
                <cite className="text-sm text-text-muted font-light not-italic">
                  {content.quoteAuthor}
                </cite>
                <div className="w-8 h-[1px] bg-primary/30" />
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
