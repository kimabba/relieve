"use client";

import { useLocale } from "next-intl";
import { reviews } from "@/lib/data";

// Sample testimonials with Stitch border-l style
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
    <section className="py-20 lg:py-28 bg-white dark:bg-[#32322a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bloom-style Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-medium tracking-widest text-sm uppercase mb-4">
            <span className="material-symbols-outlined text-lg">favorite</span>
            {isKo ? "고객 후기" : "Client Stories"}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
            {isKo ? "고객님들의 따뜻한 후기" : "Warm Words from Our Clients"}
          </h2>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {isKo
              ? "임산부 고객님들의 실제 경험을 확인해 보세요"
              : "Read real experiences from expectant mothers"}
          </p>
        </div>

        {/* Stats Row - Bloom Style */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-16">
          <div className="text-center px-8 py-6 bg-secondary-bg/50 dark:bg-background-dark rounded-2xl border border-primary/10 min-w-[160px]">
            <span className="block text-4xl lg:text-5xl font-bold text-primary mb-2">
              {reviews.total.toLocaleString()}
            </span>
            <span className="text-text-muted dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
              {isKo ? "총 리뷰" : "Reviews"}
            </span>
          </div>
          <div className="text-center px-8 py-6 bg-secondary-bg/50 dark:bg-background-dark rounded-2xl border border-primary/10 min-w-[160px]">
            <span className="block text-4xl lg:text-5xl font-bold text-accent-green mb-2">
              {reviews.participantCount.toLocaleString()}
            </span>
            <span className="text-text-muted dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
              {isKo ? "만족 고객" : "Happy Clients"}
            </span>
          </div>
          <div className="text-center px-8 py-6 bg-secondary-bg/50 dark:bg-background-dark rounded-2xl border border-primary/10 min-w-[160px]">
            <span className="block text-4xl lg:text-5xl font-bold text-primary mb-2">
              4.9
            </span>
            <span className="text-text-muted dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
              {isKo ? "평균 평점" : "Rating"}
            </span>
          </div>
        </div>

        {/* Bloom-style Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-secondary-bg/50 to-white dark:from-background-dark dark:to-background-dark p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              {/* Stars - Bloom style */}
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-main dark:text-gray-200 text-lg italic leading-relaxed mb-6 font-display">
                &ldquo;{isKo ? testimonial.textKo : testimonial.textEn}&rdquo;
              </p>

              {/* Author - Bloom style */}
              <div className="flex items-center gap-3 pt-4 border-t border-primary/10 dark:border-white/10">
                <div className="size-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-lg">
                    pregnant_woman
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-text-main dark:text-white">
                    {isKo ? testimonial.nameKo : testimonial.nameEn}
                  </p>
                  <p className="text-xs text-accent-green dark:text-accent-green font-medium">
                    {isKo ? testimonial.weekKo : testimonial.weekEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Keywords Grid - Bloom Style */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {reviews.highlights.map((highlight) => (
            <div
              key={highlight.keyword}
              className="group flex flex-col items-center p-6 bg-secondary-bg/30 dark:bg-background-dark rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="size-12 rounded-full bg-primary/10 mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-xl text-primary">
                  {highlight.icon}
                </span>
              </div>
              <span className="font-semibold text-text-main dark:text-white text-center mb-2 text-sm">
                {isKo ? highlight.keyword : highlight.keywordEn}
              </span>
              <span className="text-xl font-bold text-primary">
                {highlight.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
