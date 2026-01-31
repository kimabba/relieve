"use client";

import { useLocale } from "next-intl";
import { placeInfo } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CTASection() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1920&h=800&fit=crop&q=80"
          alt="Spa background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="section-container relative">
        {/* Content Card */}
        <motion.div
          className="max-w-2xl mx-auto bg-waxly-cream/95 backdrop-blur-sm p-10 lg:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl text-waxly-brown mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {isKo ? "원치 않는 털을 부드럽게" : "Waxing Away Unwanted Hair"}
          </h2>

          {/* Description */}
          <p className="text-waxly-brownLight font-light leading-relaxed mb-10">
            {isKo
              ? "100% 천연 슈가링으로 부드럽고 건강한 피부를 경험하세요. 전문가의 섬세한 케어로 편안한 시술을 약속드립니다."
              : "Experience smooth, healthy skin with 100% natural sugaring. We promise comfortable treatment with expert care."}
          </p>

          {/* CTA Button */}
          <a
            href={placeInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-waxly-brown text-white font-light tracking-wider hover:bg-waxly-brownDark transition-all duration-300"
          >
            {isKo ? "지금 예약하기" : "Book Now"}
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
