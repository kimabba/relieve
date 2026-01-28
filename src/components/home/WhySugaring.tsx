"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const features = [
  {
    icon: "eco",
    titleKo: "100% 천연 성분",
    titleEn: "100% Natural",
    descKo: "설탕, 레몬, 물 세 가지 천연 성분만으로 만든 순수한 페이스트",
    descEn: "Pure paste made from just sugar, lemon, and water",
    color: "from-[#FFB5C5] to-[#FFC0CB]",
  },
  {
    icon: "water_drop",
    titleKo: "수용성",
    titleEn: "Water Soluble",
    descKo: "따뜻한 물로 쉽게 세척, 끈적임 없음",
    descEn: "Easy cleanup with warm water, no sticky residue",
    color: "from-[#9B8AC4] to-[#B8A5E3]",
  },
  {
    icon: "favorite",
    titleKo: "저자극성",
    titleEn: "Hypoallergenic",
    descKo: "가장 민감한 피부에도 안전",
    descEn: "Safe for the most sensitive skin types",
    color: "from-[#5BA8A8] to-[#73C7C7]",
  },
];

const benefits = [
  { ko: "체온과 비슷한 온도로 화상 위험 없음", en: "Applied at body temperature - no burn risk", icon: "thermostat" },
  { ko: "화학 물질 없이 100% 천연 성분만 사용", en: "100% natural ingredients, no chemicals", icon: "eco" },
  { ko: "모발 성장 방향으로 제거하여 통증 최소화", en: "Hair removed in natural growth direction", icon: "healing" },
  { ko: "피부 각질 제거 효과로 부드러운 피부", en: "Natural exfoliation for smoother skin", icon: "spa" },
];

export default function WhySugaring() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-24 lg:py-32 bg-[#FFFAF4] overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#9B8AC4]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#FFB5C5]/10 to-transparent rounded-full blur-3xl" />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#9B8AC4]/10 text-[#9B8AC4] text-sm font-bold mb-6">
            <span className="material-symbols-outlined text-base">spa</span>
            {isKo ? "왜 슈가링인가요?" : "Why Sugaring?"}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {isKo ? "자연에서 온 부드러운 케어" : "Gentle Care from Nature"}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {isKo
              ? "슈가링은 설탕, 레몬, 물로만 만들어 임산부에게도 안전합니다. 체온과 비슷한 온도로 화상 걱정 없이, 털 성장 방향으로 제거하여 통증을 최소화합니다."
              : "Made only with sugar, lemon, and water, sugaring is safe even for expectant mothers. Applied at body temperature with no burn risk, removing hair in its natural growth direction to minimize discomfort."}
          </p>
        </motion.div>

        {/* 3-Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Gradient Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`} />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="material-symbols-outlined text-2xl text-white">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {isKo ? feature.titleKo : feature.titleEn}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {isKo ? feature.descKo : feature.descEn}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section - Glass Card Style */}
        <motion.div
          className="relative bg-gradient-to-br from-[#9B8AC4] to-[#B8A5E3] rounded-3xl p-8 lg:p-12 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFB5C5]/20 rounded-full blur-2xl" />

          <div className="relative flex flex-col lg:flex-row gap-10 items-center">
            {/* Benefits List */}
            <div className="flex-1 space-y-6">
              <h3
                className="text-2xl lg:text-3xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {isKo ? "임산부를 위한 안심 케어" : "Safe Care for Expectant Mothers"}
              </h3>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-white text-lg">
                        {benefit.icon}
                      </span>
                    </span>
                    <span className="text-white font-medium">
                      {isKo ? benefit.ko : benefit.en}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="flex-shrink-0 flex flex-row lg:flex-col gap-4">
              <motion.div
                className="bg-white rounded-2xl p-6 text-center shadow-xl min-w-[140px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <span className="block text-4xl font-bold bg-gradient-to-r from-[#FFB5C5] to-[#9B8AC4] bg-clip-text text-transparent mb-1">
                  100%
                </span>
                <span className="text-sm text-gray-600">{isKo ? "천연 성분" : "Natural"}</span>
              </motion.div>
              <motion.div
                className="bg-white rounded-2xl p-6 text-center shadow-xl min-w-[140px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <span className="block text-4xl font-bold bg-gradient-to-r from-[#9B8AC4] to-[#5BA8A8] bg-clip-text text-transparent mb-1">
                  ZERO
                </span>
                <span className="text-sm text-gray-600">{isKo ? "화학 첨가물" : "Chemicals"}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
