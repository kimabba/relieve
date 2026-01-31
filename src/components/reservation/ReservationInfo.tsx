"use client";

import { useTranslations, useLocale } from "next-intl";
import { placeInfo, contact, paymentMethods, events } from "@/lib/data";

export default function ReservationInfo() {
  const t = useTranslations("reservation");
  const locale = useLocale();
  const isKo = locale === "ko";

  const activeEvent = events.find((e) => e.active);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1
            className="text-4xl lg:text-5xl text-waxly-brown mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {t("title")}
          </h1>
          <p className="text-waxly-brownLight text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Event Banner */}
        {activeEvent && (
          <div className="mb-12 p-6 bg-waxly-cream border border-waxly-brown/20 text-center">
            <span
              className="material-symbols-outlined text-3xl text-waxly-gold mb-2"
              style={{ fontVariationSettings: "'wght' 200" }}
            >
              campaign
            </span>
            <h3
              className="text-lg text-waxly-brown mb-2"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              {isKo ? activeEvent.title : activeEvent.titleEn}
            </h3>
            <p className="text-sm text-waxly-brownLight">
              {activeEvent.period}
            </p>
          </div>
        )}

        {/* Booking Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Naver Booking */}
          <div className="p-8 text-center bg-waxly-cream border border-waxly-brown/10">
            <span
              className="material-symbols-outlined text-5xl text-waxly-brown mb-4"
              style={{ fontVariationSettings: "'wght' 200" }}
            >
              calendar_month
            </span>
            <h3
              className="text-2xl text-waxly-brown mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              {t("naverBooking")}
            </h3>
            <p className="text-waxly-brownLight mb-6">
              {isKo
                ? "24시간 언제든 편리하게 예약하세요"
                : "Book anytime, 24/7 convenience"}
            </p>
            <a
              href={placeInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-waxly-brown text-white hover:bg-waxly-brownLight transition-colors"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'wght' 200" }}
              >
                open_in_new
              </span>
              {t("naverBooking")}
            </a>
          </div>

          {/* Phone Booking */}
          <div className="p-8 text-center bg-waxly-cream border border-waxly-brown/10">
            <span
              className="material-symbols-outlined text-5xl text-waxly-brown mb-4"
              style={{ fontVariationSettings: "'wght' 200" }}
            >
              call
            </span>
            <h3
              className="text-2xl text-waxly-brown mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              {t("phoneBooking")}
            </h3>
            <p className="text-waxly-brownLight mb-6">
              {isKo
                ? "전화로 직접 상담 후 예약하세요"
                : "Call for consultation and booking"}
            </p>
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 border border-waxly-brown text-waxly-brown hover:bg-waxly-brown hover:text-white transition-colors"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'wght' 200" }}
              >
                call
              </span>
              {contact.phone}
            </a>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="max-w-2xl mx-auto">
          <h3
            className="text-xl text-waxly-brown mb-6 text-center flex items-center justify-center gap-2"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            <span
              className="material-symbols-outlined text-waxly-gold"
              style={{ fontVariationSettings: "'wght' 200" }}
            >
              payments
            </span>
            {t("payment")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="px-4 py-2 bg-waxly-cream border border-waxly-brown/10 text-sm font-medium text-waxly-brown"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
