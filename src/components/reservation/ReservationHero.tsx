"use client";

import { useLocale } from "next-intl";
import { placeInfo } from "@/lib/data";

export default function ReservationHero() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section
      className="relative min-h-[360px] md:min-h-[440px] flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(rgba(92,111,104,0.88) 0%, rgba(92,111,104,0.72) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPsZ-zqOLcSXYYoijZs9KkgkJjKvGB-UHibBUiuKPoUsE6kuHbQyeWgkLEv5uawSsL59SdEfFlESwXPKBkPmRediJkiGdmfOJ4B_cKGbjGP50Un6JRwie1fIs7CDLifYDW70rGSKwloA1tpImFJ2TfQih-8-UWy3bIewzomhsyEBlZjsx2rEPzzBNqYw-UCY-CzmimJJ0V3Cl6WbqZgS4eBNNxpl-Lq38PBfq1Gd2D29L0vSRCBFGM-3JeTs95jCfYSSo-ga6UdNc') center/cover no-repeat",
      }}
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="flex flex-col gap-4 text-center items-center max-w-[680px] mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
            {isKo ? "예약 & 케어 가이드" : "Reservation & Care Guide"}
          </h1>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed font-sans max-w-xl">
            {isKo
              ? "임산부 고객님의 특별한 필요를 이해하고, 원활하고 편안한 예약 경험을 제공해드립니다. 편안함을 최우선으로 설계된 프라이빗 공간입니다."
              : "A private sanctuary dedicated to your comfort. Designed with the unique needs of expectant mothers in mind."}
          </p>
          <a
            href={placeInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 bg-white text-accent-green font-bold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors shadow-md"
          >
            <span className="material-symbols-outlined text-base">calendar_month</span>
            {isKo ? "지금 예약하기" : "Book Now"}
          </a>
        </div>
      </div>
    </section>
  );
}
