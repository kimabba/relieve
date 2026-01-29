"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { placeInfo } from "@/lib/data";
import CTASection from "@/components/home/CTASection";

export default function YZonePage() {
  const locale = useLocale();
  const isKo = locale === "ko";

  const benefits = [
    {
      icon: "spa",
      titleKo: "피부 진정 & 보습",
      titleEn: "Soothing & Hydrating",
      descKo: "민감한 Y존 피부를 진정시키고 깊은 보습을 제공합니다",
      descEn: "Calms sensitive Y-zone skin with deep hydration",
    },
    {
      icon: "auto_fix_high",
      titleKo: "피부결 개선",
      titleEn: "Skin Texture Improvement",
      descKo: "거친 피부결을 부드럽고 매끄럽게 가꿔줍니다",
      descEn: "Smooths and softens rough skin texture",
    },
    {
      icon: "palette",
      titleKo: "색소 침착 완화",
      titleEn: "Pigmentation Care",
      descKo: "어두워진 피부톤을 밝고 균일하게 개선합니다",
      descEn: "Brightens and evens out darkened skin tone",
    },
    {
      icon: "verified_user",
      titleKo: "위생적인 관리",
      titleEn: "Hygienic Care",
      descKo: "철저한 위생 관리로 안전하게 케어합니다",
      descEn: "Safe care with strict hygiene standards",
    },
  ];

  const processSteps = [
    {
      step: "01",
      titleKo: "상담 & 피부 분석",
      titleEn: "Consultation & Analysis",
      descKo: "개인별 피부 상태와 고민을 파악합니다",
      descEn: "Assess individual skin condition and concerns",
    },
    {
      step: "02",
      titleKo: "딥 클렌징",
      titleEn: "Deep Cleansing",
      descKo: "부드러운 클렌징으로 피부를 깨끗이 정돈합니다",
      descEn: "Gentle cleansing to prepare the skin",
    },
    {
      step: "03",
      titleKo: "전용 앰플 도포",
      titleEn: "Serum Application",
      descKo: "Y존 전용 앰플로 집중 케어합니다",
      descEn: "Intensive care with specialized Y-zone serum",
    },
    {
      step: "04",
      titleKo: "진정 마무리",
      titleEn: "Soothing Finish",
      descKo: "쿨링 마스크로 피부를 진정시킵니다",
      descEn: "Calm the skin with cooling mask",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9B8AC4] via-[#A890D3] to-[#B8A5E3]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-[10%] w-32 h-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-32 left-[15%] w-24 h-24 rounded-full bg-[#FFB5C5]/20 blur-xl" />

        <div className="relative min-h-[70vh] flex items-center pt-32 pb-20">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              {/* Event Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-[#FFD700] text-gray-800 text-sm font-bold shadow-lg">
                  <span className="material-symbols-outlined text-base">celebration</span>
                  {isKo ? "신규 런칭 이벤트" : "New Launch Event"}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {isKo ? "Y존 테라피" : "Y-Zone Therapy"}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {isKo
                  ? "민감한 Y존을 위한 프리미엄 집중 케어 프로그램\n피부 진정, 보습, 색소 침착 개선까지 한 번에"
                  : "Premium intensive care program for sensitive Y-zone\nSoothing, hydration, and pigmentation improvement all in one"}
              </motion.p>

              {/* Event Period */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="material-symbols-outlined">event</span>
                <span className="font-medium">
                  {isKo ? "이벤트 기간: 2025.12.18 ~ 2026.01.31" : "Event Period: Dec 18, 2025 - Jan 31, 2026"}
                </span>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href={placeInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#9B8AC4] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="material-symbols-outlined">calendar_month</span>
                  {isKo ? "지금 예약하기" : "Book Now"}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-[#FFFAF4]">
        <div className="section-container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#9B8AC4]/10 text-[#9B8AC4] text-sm font-bold mb-6">
              <span className="material-symbols-outlined text-base">auto_awesome</span>
              {isKo ? "Y존 테라피 효과" : "Y-Zone Therapy Benefits"}
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {isKo ? "이런 분들께 추천해요" : "Recommended For"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.icon}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#9B8AC4]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl text-[#9B8AC4]">
                    {benefit.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {isKo ? benefit.titleKo : benefit.titleEn}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {isKo ? benefit.descKo : benefit.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#FFB5C5]/10 text-[#E07070] text-sm font-bold mb-6">
              <span className="material-symbols-outlined text-base">route</span>
              {isKo ? "시술 과정" : "Treatment Process"}
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {isKo ? "4단계 집중 케어" : "4-Step Intensive Care"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="bg-[#FFFAF4] rounded-2xl p-6 h-full">
                  <span className="text-4xl font-bold text-[#9B8AC4]/30 mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {isKo ? step.titleKo : step.titleEn}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {isKo ? step.descKo : step.descEn}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <span className="material-symbols-outlined text-[#9B8AC4]/30">
                      arrow_forward
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 lg:py-32 bg-[#9B8AC4]">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/20 text-white text-sm font-bold mb-6">
                <span className="material-symbols-outlined text-base">sell</span>
                {isKo ? "런칭 특가" : "Launch Special"}
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-white mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {isKo ? "Y존 테라피 가격 안내" : "Y-Zone Therapy Pricing"}
              </h2>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-gray-400 line-through text-2xl">₩150,000</span>
                  <span className="px-3 py-1 bg-[#FFD700] text-gray-800 text-sm font-bold rounded-full">
                    {isKo ? "런칭 할인" : "Launch Discount"}
                  </span>
                </div>
                <div className="text-5xl font-bold text-[#9B8AC4] mb-2">
                  ₩99,000
                </div>
                <p className="text-gray-500 mb-6">
                  {isKo ? "1회 기준 / 약 60분 소요" : "Per session / Approx. 60 min"}
                </p>
                <a
                  href={placeInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full py-4 bg-[#9B8AC4] text-white rounded-2xl font-bold text-lg hover:bg-[#8577B0] transition-colors"
                >
                  <span className="material-symbols-outlined">calendar_month</span>
                  {isKo ? "예약하기" : "Book Now"}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
