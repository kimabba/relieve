"use client";

import { useLocale } from "next-intl";
import { safetyPromises } from "@/lib/data";
import { motion } from "framer-motion";

export default function SafetyPromise() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6FF] via-white to-[#FFF5F7]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#9B8AC4]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FFB5C5]/10 rounded-full blur-3xl" />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#5BA8A8]/10 text-[#5BA8A8] text-sm font-bold mb-6">
            <span className="material-symbols-outlined text-base">verified_user</span>
            {isKo ? "안전 약속" : "Safety Promise"}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {isKo ? "엄마와 아기 모두 안심" : "Safe for Mom and Baby"}
          </h2>
          <p className="text-gray-600 text-lg">
            {isKo
              ? "철저한 위생 관리와 천연 성분으로 안전하게 케어합니다"
              : "Safe care with strict hygiene standards and natural ingredients"}
          </p>
        </motion.div>

        {/* Safety Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {safetyPromises.map((promise, index) => (
            <motion.div
              key={promise.icon}
              className="group relative flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5BA8A8] via-[#9B8AC4] to-[#FFB5C5]" />

              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#5BA8A8]/20 to-[#9B8AC4]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl text-[#5BA8A8]">
                  {promise.icon}
                </span>
              </div>

              {/* Content */}
              <h3
                className="text-xl font-bold text-gray-800 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {isKo ? promise.title : promise.titleEn}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {isKo ? promise.description : promise.descriptionEn}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hospital-Grade Hygiene Banner - Premium Glass Style */}
        <motion.div
          className="relative bg-gradient-to-r from-[#5BA8A8] to-[#9B8AC4] rounded-3xl p-8 lg:p-12 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-[#FFB5C5]/20 rounded-full blur-2xl" />

          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Shield Icon */}
            <motion.div
              className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/30"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <span className="material-symbols-outlined text-5xl text-white">
                shield_with_heart
              </span>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3
                className="text-2xl lg:text-3xl font-bold text-white mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {isKo ? "임산부 전용 케어 시스템" : "Maternity Care System"}
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                {isKo
                  ? "모든 도구는 UV 멸균기와 초음파 세척을 거쳐 개별 포장됩니다. 임산부 전용 쿠션과 편안한 자세로 안전하게 케어합니다."
                  : "All tools undergo UV sterilization and ultrasonic cleaning before being individually packaged. Safe care with pregnancy cushions and comfortable positioning."}
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-4 lg:gap-6">
              <motion.div
                className="text-center px-6 py-4 bg-white rounded-2xl shadow-lg min-w-[100px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <span className="block text-3xl font-bold bg-gradient-to-r from-[#5BA8A8] to-[#9B8AC4] bg-clip-text text-transparent">
                  99.9%
                </span>
                <span className="text-xs text-gray-600 uppercase tracking-wider font-medium">
                  {isKo ? "멸균율" : "Sterile"}
                </span>
              </motion.div>
              <motion.div
                className="text-center px-6 py-4 bg-white rounded-2xl shadow-lg min-w-[100px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <span className="block text-3xl font-bold bg-gradient-to-r from-[#9B8AC4] to-[#FFB5C5] bg-clip-text text-transparent">
                  5
                </span>
                <span className="text-xs text-gray-600 uppercase tracking-wider font-medium">
                  {isKo ? "단계 위생" : "Steps"}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
