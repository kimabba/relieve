"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { reviews } from "@/lib/data";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function Features() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-24 lg:py-32 bg-waxly-cream overflow-hidden">
      {/* Decorative Curved Line */}
      <svg
        className="absolute bottom-0 right-0 w-[400px] h-[300px] opacity-20 pointer-events-none"
        viewBox="0 0 400 300"
        fill="none"
      >
        <path
          d="M400 0C300 50 200 100 150 150C100 200 50 250 0 300"
          stroke="#6A483C"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image with Video Button */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-tr-[80px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=500&h=600&fit=crop&q=80"
                  alt="Our story"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Play Button */}
              <motion.button
                className="absolute bottom-8 left-8 w-16 h-16 rounded-full bg-waxly-brown text-white flex items-center justify-center shadow-lg hover:bg-waxly-brownDark transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-symbols-outlined text-2xl">play_arrow</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <h2
              className="text-4xl lg:text-5xl text-waxly-brown mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              {isKo ? "릴리브 이야기" : "Our Story"}
            </h2>

            {/* Description */}
            <p className="text-waxly-brownLight font-light leading-relaxed mb-8">
              {isKo
                ? "릴리브는 2016년부터 광주에서 프리미엄 슈가링 서비스를 제공해왔습니다. 100% 천연 성분만을 사용하여 피부에 자극 없는 안전한 제모와 피부관리를 선사합니다. 2023년 국제 왁싱 기능 경기 대회에서 그랑프리를 수상한 전문가가 직접 시술합니다."
                : "Relieve has been providing premium sugaring services in Gwangju since 2016. Using only 100% natural ingredients for safe, irritation-free hair removal. Treatments are performed by our Grand Prix winning expert."}
            </p>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 border border-waxly-brown text-waxly-brown font-light tracking-wider hover:bg-waxly-brown hover:text-white transition-all duration-300 mb-10"
            >
              {isKo ? "더 알아보기" : "Read More"}
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>

            {/* Stats + Honey Images */}
            <div className="flex items-end gap-6">
              {/* Stats */}
              <div className="space-y-4">
                <div>
                  <span
                    className="text-4xl lg:text-5xl text-waxly-brown"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {reviews.total}+
                  </span>
                  <p className="text-waxly-brownLight font-light text-sm mt-1">
                    {isKo ? "Happy Customer" : "Happy Customer"}
                  </p>
                </div>
                <div>
                  <span
                    className="text-4xl lg:text-5xl text-waxly-brown"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    8+
                  </span>
                  <p className="text-waxly-brownLight font-light text-sm mt-1">
                    {isKo ? "Year Experience" : "Year Experience"}
                  </p>
                </div>
              </div>

              {/* Decorative Images */}
              <div className="hidden sm:flex gap-3">
                <div className="relative w-24 h-28 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=200&h=250&fit=crop&q=80"
                    alt="Natural ingredients"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-20 h-24 rounded-lg overflow-hidden mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=150&h=200&fit=crop&q=80"
                    alt="Honey"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
