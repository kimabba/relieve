"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { menuItems } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

// Premium service images
const serviceImages = [
  "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop&q=80",
];

// Additional menu visuals
const menuVisuals = [
  { icon: "face", label: "페이셜", labelEn: "Facial" },
  { icon: "accessibility_new", label: "바디", labelEn: "Body" },
  { icon: "pregnant_woman", label: "임산부", labelEn: "Maternity" },
  { icon: "spa", label: "브라질리언", labelEn: "Brazilian" },
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
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Clean White Background - Visual Rest Area */}
      <div className="absolute inset-0 bg-white" />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-[#B8989B]/10 text-[#9A7B7E] text-sm font-bold mb-6">
            <span className="material-symbols-outlined text-base">content_cut</span>
            {isKo ? "케어 메뉴" : "Care Menu"}
          </span>
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {isKo ? "당신을 위한 특별한 케어" : "Special Care for You"}
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl">
            {isKo
              ? "첫 방문 고객님께 드리는 특별 혜택으로 프리미엄 케어를 경험하세요"
              : "Experience premium care with special benefits for first-time visitors"}
          </p>
        </motion.div>

        {/* Service Category Icons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {menuVisuals.map((item, index) => (
            <motion.div
              key={item.icon}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-[#B8989B]/20 to-[#7D6B7D]/20 flex items-center justify-center hover:from-[#B8989B]/30 hover:to-[#7D6B7D]/30 transition-colors cursor-pointer group">
                <span className="material-symbols-outlined text-2xl lg:text-3xl text-[#7D6B7D] group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-600">
                {isKo ? item.label : item.labelEn}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Services - Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {/* Main Featured Card - Large */}
          {featuredServices[0] && (
            <motion.div
              className="lg:col-span-7 group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                  <Image
                    src={serviceImages[0]}
                    alt={isKo ? featuredServices[0].name : featuredServices[0].nameEn}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/80 md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#C9A962] to-[#A68B4B] text-white text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full flex items-center gap-1.5 shadow-lg">
                    <span className="material-symbols-outlined text-sm">star</span>
                    {isKo ? "BEST" : "BEST"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-[#7D6B7D] text-sm font-bold uppercase tracking-wider mb-2">
                    {isKo ? "첫 방문 특가" : "First Visit Special"}
                  </span>
                  <h3
                    className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {isKo ? featuredServices[0].name : featuredServices[0].nameEn}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {isKo ? featuredServices[0].description : featuredServices[0].descriptionEn}
                  </p>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-sm text-gray-400 line-through">
                        ₩{formatPrice(featuredServices[0].price * 1.3)}
                      </span>
                      <span className="block text-3xl font-bold bg-gradient-to-r from-[#B8989B] to-[#7D6B7D] bg-clip-text text-transparent">
                        ₩{formatPrice(featuredServices[0].price)}
                      </span>
                    </div>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B8989B] to-[#7D6B7D] text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      {isKo ? "자세히" : "Details"}
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Side Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {featuredServices.slice(1, 3).map((service, index) => (
              <motion.div
                key={service.name}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <div className="flex">
                  {/* Image */}
                  <div className="relative w-1/3 min-h-[160px] overflow-hidden">
                    <Image
                      src={serviceImages[(index + 1) % serviceImages.length]}
                      alt={isKo ? service.name : service.nameEn}
                      fill
                      sizes="200px"
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-[#C9A962]/20 text-[#B8860B] text-xs font-bold rounded-full">
                        {isKo ? "첫 방문" : "1st Visit"}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {isKo ? service.name : service.nameEn}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-1 mb-3">
                      {isKo ? service.description : service.descriptionEn}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-[#7D6B7D]">
                        ₩{formatPrice(service.price)}
                      </span>
                      <span className="material-symbols-outlined text-gray-300 group-hover:text-[#7D6B7D] group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Services Row */}
        {featuredServices.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {featuredServices.slice(3, 6).map((service, index) => (
              <motion.div
                key={service.name}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B8989B]/20 to-[#7D6B7D]/20 flex items-center justify-center flex-shrink-0 group-hover:from-[#B8989B]/30 group-hover:to-[#7D6B7D]/30 transition-colors">
                    <span className="material-symbols-outlined text-2xl text-[#7D6B7D]">spa</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {isKo ? service.name : service.nameEn}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                      {isKo ? service.description : service.descriptionEn}
                    </p>
                    <span className="text-xl font-bold bg-gradient-to-r from-[#B8989B] to-[#7D6B7D] bg-clip-text text-transparent">
                      ₩{formatPrice(service.price)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 h-16 px-12 bg-gradient-to-r from-[#7D6B7D] to-[#9D8D9D] text-white text-lg font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {isKo ? "전체 메뉴 보기" : "View All Services"}
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </Link>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: "verified", label: isKo ? "정품 제품만 사용" : "Authentic Products" },
              { icon: "schedule", label: isKo ? "예약 우선" : "Reservation Priority" },
              { icon: "payments", label: isKo ? "합리적인 가격" : "Fair Pricing" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-500">
                <span className="material-symbols-outlined text-[#7D6B7D] text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
