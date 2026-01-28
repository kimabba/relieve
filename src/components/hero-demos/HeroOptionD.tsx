"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLocale } from "next-intl";
import { placeInfo } from "@/lib/data";
import { useRef, useState } from "react";
import Image from "next/image";

// Magnetic Button Component
const MagneticButton = ({ children, href, className }: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

export default function HeroOptionD() {
  const locale = useLocale();
  const isKo = locale === "ko";
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const imageX = useTransform(mouseX, [0, 1], [-20, 20]);
  const imageY = useTransform(mouseY, [0, 1], [-20, 20]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-joy-dark"
    >
      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left: Image Side */}
        <motion.div
          className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen overflow-hidden"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Image with Parallax */}
          <motion.div
            className="absolute inset-0"
            style={{ x: imageX, y: imageY }}
            animate={{ scale: isHovered ? 1.1 : 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/images/hero-model.jpg"
              alt="Premium Sugaring"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-joy-dark/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-joy-dark lg:via-joy-dark/30 lg:to-transparent"
            animate={{ opacity: isHovered ? 0.4 : 0.7 }}
            transition={{ duration: 0.4 }}
          />

          {/* Floating Badge */}
          <motion.div
            className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-joy-yellow text-2xl">
                  workspace_premium
                </span>
                <div>
                  <p className="text-white font-bold text-sm">
                    {isKo ? "국제대회 그랑프리" : "Grand Prix Winner"}
                  </p>
                  <p className="text-white/70 text-xs">
                    {isKo ? "슈가링 전문가" : "Sugaring Expert"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Content Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg">
            {/* Animated Line */}
            <motion.div
              className="w-16 h-0.5 bg-joy-pink mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />

            {/* Main Title */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                {isKo ? "부드러운" : "Gentle"}
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                <span className="text-joy-pink">{isKo ? "터치," : "Touch,"}</span>
                <br />
                <span className="text-joy-yellow">{isKo ? "빛나는 피부" : "Radiant Skin"}</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-white/70 text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {isKo
                ? "100% 천연 슈가링으로 민감한 피부도 안심. 임산부를 위한 프리미엄 케어."
                : "100% natural sugaring safe for sensitive skin. Premium care for expectant mothers."}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <MagneticButton
                href={placeInfo.bookingUrl}
                className="group relative px-8 py-4 bg-joy-pink text-white rounded-full font-bold overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isKo ? "지금 예약하기" : "Book Now"}
                  <motion.span
                    className="material-symbols-outlined"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    arrow_forward
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ mixBlendMode: "difference" }}
                />
              </MagneticButton>

              <MagneticButton
                href="#services"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:border-joy-pink hover:text-joy-pink transition-colors"
              >
                {isKo ? "서비스 보기" : "View Services"}
              </MagneticButton>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {[
                { value: "724+", label: isKo ? "리뷰" : "Reviews" },
                { value: "4.9", label: isKo ? "평점" : "Rating" },
                { value: "100%", label: isKo ? "천연" : "Natural" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <motion.span
                    className="block text-2xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-xs text-white/50 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { repeat: Infinity, duration: 1.5 }
        }}
      >
        <span className="material-symbols-outlined text-3xl">expand_more</span>
      </motion.div>

      {/* Option Label */}
      <div className="fixed bottom-4 left-4 bg-joy-pink text-white text-xs px-3 py-1.5 rounded-full z-50">
        Option D: Cinematic Split
      </div>
    </section>
  );
}
