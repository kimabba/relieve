"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { placeInfo } from "@/lib/data";

// Text Reveal Animation
const TextReveal = ({ text, className, delay = 0 }: {
  text: string;
  className?: string;
  delay?: number;
}) => (
  <span className={`inline-block overflow-hidden ${className}`}>
    <motion.span
      className="inline-block"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.33, 1, 0.68, 1],
      }}
    >
      {text}
    </motion.span>
  </span>
);

// Stagger Fade-in Container
const StaggerContainer = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.5,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

// Stagger Item
const StaggerItem = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }}
  >
    {children}
  </motion.div>
);

export default function HeroOptionB() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #FFFAF4 0%, #FFE0B2 25%, #FFFAF4 50%, #E0F2F1 75%, #FFFAF4 100%)",
            "linear-gradient(135deg, #FFFAF4 0%, #E0F2F1 25%, #FFFAF4 50%, #FFE0B2 75%, #FFFAF4 100%)",
            "linear-gradient(135deg, #FFFAF4 0%, #FFE0B2 25%, #FFFAF4 50%, #E0F2F1 75%, #FFFAF4 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Subtle Decorative Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-joy-pink/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-joy-teal/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </div>

      <div className="section-container relative">
        {/* Centered Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 py-2 px-4 border border-joy-pink/30 rounded-full text-joy-pink text-xs font-medium uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-joy-pink" />
              {isKo ? "프리미엄 슈가링" : "Premium Sugaring"}
            </span>
          </motion.div>

          {/* Main Title with Text Reveal */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold text-joy-dark leading-[1.05] mb-8">
            <TextReveal text={isKo ? "부드러운" : "Gentle"} delay={0.2} />
            <br />
            <TextReveal text={isKo ? "터치" : "Touch"} delay={0.4} className="text-joy-pink" />
          </h1>

          {/* Subtitle with fade-in */}
          <motion.p
            className="text-xl md:text-2xl text-joy-textLight leading-relaxed max-w-xl mx-auto mb-12 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {isKo
              ? "100% 천연 성분으로 만든 프리미엄 슈가링"
              : "Premium sugaring made with 100% natural ingredients"}
          </motion.p>

          {/* CTA with minimal style */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.a
              href={placeInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-joy-dark text-white rounded-full font-medium transition-all hover:bg-joy-pink"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {isKo ? "예약하기" : "Book Now"}
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </motion.a>
          </motion.div>

          {/* Minimal Stats Row */}
          <StaggerContainer className="flex flex-wrap justify-center gap-12 lg:gap-20">
            <StaggerItem className="text-center">
              <span className="block text-4xl lg:text-5xl font-serif font-bold text-joy-dark mb-1">
                724
              </span>
              <span className="text-xs text-joy-textLight uppercase tracking-widest">
                {isKo ? "리뷰" : "Reviews"}
              </span>
            </StaggerItem>

            <StaggerItem className="text-center">
              <span className="block text-4xl lg:text-5xl font-serif font-bold text-joy-pink mb-1">
                4.9
              </span>
              <span className="text-xs text-joy-textLight uppercase tracking-widest">
                {isKo ? "평점" : "Rating"}
              </span>
            </StaggerItem>

            <StaggerItem className="text-center">
              <span className="block text-4xl lg:text-5xl font-serif font-bold text-joy-teal mb-1">
                100%
              </span>
              <span className="text-xs text-joy-textLight uppercase tracking-widest">
                {isKo ? "천연" : "Natural"}
              </span>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 2, duration: 0.5 },
            y: { delay: 2.5, duration: 1.5, repeat: Infinity },
          }}
        >
          <span className="material-symbols-outlined text-joy-textLight text-2xl">
            expand_more
          </span>
        </motion.div>
      </div>

      {/* Option Label */}
      <div className="absolute bottom-4 left-4 bg-joy-dark text-white text-xs px-3 py-1.5 rounded-full">
        Option B: 미니멀 엘레강스
      </div>
    </section>
  );
}
