"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { placeInfo } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative min-h-screen bg-waxly-cream overflow-hidden pt-28 lg:pt-32">
      {/* Decorative Curved Line */}
      <svg
        className="absolute bottom-0 right-0 w-[600px] h-[400px] opacity-30 pointer-events-none"
        viewBox="0 0 600 400"
        fill="none"
      >
        <path
          d="M600 0C500 100 400 150 300 200C200 250 100 300 0 400"
          stroke="#6A483C"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content - Text */}
          <div className="lg:col-span-5 text-center lg:text-left z-10">
            {/* Main Title */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-waxly-brown leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {isKo ? (
                <>
                  매끄러운
                  <br />
                  피부를 위한
                  <br />
                  선택
                </>
              ) : (
                <>
                  Get The
                  <br />
                  Smooth Look
                  <br />
                  You Want
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-waxly-brownLight font-light text-base lg:text-lg mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {isKo
                ? "100% 천연 슈가링으로 부드럽고 건강한 피부를 경험하세요. 설탕, 레몬, 물로만 만든 순수한 케어."
                : "Experience smooth, healthy skin with 100% natural sugaring. Pure care made from sugar, lemon, and water."}
            </motion.p>

            {/* CTA Button - Waxly Style (Outlined, Square) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={placeInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-5 border border-waxly-brown text-waxly-brown font-light tracking-wider hover:bg-waxly-brown hover:text-white transition-all duration-300"
              >
                {isKo ? "예약하기" : "Discover More"}
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </motion.div>
          </div>

          {/* Right Content - Image Collage */}
          <motion.div
            className="lg:col-span-7 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full max-w-lg ml-auto">
                <div className="relative aspect-[3/4] rounded-tl-[100px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop&q=80"
                    alt="Beauty treatment"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Circular Badge */}
                <motion.div
                  className="absolute -left-8 top-1/4 w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  <div className="text-center">
                    <div
                      className="text-waxly-brown text-xs tracking-wider"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      <span className="block text-[10px] tracking-[0.2em]">RELIEVE</span>
                      <span className="block text-lg mt-1">슈가링</span>
                      <span className="block text-[10px] tracking-[0.2em]">SALON</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Secondary Image - Bottom Left */}
              <motion.div
                className="absolute -bottom-8 left-0 w-40 h-48 rounded-tr-[40px] overflow-hidden shadow-xl hidden lg:block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&h=400&fit=crop&q=80"
                  alt="Natural ingredients"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Curved Decoration */}
      <svg
        className="absolute bottom-0 left-0 w-full h-20 pointer-events-none"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80V60C200 20 400 0 720 20C1040 40 1240 60 1440 40V80H0Z"
          fill="white"
          fillOpacity="0.5"
        />
      </svg>
    </section>
  );
}
