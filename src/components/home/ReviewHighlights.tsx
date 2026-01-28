"use client";

import { useLocale } from "next-intl";
import { reviews } from "@/lib/data";

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
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        {/* Joy-style Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">
            {isKo ? "고객 후기" : "Client Stories"}
          </span>
          <h2 className="section-title mb-4">
            {isKo ? "고객님들의 따뜻한 후기" : "Warm Words from Our Clients"}
          </h2>
          <p className="text-joy-textLight text-lg">
            {isKo
              ? "임산부 고객님들의 실제 경험을 확인해 보세요"
              : "Read real experiences from expectant mothers"}
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-16">
          <div className="text-center px-8 py-6 bg-joy-bg rounded-2xl min-w-[160px]">
            <span className="block text-4xl lg:text-5xl font-bold text-joy-pink mb-2">
              {reviews.total.toLocaleString()}
            </span>
            <span className="text-joy-textLight text-sm font-medium uppercase tracking-wider">
              {isKo ? "총 리뷰" : "Reviews"}
            </span>
          </div>
          <div className="text-center px-8 py-6 bg-joy-bg rounded-2xl min-w-[160px]">
            <span className="block text-4xl lg:text-5xl font-bold text-joy-teal mb-2">
              {reviews.participantCount.toLocaleString()}
            </span>
            <span className="text-joy-textLight text-sm font-medium uppercase tracking-wider">
              {isKo ? "만족 고객" : "Happy Clients"}
            </span>
          </div>
          <div className="text-center px-8 py-6 bg-joy-bg rounded-2xl min-w-[160px]">
            <span className="block text-4xl lg:text-5xl font-bold text-joy-pink mb-2">
              4.9
            </span>
            <span className="text-joy-textLight text-sm font-medium uppercase tracking-wider">
              {isKo ? "평균 평점" : "Rating"}
            </span>
          </div>
        </div>

        {/* Joy-style Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-joy hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 text-joy-yellow mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-joy-text text-lg italic leading-relaxed mb-6 font-serif">
                &ldquo;{isKo ? testimonial.textKo : testimonial.textEn}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-joy-pink/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-joy-pink text-lg">
                    pregnant_woman
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-joy-dark">
                    {isKo ? testimonial.nameKo : testimonial.nameEn}
                  </p>
                  <p className="text-xs text-joy-teal font-medium">
                    {isKo ? testimonial.weekKo : testimonial.weekEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Keywords Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {reviews.highlights.map((highlight) => (
            <div
              key={highlight.keyword}
              className="group flex flex-col items-center p-6 bg-joy-bg rounded-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-joy-pink/10 mb-4 flex items-center justify-center group-hover:bg-joy-pink/20 transition-colors">
                <span className="material-symbols-outlined text-xl text-joy-pink">
                  {highlight.icon}
                </span>
              </div>
              <span className="font-semibold text-joy-dark text-center mb-2 text-sm">
                {isKo ? highlight.keyword : highlight.keywordEn}
              </span>
              <span className="text-xl font-bold text-joy-pink">
                {highlight.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
