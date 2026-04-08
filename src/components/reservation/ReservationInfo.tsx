"use client";

import { useLocale } from "next-intl";
import { placeInfo, contact, paymentMethods, events, location } from "@/lib/data";

export default function ReservationInfo() {
  const locale = useLocale();
  const isKo = locale === "ko";
  const activeEvent = events.find((e) => e.active);

  return (
    <section className="py-16 lg:py-20 bg-white border-y border-[#f2f3f3]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 text-center mb-10">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-text-main">
            {isKo ? "지금 예약하기" : "Book Your Appointment"}
          </h2>
          <p className="text-text-muted text-sm">
            {isKo ? "네이버 예약 또는 전화로 편리하게 예약하세요" : "Book via Naver or give us a call"}
          </p>
        </div>

        {/* Event Banner */}
        {activeEvent && (
          <div className="mb-10 p-4 bg-primary/5 border border-primary/20 rounded-lg text-center">
            <span className="material-symbols-outlined text-primary text-2xl mb-1">campaign</span>
            <p className="font-bold text-text-main text-sm">
              {isKo ? activeEvent.title : activeEvent.titleEn}
            </p>
            <p className="text-text-muted text-xs mt-1">{activeEvent.period}</p>
          </div>
        )}

        {/* Booking Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          <div className="p-8 text-center bg-secondary-bg rounded-xl border border-primary/10">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">calendar_month</span>
            <h3 className="font-display text-xl font-bold text-text-main mb-3">
              {isKo ? "네이버 예약" : "Naver Booking"}
            </h3>
            <p className="text-text-muted text-sm mb-6">
              {isKo ? "24시간 언제든 편리하게 예약하세요" : "Book anytime, 24/7 convenience"}
            </p>
            <a
              href={placeInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-primary text-white hover:bg-primary-dark rounded-lg transition-colors font-bold"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              {isKo ? "네이버 예약" : "Book on Naver"}
            </a>
          </div>

          <div className="p-8 text-center bg-secondary-bg rounded-xl border border-primary/10">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">call</span>
            <h3 className="font-display text-xl font-bold text-text-main mb-3">
              {isKo ? "전화 예약" : "Phone Booking"}
            </h3>
            <p className="text-text-muted text-sm mb-6">
              {isKo ? "전화로 직접 상담 후 예약하세요" : "Call for consultation and booking"}
            </p>
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors font-bold"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              {contact.phone}
            </a>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="max-w-xl mx-auto text-center">
          <p className="text-text-muted text-sm mb-4">
            {isKo ? "결제 수단" : "Payment methods"}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="px-4 py-2 bg-secondary-bg border border-primary/15 text-sm text-text-main rounded-lg"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Location Quick Info */}
        <div className="mt-10 pt-10 border-t border-[#f2f3f3] max-w-3xl mx-auto">
          <h3 className="font-display text-lg font-bold text-text-main mb-4 text-center">
            {isKo ? "오시는 길" : "Visit Our Sanctuary"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-text-muted">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
              <span>{isKo ? location.address.road : location.address.roadEn}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">call</span>
              <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
                {contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">directions_car</span>
              <span>{isKo ? "황솔촌 운암점 주차 (1시간 무료)" : "Hwangsolchon parking (1hr free)"}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">schedule</span>
              <span>{isKo ? "매일 10:00 오픈" : "Opens at 10:00 daily"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
