"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const steps = [
  {
    icon: "layers",
    stepNum: "01",
    titleKo: "일회용 도구",
    titleEn: "Disposable Barriers",
    descKo: "모든 표면에 일회용 의료용 배리어를 씌웁니다.",
    descEn: "Every surface is covered with single-use medical barriers.",
  },
  {
    icon: "cleaning_services",
    stepNum: "02",
    titleKo: "초음파 세척",
    titleEn: "Ultrasonic Clean",
    descKo: "도구는 고주파 음파 세척을 거칩니다.",
    descEn: "Tools undergo high-frequency sound wave cleaning.",
  },
  {
    icon: "wb_sunny",
    stepNum: "03",
    titleKo: "UV 멸균",
    titleEn: "UV Sterilization",
    descKo: "의료급 UV-C 광선으로 세균의 99.9%를 제거합니다.",
    descEn: "Medical-grade UV-C light eliminates 99.9% of bacteria.",
    highlighted: true,
  },
  {
    icon: "lock",
    stepNum: "04",
    titleKo: "밀봉 보관",
    titleEn: "Sealed Storage",
    descKo: "멸균된 도구는 시술 직전까지 진공 밀봉됩니다.",
    descEn: "Sterilized tools are vacuum-sealed until your session.",
  },
  {
    icon: "medical_services",
    stepNum: "05",
    titleKo: "장갑 착용",
    titleEn: "Gloved Handling",
    descKo: "테라피스트는 모든 시술에 이중 장갑을 착용합니다.",
    descEn: "Estheticians double-glove for every procedure.",
  },
];

export default function HygieneSteps() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="bg-primary/5 py-16 md:py-24 px-4 border-y border-primary/10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">
        <div className="text-center max-w-2xl">
          <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
            {isKo ? "5단계 보호" : "5-Step Protection"}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-text-main mb-6">
            {isKo ? "의료급 위생 관리" : "Medical-Grade Hygiene"}
          </h2>
          <p className="text-text-muted">
            {isKo
              ? "단순히 청소하는 것이 아닙니다. 5단계 의료급 프로세스로 모든 도구를 완전히 멸균합니다."
              : "We don't just clean; we sterilize. Our 5-step medical-grade process ensures every tool touching your skin is completely free of pathogens."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {steps.map((step, i) => (
            <motion.div
              key={step.stepNum}
              className={`p-6 rounded-2xl flex flex-col items-center text-center gap-4 transition-shadow ${
                step.highlighted
                  ? "bg-white shadow-lg border-2 border-primary/20 scale-105 z-10"
                  : "bg-white shadow-sm border border-gray-100 hover:shadow-md"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  step.highlighted
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <span className="material-symbols-outlined">{step.icon}</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-primary mb-1 uppercase tracking-wider">
                  Step {step.stepNum}
                </span>
                <h3 className="font-bold text-text-main mb-2">
                  {isKo ? step.titleKo : step.titleEn}
                </h3>
                <p className="text-xs text-text-muted">
                  {isKo ? step.descKo : step.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
