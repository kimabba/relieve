"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryData = {
  ko: {
    sectionLabel: "시설 안내",
    title: "프라이빗 공간",
    description:
      "음향 방음 처리와 인체공학적 설계로 세상과 분리된 휴식 공간을 제공합니다.",
    exploreButton: "갤러리 보기",
    rooms: [
      {
        title: "시술실 A",
        description: "임산부를 위한 인체공학적 메모리폼 베드",
      },
    ],
  },
  en: {
    sectionLabel: "Our Space",
    title: "Your Private Sanctuary",
    description:
      "Designed with acoustic soundproofing and ergonomic support, our treatment rooms offer a retreat from the world.",
    exploreButton: "Explore Gallery",
    rooms: [
      {
        title: "Treatment Room A",
        description: "Ergonomic memory foam beds for pregnancy support.",
      },
    ],
  },
};

const images = {
  main: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG5p7xl6qwYXe-P3zD76oGD-zaS5_sYiURqQuD1lkP7o7Ml9USYfAGjKx9tUTaVLfHsNfoChwf3JOw1Ii7INnKslkOFipzbqbcumyS1AVgtJgSMwr6rBdo3Uzyo2R6eK8vYCXcL0QEHVXEJpEzuYS4RXuCj0hFtsYuUppuzP5WX5LB6Bb8okujo1PvcZ2FYtzMzG2bC0EjgkHCIJTFtRkrq2XExJsSiShessOBRHf6McvbJtesa9NzwqwVIwt3sU58n5QPfyHsZqk",
  secondary1:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCQirC7KJOdhyQTZoA8PxSxo7EAcHC1dLJyPtB8bpgi0guPNT4GtwJjrjGXMd0FA8_8J68BMyTysfmAGqk26Z-46TSakn7ZFSveKQq5sDlj2p1-uMnLhMDnis1SFDP2qarBJGXXMfQB17jdiGhs2dcRfq2qVq0lQb5YIQ7OcJ4XFeqvq5wTFBeThfTzK7UWtb1MlfbbSMGHPheM0t7DxBFcxj_Gb_4tm28mL2IZE3L5JYipMxLv5XrWhK7t6mvHhulOkwATzk78Clw",
  secondary2:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAcv_wQz4HGYdQq81brQQp3P9Tgq7YnFSkmQkB3Yum8iyMzSW6A5M7AvcCecVt6usdNdCh44pn5aWsihrFHRR_QnC5vPuUY5ABq3_raAOwSaiLPIjFyhHlUoBYKgCMEsd8Q7bohmfZOQdXpJ1f0IjHPA44RvkZvp4RQDJsTBHsKNbo8o-LCTuMcAg-6Ai8hyTc3xesTiJpsDwDbgg6umOZn1E7OOyvOJS_n8Dv7VTahL2s8wu2N3fpWsnFVJPx9Cq96XykrowX2_hc",
};

export default function SpaGallery() {
  const locale = useLocale();
  const content = locale === "ko" ? galleryData.ko : galleryData.en;

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden relative">
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
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-xl">
            <span className="text-waxly-brownLight text-sm tracking-widest uppercase mb-4 block">
              {content.sectionLabel}
            </span>
            <h3
              className="text-3xl lg:text-4xl text-waxly-brown mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              {content.title}
            </h3>
            <p className="text-waxly-brownLight font-light">
              {content.description}
            </p>
          </div>
          <button className="inline-flex items-center gap-2 text-waxly-brown font-light text-sm tracking-wider hover:gap-3 transition-all">
            {content.exploreButton}
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 h-auto md:h-[500px]">
          {/* Main Large Image */}
          <motion.div
            className="lg:col-span-8 md:col-span-2 relative group overflow-hidden h-[300px] md:h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={images.main}
              alt={content.rooms[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
              <h4
                className="text-white text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {content.rooms[0].title}
              </h4>
              <p className="text-white/80 text-sm font-light">
                {content.rooms[0].description}
              </p>
            </div>
          </motion.div>

          {/* Side Column Images */}
          <div className="lg:col-span-4 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
            <motion.div
              className="relative group overflow-hidden h-[240px] lg:h-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Image
                src={images.secondary1}
                alt={locale === "ko" ? "대기실" : "Waiting area"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
            <motion.div
              className="relative group overflow-hidden h-[240px] lg:h-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src={images.secondary2}
                alt={locale === "ko" ? "제품 선반" : "Product shelf"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
