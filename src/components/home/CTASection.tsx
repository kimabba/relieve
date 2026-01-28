"use client";

import { useLocale } from "next-intl";
import { placeInfo, contact } from "@/lib/data";

export default function CTASection() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 dark:to-transparent">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-primary text-sm font-bold uppercase tracking-wider mb-4">
          {isKo ? "지금 예약하세요" : "Book Now"}
        </span>
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-text-main dark:text-white mb-6">
          {isKo
            ? "당신만을 위한 특별한 케어를 경험하세요"
            : "Experience Care Designed Just for You"}
        </h2>
        <p className="text-text-muted dark:text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
          {isKo
            ? "편안한 환경에서 전문가의 손길로 완벽한 슈가링을 만나보세요. 지금 바로 예약하시고 특별한 혜택을 받아가세요."
            : "Experience perfect sugaring with expert hands in a comfortable environment. Book now and receive exclusive benefits."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={placeInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white text-lg font-bold h-14 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            {isKo ? "네이버 예약하기" : "Book on Naver"}
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center justify-center gap-3 bg-white dark:bg-[#32322a] hover:bg-gray-50 dark:hover:bg-[#3a3a32] text-text-main dark:text-white text-lg font-bold h-14 px-10 rounded-lg transition-all duration-300 shadow-md border border-gray-200 dark:border-gray-700"
          >
            <span className="material-symbols-outlined">call</span>
            {isKo ? "전화 문의" : "Call Us"}
          </a>
        </div>
      </div>
    </section>
  );
}
