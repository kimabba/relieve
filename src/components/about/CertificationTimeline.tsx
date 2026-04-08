"use client";

import { useLocale } from "next-intl";
import { certifications } from "@/lib/data";
import { motion } from "framer-motion";

export default function CertificationTimeline() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <>
      {/* Hero Section - Waxly Style */}
      <section className="relative min-h-[50vh] overflow-hidden bg-background-light">
        {/* Decorative Curved Line */}
        <svg
          className="absolute bottom-0 right-0 w-[500px] h-[300px] opacity-20 pointer-events-none"
          viewBox="0 0 500 300"
          fill="none"
        >
          <path
            d="M500 0C400 80 300 120 200 160C100 200 50 250 0 300"
            stroke="#6A483C"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        <div className="relative min-h-[50vh] flex items-center pt-32 pb-16">
          <div className="section-container text-center">
            <motion.span
              className="inline-block text-text-main/60 text-sm tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {isKo ? "임산부 케어" : "Maternity Care"}
            </motion.span>
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl text-text-main mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {isKo ? "8년 경력, 검증된 전문성" : "8 Years of Proven Expertise"}
            </motion.h1>
            <motion.p
              className="text-text-muted font-light text-lg lg:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {isKo
                ? "국제대회 그랑프리 수상, 교육이사 위촉까지. 검증된 실력으로 케어합니다"
                : "International Grand Prix winner and Education Director. Care backed by proven expertise"}
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
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              {isKo ? "전문 자격" : "Certifications"}
            </span>
            <h2
              className="text-3xl lg:text-4xl text-text-main"
            >
              {isKo ? "믿을 수 있는 자격과 경력" : "Trusted Credentials"}
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-primary/10"></div>

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
                      className={`absolute left-0 top-1 w-8 h-8 flex items-center justify-center ${
                        cert.highlight
                          ? "bg-primary text-white"
                          : "bg-background-light text-text-main"
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'wght' 200" }}>
                        {cert.highlight ? "emoji_events" : "check"}
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className={`p-4 ${
                        cert.highlight
                          ? "bg-primary/10 border border-primary/30"
                          : "bg-background-light"
                      }`}
                    >
                      {cert.year && (
                        <span className="text-sm text-text-muted mb-1 block">
                          {cert.year}
                        </span>
                      )}
                      <h3
                        className={`font-light ${
                          cert.highlight
                            ? "text-text-main"
                            : "text-text-muted"
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
