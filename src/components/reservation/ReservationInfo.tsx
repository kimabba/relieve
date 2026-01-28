"use client";

import { useTranslations, useLocale } from "next-intl";
import { placeInfo, contact, paymentMethods, events } from "@/lib/data";

export default function ReservationInfo() {
  const t = useTranslations("reservation");
  const locale = useLocale();
  const isKo = locale === "ko";

  const activeEvent = events.find((e) => e.active);

  return (
    <section className="section-padding bg-background-light dark:bg-background-dark">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Event Banner */}
        {activeEvent && (
          <div className="mb-12 p-6 bg-primary/10 dark:bg-primary/20 rounded-xl border border-primary/30 text-center">
            <span className="material-symbols-outlined text-3xl text-primary mb-2">
              campaign
            </span>
            <h3 className="font-bold text-lg text-text-main dark:text-white mb-2">
              {isKo ? activeEvent.title : activeEvent.titleEn}
            </h3>
            <p className="text-sm text-text-muted dark:text-gray-400">
              {activeEvent.period}
            </p>
          </div>
        )}

        {/* Booking Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Naver Booking */}
          <div className="card p-8 text-center">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">
              calendar_month
            </span>
            <h3 className="font-display text-2xl font-bold text-text-main dark:text-white mb-4">
              {t("naverBooking")}
            </h3>
            <p className="text-text-muted dark:text-gray-400 mb-6">
              {isKo
                ? "24시간 언제든 편리하게 예약하세요"
                : "Book anytime, 24/7 convenience"}
            </p>
            <a
              href={placeInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 w-full justify-center"
            >
              <span className="material-symbols-outlined">open_in_new</span>
              {t("naverBooking")}
            </a>
          </div>

          {/* Phone Booking */}
          <div className="card p-8 text-center">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">
              call
            </span>
            <h3 className="font-display text-2xl font-bold text-text-main dark:text-white mb-4">
              {t("phoneBooking")}
            </h3>
            <p className="text-text-muted dark:text-gray-400 mb-6">
              {isKo
                ? "전화로 직접 상담 후 예약하세요"
                : "Call for consultation and booking"}
            </p>
            <a
              href={`tel:${contact.phone}`}
              className="btn-secondary inline-flex items-center gap-2 w-full justify-center"
            >
              <span className="material-symbols-outlined">call</span>
              {contact.phone}
            </a>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-6 text-center flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-primary">
              payments
            </span>
            {t("payment")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="px-4 py-2 bg-secondary-bg dark:bg-[#32322a] rounded-full text-sm font-medium text-text-main dark:text-white"
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
