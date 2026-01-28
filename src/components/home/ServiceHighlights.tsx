"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { menuItems } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

// Service images
const serviceImages = [
  "https://ldb-phinf.pstatic.net/20240912_148/1726129302827Yc1Ak_JPEG/%BB%E7%BA%BB_-KakaoTalk_20240624_150315412.jpg",
  "https://ldb-phinf.pstatic.net/20240912_27/1726129304053xGd87_JPEG/%BB%E7%BA%BB_-KakaoTalk_20240624_150315412_02.jpg",
  "https://ldb-phinf.pstatic.net/20240912_102/1726129305320F7tNK_JPEG/%BB%E7%BA%BB_-KakaoTalk_20240624_150315412_03.jpg",
];

export default function ServiceHighlights() {
  const locale = useLocale();
  const isKo = locale === "ko";

  // Featured services - first visit specials
  const featuredServices = menuItems.filter((item) => item.isFirstVisit);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(isKo ? "ko-KR" : "en-US").format(price);
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#9B8AC4]/5 via-[#9B8AC4]/10 to-[#FFB5C5]/5"
          style={{
            clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)",
          }}
        />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#FFB5C5]/10 text-[#E07070] text-sm font-bold mb-6">
            <span className="material-symbols-outlined text-base">content_cut</span>
            {isKo ? "케어 메뉴" : "Care Menu"}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {isKo ? "당신을 위한 특별한 케어" : "Special Care for You"}
          </h2>
          <p className="text-gray-600 text-lg">
            {isKo
              ? "첫 방문 고객님께 드리는 특별 혜택으로 프리미엄 케어를 경험하세요"
              : "Experience premium care with special benefits for first-time visitors"}
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.name}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={serviceImages[index % serviceImages.length]}
                  alt={isKo ? service.name : service.nameEn}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  priority={index === 0}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* First Visit Badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full flex items-center gap-1.5 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  <span className="material-symbols-outlined text-sm">star</span>
                  {isKo ? "첫 방문 특가" : "First Visit"}
                </motion.div>

                {/* Price Tag on Image */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                  <span className="text-[#9B8AC4] font-bold text-xl">
                    ₩{formatPrice(service.price)}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-gray-800 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {isKo ? service.name : service.nameEn}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {isKo ? service.description : service.descriptionEn}
                </p>

                {/* CTA Button */}
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#FFB5C5] to-[#9B8AC4] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  {isKo ? "자세히 보기" : "View Details"}
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#9B8AC4]/30 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 h-14 px-10 bg-white border-2 border-[#9B8AC4] text-[#9B8AC4] hover:bg-[#9B8AC4] hover:text-white text-base font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isKo ? "전체 메뉴 보기" : "View All Services"}
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
