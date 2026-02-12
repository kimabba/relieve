"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { placeInfo } from "@/lib/data";
import Image from "next/image";

const services = [
  {
    icon: "face_3",
    titleKo: "여성 슈가링",
    titleEn: "Women's Sugaring",
    descKo: "브라질리언, 바디 왁싱, 페이셜 등 전신 슈가링 케어를 제공합니다. 광주 여자 왁싱 전문.",
    descEn: "Brazilian, body waxing, facial - full body sugaring care for women.",
  },
  {
    icon: "face_6",
    titleKo: "남성 슈가링",
    titleEn: "Men's Sugaring",
    descKo: "남성 전용 브라질리언 및 바디 슈가링 전문 케어. 광주 남자 왁싱 1등.",
    descEn: "Specialized Brazilian and body sugaring care for men.",
  },
  {
    icon: "pregnant_woman",
    titleKo: "임산부 케어",
    titleEn: "Maternity Care",
    descKo: "임산부를 위한 안전하고 편안한 전문 슈가링 케어. 천연 성분으로 피부 자극 최소화.",
    descEn: "Safe and comfortable sugaring care for expectant mothers.",
  },
  {
    icon: "visibility",
    titleKo: "속눈썹 펌",
    titleEn: "Lash Perm",
    descKo: "노글루 보톡스펌, 블랙틴트펌으로 자연스러운 눈매를 연출합니다. 광주 속눈썹 펌 전문.",
    descEn: "No-glue botox perm for naturally beautiful lashes.",
  },
];

export default function ServiceHighlights() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative Curved Line */}
      <svg
        className="absolute top-20 left-0 w-[300px] h-[200px] opacity-20 pointer-events-none"
        viewBox="0 0 300 200"
        fill="none"
      >
        <path
          d="M0 100C50 50 100 0 150 50C200 100 250 150 300 100"
          stroke="#6A483C"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-4xl lg:text-5xl text-waxly-brown mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {isKo ? "슈가링 & 왁싱 시술" : "Sugaring & Waxing"}
          </h2>
          <p className="text-waxly-brownLight font-light leading-relaxed">
            {isKo
              ? "100% 천연 슈가링으로 피부 건강과 아름다움을 동시에 케어합니다. 전문가의 섬세한 손길로 편안한 시술을 경험하세요."
              : "We care for your skin health and beauty with 100% natural sugaring. Experience comfortable treatment with expert care."}
          </p>
        </motion.div>

        {/* Services Grid + Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Services Grid - Left */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.titleKo}
                className="group border border-waxly-border p-6 lg:p-8 hover:border-waxly-brown transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-5 text-waxly-brown">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'wght' 200" }}>
                    {service.icon}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl text-waxly-brown mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {isKo ? service.titleKo : service.titleEn}
                </h3>

                {/* Description */}
                <p className="text-waxly-brownLight font-light text-sm mb-5 leading-relaxed">
                  {isKo ? service.descKo : service.descEn}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-waxly-brownLight text-sm font-light tracking-wider group-hover:text-waxly-brown transition-all"
                  >
                    {isKo ? "자세히 보기" : "Learn More"}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                  <a
                    href={placeInfo.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-light tracking-wider text-waxly-brown border-b border-waxly-brown/30 hover:border-waxly-brown transition-all"
                  >
                    {isKo ? "예약" : "Book"}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Large Image - Right */}
          <motion.div
            className="lg:col-span-5 relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[3/4] rounded-bl-[80px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=500&h=700&fit=crop&q=80"
                alt={isKo ? "광주 슈가링 왁싱 시술" : "Sugaring treatment"}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-10 py-5 bg-waxly-brown text-white font-light tracking-wider hover:bg-waxly-brownDark transition-all duration-300"
          >
            {isKo ? "전체 서비스 보기" : "View All Services"}
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
