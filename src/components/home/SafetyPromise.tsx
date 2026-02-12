"use client";

import { useLocale } from "next-intl";
import { safetyPromises } from "@/lib/data";
import { motion } from "framer-motion";

export default function SafetyPromise() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-24 lg:py-32 bg-waxly-cream overflow-hidden">
      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 py-2 px-5 border border-waxly-brown/20 text-waxly-brown text-sm font-light tracking-wider mb-6">
            <span className="material-symbols-outlined text-base">verified_user</span>
            {isKo ? "안전 약속" : "Safety Promise"}
          </span>
          <h2
            className="text-4xl lg:text-5xl text-waxly-brown mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {isKo ? "안전하고 위생적인 케어" : "Safe & Hygienic Care"}
          </h2>
          <p className="text-waxly-brownLight font-light leading-relaxed">
            {isKo
              ? "철저한 위생 관리와 천연 성분으로 임산부도 안심하고 받을 수 있는 케어를 제공합니다"
              : "Safe care with strict hygiene standards and natural ingredients, even for expectant mothers"}
          </p>
        </motion.div>

        {/* Safety Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {safetyPromises.map((promise, index) => (
            <motion.div
              key={promise.icon}
              className="group flex flex-col items-center text-center p-8 bg-white border border-waxly-border hover:border-waxly-brown transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-6 text-waxly-brown">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'wght' 200" }}>
                  {promise.icon}
                </span>
              </div>

              {/* Content */}
              <h3
                className="text-xl text-waxly-brown mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {isKo ? promise.title : promise.titleEn}
              </h3>
              <p className="text-waxly-brownLight font-light leading-relaxed text-sm">
                {isKo ? promise.description : promise.descriptionEn}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Maternity Care Banner */}
        <motion.div
          className="relative bg-waxly-brown p-8 lg:p-12 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Shield Icon */}
            <motion.div
              className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <span className="material-symbols-outlined text-4xl text-white">
                shield_with_heart
              </span>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3
                className="text-2xl lg:text-3xl text-white mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                {isKo ? "임산부 전용 케어 시스템" : "Maternity Care System"}
              </h3>
              <p className="text-white/80 font-light leading-relaxed">
                {isKo
                  ? "모든 도구는 UV 멸균기와 초음파 세척을 거쳐 개별 포장됩니다. 임산부 전용 쿠션과 편안한 자세로 안전하게 케어합니다."
                  : "All tools undergo UV sterilization and ultrasonic cleaning before being individually packaged. Safe care with pregnancy cushions and comfortable positioning."}
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-4 lg:gap-6">
              <motion.div
                className="text-center px-6 py-4 bg-white min-w-[90px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <span
                  className="block text-2xl text-waxly-brown"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  99.9%
                </span>
                <span className="text-xs text-waxly-brownLight font-light">
                  {isKo ? "멸균율" : "Sterile"}
                </span>
              </motion.div>
              <motion.div
                className="text-center px-6 py-4 bg-white min-w-[90px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <span
                  className="block text-2xl text-waxly-brown"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  5
                </span>
                <span className="text-xs text-waxly-brownLight font-light">
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
