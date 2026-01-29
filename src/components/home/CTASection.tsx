"use client";

import { useLocale } from "next-intl";
import { placeInfo, contact } from "@/lib/data";
import { motion } from "framer-motion";

export default function CTASection() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Diagonal Split Background - Mirroring Hero */}
      <div className="absolute inset-0">
        {/* Lavender Side */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7D6B7D] via-[#8D7D8D] to-[#9D8D9D]" />
        {/* Pink Side - Diagonal */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#B8989B] via-[#C8B0B2] to-[#D4C4C6]"
          style={{
            clipPath: "polygon(0 0, 65% 0, 45% 100%, 0 100%)",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.span
            className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-8 border border-white/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="material-symbols-outlined text-base">spa</span>
            {isKo ? "예약 안내" : "Book Your Visit"}
          </motion.span>

          {/* Title - Script Style */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {isKo ? (
              <>
                소중한 당신을 위한
                <br />
                <span className="text-5xl sm:text-6xl lg:text-7xl">편안한 휴식</span>
              </>
            ) : (
              <>
                Gift Yourself
                <br />
                <span className="text-5xl sm:text-6xl lg:text-7xl">a Moment of Rest</span>
              </>
            )}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-white/90 mb-12 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {isKo
              ? "따뜻하고 아늑한 공간에서 전문가의 섬세한 케어를 받아보세요. 임산부를 위한 특별한 혜택이 준비되어 있습니다."
              : "Experience gentle, expert care in our warm and cozy space. Special benefits await expectant mothers."}
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {/* Primary CTA */}
            <a
              href={placeInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#7D6B7D] text-lg font-bold h-16 px-12 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span className="material-symbols-outlined text-2xl">calendar_month</span>
              {isKo ? "네이버 예약하기" : "Book on Naver"}
            </a>

            {/* Secondary CTA */}
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white text-lg font-bold h-16 px-12 rounded-full transition-all duration-300 border-2 border-white/50 hover:border-white"
            >
              <span className="material-symbols-outlined text-2xl">call</span>
              {isKo ? "전화 문의" : "Call Us"}
            </a>
          </motion.div>

          {/* Trust Badges - Glass Cards */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {[
              { icon: "eco", label: isKo ? "100% 천연" : "100% Natural" },
              { icon: "pregnant_woman", label: isKo ? "임산부 전문" : "Maternity Care" },
              { icon: "verified", label: isKo ? "724+ 리뷰" : "724+ Reviews" },
              { icon: "workspace_premium", label: isKo ? "그랑프리 수상" : "Award Winner" },
            ].map((badge, index) => (
              <motion.div
                key={badge.icon}
                className="flex items-center gap-2 px-5 py-3 bg-white/15 backdrop-blur-sm rounded-full text-white border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <span className="material-symbols-outlined text-lg">{badge.icon}</span>
                <span className="text-sm font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </section>
  );
}
