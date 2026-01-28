"use client";

import { useLocale } from "next-intl";
import Image from "next/image";

const heroData = {
  ko: {
    title: "예약 및 이용 안내",
    description:
      "편안함을 위한 프라이빗 공간입니다. 임산부 고객님의 특별한 필요를 이해하고, 원활하고 편안한 예약 경험을 제공해드립니다.",
  },
  en: {
    title: "Reservation & Care Guide",
    description:
      "A private sanctuary dedicated to your comfort. We understand the unique needs of expectant mothers and have designed a seamless, supportive booking experience just for you.",
  },
};

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBPsZ-zqOLcSXYYoijZs9KkgkJjKvGB-UHibBUiuKPoUsE6kuHbQyeWgkLEv5uawSsL59SdEfFlESwXPKBkPmRediJkiGdmfOJ4B_cKGbjGP50Un6JRwie1fIs7CDLifYDW70rGSKwloA1tpImFJ2TfQih-8-UWy3bIewzomhsyEBlZjsx2rEPzzBNqYw-UCY-CzmimJJ0V3Cl6WbqZgS4eBNNxpl-Lq38PBfq1Gd2D29L0vSRCBFGM-3JeTs95jCfYSSo-ga6UdNc";

export default function ReservationHero() {
  const locale = useLocale();
  const content = locale === "ko" ? heroData.ko : heroData.en;

  return (
    <section className="relative min-h-[320px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Spa setting with chamomile flowers"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Teal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-teal/85 to-accent-teal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-[600px] py-12">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight mb-4">
          {content.title}
        </h1>
        <p className="text-white/90 text-base sm:text-lg leading-relaxed">
          {content.description}
        </p>
      </div>
    </section>
  );
}
