"use client";

import { useTranslations, useLocale } from "next-intl";
import { location, contact, businessHours, parking } from "@/lib/data";

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

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {infoItems.map((item) => (
            <div
              key={item.icon}
              className="card p-6 flex items-start gap-4"
            >
              <div className="icon-circle shrink-0">
                <span className="material-symbols-outlined text-primary">
                  {item.icon}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-text-main dark:text-white mb-2">
                  {item.title}
                </h3>
                {item.isLink ? (
                  <a
                    href={item.href}
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-text-muted dark:text-gray-400">
                    {item.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Apps */}
        <div className="text-center">
          <h3 className="font-bold text-text-main dark:text-white mb-4">
            {t("navigation")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`nmap://place?lat=${location.coordinate.latitude}&lng=${location.coordinate.longitude}&name=${encodeURIComponent(isKo ? "광주왁싱 슈가링 릴리브" : "Gwangju Sugaring Relieve")}`}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">navigation</span>
              네이버맵
            </a>
            <a
              href={`kakaomap://look?p=${location.coordinate.latitude},${location.coordinate.longitude}`}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">navigation</span>
              카카오맵
            </a>
            <a
              href={`tmap://route?goalx=${location.coordinate.longitude}&goaly=${location.coordinate.latitude}&goalname=${encodeURIComponent(isKo ? "광주왁싱 슈가링 릴리브" : "Gwangju Sugaring Relieve")}`}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">navigation</span>
              T맵
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
