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
  },
  {
    icon: "water_drop",
    titleKo: "수용성 포뮬러",
    titleEn: "Water Soluble",
    descKo: "따뜻한 물로 쉽게 세척, 끈적임 없음",
    descEn: "Easy cleanup with warm water",
  },
  {
    icon: "favorite",
    titleKo: "저자극 케어",
    titleEn: "Hypoallergenic",
    descKo: "민감한 피부에도 안전한 시술",
    descEn: "Safe for sensitive skin",
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
    <section className="relative py-24 lg:py-32 overflow-hidden bg-waxly-cream">
      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 py-2 px-5 border border-waxly-brown/20 text-waxly-brown text-sm font-light tracking-wider mb-6">
            <span className="material-symbols-outlined text-base">spa</span>
            {isKo ? "왜 슈가링일까요?" : "Why Sugaring?"}
          </span>
          <h2
            className="text-4xl lg:text-5xl text-waxly-brown mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {isKo ? "일반 왁싱과 무엇이 다를까요?" : "What Makes It Different?"}
          </h2>
          <p className="text-waxly-brownLight font-light text-lg leading-relaxed" style={{ wordBreak: "keep-all" }}>
            {isKo
              ? "슈가링은 설탕, 레몬, 물로만 만들어 임산부도 안심합니다. 체온과 비슷한 37°C로 화상 걱정 없이, 모발 성장 방향으로 제거해 통증을 최소화합니다."
              : "Made only with sugar, lemon, and water, safe for expectant mothers. Applied at 37°C body temperature with no burn risk."}
          </p>
        </motion.div>

        {/* Main Content Grid - Image + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] rounded-tr-[80px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1676313816468-2c944d4fb27d?w=600&h=750&fit=crop&q=80"
                alt="Natural sugaring ingredients"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKo}
                className="flex items-start gap-5 p-6 bg-white border border-waxly-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-waxly-cream flex items-center justify-center flex-shrink-0">
                  <span
                    className="material-symbols-outlined text-xl text-waxly-brown"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    {feature.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-waxly-brown mb-1">
                    {isKo ? feature.titleKo : feature.titleEn}
                  </h3>
                  <p className="text-waxly-brownLight font-light text-sm leading-relaxed">
                    {isKo ? feature.descKo : feature.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          className="relative bg-waxly-brown p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left - Title */}
            <div className="lg:col-span-5">
              <h3
                className="text-3xl lg:text-4xl text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                {isKo ? "임산부도 안심하는 이유" : "Why Expectant Mothers Trust Us"}
              </h3>
              <p className="text-white/70 font-light text-lg" style={{ wordBreak: "keep-all" }}>
                {isKo
                  ? "전 과정 임산부 배려 설계, 편안한 자세로 케어받으세요"
                  : "Every process designed for expectant mothers' comfort"}
              </p>
            </div>

            {/* Right - Benefits List */}
            <div className="lg:col-span-7 space-y-3">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.ko}
                  className="flex items-center gap-4 bg-white/10 p-5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-white text-xl"
                      style={{ fontVariationSettings: "'wght' 200" }}
                    >
                      {benefit.icon}
                    </span>
                  </span>
                  <span className="text-white font-light">
                    {isKo ? benefit.ko : benefit.en}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
