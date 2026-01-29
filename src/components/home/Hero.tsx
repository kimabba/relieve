"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { placeInfo } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  const locale = useLocale();
  const isKo = locale === "ko";

  const features = [
    { ko: "피부 자극 ZERO", en: "No irritation", icon: "check_circle" },
    { ko: "화학성분 ZERO", en: "No chemicals", icon: "check_circle" },
    { ko: "알러지 걱정 ZERO", en: "No allergy", icon: "check_circle" },
    { ko: "임산부 안심 케어", en: "Safe for pregnancy", icon: "check_circle" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Diagonal Split Background - Muted Luxury Tones */}
      <div className="absolute inset-0">
        {/* Rose Side */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C8B0B2] via-[#D4C4C6] to-[#E5DADA]" />
        {/* Mauve Side - Diagonal */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#6D5D6D] via-[#7D6B7D] to-[#8D7D8D]"
          style={{
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 30% 100%)",
          }}
        />
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-white/10 blur-2xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-[15%] w-24 h-24 rounded-full bg-white/15 blur-xl"
          animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-[20%] w-20 h-20 rounded-full bg-[#C9A962]/20 blur-xl"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content - 5 columns */}
            <div className="lg:col-span-5 text-center lg:text-left z-10 pt-20 lg:pt-0">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-white/30 backdrop-blur-sm text-white text-sm font-bold shadow-lg border border-white/20">
<span className="w-2 h-2 rounded-full bg-[#C9A962] animate-pulse" />
                  {isKo ? "광주 프리미엄 슈가링" : "Gwangju Premium Sugaring"}
                </span>
              </motion.div>

              {/* Brand Name */}
              <motion.p
                className="text-white/80 text-lg tracking-widest uppercase mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Relieve
              </motion.p>

              {/* Main Title - Script Style */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-2 drop-shadow-lg"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                  }}
                >
                  Beauty
                </h1>
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 drop-shadow-lg"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                  }}
                >
                  Life
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="text-lg lg:text-xl text-white/90 mb-8 max-w-md mx-auto lg:mx-0 drop-shadow leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {isKo
                  ? "100% 천연 슈가링으로 부드럽고 건강한 피부를 경험하세요"
                  : "Experience smooth, healthy skin with 100% natural sugaring"}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href={placeInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#6D5D6D] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="material-symbols-outlined">calendar_month</span>
                  {isKo ? "지금 예약하기" : "Book Now"}
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  {isKo ? "서비스 보기" : "View Services"}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                className="flex justify-center lg:justify-start gap-6 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { value: "724+", label: isKo ? "리뷰" : "Reviews" },
                  { value: "4.9", label: isKo ? "평점" : "Rating" },
                  { value: "8년+", label: isKo ? "경력" : "Experience" },
                ].map((stat, i) => (
                  <div key={i} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
                    <span className="block text-2xl lg:text-3xl font-bold text-white drop-shadow">
                      {stat.value}
                    </span>
                    <span className="text-xs text-white/70 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Center - Main Visual Image - 4 columns */}
            <motion.div
              className="lg:col-span-4 relative z-10 hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative w-full aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/30">
                  <Image
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop&q=80"
                    alt="Premium beauty treatment"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6D5D6D]/30 via-transparent to-transparent" />
                </div>

                {/* Floating Small Image */}
                <motion.div
                  className="absolute -bottom-8 -left-12 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-2 border-white/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=200&h=200&fit=crop&q=80"
                    alt="Natural ingredients"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Floating Badge - Antique Gold */}
                <motion.div
                  className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-[#C9A962] to-[#A68B4B] flex flex-col items-center justify-center shadow-xl transform rotate-12 border-4 border-white/50"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 12 }}
                  transition={{ delay: 0.9, type: "spring" }}
                >
                  <span className="material-symbols-outlined text-white text-3xl">
                    workspace_premium
                  </span>
                  <span className="text-white text-[10px] font-bold text-center leading-tight mt-1">
                    {isKo ? "그랑프리\n수상" : "Grand\nPrix"}
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Features List - 3 columns */}
            <motion.div
              className="lg:col-span-3 relative z-10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Feature List Card */}
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/25 shadow-2xl">
                <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-[#B8989B] flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-base">spa</span>
                  </span>
                  {isKo ? "슈가링의 장점" : "Why Sugaring?"}
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3 text-white bg-white/10 rounded-xl p-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#B8989B] to-[#7D6B7D] flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-white text-sm">
                          check
                        </span>
                      </span>
                      <span className="font-medium text-sm lg:text-base">
                        {isKo ? feature.ko : feature.en}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Process Icons */}
                <div className="mt-6 pt-5 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: "eco", label: isKo ? "100% 천연" : "Natural" },
                      { icon: "water_drop", label: isKo ? "수분 공급" : "Hydrating" },
                      { icon: "healing", label: isKo ? "저자극" : "Gentle" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-2 mx-auto">
                          <span className="material-symbols-outlined text-white text-xl">
                            {item.icon}
                          </span>
                        </div>
                        <span className="text-[10px] text-white/80 font-medium">
                          {item.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Info Card */}
              <motion.div
                className="mt-4 bg-white rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B8989B] to-[#7D6B7D] flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-lg">location_on</span>
                  </div>
                  <div>
<p className="text-[#4A4545] font-bold text-sm">
                      {isKo ? "광주 북구 운암동" : "Unam-dong, Buk-gu, Gwangju"}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {isKo ? "북문대로 154 3층" : "154 Bukmun-daero, 3F"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { repeat: Infinity, duration: 1.5 },
        }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
        <span className="material-symbols-outlined text-white/70 text-2xl">
          keyboard_arrow_down
        </span>
      </motion.div>
    </section>
  );
}
