"use client";

import { useLocale } from "next-intl";
import Image from "next/image";

const heroData = {
  ko: {
    badge: "프라이빗 예약",
    title: "예약 및 이용 안내",
    description:
      "편안함을 위한 프라이빗 공간입니다. 임산부 고객님의 특별한 필요를 이해하고, 원활하고 편안한 예약 경험을 제공해드립니다.",
    features: [
      { icon: "lock", text: "100% 프라이빗" },
      { icon: "schedule", text: "유연한 예약" },
      { icon: "support_agent", text: "1:1 상담" },
    ],
  },
  en: {
    badge: "Private Booking",
    title: "Reservation & Care Guide",
    description:
      "A private sanctuary dedicated to your comfort. We understand the unique needs of expectant mothers and have designed a seamless, supportive booking experience just for you.",
    features: [
      { icon: "lock", text: "100% Private" },
      { icon: "schedule", text: "Flexible Booking" },
      { icon: "support_agent", text: "1:1 Consultation" },
    ],
  },
};

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBPsZ-zqOLcSXYYoijZs9KkgkJjKvGB-UHibBUiuKPoUsE6kuHbQyeWgkLEv5uawSsL59SdEfFlESwXPKBkPmRediJkiGdmfOJ4B_cKGbjGP50Un6JRwie1fIs7CDLifYDW70rGSKwloA1tpImFJ2TfQih-8-UWy3bIewzomhsyEBlZjsx2rEPzzBNqYw-UCY-CzmimJJ0V3Cl6WbqZgS4eBNNxpl-Lq38PBfq1Gd2D29L0vSRCBFGM-3JeTs95jCfYSSo-ga6UdNc";

export default function ReservationHero() {
  const locale = useLocale();
  const content = locale === "ko" ? heroData.ko : heroData.en;

  return (
    <section className="relative min-h-[400px] md:min-h-[480px] flex items-center overflow-hidden">
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
        {/* Waxly Overlay */}
        <div className="absolute inset-0 bg-waxly-brown/70" />
      </div>

      {/* Waxly Content - Left Aligned */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="max-w-xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 text-sm font-medium mb-6">
            <span
              className="material-symbols-outlined text-waxly-gold text-base"
              style={{ fontVariationSettings: "'wght' 200" }}
            >
              calendar_month
            </span>
            {content.badge}
          </span>

          {/* Title */}
          <h1
            className="text-white text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {content.title}
          </h1>

          {/* Description */}
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
            {content.description}
          </p>

          {/* Waxly Feature Pills */}
          <div className="flex flex-wrap gap-3">
            {content.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20"
              >
                <span
                  className="material-symbols-outlined text-waxly-gold text-lg"
                  style={{ fontVariationSettings: "'wght' 200" }}
                >
                  {feature.icon}
                </span>
                <span className="text-white text-sm font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-waxly-cream to-transparent" />
    </section>
  );
}
