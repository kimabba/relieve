"use client";

import { useLocale } from "next-intl";
import { reviews } from "@/lib/data";

export default function ReviewHighlights() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-20 lg:py-28 bg-secondary-bg dark:bg-[#32322a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-bold uppercase tracking-wider mb-3">
            {isKo ? "고객 후기" : "Client Reviews"}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
            {isKo ? "신뢰할 수 있는 후기" : "Trusted by Our Clients"}
          </h2>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {isKo
              ? "실제 고객님들의 소중한 후기를 확인해 보세요"
              : "See what our valued clients have to say about us"}
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-16">
          <div className="text-center px-10 py-6 bg-white dark:bg-background-dark rounded-2xl shadow-lg">
            <span className="block text-5xl font-bold text-primary mb-2">
              {reviews.total.toLocaleString()}
            </span>
            <span className="text-text-muted dark:text-gray-400 font-medium">
              {isKo ? "총 리뷰" : "Total Reviews"}
            </span>
          </div>
          <div className="text-center px-10 py-6 bg-white dark:bg-background-dark rounded-2xl shadow-lg">
            <span className="block text-5xl font-bold text-primary mb-2">
              {reviews.participantCount.toLocaleString()}
            </span>
            <span className="text-text-muted dark:text-gray-400 font-medium">
              {isKo ? "리뷰 참여" : "Participants"}
            </span>
          </div>
        </div>

        {/* Review Keywords */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {reviews.highlights.map((highlight) => (
            <div
              key={highlight.keyword}
              className="group flex flex-col items-center p-6 bg-white dark:bg-background-dark rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl text-primary">
                  {highlight.icon}
                </span>
              </div>
              <span className="font-bold text-text-main dark:text-white text-center mb-2">
                {isKo ? highlight.keyword : highlight.keywordEn}
              </span>
              <span className="text-2xl font-bold text-primary">
                {highlight.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
