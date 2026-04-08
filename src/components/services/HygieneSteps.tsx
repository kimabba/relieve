"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const hygieneData = {
  ko: {
    sectionLabel: "5단계 위생",
    title: "의료급 위생 시스템",
    description:
      "단순 청소가 아닌 멸균입니다. 5단계 의료급 프로세스로 모든 도구가 완벽하게 무균 상태임을 보장합니다.",
    steps: [
      {
        icon: "layers",
        step: "01",
        title: "일회용 배리어",
        description: "모든 표면에 의료용 일회용 배리어를 사용합니다.",
      },
      {
        icon: "cleaning_services",
        step: "02",
        title: "초음파 세척",
        description: "고주파 초음파로 도구를 세척합니다.",
      },
      {
        icon: "wb_sunny",
        step: "03",
        title: "UV 멸균",
        description: "의료급 UV-C 라이트로 99.9% 세균을 제거합니다.",
        highlight: true,
      },
      {
        icon: "lock",
        step: "04",
        title: "밀봉 보관",
        description: "멸균된 도구는 시술 시까지 진공 밀봉됩니다.",
      },
      {
        icon: "medical_services",
        step: "05",
        title: "이중 장갑",
        description: "모든 시술에서 이중 장갑을 착용합니다.",
      },
    ],
  },
  en: {
    sectionLabel: "5-Step Protection",
    title: "Medical-Grade Hygiene",
    description:
      "We don't just clean; we sterilize. Our 5-step medical-grade process ensures every tool touching your skin is completely free of pathogens.",
    steps: [
      {
        icon: "layers",
        step: "01",
        title: "Disposable Barriers",
        description: "Every surface is covered with single-use medical barriers.",
      },
      {
        icon: "cleaning_services",
        step: "02",
        title: "Ultrasonic Clean",
        description: "Tools undergo high-frequency sound wave cleaning.",
      },
      {
        icon: "wb_sunny",
        step: "03",
        title: "UV Sterilization",
        description: "Medical-grade UV-C light eliminates 99.9% of bacteria.",
        highlight: true,
      },
      {
        icon: "lock",
        step: "04",
        title: "Sealed Storage",
        description: "Sterilized tools are vacuum-sealed until your session.",
      },
      {
        icon: "medical_services",
        step: "05",
        title: "Gloved Handling",
        description: "Estheticians double-glove for every procedure.",
      },
    ],
  },
};

export default function HygieneSteps() {
  const locale = useLocale();
  const content = locale === "ko" ? hygieneData.ko : hygieneData.en;

  return (
    <section className="py-20 lg:py-28 bg-background-light overflow-hidden relative">
      {/* Decorative Curved Line */}
      <svg
        className="absolute top-0 left-0 w-[300px] h-[200px] opacity-20 pointer-events-none"
        viewBox="0 0 300 200"
        fill="none"
      >
        <path
          d="M0 100C50 50 100 0 150 50C200 100 250 150 300 100"
          stroke="#6A483C"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-text-muted text-sm tracking-widest uppercase mb-4 block">
            {content.sectionLabel}
          </span>
          <h2
            className="text-3xl lg:text-4xl text-text-main mb-4"
          >
            {content.title}
          </h2>
          <p className="text-text-muted font-light text-lg">
            {content.description}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {content.steps.map((step, index) => (
            <motion.div
              key={index}
              className={`group bg-white p-6 flex flex-col items-center text-center transition-all duration-300 relative border ${
                step.highlight
                  ? "border-primary"
                  : "border-primary/10 hover:border-primary"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Step Number */}
              <span className="absolute top-4 right-4 text-3xl text-primary/20">
                {step.step}
              </span>

              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center mb-4 ${
                  step.highlight
                    ? "bg-primary text-white"
                    : "bg-background-light text-text-main"
                }`}
              >
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'wght' 200" }}>
                  {step.icon}
                </span>
              </div>

              {/* Content */}
              <h4
                className="text-text-main mb-2"
              >
                {step.title}
              </h4>
              <p className="text-xs text-text-muted font-light leading-relaxed">
                {step.description}
              </p>

              {/* Highlight Badge */}
              {step.highlight && (
                <span className="mt-4 text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-3 py-1">
                  99.9%
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          className="mt-12 bg-white p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 bg-background-light flex items-center justify-center">
            <span className="material-symbols-outlined text-text-main text-2xl" style={{ fontVariationSettings: "'wght' 200" }}>
              verified_user
            </span>
          </div>
          <div>
            <p
              className="text-text-main"
            >
              {locale === "ko"
                ? "의료급 멸균 인증"
                : "Medical-Grade Sterilization Certified"}
            </p>
            <p className="text-sm text-text-muted font-light">
              {locale === "ko"
                ? "모든 위생 프로세스는 의료 기준을 충족합니다"
                : "All hygiene processes meet medical standards"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
