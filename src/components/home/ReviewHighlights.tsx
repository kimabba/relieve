"use client";

import { useLocale } from "next-intl";
import { reviews } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonial = {
  textKo: "임신 34주에 방문했는데 선생님이 정말 세심하게 케어해주셨어요. 임산부 전용 쿠션 덕분에 너무 편했습니다. 피부가 예민한데 슈가링 후 트러블이 전혀 없었어요. 천연 성분이라 안심되고 효과도 좋아요.",
  textEn: "Visited at 34 weeks pregnant and the care was incredibly attentive. The pregnancy pillows made it so comfortable. My skin is very sensitive but had no trouble after sugaring. Natural ingredients give peace of mind and great results.",
  nameKo: "김지연",
  nameEn: "Judy Morris",
  titleKo: "임산부 고객",
  titleEn: "Maternity Client",
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
};

const galleryImages = [
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=300&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=300&fit=crop&q=80",
];

export default function ReviewHighlights() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative Curved Line */}
      <svg
        className="absolute top-0 right-0 w-[300px] h-[200px] opacity-20 pointer-events-none"
        viewBox="0 0 300 200"
        fill="none"
      >
        <path
          d="M300 0C250 50 200 80 150 100C100 120 50 150 0 200"
          stroke="#6A483C"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image Gallery */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="relative aspect-[3/4] rounded-br-[60px] overflow-hidden">
                <Image
                  src={galleryImages[0]}
                  alt="Client experience"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stacked Images */}
              <div className="space-y-4 pt-12">
                <div className="relative aspect-[3/2] rounded-bl-[40px] overflow-hidden">
                  <Image
                    src={galleryImages[1]}
                    alt="Treatment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[2/3] rounded-tl-[40px] overflow-hidden">
                  <Image
                    src={galleryImages[2]}
                    alt="Relaxation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <h2
              className="text-4xl lg:text-5xl text-waxly-brown mb-10"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              {isKo ? "고객 후기" : "What Clients Say"}
            </h2>

            {/* Quote Icon */}
            <div className="text-waxly-brown/20 mb-6">
              <span
                className="text-7xl leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &ldquo;&ldquo;
              </span>
            </div>

            {/* Testimonial Text */}
            <p className="text-waxly-brownLight font-light text-lg leading-relaxed mb-8">
              {isKo ? testimonial.textKo : testimonial.textEn}
            </p>

            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-waxly-gold text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar}
                  alt={isKo ? testimonial.nameKo : testimonial.nameEn}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p
                  className="text-waxly-brown text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {isKo ? testimonial.nameKo : testimonial.nameEn}
                </p>
                <p className="text-waxly-brownLight font-light text-sm">
                  {isKo ? testimonial.titleKo : testimonial.titleEn}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Review Stats - Bottom */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {reviews.highlights.map((highlight) => (
            <div key={highlight.keyword} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 text-waxly-brown">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'wght' 200" }}>
                  {highlight.icon}
                </span>
              </div>
              <p
                className="text-2xl text-waxly-brown mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {highlight.count}
              </p>
              <p className="text-waxly-brownLight font-light text-xs">
                {isKo ? highlight.keyword : highlight.keywordEn}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Blog Review Count + Naver Review Link */}
        <motion.div
          className="text-center mt-12 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-waxly-brownLight font-light text-sm">
            {isKo
              ? `방문자 리뷰 ${reviews.total}건 · 블로그 리뷰 ${reviews.blogCount}건`
              : `${reviews.total} Visitor Reviews · ${reviews.blogCount} Blog Reviews`}
          </p>
          <a
            href="https://m.place.naver.com/beauty/1306755661/review/visitor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-waxly-brown font-light tracking-wider hover:gap-3 transition-all"
          >
            {isKo ? "네이버에서 더 많은 리뷰 보기" : "See More Reviews on Naver"}
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
