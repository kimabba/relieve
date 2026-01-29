"use client";

import { useLocale } from "next-intl";
import { reviews } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    textKo: "임신 34주에 방문했는데 선생님이 정말 세심하게 케어해주셨어요. 임산부 전용 쿠션 덕분에 너무 편했습니다.",
    textEn: "Visited at 34 weeks pregnant and the care was incredibly attentive. The pregnancy pillows made it so comfortable.",
    nameKo: "김지연",
    nameEn: "Sarah J.",
    weekKo: "34주 임산부",
    weekEn: "34 Weeks Pregnant",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
  },
  {
    textKo: "피부가 예민한데 슈가링 후 트러블이 전혀 없었어요. 천연 성분이라 안심되고 효과도 좋아요.",
    textEn: "My skin is very sensitive but had no trouble after sugaring. Natural ingredients give peace of mind and great results.",
    nameKo: "이수현",
    nameEn: "Emily R.",
    weekKo: "22주 임산부",
    weekEn: "22 Weeks Pregnant",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
  },
  {
    textKo: "왁싱보다 훨씬 부드럽고 아프지 않아요. 분위기도 편안하고 다음에도 꼭 다시 올게요!",
    textEn: "Much gentler and less painful than waxing. The atmosphere is so relaxing. Will definitely come back!",
    nameKo: "박민아",
    nameEn: "Michelle T.",
    weekKo: "산후 케어",
    weekEn: "Post-Partum",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
  },
];

export default function ReviewHighlights() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-24 lg:py-32 bg-[#FFFAF4] overflow-hidden">
      {/* Single Subtle Background Decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#9B8AC4]/6 to-transparent rounded-full blur-3xl" />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-[#FFB5C5]/10 text-[#E07070] text-sm font-bold mb-6">
            <span className="material-symbols-outlined text-base">favorite</span>
            {isKo ? "고객 후기" : "Client Stories"}
          </span>
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {isKo ? "고객님들의 따뜻한 후기" : "Warm Words from Our Clients"}
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl">
            {isKo
              ? "임산부 고객님들의 실제 경험을 확인해 보세요"
              : "Read real experiences from expectant mothers"}
          </p>
        </motion.div>

        {/* Stats Row - Simplified Solid Color */}
        <motion.div
          className="relative bg-[#9B8AC4] rounded-3xl p-8 mb-16 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >

          <div className="relative flex flex-wrap justify-center gap-6 lg:gap-16">
            {[
              { value: reviews.total.toLocaleString(), label: isKo ? "총 리뷰" : "Reviews", icon: "rate_review" },
              { value: reviews.participantCount.toLocaleString(), label: isKo ? "만족 고객" : "Happy Clients", icon: "sentiment_satisfied" },
              { value: "4.9", label: isKo ? "평균 평점" : "Rating", icon: "star" },
              { value: "99%", label: isKo ? "재방문율" : "Return Rate", icon: "refresh" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-white text-2xl">{stat.icon}</span>
                </div>
                <span className="block text-4xl lg:text-5xl font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Top Accent Line - Simplified */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#9B8AC4]" />

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB5C5]/10 to-[#9B8AC4]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#9B8AC4] text-2xl">
                  format_quote
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[#FFD700] text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-gray-700 text-lg leading-relaxed mb-8 min-h-[120px]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &ldquo;{isKo ? testimonial.textKo : testimonial.textEn}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md">
                  <Image
                    src={testimonial.avatar}
                    alt={isKo ? testimonial.nameKo : testimonial.nameEn}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-lg">
                    {isKo ? testimonial.nameKo : testimonial.nameEn}
                  </p>
                  <p className="text-sm text-[#9B8AC4] font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">pregnant_woman</span>
                    {isKo ? testimonial.weekKo : testimonial.weekEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review Keywords */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-center text-xl font-bold text-gray-800 mb-8">
            {isKo ? "고객님들이 자주 언급하는 키워드" : "Frequently Mentioned Keywords"}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {reviews.highlights.map((highlight, index) => (
              <motion.div
                key={highlight.keyword}
                className="group flex flex-col items-center p-5 bg-gradient-to-br from-[#FFFAF4] to-white rounded-2xl hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ y: -3 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#9B8AC4]/10 mb-4 flex items-center justify-center group-hover:bg-[#9B8AC4]/20 transition-colors">
                  <span className="material-symbols-outlined text-2xl text-[#9B8AC4]">
                    {highlight.icon}
                  </span>
                </div>
                <span className="font-bold text-gray-700 text-center mb-1 text-sm">
                  {isKo ? highlight.keyword : highlight.keywordEn}
                </span>
                <span className="text-2xl font-bold text-[#9B8AC4]">
                  {highlight.count}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Naver Review Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://m.place.naver.com/beauty/1306755661/review/visitor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#9B8AC4] hover:text-[#8577B0] font-bold transition-colors"
          >
            <span>{isKo ? "네이버에서 더 많은 리뷰 보기" : "See More Reviews on Naver"}</span>
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
