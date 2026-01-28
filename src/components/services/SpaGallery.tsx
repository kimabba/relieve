"use client";

import { useLocale } from "next-intl";
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
    <section className="py-20 lg:py-28 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-accent-gold font-bold tracking-widest uppercase text-xs mb-3 block">
              {content.sectionLabel}
            </span>
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
              {content.title}
            </h3>
            <p className="text-text-muted dark:text-gray-400">
              {content.description}
            </p>
          </div>
          <button className="flex items-center gap-2 text-accent-gold font-bold text-sm hover:text-accent-gold/80 transition-colors">
            {content.exploreButton}
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 h-auto md:h-[500px]">
          {/* Main Large Image */}
          <div className="lg:col-span-8 md:col-span-2 relative group overflow-hidden rounded-2xl h-[300px] md:h-full">
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
              <h4 className="text-white font-display font-bold text-xl">
                {content.rooms[0].title}
              </h4>
              <p className="text-white/80 text-sm">
                {content.rooms[0].description}
              </p>
            </div>
          </div>

          {/* Side Column Images */}
          <div className="lg:col-span-4 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
            <div className="relative group overflow-hidden rounded-2xl h-[240px] lg:h-full">
              <Image
                src={images.secondary1}
                alt={locale === "ko" ? "대기실" : "Waiting area"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl h-[240px] lg:h-full">
              <Image
                src={images.secondary2}
                alt={locale === "ko" ? "제품 선반" : "Product shelf"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
