"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { placeInfo } from "@/lib/data";

const treatments = [
  {
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=256&fit=crop&q=80",
    titleKo: "임산부 브라질리언",
    titleEn: "Maternity Brazilian",
    descKo: "임산부 전용 쿠션과 편안한 자세로 시술합니다. 릴리브의 대표 시술.",
    descEn: "Our specialty. Performed with extra pillows for support and modified positions for your comfort.",
    priceKo: "80,000원~",
    priceEn: "From ₩80,000",
    tag: "BEST",
  },
  {
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=256&fit=crop&q=80",
    titleKo: "여성 브라질리언",
    titleEn: "Women's Brazilian",
    descKo: "첫 방문 할인 적용. 깔끔하고 부드러운 슈가링으로 오래 지속됩니다.",
    descEn: "First visit discount available. Clean and smooth sugaring that lasts for weeks.",
    priceKo: "50,000원~",
    priceEn: "From ₩50,000",
    tag: "첫방문 할인",
  },
  {
    image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=400&h=256&fit=crop&q=80",
    titleKo: "다리 & 바디",
    titleEn: "Leg & Body Rituals",
    descKo: "전신 슈가링으로 몇 주간 지속되는 매끄러운 피부를 경험하세요.",
    descEn: "Full leg or body sugaring for silky smooth skin that lasts weeks.",
    priceKo: "상담 후 안내",
    priceEn: "Price on consultation",
    tag: null,
  },
];

export default function FeaturedTreatments() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest text-sm uppercase mb-3 block">
            {isKo ? "시술 메뉴" : "Our Menu"}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main mb-4">
            {isKo ? "추천 시술" : "Featured Treatments"}
          </h2>
          <p className="text-text-muted">
            {isKo
              ? "임산부부터 일반 고객까지, 편안함을 최우선으로 설계된 시술"
              : "Designed with your comfort and changing body in mind."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <motion.div
              key={t.titleKo}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={t.image}
                  alt={isKo ? t.titleKo : t.titleEn}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {t.tag && (
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {isKo ? t.tag : t.tag === "BEST" ? "BEST" : "First Visit"}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-text-main mb-2">
                  {isKo ? t.titleKo : t.titleEn}
                </h3>
                <p className="text-text-muted mb-6 leading-relaxed">
                  {isKo ? t.descKo : t.descEn}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-text-main font-medium">
                    {isKo ? t.priceKo : t.priceEn}
                  </span>
                  <a
                    href={placeInfo.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    {isKo ? "예약" : "Book Now"}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center justify-center h-12 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white text-base font-bold rounded-lg transition-colors"
          >
            {isKo ? "전체 시술 메뉴 보기" : "View Full Service Menu"}
          </a>
        </div>
      </div>
    </section>
  );
}
