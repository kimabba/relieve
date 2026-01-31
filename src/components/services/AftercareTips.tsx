"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const aftercareData = {
  ko: {
    sectionLabel: "시술 후 관리",
    title: "사후 관리 가이드",
    description:
      "임산부 전용 슈가링 기법은 순하지만, 적절한 사후 관리로 피부를 더욱 건강하고 빛나게 유지할 수 있습니다.",
    steps: [
      {
        icon: "schedule",
        time: "0시간",
        title: "시술 직후",
        description:
          "헐렁하고 통기성 좋은 면 소재 옷을 입으세요. 뜨거운 샤워나 사우나 같은 열기를 피해주세요.",
      },
      {
        icon: "calendar_today",
        time: "24시간",
        title: "24시간 후",
        description:
          "권장 천연 오일로 보습을 시작하세요. 피부를 부드럽고 촉촉하게 유지합니다.",
      },
      {
        icon: "event_repeat",
        time: "72시간",
        title: "3일 후",
        description:
          "슈가 스크럽으로 부드럽게 각질 제거를 시작하세요. 인그로운 헤어 예방을 위해 주 2~3회 반복합니다.",
      },
    ],
  },
  en: {
    sectionLabel: "Aftercare",
    title: "Post-Treatment Rituals",
    description:
      "Our specialized maternity sugaring technique is gentle, but proper aftercare ensures your skin remains calm and radiant.",
    steps: [
      {
        icon: "schedule",
        time: "0 hrs",
        title: "Immediately After",
        description:
          "Wear loose, cotton clothing to allow skin to breathe. Avoid heat sources like hot showers or saunas.",
      },
      {
        icon: "calendar_today",
        time: "24 hrs",
        title: "24 Hours Later",
        description:
          "Begin moisturizing with our recommended organic oils to keep skin supple and hydrated.",
      },
      {
        icon: "event_repeat",
        time: "72 hrs",
        title: "3 Days Later",
        description:
          "Exfoliate gently with a sugar scrub to prevent ingrown hairs. Continue 2-3 times per week.",
      },
    ],
  },
};

export default function AftercareTips() {
  const locale = useLocale();
  const content = locale === "ko" ? aftercareData.ko : aftercareData.en;

  return (
    <div className="bg-waxly-cream p-6 lg:p-8 border border-waxly-border">
      {/* Header */}
      <div className="mb-8">
        <span className="text-waxly-brownLight text-sm tracking-widest uppercase mb-2 block">
          {content.sectionLabel}
        </span>
        <h4
          className="text-xl text-waxly-brown mt-1"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
        >
          {content.title}
        </h4>
        <p className="mt-2 text-waxly-brownLight font-light text-sm leading-relaxed">
          {content.description}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-5 top-6 bottom-6 w-[1px] bg-waxly-border" />

        <div className="flex flex-col gap-0">
          {content.steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-4 group relative"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon Column */}
              <div className="flex flex-col items-center z-10">
                <div className="w-10 h-10 bg-white text-waxly-brown flex items-center justify-center shrink-0 group-hover:bg-waxly-brown group-hover:text-white transition-colors duration-300 border border-waxly-border">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 200" }}>
                    {step.icon}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${index < content.steps.length - 1 ? "pb-8" : ""}`}>
                {/* Time Badge */}
                <span className="inline-block text-xs text-waxly-brown bg-white px-2 py-0.5 mb-2 border border-waxly-border">
                  {step.time}
                </span>
                <h5
                  className="text-base text-waxly-brown"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {step.title}
                </h5>
                <p className="text-waxly-brownLight font-light text-sm mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
