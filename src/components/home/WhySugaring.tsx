"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: "water_drop",
    titleKo: "물에 씻어냄",
    titleEn: "Water Soluble",
    descKo: "따뜻한 물로 간편하게 세정, 끈적임 잔여물 없음",
    descEn: "Easy cleanup with warm water, no sticky residue.",
  },
  {
    icon: "eco",
    titleKo: "저자극 천연 성분",
    titleEn: "Hypoallergenic",
    descKo: "가장 예민한 피부에도 안심할 수 있는 성분",
    descEn: "Safe for the most sensitive skin types.",
  },
  {
    icon: "thermostat",
    titleKo: "체온 페이스트",
    titleEn: "Room Temperature",
    descKo: "체온과 같은 온도, 화상·자극 위험 없음",
    descEn: "Applied at body temperature — no burn risk.",
  },
  {
    icon: "child_care",
    titleKo: "임산부 안전",
    titleEn: "Safe for Pregnancy",
    descKo: "전용 자세·도구로 임산부도 안심 케어",
    descEn: "Specialized positioning for expectant mothers.",
  },
];

export default function WhySugaring() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-20 lg:py-28 bg-secondary-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="flex-1 order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=600&h=750&fit=crop&q=80"
                alt={isKo ? "천연 슈가링 재료 - 설탕, 레몬" : "Natural sugaring ingredients - sugar, lemon"}
                fill
                className="object-cover"
              />
            </div>
            {/* 100% Organic badge */}
            <div className="absolute -bottom-4 right-0 lg:-right-4 w-28 h-28 bg-background-light rounded-full flex items-center justify-center shadow-lg hidden md:flex">
              <div className="text-center">
                <span className="block text-primary font-bold text-xl font-display">100%</span>
                <span className="block text-text-muted text-xs uppercase tracking-wide">
                  {isKo ? "천연" : "Organic"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex-1 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-3 block">
              {isKo ? "슈가링 철학" : "Our Philosophy"}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main mb-6">
              {isKo ? "왜 슈가링인가요?" : "Why Sugaring?"}
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-4">
              {isKo
                ? "일반 왁싱과 달리 슈가링은 설탕, 레몬, 물 세 가지 천연 재료로 만든 체온 페이스트를 사용합니다. 죽은 각질과 털에만 달라붙어 살아있는 피부를 자극하지 않습니다."
                : "Unlike traditional waxing, sugaring uses a body-temperature paste made from just three natural ingredients: sugar, lemon, and water. It adheres only to dead skin cells and hair, never to live skin."}
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              {isKo
                ? "수천 년 이어온 이 방법은 통증이 훨씬 적고 피부 자극을 최소화해, 민감도가 높아지는 임신 기간에도 이상적인 선택입니다."
                : "This ancient technique is significantly less painful and minimizes irritation, making it the premier choice during pregnancy's heightened sensitivity."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.icon} className="flex gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">{f.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main mb-1">
                      {isKo ? f.titleKo : f.titleEn}
                    </h4>
                    <p className="text-sm text-text-muted">
                      {isKo ? f.descKo : f.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
