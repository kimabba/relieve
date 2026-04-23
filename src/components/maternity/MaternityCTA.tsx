"use client";

import { useLocale } from "next-intl";
import { placeInfo, contact } from "@/lib/data";

export default function MaternityCTA() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 z-0" />
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[600px]">
        <h2 className="font-display text-4xl md:text-5xl font-black mb-6 text-text-main">
          {isKo ? "릴리브에서 편안함을 찾으세요" : "Ready for Relief?"}
        </h2>
        <p className="text-lg text-text-muted mb-8">
          {isKo
            ? "모든 임신은 특별합니다. 임산부 전문가와 15분 무료 상담을 예약하여 고객님의 필요를 상담하세요."
            : "Every pregnancy is unique. Schedule a complimentary 15-minute chat with our maternity specialists to discuss your needs."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href={placeInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-primary-dark transition-colors shadow-lg text-center"
          >
            {isKo ? "프라이빗 상담 예약" : "Book Private Consultation"}
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="bg-white border border-[#e3e1de] text-text-main font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors text-center"
          >
            {isKo ? "전화 문의" : "Call Us"}
          </a>
        </div>
      </div>
    </section>
  );
}
