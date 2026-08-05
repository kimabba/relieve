"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { reviews, certifications } from "@/lib/data";

const stats = [
  {
    icon: "reviews",
    value: `${reviews.total}+`,
    labelKo: "방문자 리뷰",
    labelEn: "Visitor Reviews",
  },
  {
    icon: "group",
    value: `${reviews.participantCount}+`,
    labelKo: "누적 참여 고객",
    labelEn: "Total Clients",
  },
  {
    icon: "workspace_premium",
    value: `${certifications.length}`,
    labelKo: "자격·수상 이력",
    labelEn: "Certifications & Awards",
  },
  {
    icon: "auto_stories",
    value: `${reviews.blogCount}+`,
    labelKo: "블로그 후기",
    labelEn: "Blog Reviews",
  },
];

export default function TrustBar() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative bg-waxly-brown py-10 lg:py-14">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.labelKo}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="material-symbols-outlined text-waxly-gold text-3xl mb-2 block"
                style={{ fontVariationSettings: "'wght' 200" }}
              >
                {stat.icon}
              </span>
              <p
                className="text-white text-3xl lg:text-4xl mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </p>
              <p className="text-white/70 font-light text-xs lg:text-sm tracking-wide">
                {isKo ? stat.labelKo : stat.labelEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
