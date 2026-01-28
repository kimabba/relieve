"use client";

import { useLocale } from "next-intl";
import { reviews } from "@/lib/data";
import { motion } from "framer-motion";

const testimonials = [
  {
    textKo: "임신 34주에 방문했는데 선생님이 정말 세심하게 케어해주셨어요. 임산부 전용 쿠션 덕분에 너무 편했습니다.",
    textEn: "Visited at 34 weeks pregnant and the care was incredibly attentive. The pregnancy pillows made it so comfortable.",
    nameKo: "김지연",
    nameEn: "Sarah J.",
    weekKo: "34주",
    weekEn: "34 Weeks",
  },
  {
    textKo: "피부가 예민한데 슈가링 후 트러블이 전혀 없었어요. 천연 성분이라 안심되고 효과도 좋아요.",
    textEn: "My skin is very sensitive but had no trouble after sugaring. Natural ingredients give peace of mind and great results.",
    nameKo: "이수현",
    nameEn: "Emily R.",
    weekKo: "22주",
    weekEn: "22 Weeks",
  },
  {
    textKo: "왁싱보다 훨씬 부드럽고 아프지 않아요. 분위기도 편안하고 다음에도 꼭 다시 올게요!",
    textEn: "Much gentler and less painful than waxing. The atmosphere is so relaxing. Will definitely come back!",
    nameKo: "박민아",
    nameEn: "Michelle T.",
    weekKo: "산후",
    weekEn: "Post-Partum",
  },
];

export default function ReviewHighlights() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-24 lg:py-32 bg-[#FFFAF4] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#FFB5C5]/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#9B8AC4]/10 to-transparent rounded-full blur-3xl" />

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
            <span className="material-symbols-outlined text-base">favorite</span>
            {isKo ? "고객 후기" : "Client Stories"}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {isKo ? "고객님들의 따뜻한 후기" : "Warm Words from Our Clients"}
          </h2>
          <p className="text-gray-600 text-lg">
            {isKo
              ? "임산부 고객님들의 실제 경험을 확인해 보세요"
              : "Read real experiences from expectant mothers"}
          </p>
        </motion.div>

        {/* Stats Row - Glass Style */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {[
            { value: reviews.total.toLocaleString(), label: isKo ? "총 리뷰" : "Reviews", color: "from-[#FFB5C5] to-[#FFC0CB]" },
            { value: reviews.participantCount.toLocaleString(), label: isKo ? "만족 고객" : "Happy Clients", color: "from-[#9B8AC4] to-[#B8A5E3]" },
            { value: "4.9", label: isKo ? "평균 평점" : "Rating", color: "from-[#5BA8A8] to-[#73C7C7]" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center px-8 py-6 bg-white rounded-2xl shadow-lg min-w-[150px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <span className={`block text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </span>
              <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB5C5]/20 to-[#9B8AC4]/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#9B8AC4] text-2xl">
                  format_quote
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[#FFD700] text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-gray-700 text-lg leading-relaxed mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &ldquo;{isKo ? testimonial.textKo : testimonial.textEn}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB5C5] to-[#9B8AC4] flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-white text-xl">
                    pregnant_woman
                  </span>
                </div>
                <div>
                  <p className="font-bold text-gray-800">
                    {isKo ? testimonial.nameKo : testimonial.nameEn}
                  </p>
                  <p className="text-sm text-[#9B8AC4] font-medium">
                    {isKo ? testimonial.weekKo : testimonial.weekEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review Keywords - Horizontal Scroll on Mobile */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {reviews.highlights.map((highlight, index) => (
              <motion.div
                key={highlight.keyword}
                className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ y: -3 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB5C5]/20 to-[#9B8AC4]/20 mb-4 flex items-center justify-center group-hover:from-[#FFB5C5]/30 group-hover:to-[#9B8AC4]/30 transition-colors">
                  <span className="material-symbols-outlined text-2xl text-[#9B8AC4]">
                    {highlight.icon}
                  </span>
                </div>
                <span className="font-semibold text-gray-700 text-center mb-2 text-sm">
                  {isKo ? highlight.keyword : highlight.keywordEn}
                </span>
                <span className="text-xl font-bold bg-gradient-to-r from-[#FFB5C5] to-[#9B8AC4] bg-clip-text text-transparent">
                  {highlight.count}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
