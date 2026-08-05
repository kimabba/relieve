"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { placeInfo, contact, reviews, businessHours } from "@/lib/data";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-tl-[100px] bg-gradient-to-br from-waxly-cream to-waxly-peach" />
  ),
});

export default function Hero() {
  const locale = useLocale();
  const isKo = locale === "ko";

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isSmallViewport = window.matchMedia("(max-width: 1023px)").matches;
    setPrefersReducedMotion(mediaQuery.matches || isSmallViewport);
  }, []);

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
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-waxly-brown/5 border border-waxly-brown/15 rounded-full"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="material-symbols-outlined text-waxly-gold text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="text-waxly-brown text-sm font-light">
                {isKo
                  ? `4.9점 (${reviews.total}건 리뷰)`
                  : `4.9 Rating (${reviews.total} Reviews)`}
              </span>
            </motion.div>

            {/* Main Title - SEO Optimized H1 */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl text-waxly-brown leading-tight mb-8 text-balance"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {isKo ? (
                <>
                  믿을 수 있는
                  <br />
                  병원급 청결
                  <br />
                  임산부 왁싱 전문
                </>
              ) : (
                <>
                  Trusted Care,
                  <br />
                  Hospital-Grade
                  <br />
                  Maternity Waxing
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-waxly-brownLight font-light text-base lg:text-lg mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {isKo
                ? "위생 인증과 전문 자격을 갖춘 손길로, 임산부와 민감성 피부도 안심하고 맡기는 케어를 제공합니다."
                : "Certified hygiene standards and expert credentials — care trusted by expectant mothers and sensitive skin alike."}
            </motion.p>

            {/* Price Transparency */}
            <motion.p
              className="text-waxly-brown font-light text-sm mb-8 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {isKo
                ? "첫 방문 특가 50,000원부터 | 임산부 케어 80,000원부터"
                : "First visit from 50,000 KRW | Maternity care from 80,000 KRW"}
            </motion.p>

            {/* CTA Button - Unified Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={placeInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-5 bg-waxly-brown text-white font-light tracking-wider hover:bg-waxly-brownDark transition-all duration-300"
              >
                {isKo ? "예약하기" : "Book Now"}
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </motion.div>

            {/* Contact Info Bar */}
            <motion.div
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-waxly-brownLight text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a href={`tel:${contact.phone}`} className="flex items-center gap-1 hover:text-waxly-brown transition-colors">
                <span className="material-symbols-outlined text-sm">call</span>
                {contact.phone}
              </a>
              <span className="hidden sm:inline text-waxly-border">|</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span>
                {isKo ? `${businessHours.days} ${businessHours.formatted}` : `${businessHours.daysEn} ${businessHours.formattedEn}`}
              </span>
              <span className="hidden sm:inline text-waxly-border">|</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                {isKo ? "광주 북구 운암동" : "Buk-gu, Gwangju"}
              </span>
            </motion.div>
          </div>

          {/* Right Content - 3D Hero or Static Fallback */}
          <motion.div
            className="lg:col-span-7 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative w-full max-w-lg ml-auto aspect-[3/4]">
              {prefersReducedMotion ? (
                <div className="relative w-full h-full rounded-tl-[100px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1589525231707-f2de2428f59c?w=600&h=800&fit=crop&q=80"
                    alt={isKo ? "광주 슈가링 시술 - 릴리브" : "Sugaring treatment at Relieve Gwangju"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <Hero3D />
              )}

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
