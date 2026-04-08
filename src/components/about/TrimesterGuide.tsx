"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

const trimesterData = {
  ko: {
    sectionLabel: "임산부 케어",
    title: "임신 단계별 케어 가이드",
    description: "각 임신 시기에 맞춘 맞춤형 케어로 안전하고 편안한 시술을 제공합니다.",
    trimesters: [
      {
        icon: "calendar_month",
        label: "1분기",
        period: "1~12주",
        title: "상담 및 민감성 체크",
        description:
          "첫 12주 동안은 호르몬 변화로 피부가 가장 민감합니다. 패치 테스트를 진행하고 짧은 시술로 편안함을 확인합니다.",
        highlights: ["패치 테스트", "짧은 시술", "민감도 확인"],
      },
      {
        icon: "schedule",
        label: "2분기",
        period: "13~26주",
        title: "정기 관리 시작",
        description:
          "임신의 '황금기'입니다. 4~5주마다 정기적인 슈가링으로 모발 성장을 줄일 수 있습니다. 임산부 전용 쿠션으로 허리를 지지합니다.",
        highlights: ["정기 관리", "모발 성장 감소", "전용 쿠션"],
      },
      {
        icon: "favorite",
        label: "3분기",
        period: "27주~",
        title: "출산 준비 케어",
        description:
          "베이비문 왁싱이라고도 합니다. 출산 예정일 2주 전 마지막 시술을 권장합니다. 옆으로 누운 자세로 안전하게 진행합니다.",
        highlights: ["베이비문 왁싱", "안전한 자세", "출산 준비"],
      },
    ],
  },
  en: {
    sectionLabel: "Maternity Care",
    title: "Care by Trimester Guide",
    description: "Customized care for each stage of pregnancy ensures safe and comfortable treatments.",
    trimesters: [
      {
        icon: "calendar_month",
        label: "1st Trimester",
        period: "Weeks 1-12",
        title: "Consultation & Sensitivity",
        description:
          "During the first 12 weeks, your skin is most sensitive due to hormonal surges. We focus on patch testing and shorter appointments to ensure your comfort.",
        highlights: ["Patch Test", "Short Sessions", "Sensitivity Check"],
      },
      {
        icon: "schedule",
        label: "2nd Trimester",
        period: "Weeks 13-26",
        title: "Regular Maintenance",
        description:
          "The 'golden period' of pregnancy. Regular sugaring every 4-5 weeks helps reduce hair growth significantly. We introduce our specialized pregnancy pillows.",
        highlights: ["Regular Care", "Reduced Growth", "Special Pillows"],
      },
      {
        icon: "favorite",
        label: "3rd Trimester",
        period: "Week 27+",
        title: "Pre-Birth Preparation",
        description:
          "Also known as the 'Baby Moon' wax. We recommend your final appointment 2 weeks before your due date. We utilize side-lying positions for safety.",
        highlights: ["Baby Moon", "Safe Positions", "Birth Prep"],
      },
    ],
  },
};

export default function TrimesterGuide() {
  const locale = useLocale();
  const content = locale === "ko" ? trimesterData.ko : trimesterData.en;

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden relative">
      {/* Decorative Curved Line */}
      <svg
        className="absolute bottom-0 right-0 w-[400px] h-[300px] opacity-20 pointer-events-none"
        viewBox="0 0 400 300"
        fill="none"
      >
        <path
          d="M400 0C300 50 200 100 150 150C100 200 50 250 0 300"
          stroke="#6A483C"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-waxly-brownLight text-sm tracking-widest uppercase mb-4 block">
            {content.sectionLabel}
          </span>
          <h2
            className="text-3xl lg:text-4xl text-waxly-brown mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {content.title}
          </h2>
          <p className="text-waxly-brownLight font-light text-lg">
            {content.description}
          </p>
        </motion.div>

        {/* Trimester Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.trimesters.map((trimester, index) => (
            <motion.div
              key={index}
              className="group bg-waxly-cream p-8 border border-waxly-border hover:border-waxly-brown transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 flex items-center justify-center text-waxly-brown">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'wght' 200" }}>
                  {trimester.icon}
                </span>
              </div>

              {/* Label & Period */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-waxly-brown text-sm"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {trimester.label}
                </span>
                <span className="text-xs text-waxly-brownLight bg-white px-2 py-0.5">
                  {trimester.period}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-xl text-waxly-brown mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {trimester.title}
              </h3>

              {/* Description */}
              <p className="text-waxly-brownLight font-light text-sm leading-relaxed mb-6">
                {trimester.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {trimester.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-waxly-brown bg-white px-3 py-1.5 border border-waxly-border"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to dedicated maternity page */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="/maternity"
            className="inline-flex items-center gap-2 border border-waxly-brown text-waxly-brown text-sm font-light tracking-wider px-8 py-3 hover:bg-waxly-brown hover:text-white transition-all duration-300"
          >
            {locale === "ko" ? "임산부 케어 전문 페이지 보기" : "View Maternity Care Details"}
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
