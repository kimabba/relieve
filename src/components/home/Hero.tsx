"use client";

import { useLocale } from "next-intl";
import { placeInfo, contact, mainImages } from "@/lib/data";
import Link from "next/link";

export default function Hero() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${mainImages[0]}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          {/* Badge */}
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/30">
            {isKo ? "임산부 전문 케어" : "Maternity Specialized Care"}
          </span>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            {isKo ? (
              <>
                안전하고 부드러운<br />케어, 당신의 여정을<br />위해
              </>
            ) : (
              <>
                Safe &amp; Gentle Care<br />for Your Journey
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/90 mb-8 font-light leading-relaxed max-w-md">
            {isKo
              ? "유기농 슈가링의 순수함을 경험하세요. 설탕, 레몬, 물로 만든 100% 천연 성분으로 임산부를 위한 부드럽고 안전한 케어."
              : "Experience the purity of organic sugaring. 100% natural ingredients designed for expectant mothers — gentle, effective, and safe."}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={placeInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-base font-bold h-12 px-8 rounded-lg transition-colors shadow-lg"
            >
              {isKo ? "시술 예약" : "Book Appointment"}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/40 text-base font-medium h-12 px-8 rounded-lg transition-colors"
            >
              {isKo ? "릴리브 철학" : "Our Philosophy"}
            </Link>
          </div>

          {/* Contact quick info */}
          <div className="mt-8 flex flex-wrap gap-4 text-white/80 text-sm">
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-base">call</span>
              {contact.phone}
            </a>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">schedule</span>
              {isKo ? "매일 10:00 오픈" : "Opens at 10:00"}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">location_on</span>
              {isKo ? "광주 북구 운암동" : "Buk-gu, Gwangju"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
