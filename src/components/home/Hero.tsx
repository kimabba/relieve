"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { placeInfo } from "@/lib/data";

export default function Hero() {
  const locale = useLocale();
  const isKo = locale === "ko";

  const features = [
    { ko: "피부 자극 ZERO", en: "No irritation", icon: "check_circle" },
    { ko: "화학성분 ZERO", en: "No chemicals", icon: "check_circle" },
    { ko: "알러지 걱정 ZERO", en: "No allergy", icon: "check_circle" },
    { ko: "임산부 안심 케어", en: "Safe for pregnancy", icon: "check_circle" },
    { ko: "전신 제모 가능", en: "Full body available", icon: "check_circle" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0">
        {/* Pink Side */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFB5C5] via-[#FFC0CB] to-[#FFD1DC]" />
        {/* Purple Side - Diagonal */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#9B8AC4] via-[#A890D3] to-[#B8A5E3]"
          style={{
            clipPath: "polygon(55% 0, 100% 0, 100% 100%, 35% 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left z-10 pt-20 lg:pt-0">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/30 backdrop-blur-sm text-white text-sm font-bold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  {isKo ? "프리미엄 슈가링 전문" : "Premium Sugaring"}
                </span>
              </motion.div>

              {/* Main Title - Script Style */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1
                  className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-lg"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                  }}
                >
                  {isKo ? "Beauty" : "Beauty"}
                </h1>
                <h1
                  className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-lg"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                  }}
                >
                  {isKo ? "Life" : "Life"}
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="text-xl text-white/90 mb-8 max-w-md mx-auto lg:mx-0 drop-shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {isKo
                  ? "100% 천연 슈가링으로 부드럽고 건강한 피부를 경험하세요"
                  : "Experience smooth, healthy skin with 100% natural sugaring"}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href={placeInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#9B8AC4] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="material-symbols-outlined">calendar_month</span>
                  {isKo ? "지금 예약하기" : "Book Now"}
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex justify-center lg:justify-start gap-8 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { value: "724+", label: isKo ? "리뷰" : "Reviews" },
                  { value: "4.9", label: isKo ? "평점" : "Rating" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <span className="block text-3xl font-bold text-white drop-shadow">
                      {stat.value}
                    </span>
                    <span className="text-sm text-white/70">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Features List */}
            <motion.div
              className="relative z-10 lg:pl-16"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {/* Feature List */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#FFB5C5]">spa</span>
                  {isKo ? "슈가링의 장점" : "Sugaring Benefits"}
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3 text-white"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <span className="w-8 h-8 rounded-full bg-[#FFB5C5] flex items-center justify-center shadow-lg">
                        <span className="material-symbols-outlined text-white text-lg">
                          {feature.icon}
                        </span>
                      </span>
                      <span className="font-medium text-lg">
                        {isKo ? feature.ko : feature.en}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Process Icons */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex justify-center gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2 mx-auto">
                        <span className="material-symbols-outlined text-white text-2xl">
                          water_drop
                        </span>
                      </div>
                      <span className="text-xs text-white/70">
                        {isKo ? "수분 공급" : "Hydrating"}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2 mx-auto">
                        <span className="material-symbols-outlined text-white text-2xl">
                          spa
                        </span>
                      </div>
                      <span className="text-xs text-white/70">
                        {isKo ? "부드러운 터치" : "Gentle"}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2 mx-auto">
                        <span className="material-symbols-outlined text-white text-2xl">
                          eco
                        </span>
                      </div>
                      <span className="text-xs text-white/70">
                        {isKo ? "100% 천연" : "Natural"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Award Badge */}
              <motion.div
                className="absolute -top-4 -right-4 lg:right-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <div className="w-24 h-24 rounded-full bg-[#FFD700] flex flex-col items-center justify-center shadow-xl transform rotate-12">
                  <span className="material-symbols-outlined text-white text-2xl">
                    workspace_premium
                  </span>
                  <span className="text-white text-[10px] font-bold text-center leading-tight">
                    {isKo ? "그랑프리\n수상" : "Grand\nPrix"}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { repeat: Infinity, duration: 1.5 },
        }}
      >
        <span className="material-symbols-outlined text-white/70 text-3xl">
          expand_more
        </span>
      </motion.div>
    </section>
  );
}
