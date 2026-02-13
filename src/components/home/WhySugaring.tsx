"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "eco",
    titleKo: "100% 천연 성분",
    titleEn: "100% Natural",
    descKo: "설탕, 레몬, 물만으로 만든 순수 페이스트",
    descEn: "Pure paste made from sugar, lemon, and water",
color: "bg-[#B8989B]",
  },
  {
    icon: "water_drop",
    titleKo: "수용성 포뮬러",
    titleEn: "Water Soluble",
    descKo: "따뜻한 물로 쉽게 세척, 끈적임 없음",
    descEn: "Easy cleanup with warm water",
color: "bg-[#7D6B7D]",
  },
  {
    icon: "favorite",
    titleKo: "저자극 케어",
    titleEn: "Hypoallergenic",
    descKo: "민감한 피부에도 안전한 시술",
    descEn: "Safe for sensitive skin",
color: "bg-[#8A9A8A]",
  },
];

const benefits = [
  { ko: "체온과 비슷한 온도로 화상 위험 없음", en: "No burn risk - body temperature application", icon: "thermostat" },
  { ko: "100% 천연 성분으로 화학 물질 ZERO", en: "100% natural - zero chemicals", icon: "eco" },
  { ko: "모발 성장 방향으로 제거, 통증 최소화", en: "Hair removal in growth direction", icon: "healing" },
  { ko: "자연스러운 각질 제거로 부드러운 피부", en: "Natural exfoliation for smooth skin", icon: "spa" },
];

export default function WhySugaring() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
<section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Smooth Transition from Hero - Gradient Top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4C4C6] via-[#F8F6F3] to-[#F8F6F3]" />

      {/* Single Subtle Decoration - Reduced from 2 */}
      <div className="absolute bottom-20 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#7D6B7D]/5 to-transparent rounded-full blur-3xl" />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-[#7D6B7D]/10 text-[#7D6B7D] text-sm font-bold mb-6">
            <span className="material-symbols-outlined text-base">spa</span>
            {isKo ? "왜 슈가링일까요?" : "Why Sugaring?"}
          </span>
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {isKo ? "일반 왁싱과 무엇이 다를까요?" : "What Makes It Different?"}
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed" style={{ wordBreak: "keep-all" }}>
            {isKo
              ? "슈가링은 설탕, 레몬, 물로만 만들어 임산부도 안심합니다. 체온과 비슷한 37°C로 화상 걱정 없이, 모발 성장 방향으로 제거해 통증을 최소화합니다."
              : "Made only with sugar, lemon, and water, safe for expectant mothers. Applied at 37°C body temperature with no burn risk."}
          </p>
        </motion.div>

        {/* Main Content Grid - Image + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Image Collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573697610008-4c72b4e9508f?w=600&h=750&fit=crop&q=80"
                  alt="Natural sugaring ingredients"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7D6B7D]/20 via-transparent to-transparent" />
              </div>

              {/* Floating Card 1 */}
              <motion.div
                className="absolute -right-6 top-1/4 bg-white rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B8989B] to-[#7D6B7D] flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-xl">eco</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">100%</p>
                    <p className="text-xs text-gray-500">{isKo ? "천연 성분" : "Natural"}</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                className="absolute -left-4 bottom-20 bg-white rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-[#8A9A8A] flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-xl">verified</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">ZERO</p>
                    <p className="text-xs text-gray-500">{isKo ? "화학 첨가물" : "Chemicals"}</p>
                  </div>
                </div>
              </motion.div>

              {/* Small Accent Image */}
              <motion.div
                className="absolute -bottom-6 right-10 w-28 h-28 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1448062885262-aa6670248b0e?w=200&h=200&fit=crop&q=80"
                  alt="Honey and natural ingredients"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                {/* Left Accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${feature.color}`} />

                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="material-symbols-outlined text-2xl text-white">
                      {feature.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {isKo ? feature.titleKo : feature.titleEn}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {isKo ? feature.descKo : feature.descEn}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span className="material-symbols-outlined text-gray-300 group-hover:text-[#7D6B7D] transition-colors">
                    arrow_forward
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits Section - Simplified Premium Card */}
        <motion.div
className="relative bg-[#7D6B7D] rounded-[2rem] p-8 lg:p-12 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
{/* Single Background Decoration - Reduced from 3 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left - Title & Image */}
            <div className="lg:col-span-5">
              <h3
                className="text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {isKo ? "임산부도 안심하는 이유" : "Why Expectant Mothers Trust Us"}
              </h3>
              <p className="text-white/80 text-lg mb-6" style={{ wordBreak: "keep-all" }}>
                {isKo
                  ? "전 과정 임산부 배려 설계, 편안한 자세로 케어받으세요"
                  : "Every process designed for expectant mothers' comfort"}
              </p>

              {/* Pregnant Woman Image */}
              <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 hidden lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1747073727403-af14e690b8de?w=400&h=400&fit=crop&q=80"
                  alt="Relaxing spa treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7D6B7D]/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right - Benefits List */}
            <div className="lg:col-span-7 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <span className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white text-2xl">
                      {benefit.icon}
                    </span>
                  </span>
                  <span className="text-white font-medium text-lg">
                    {isKo ? benefit.ko : benefit.en}
                  </span>
                </motion.div>
              ))}

              {/* Stats Row */}
              <div className="flex gap-4 pt-4">
                <motion.div
                  className="flex-1 bg-white rounded-2xl p-5 text-center shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
<span className="block text-3xl lg:text-4xl font-bold text-[#B8989B] mb-1">
                    100%
                  </span>
                  <span className="text-sm text-gray-600">{isKo ? "천연 성분" : "Natural"}</span>
                </motion.div>
                <motion.div
                  className="flex-1 bg-white rounded-2xl p-5 text-center shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
<span className="block text-3xl lg:text-4xl font-bold text-[#7D6B7D] mb-1">
                    ZERO
                  </span>
                  <span className="text-sm text-gray-600">{isKo ? "화학 첨가물" : "Chemicals"}</span>
                </motion.div>
                <motion.div
                  className="flex-1 bg-white rounded-2xl p-5 text-center shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
<span className="block text-3xl lg:text-4xl font-bold text-[#8A9A8A] mb-1">
                    37°C
                  </span>
                  <span className="text-sm text-gray-600">{isKo ? "체온 온도" : "Body Temp"}</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
