"use client";

import { useTranslations, useLocale } from "next-intl";
import { location, contact, businessHours, parking } from "@/lib/data";
import { motion } from "framer-motion";

export default function LocationInfo() {
  const t = useTranslations("location");
  const locale = useLocale();
  const isKo = locale === "ko";

  const infoItems = [
    {
      icon: "location_on",
      title: t("address"),
      content: isKo ? location.address.road : location.address.roadEn,
    },
    {
      icon: "schedule",
      title: t("hours"),
      content: isKo ? businessHours.description : businessHours.descriptionEn,
    },
    {
      icon: "call",
      title: t("contact"),
      content: contact.phone,
      isLink: true,
      href: `tel:${contact.phone}`,
    },
    {
      icon: "local_parking",
      title: t("parking"),
      content: isKo ? parking.description : parking.descriptionEn,
    },
  ];

  return (
    <>
      {/* Hero Section - Waxly Style */}
      <section className="relative min-h-[50vh] overflow-hidden bg-waxly-cream">
        {/* Decorative Curved Line */}
        <svg
          className="absolute bottom-0 right-0 w-[500px] h-[300px] opacity-20 pointer-events-none"
          viewBox="0 0 500 300"
          fill="none"
        >
          <path
            d="M500 0C400 80 300 120 200 160C100 200 50 250 0 300"
            stroke="#6A483C"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        <div className="relative min-h-[50vh] flex items-center pt-32 pb-16">
          <div className="section-container text-center">
            <motion.span
              className="inline-block text-waxly-brown/60 text-sm tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {isKo ? "오시는 길" : "Location"}
            </motion.span>
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl text-waxly-brown mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {t("title")}
            </motion.h1>
            <motion.p
              className="text-waxly-brownLight font-light text-lg lg:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t("subtitle")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="section-container">
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {infoItems.map((item, index) => (
              <motion.div
                key={item.icon}
                className="bg-waxly-cream p-6 flex items-start gap-4 border border-waxly-border hover:border-waxly-brown transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 border border-waxly-border">
                  <span className="material-symbols-outlined text-2xl text-waxly-brown" style={{ fontVariationSettings: "'wght' 200" }}>
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-waxly-brown mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="text-waxly-brownLight font-light hover:text-waxly-brown transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-waxly-brownLight font-light leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Apps */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-waxly-brownLight text-sm tracking-widest uppercase mb-6 block">
              {t("navigation")}
            </span>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`nmap://place?lat=${location.coordinate.latitude}&lng=${location.coordinate.longitude}&name=${encodeURIComponent(isKo ? "광주왁싱 슈가링 릴리브" : "Gwangju Sugaring Relieve")}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-waxly-cream text-waxly-brown font-light border border-waxly-border hover:border-waxly-brown transition-all"
              >
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 200" }}>navigation</span>
                네이버맵
              </a>
              <a
                href={`kakaomap://look?p=${location.coordinate.latitude},${location.coordinate.longitude}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-waxly-cream text-waxly-brown font-light border border-waxly-border hover:border-waxly-brown transition-all"
              >
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 200" }}>navigation</span>
                카카오맵
              </a>
              <a
                href={`tmap://route?goalx=${location.coordinate.longitude}&goaly=${location.coordinate.latitude}&goalname=${encodeURIComponent(isKo ? "광주왁싱 슈가링 릴리브" : "Gwangju Sugaring Relieve")}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-waxly-cream text-waxly-brown font-light border border-waxly-border hover:border-waxly-brown transition-all"
              >
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 200" }}>navigation</span>
                T맵
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
