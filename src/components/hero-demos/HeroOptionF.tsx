"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useLocale } from "next-intl";
import { placeInfo } from "@/lib/data";
import { useRef, useState } from "react";
import Image from "next/image";

// Liquid Button with morphing effect
const LiquidButton = ({ children, href, variant = "primary" }: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClass = variant === "primary"
    ? "bg-joy-pink text-white"
    : "bg-transparent border-2 border-white/40 text-white hover:border-white";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-lg overflow-hidden ${baseClass}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-joy-pink via-joy-yellow to-joy-pink"
          style={{ backgroundSize: "200% 100%" }}
          animate={{
            backgroundPosition: isHovered ? ["0% 0%", "100% 0%"] : "0% 0%",
          }}
          transition={{ duration: 0.5 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.a>
  );
};

// Reveal Text on Scroll/Load
const RevealText = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  </div>
);

export default function HeroOptionF() {
  const locale = useLocale();
  const isKo = locale === "ko";
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [5, -5]);
  const rotateY = useTransform(smoothX, [0, 1], [-5, 5]);
  const imageScale = useTransform(smoothY, [0, 0.5, 1], [1.1, 1.05, 1.1]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-[#1a1a1a]"
      style={{ perspective: "1000px" }}
    >
      {/* Full Background Image with 3D Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          rotateX,
          rotateY,
          scale: imageScale,
        }}
      >
        <Image
          src="/images/hero-model.jpg"
          alt="Premium Sugaring"
          fill
          className="object-cover"
          priority
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-transparent to-[#1a1a1a]/60" />
      </motion.div>

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
      <div className="relative min-h-screen flex items-end pb-24 lg:pb-32">
        <div className="section-container">
          <div className="max-w-4xl">
            {/* Badge */}
            <RevealText delay={0.2}>
              <motion.div
                className="inline-flex items-center gap-3 mb-8"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-12 h-[1px] bg-joy-pink"
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                <span className="text-joy-pink font-medium tracking-[0.3em] text-sm uppercase">
                  {isKo ? "프리미엄 슈가링" : "Premium Sugaring"}
                </span>
              </motion.div>
            </RevealText>

            {/* Main Title - Large Typography */}
            <RevealText delay={0.3} className="mb-2">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight">
                {isKo ? "부드러운" : "Gentle"}
              </h1>
            </RevealText>
            <RevealText delay={0.4} className="mb-2">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-joy-pink to-joy-yellow">
                  {isKo ? "터치" : "Touch"}
                </span>
              </h1>
            </RevealText>
            <RevealText delay={0.5} className="mb-8">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold text-white/90 leading-[0.9] tracking-tight">
                {isKo ? "빛나는 피부" : "Radiant Skin"}
              </h1>
            </RevealText>

            {/* Subtitle */}
            <RevealText delay={0.6} className="mb-10">
              <p className="text-white/60 text-lg lg:text-xl max-w-xl leading-relaxed">
                {isKo
                  ? "100% 천연 성분의 슈가링으로 민감한 피부도 안심하세요. 국제대회 그랑프리 수상 전문가가 직접 케어합니다."
                  : "Experience safe, natural sugaring for sensitive skin. Cared for by our award-winning expert."}
              </p>
            </RevealText>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <LiquidButton href={placeInfo.bookingUrl} variant="primary">
                <span className="material-symbols-outlined text-xl">calendar_month</span>
                {isKo ? "지금 예약하기" : "Book Now"}
              </LiquidButton>
              <LiquidButton href="#services" variant="secondary">
                {isKo ? "서비스 둘러보기" : "Explore Services"}
              </LiquidButton>
            </motion.div>

            {/* Stats with animated underline */}
            <motion.div
              className="flex flex-wrap gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { value: "724+", label: isKo ? "고객 리뷰" : "Reviews", accent: "joy-pink" },
                { value: "4.9", label: isKo ? "네이버 평점" : "Rating", accent: "joy-yellow" },
                { value: "100%", label: isKo ? "천연 성분" : "Natural", accent: "joy-teal" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.1 }}
                >
                  <span className={`block text-4xl lg:text-5xl font-bold text-${stat.accent} mb-1`}>
                    {stat.value}
                  </span>
                  <span className="text-sm text-white/40 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <motion.div
                    className={`h-0.5 bg-${stat.accent} mt-2`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.3 + i * 0.1, duration: 0.6 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side Info */}
      <motion.div
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="w-[1px] h-24 bg-white/20" />
        <span className="text-white/40 text-xs tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>
          Scroll to Explore
        </span>
        <motion.div
          className="w-[1px] h-24 bg-gradient-to-b from-joy-pink to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ originY: 0 }}
        />
      </motion.div>

      {/* Award Badge */}
      <motion.div
        className="absolute top-8 right-8 lg:top-12 lg:right-auto lg:left-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, type: "spring" }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-joy-yellow/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-joy-yellow text-2xl">
                workspace_premium
              </span>
            </div>
            <div>
              <p className="text-white font-bold">
                {isKo ? "국제대회 그랑프리" : "Grand Prix Winner"}
              </p>
              <p className="text-white/50 text-sm">
                {isKo ? "슈가링 전문가" : "Sugaring Expert"}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Option Label */}
      <div className="fixed bottom-4 left-4 bg-gradient-to-r from-joy-pink to-joy-yellow text-white text-xs px-3 py-1.5 rounded-full z-50">
        Option F: Cinematic Premium
      </div>
    </section>
  );
}
