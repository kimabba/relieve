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
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5BA8A8] via-[#6BB5B5] to-[#7CC2C2]" />
        <div className="absolute top-20 right-[10%] w-32 h-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-20 left-[15%] w-24 h-24 rounded-full bg-[#9B8AC4]/20 blur-xl" />

        <div className="relative min-h-[50vh] flex items-center pt-32 pb-16">
          <div className="section-container text-center">
            <motion.span
              className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="material-symbols-outlined text-base">location_on</span>
              {isKo ? "오시는 길" : "Location"}
            </motion.span>
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 drop-shadow-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {t("title")}
            </motion.h1>
            <motion.p
              className="text-white/90 text-lg lg:text-xl max-w-2xl mx-auto"
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
      <section className="py-20 lg:py-28 bg-[#FFFAF4]">
        <div className="section-container">
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {infoItems.map((item, index) => (
              <motion.div
                key={item.icon}
                className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#9B8AC4]/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl text-[#9B8AC4]">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="text-[#9B8AC4] hover:text-[#8577B0] transition-colors font-medium"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 leading-relaxed">
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
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#9B8AC4]/10 text-[#9B8AC4] text-sm font-bold mb-6">
              <span className="material-symbols-outlined text-base">navigation</span>
              {t("navigation")}
            </span>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`nmap://place?lat=${location.coordinate.latitude}&lng=${location.coordinate.longitude}&name=${encodeURIComponent(isKo ? "광주왁싱 슈가링 릴리브" : "Gwangju Sugaring Relieve")}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full font-bold text-gray-700 shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <span className="material-symbols-outlined text-lg text-green-500">navigation</span>
                네이버맵
              </a>
              <a
                href={`kakaomap://look?p=${location.coordinate.latitude},${location.coordinate.longitude}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full font-bold text-gray-700 shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <span className="material-symbols-outlined text-lg text-yellow-500">navigation</span>
                카카오맵
              </a>
              <a
                href={`tmap://route?goalx=${location.coordinate.longitude}&goaly=${location.coordinate.latitude}&goalname=${encodeURIComponent(isKo ? "광주왁싱 슈가링 릴리브" : "Gwangju Sugaring Relieve")}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full font-bold text-gray-700 shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <span className="material-symbols-outlined text-lg text-red-500">navigation</span>
                T맵
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
