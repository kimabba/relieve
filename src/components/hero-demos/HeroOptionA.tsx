"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { placeInfo } from "@/lib/data";

// Morphing Blob SVG Component
const MorphingBlob = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E07070" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#F5B800" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#5BA8A8" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <motion.path
      fill="url(#blobGradient)"
      animate={{
        d: [
          "M44.5,-76.3C58.2,-69.1,70.2,-58.4,78.7,-44.9C87.2,-31.4,92.1,-15.7,91.5,-0.4C90.8,15,84.5,29.9,75.7,43.1C66.9,56.3,55.6,67.7,42.1,75.2C28.6,82.7,14.3,86.3,-0.6,87.3C-15.5,88.4,-31,86.9,-44.6,80.1C-58.2,73.3,-69.9,61.2,-77.9,47.1C-85.9,33,-90.2,16.5,-89.8,0.2C-89.4,-16,-84.3,-32,-75.5,-45.6C-66.7,-59.2,-54.2,-70.4,-40.1,-77.3C-26,-84.2,-13,-86.8,1.1,-88.7C15.2,-90.6,30.4,-91.8,44.5,-76.3Z",
          "M47.7,-81.1C62.2,-73.3,74.6,-61.6,82.4,-47.4C90.2,-33.2,93.4,-16.6,92.3,-0.6C91.2,15.3,85.8,30.6,77.4,44.1C69,57.6,57.6,69.3,44.1,77.1C30.6,84.9,15.3,88.8,-0.4,89.5C-16.2,90.2,-32.3,87.7,-46.1,80.4C-59.9,73.1,-71.3,61,-79.1,46.9C-86.9,32.8,-91.1,16.4,-90.7,0.2C-90.3,-16,-85.3,-31.9,-76.9,-45.5C-68.5,-59.1,-56.7,-70.3,-43,-78.3C-29.3,-86.3,-14.6,-91.1,0.7,-92.3C16,-93.5,32,-88.9,47.7,-81.1Z",
          "M41.3,-70.8C54.7,-63.8,67.4,-54.6,76.1,-42.2C84.8,-29.8,89.5,-14.9,89.3,-0.1C89.1,14.7,84,29.3,75.7,42C67.4,54.7,55.9,65.4,42.6,72.9C29.3,80.4,14.7,84.7,-0.4,85.4C-15.5,86.1,-31,83.2,-44.6,76.1C-58.2,69,-69.9,57.7,-77.8,44.1C-85.7,30.5,-89.8,15.3,-89.4,0.2C-89,-14.8,-84.1,-29.6,-75.8,-42.4C-67.5,-55.2,-55.8,-66,-42.4,-73.1C-29,-80.2,-14.5,-83.6,-0.2,-83.3C14.1,-83,28,-77.8,41.3,-70.8Z",
        ],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 8,
        ease: "easeInOut",
      }}
      transform="translate(100 100)"
    />
  </svg>
);

// Animated Text Component
const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");

  return (
    <motion.span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="inline-block mr-3"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Floating Card Component
const FloatingCard = ({ children, delay = 0, className }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 30 }}
    animate={{
      opacity: 1,
      y: [0, -8, 0],
    }}
    transition={{
      opacity: { duration: 0.6, delay },
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay + 0.6,
      },
    }}
  >
    {children}
  </motion.div>
);

export default function HeroOptionA() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-joy-bg">
      {/* Morphing Blob Backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <MorphingBlob className="absolute -top-32 -right-32 w-[600px] h-[600px] opacity-60" />
        <MorphingBlob className="absolute -bottom-32 -left-32 w-[500px] h-[500px] opacity-40" />
        <MorphingBlob className="absolute top-1/3 left-1/4 w-[400px] h-[400px] opacity-30" />
      </div>

      <div className="section-container relative">
        {/* Badge */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-white/90 backdrop-blur-sm text-joy-pink text-xs font-bold uppercase tracking-wider shadow-soft"
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-joy-pink"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            {isKo ? "프리미엄 슈가링" : "Premium Sugaring"}
          </motion.span>
        </div>

        {/* Main Title with Kinetic Typography */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-joy-dark leading-[1.1] mb-6">
            <AnimatedText text={isKo ? "부드러운 터치," : "Gentle Touch,"} />
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-joy-pink via-[#F5B800] to-joy-pink bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <AnimatedText text={isKo ? "빛나는 피부" : "Radiant Skin"} />
            </motion.span>
          </h1>

          <motion.p
            className="text-xl text-joy-text leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {isKo
              ? "100% 천연 성분의 슈가링으로 민감한 피부도 안심. 임산부를 위한 프리미엄 케어를 경험하세요."
              : "100% natural sugaring safe for sensitive skin. Experience premium care designed for expectant mothers."}
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.a
            href={placeInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="material-symbols-outlined text-lg">calendar_month</span>
            {isKo ? "예약하기" : "Book Now"}
          </motion.a>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/services"
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              {isKo ? "서비스 보기" : "View Services"}
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FloatingCard delay={0.2} className="bg-white rounded-3xl p-6 shadow-soft text-center">
            <span className="block text-4xl font-bold text-joy-pink mb-1">724+</span>
            <span className="text-sm text-joy-textLight uppercase tracking-wider">
              {isKo ? "리뷰" : "Reviews"}
            </span>
          </FloatingCard>

          <FloatingCard delay={0.4} className="card-mint p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="material-symbols-outlined text-joy-teal">workspace_premium</span>
              <span className="font-serif font-bold text-joy-dark">
                {isKo ? "국제대회 수상" : "Award Winner"}
              </span>
            </div>
            <span className="text-sm text-joy-text">
              {isKo ? "그랑프리 수상 전문가" : "Grand Prix Winner"}
            </span>
          </FloatingCard>

          <FloatingCard delay={0.6} className="bg-white rounded-3xl p-6 shadow-soft text-center">
            <span className="block text-4xl font-bold text-joy-teal mb-1">100%</span>
            <span className="text-sm text-joy-textLight uppercase tracking-wider">
              {isKo ? "천연 성분" : "Natural"}
            </span>
          </FloatingCard>
        </div>
      </div>

      {/* Option Label */}
      <div className="absolute bottom-4 left-4 bg-joy-dark text-white text-xs px-3 py-1.5 rounded-full">
        Option A: 프리미엄 럭셔리
      </div>
    </section>
  );
}
