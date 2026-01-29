"use client";

import { useLocale } from "next-intl";
import { certifications } from "@/lib/data";
import { motion } from "framer-motion";

export default function CertificationTimeline() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFB5C5] via-[#FFC0CB] to-[#FFD1DC]" />
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-20 right-[15%] w-24 h-24 rounded-full bg-[#9B8AC4]/20 blur-xl" />

        <div className="relative min-h-[50vh] flex items-center pt-32 pb-16">
          <div className="section-container text-center">
            <motion.span
              className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="material-symbols-outlined text-base">pregnant_woman</span>
              {isKo ? "임산부 케어" : "Maternity Care"}
            </motion.span>
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 drop-shadow-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {isKo ? "임산부를 위한 안심 케어" : "Safe Care for Expectant Mothers"}
            </motion.h1>
            <motion.p
              className="text-white/90 text-lg lg:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {isKo
                ? "100% 천연 슈가링으로 임산부도 안심하고 받으실 수 있습니다"
                : "100% natural sugaring safe for expectant mothers"}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="section-container">

          {/* Section Header */}
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#FFD700]/10 text-[#B8860B] text-sm font-bold mb-6">
              <span className="material-symbols-outlined text-base">workspace_premium</span>
              {isKo ? "전문 자격" : "Certifications"}
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {isKo ? "검증된 전문가의 케어" : "Care by Certified Experts"}
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#9B8AC4]/30"></div>

              {/* Timeline Items */}
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ${
                        cert.highlight
                          ? "bg-[#FFD700] text-white"
                          : "bg-[#9B8AC4]/10 text-[#9B8AC4]"
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {cert.highlight ? "emoji_events" : "check"}
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className={`p-4 rounded-2xl ${
                        cert.highlight
                          ? "bg-[#FFD700]/10 border border-[#FFD700]/30"
                          : "bg-[#FFFAF4]"
                      }`}
                    >
                      {cert.year && (
                        <span className="text-sm font-bold text-[#9B8AC4] mb-1 block">
                          {cert.year}
                        </span>
                      )}
                      <h3
                        className={`${
                          cert.highlight
                            ? "text-gray-800 font-bold"
                            : "text-gray-700 font-medium"
                        }`}
                      >
                        {isKo ? cert.title : cert.titleEn}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
