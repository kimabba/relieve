"use client";

import { useLocale } from "next-intl";

const images = {
  main: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG5p7xl6qwYXe-P3zD76oGD-zaS5_sYiURqQuD1lkP7o7Ml9USYfAGjKx9tUTaVLfHsNfoChwf3JOw1Ii7INnKslkOFipzbqbcumyS1AVgtJgSMwr6rBdo3Uzyo2R6eK8vYCXcL0QEHVXEJpEzuYS4RXuCj0hFtsYuUppuzP5WX5LB6Bb8okujo1PvcZ2FYtzMzG2bC0EjgkHCIJTFtRkrq2XExJsSiShessOBRHf6McvbJtesa9NzwqwVIwt3sU58n5QPfyHsZqk",
    captionKo: "치료실 A",
    captionEn: "Treatment Room A",
    descKo: "임산부 지지를 위한 인체공학적 메모리폼 침대.",
    descEn: "Ergonomic memory foam beds for pregnancy support.",
  },
  side1: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQirC7KJOdhyQTZoA8PxSxo7EAcHC1dLJyPtB8bpgi0guPNT4GtwJjrjGXMd0FA8_8J68BMyTysfmAGqk26Z-46TSakn7ZFSveKQq5sDlj2p1-uMnLhMDnis1SFDP2qarBJGXXMfQB17jdiGhs2dcRfq2qVq0lQb5YIQ7OcJ4XFeqvq5wTFBeThfTzK7UWtb1MlfbbSMGHPheM0t7DxBFcxj_Gb_4tm28mL2IZE3L5JYipMxLv5XrWhK7t6mvHhulOkwATzk78Clw",
  },
  side2: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcv_wQz4HGYdQq81brQQp3P9Tgq7YnFSkmQkB3Yum8iyMzSW6A5M7AvcCecVt6usdNdCh44pn5aWsihrFHRR_QnC5vPuUY5ABq3_raAOwSaiLPIjFyhHlUoBYKgCMEsd8Q7bohmfZOQdXpJ1f0IjHPA44RvkZvp4RQDJsTBHsKNbo8o-LCTuMcAg-6Ai8hyTc3xesTiJpsDwDbgg6umOZn1E7OOyvOJS_n8Dv7VTahL2s8wu2N3fpWsnFVJPx9Cq96XykrowX2_hc",
  },
};

export default function PrivateSanctuary() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-16 md:py-24 px-4 bg-background-light">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
              {isKo ? "우리의 공간" : "Our Space"}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-main mb-4">
              {isKo ? "나만을 위한 프라이빗 공간" : "Your Private Sanctuary"}
            </h2>
            <p className="text-text-muted">
              {isKo
                ? "방음 처리와 인체공학적 지지대로 설계된 시술실은 일상에서 벗어난 안식처를 제공합니다."
                : "Designed with acoustic soundproofing and ergonomic support, our treatment rooms offer a retreat from the world."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:h-[500px]">
          {/* Main Large Image */}
          <div className="lg:col-span-8 md:col-span-2 relative group overflow-hidden rounded-2xl h-[300px] md:h-full">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${images.main.src}')` }}
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
              <h3 className="text-white font-display font-bold text-xl">
                {isKo ? images.main.captionKo : images.main.captionEn}
              </h3>
              <p className="text-white/80 text-sm">
                {isKo ? images.main.descKo : images.main.descEn}
              </p>
            </div>
          </div>

          {/* Side Column */}
          <div className="lg:col-span-4 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
            <div className="relative group overflow-hidden rounded-2xl h-[240px] md:h-full">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${images.side1.src}')` }}
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl h-[240px] md:h-full">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${images.side2.src}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
