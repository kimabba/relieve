"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { placeInfo } from "@/lib/data";
import { useRef, useState, useEffect } from "react";

// Cursor Follower with Reveal Effect
const CursorReveal = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouse);

    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="w-4 h-4 -ml-2 -mt-2 rounded-full bg-white"
        animate={{
          scale: isHovering ? 3 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

// Text Scramble Effect
const ScrambleText = ({ text, className }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(true);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    if (!isAnimating) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, isAnimating]);

  return <span className={className}>{displayText}</span>;
};

// Marquee Component
const Marquee = ({ children, speed = 50 }: { children: React.ReactNode; speed?: number }) => (
  <div className="overflow-hidden whitespace-nowrap">
    <motion.div
      className="inline-flex gap-8"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
    >
      {children}
      {children}
    </motion.div>
  </div>
);

export default function HeroOptionE() {
  const locale = useLocale();
  const isKo = locale === "ko";
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: isKo ? "부드러운 터치" : "Gentle Touch",
      subtitle: isKo ? "100% 천연 슈가링" : "100% Natural Sugaring",
      color: "joy-pink",
    },
    {
      title: isKo ? "빛나는 피부" : "Radiant Skin",
      subtitle: isKo ? "프리미엄 케어" : "Premium Care",
      color: "joy-yellow",
    },
    {
      title: isKo ? "안심 케어" : "Safe Care",
      subtitle: isKo ? "임산부 전문" : "Maternity Expert",
      color: "joy-teal",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] cursor-none"
    >
      <CursorReveal />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-joy-pink/20 blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-joy-teal/20 blur-[100px]"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4">
        {/* Top Marquee */}
        <div className="absolute top-0 left-0 right-0 py-4 border-b border-white/10">
          <Marquee speed={30}>
            <span className="text-white/30 text-sm tracking-[0.3em] uppercase">
              Premium Sugaring • Natural Beauty • Safe Care • Award Winner •
            </span>
          </Marquee>
        </div>

        {/* Center Content */}
        <div className="text-center z-10">
          {/* Animated Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <motion.span
                className={`text-${slides[activeSlide].color} text-sm tracking-[0.5em] uppercase font-medium block mb-4`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {slides[activeSlide].subtitle}
              </motion.span>
              <h1 className="font-serif text-6xl sm:text-7xl lg:text-9xl font-bold text-white leading-none">
                <ScrambleText text={slides[activeSlide].title} />
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mb-12">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className="group relative w-12 h-1 rounded-full overflow-hidden bg-white/20"
              >
                <motion.div
                  className={`absolute inset-0 bg-${slide.color}`}
                  initial={false}
                  animate={{
                    scaleX: activeSlide === i ? 1 : 0,
                  }}
                  style={{ originX: 0 }}
                  transition={{ duration: activeSlide === i ? 4 : 0.3 }}
                />
              </button>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href={placeInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#0a0a0a] rounded-full font-bold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{isKo ? "예약하기" : "Book Now"}</span>
              <motion.span
                className="material-symbols-outlined relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                arrow_forward
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 flex justify-center gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { value: "724+", label: isKo ? "리뷰" : "Reviews" },
              { value: "4.9", label: isKo ? "평점" : "Rating" },
              { value: "100%", label: isKo ? "천연" : "Natural" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <motion.span
                  className="block text-3xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-xs text-white/40 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Marquee */}
        <div className="absolute bottom-0 left-0 right-0 py-4 border-t border-white/10">
          <Marquee speed={25}>
            <span className="text-white/30 text-sm tracking-[0.3em] uppercase">
              Gwangju Waxing • Relieve Sugaring • Since 2020 • Expert Care •
            </span>
          </Marquee>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20" />
      </div>

      {/* Option Label */}
      <div className="fixed bottom-4 left-4 bg-white text-[#0a0a0a] text-xs px-3 py-1.5 rounded-full z-50">
        Option E: Dark Cinematic
      </div>
    </section>
  );
}
