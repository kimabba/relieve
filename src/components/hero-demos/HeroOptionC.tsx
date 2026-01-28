"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { placeInfo } from "@/lib/data";
import { useRef, useEffect, useState } from "react";

// Mouse Parallax Hook
const useMouseParallax = (strength: number = 0.05) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      x.set((clientX - centerX) * strength);
      y.set((clientY - centerY) * strength);
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [strength, x, y]);

  return { x: smoothX, y: smoothY };
};

// Glow Button Component
const GlowButton = ({ children, href, className }: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-joy-pink via-joy-yellow to-joy-teal opacity-0 blur-xl"
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.a>
  );
};

// Parallax Card Component
const ParallaxCard = ({ children, className, strength = 0.03 }: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) => {
  const { x, y } = useMouseParallax(strength);

  return (
    <motion.div
      className={className}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
};

export default function HeroOptionC() {
  const locale = useLocale();
  const isKo = locale === "ko";
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[150vh] overflow-hidden bg-joy-bg"
    >
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <ParallaxCard strength={0.02} className="absolute top-20 left-[10%]">
          <div className="w-32 h-32 rounded-full bg-joy-pink/20 blur-2xl" />
        </ParallaxCard>
        <ParallaxCard strength={0.04} className="absolute top-40 right-[15%]">
          <div className="w-48 h-48 rounded-full bg-joy-teal/20 blur-3xl" />
        </ParallaxCard>
        <ParallaxCard strength={0.03} className="absolute bottom-40 left-[20%]">
          <div className="w-40 h-40 rounded-full bg-joy-yellow/15 blur-2xl" />
        </ParallaxCard>
      </motion.div>

      {/* Sticky Hero Content */}
      <motion.div
        className="sticky top-0 min-h-screen flex items-center justify-center pt-20"
        style={{ opacity }}
      >
        <motion.div
          className="section-container text-center"
          style={{ y: textY }}
        >
          {/* Interactive Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-8"
          >
            <span className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-white/90 backdrop-blur-sm text-joy-pink text-sm font-bold shadow-lg cursor-default">
              <motion.span
                className="material-symbols-outlined"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                spa
              </motion.span>
              {isKo ? "프리미엄 슈가링" : "Premium Sugaring"}
            </span>
          </motion.div>

          {/* Main Title */}
          <ParallaxCard strength={0.01}>
            <motion.h1
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-joy-dark leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {isKo ? "부드러운 터치," : "Gentle Touch,"}
              <br />
              <motion.span
                className="text-joy-pink"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {isKo ? "빛나는 피부" : "Radiant Skin"}
              </motion.span>
            </motion.h1>
          </ParallaxCard>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-joy-text leading-relaxed max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {isKo
              ? "100% 천연 성분의 슈가링으로 민감한 피부도 안심. 임산부를 위한 프리미엄 케어를 경험하세요."
              : "100% natural sugaring safe for sensitive skin. Experience premium care designed for expectant mothers."}
          </motion.p>

          {/* Glow CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <GlowButton
              href={placeInfo.bookingUrl}
              className="px-8 py-4 bg-joy-pink text-white rounded-full font-bold shadow-lg"
            >
              <span className="material-symbols-outlined">calendar_month</span>
              {isKo ? "예약하기" : "Book Now"}
            </GlowButton>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-joy-dark rounded-full font-bold shadow-md border border-gray-100 hover:border-joy-pink transition-colors"
              >
                {isKo ? "서비스 보기" : "View Services"}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Stats Grid */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { value: "724+", label: isKo ? "리뷰" : "Reviews", color: "joy-pink" },
              { value: "4.9", label: isKo ? "평점" : "Rating", color: "joy-teal" },
              { value: "100%", label: isKo ? "천연" : "Natural", color: "joy-dark" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                }}
              >
                <span className={`block text-3xl font-bold text-${stat.color} mb-1`}>
                  {stat.value}
                </span>
                <span className="text-xs text-joy-textLight uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="flex flex-col items-center text-joy-textLight"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-xs uppercase tracking-widest mb-2">
                {isKo ? "스크롤" : "Scroll"}
              </span>
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Option Label */}
      <div className="fixed bottom-4 left-4 bg-joy-dark text-white text-xs px-3 py-1.5 rounded-full z-50">
        Option C: 인터랙티브
      </div>
    </section>
  );
}
