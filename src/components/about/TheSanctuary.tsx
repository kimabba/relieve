"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const sanctuaryData = {
  ko: {
    sectionLabel: "시설 안내",
    title: "편안함을 위한",
    titleHighlight: "프라이빗 공간",
    description:
      "임산부의 편안함을 최우선으로 설계된 공간입니다. 차분한 조명과 아로마테라피, 그리고 인체공학적 시설로 최상의 휴식을 제공합니다.",
    features: [
      {
        icon: "bed",
        title: "임산부 전용 바디필로우",
        description:
          "배와 허리를 감싸주는 곡선형 쿠션으로 시술 중 완전한 편안함을 느끼실 수 있습니다.",
      },
      {
        icon: "settings_accessibility",
        title: "무중력 조절 베드",
        description:
          "전동 조절 베드로 허리 압박을 줄이는 최적의 각도를 찾아드립니다.",
      },
      {
        icon: "air",
        title: "임산부 안전 아로마",
        description:
          "라벤더, 캐모마일 등 임신 중에도 안전한 에센셜 오일로 신경을 진정시킵니다.",
      },
    ],
    tempLabel: "최적 온도",
    adjustableLabel: "조절 가능",
  },
  en: {
    sectionLabel: "Our Space",
    title: "Engineered for",
    titleHighlight: "Your Comfort",
    description:
      "We've reimagined the treatment room to be a haven of relaxation. Forget sterile clinics; step into a space designed around the unique ergonomics of pregnancy.",
    features: [
      {
        icon: "bed",
        title: "Full-Body Pregnancy Pillow",
        description:
          "Contoured support for your bump and back, allowing you to relax completely during treatment.",
      },
      {
        icon: "settings_accessibility",
        title: "Zero-Gravity Adjustable Beds",
        description:
          "Electronically adjustable to find the perfect angle that relieves pressure on your lower back.",
      },
      {
        icon: "air",
        title: "Safe Aromatherapy",
        description:
          "Subtle, pregnancy-safe essential oils like lavender and chamomile to calm the nervous system.",
      },
    ],
    tempLabel: "Optimal Temp",
    adjustableLabel: "Adjustable",
  },
};

const images = {
  main: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn0RKk8bseNFQooqEfOIPKlRnoN3pyVm3YN33X8xxPEoja2Oqib7MupXs3ZNQ83lMaJWp1nwpj-2v6tfM0ua4RlmQEBs8zaW1MmIu5qyWJii_wEQ8LgGR7oMrM_RzwUCqoI1uDne9VQMgP9CFMKU4pKr3Cld0rlVPOfVTqsvThwoXNnazWwX_oovH1vn4saJ_rgcm_JY_d10WS3t2w6Nm1S2sHJW_WqgGN6U_rawkRK1NS4i2cdSWiv-sVkz8XKZtHkvEqEuinXV8",
  secondary:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA8INF7lspUyvdb6GbBwoSwBdR1QD4AWqElFoSN7NpBIy1S_NnIVOXEPOatxeBy0ReHN2r7MPB9UpMIRL9brWdCpa3fAum8PoaSashUHCtbEfZYCrnMkqbO9UkWHLYN2lr9_Nb8gaVL08zrTqsEFZiSYXCu2AIy3VQFRM_4-ApDXjPIcsV90PB305ow8nLYljyt2E2KwHJ0AzlkvaWRffvnFv9hXSFCGYNNxrFkz6upZzSqhm0nl5aqLLTWqR_SviYLNk4IN37s6mE",
};

export default function TheSanctuary() {
  const locale = useLocale();
  const content = locale === "ko" ? sanctuaryData.ko : sanctuaryData.en;

  return (
    <section className="py-20 lg:py-28 bg-waxly-cream overflow-hidden relative">
      {/* Decorative Curved Line */}
      <svg
        className="absolute top-0 right-0 w-[400px] h-[300px] opacity-20 pointer-events-none"
        viewBox="0 0 400 300"
        fill="none"
      >
        <path
          d="M400 0C300 80 200 120 100 160C50 200 0 250 0 300"
          stroke="#6A483C"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="section-container relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 mt-8">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={images.main}
                  alt={locale === "ko" ? "편안한 스파 인테리어" : "Calm spa interior"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 bg-white text-center border border-waxly-border">
                <span
                  className="text-waxly-brown text-3xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  24°C
                </span>
                <p className="text-xs uppercase tracking-wider mt-2 text-waxly-brownLight font-light">
                  {content.tempLabel}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-white text-center flex flex-col items-center justify-center h-32 border border-waxly-border">
                <span className="material-symbols-outlined text-4xl text-waxly-brown mb-2" style={{ fontVariationSettings: "'wght' 200" }}>
                  chair
                </span>
                <p className="text-xs uppercase tracking-wider text-waxly-brownLight font-light">
                  {content.adjustableLabel}
                </p>
              </div>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={images.secondary}
                  alt={locale === "ko" ? "편안한 수건과 쿠션" : "Comfortable pillows and towels"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="text-waxly-brownLight text-sm tracking-widest uppercase mb-4 block">
                {content.sectionLabel}
              </span>
              <h2
                className="text-3xl lg:text-4xl text-waxly-brown mt-2 mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                {content.title}
                <br />
                <span className="italic">{content.titleHighlight}</span>
              </h2>
              <p className="text-waxly-brownLight font-light text-lg leading-relaxed">
                {content.description}
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-5 mt-4">
              {content.features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 text-waxly-brown border border-waxly-border group-hover:border-waxly-brown transition-colors">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'wght' 200" }}>
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <h4
                      className="text-lg text-waxly-brown mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {feature.title}
                    </h4>
                    <p className="text-sm text-waxly-brownLight font-light leading-relaxed">
                      {feature.description}
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
