"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

interface FAQItem {
  questionKo: string;
  questionEn: string;
  answerKo: string;
  answerEn: string;
}

const faqItems: FAQItem[] = [
  {
    questionKo: "예약 없이 방문할 수 있나요?",
    questionEn: "Can I visit without a reservation?",
    answerKo:
      "원활한 서비스를 위해 사전 예약을 권장드립니다. 네이버 예약 또는 전화로 예약해주세요.",
    answerEn:
      "We recommend making a reservation for better service. Please book via Naver or call us.",
  },
  {
    questionKo: "임산부도 시술받을 수 있나요?",
    questionEn: "Is it safe for pregnant women?",
    answerKo:
      "네, 임산부 전용 프로그램이 있습니다. 천연 성분 슈가링으로 안전하게 시술받으실 수 있습니다.",
    answerEn:
      "Yes, we have a special program for expectant mothers. Our all-natural sugaring is safe during pregnancy.",
  },
  {
    questionKo: "첫 방문 할인은 어떻게 적용되나요?",
    questionEn: "How does the first-visit discount work?",
    answerKo:
      "처음 방문하시는 고객님께 특별 할인가를 적용해드립니다. 예약 시 첫 방문임을 말씀해주세요.",
    answerEn:
      "Special discounts are applied for first-time visitors. Please mention it when booking.",
  },
  {
    questionKo: "시술 시간은 얼마나 걸리나요?",
    questionEn: "How long does the treatment take?",
    answerKo:
      "시술 부위에 따라 다르며, 브라질리언 기준 약 30-45분 정도 소요됩니다.",
    answerEn:
      "It depends on the treatment area. Brazilian sugaring typically takes 30-45 minutes.",
  },
  {
    questionKo: "주차는 어디에 하나요?",
    questionEn: "Where can I park?",
    answerKo:
      "황솔촌 운암점 주차장을 이용해주세요. 1시간 주차권을 발급해드립니다.",
    answerEn:
      "Please use the Hwangsolchon Unam Branch parking lot. We provide 1-hour parking tickets.",
  },
];

export default function FAQ() {
  const t = useTranslations("reservation");
  const locale = useLocale();
  const isKo = locale === "ko";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-secondary-bg dark:bg-[#32322a]">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-text-main dark:text-white mb-8 text-center">
            {t("faq")}
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-[#32322a] transition-colors"
                >
                  <span className="font-medium text-text-main dark:text-white pr-4">
                    {isKo ? item.questionKo : item.questionEn}
                  </span>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                      {isKo ? item.answerKo : item.answerEn}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
