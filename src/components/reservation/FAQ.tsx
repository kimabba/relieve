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
    questionKo: "슈가링은 임신 중에도 안전한가요?",
    questionEn: "Is sugaring safe during pregnancy?",
    answerKo:
      "네, 100% 안전합니다. 슈가링은 설탕, 레몬, 물로만 만들어진 천연 성분이며 화학 물질이 없습니다. 체온과 비슷한 저온에서 시술하므로 화상 위험이 없어 임산부에게 가장 안전한 제모 방법으로 알려져 있습니다.",
    answerEn:
      "Absolutely. Sugaring is 100% natural, made from sugar, lemon, and water. It is chemical-free and applied at body temperature, so there is no risk of burning. It is widely considered the safest hair removal method for expectant mothers.",
  },
  {
    questionKo: "임신 중에는 더 아픈가요?",
    questionEn: "Does it hurt more when pregnant?",
    answerKo:
      "임신 중에는 혈류량 증가와 호르몬 변화로 피부가 더 민감해질 수 있습니다. 하지만 저희 슈가링 기법은 특별히 부드럽게 설계되었으며, 편안하게 쉬어가며 시술받으실 수 있습니다.",
    answerEn:
      "Due to increased blood flow and hormonal changes, skin can be more sensitive during pregnancy. However, our sugaring technique is specifically gentle. We also take extra time to ensure you are comfortable and can take breaks whenever needed.",
  },
  {
    questionKo: "출산 전 언제 예약하는 것이 좋을까요?",
    questionEn: "When is the best time to book before my due date?",
    answerKo:
      "많은 임산부분들이 34-36주 즈음에 방문하십니다. 편안하게 시술받으시려면 출산 예정일 최소 2주 전에 예약하시길 권장합니다. 예기치 않은 출산에 대비하여 유연한 취소 정책도 운영하고 있습니다!",
    answerEn:
      "Many mothers choose to come in around week 34-36. We recommend booking your final appointment at least 2 weeks before your due date to ensure you are comfortable. We also offer a flexible cancellation policy for unpredictable arrivals!",
  },
  {
    questionKo: "동반인도 함께 올 수 있나요?",
    questionEn: "Can I bring my partner?",
    answerKo:
      "시술실은 고객님만을 위한 프라이빗 공간이지만, 동반하신 분은 허브티와 함께 편안한 대기 라운지에서 쉬실 수 있습니다.",
    answerEn:
      "While our treatment rooms are private sanctuaries designed for the mother, we have a comfortable waiting lounge where partners are welcome to relax with herbal tea.",
  },
  {
    questionKo: "예약 없이 방문할 수 있나요?",
    questionEn: "Can I visit without a reservation?",
    answerKo:
      "원활한 서비스를 위해 사전 예약을 권장드립니다. 네이버 예약 또는 전화로 예약해주세요.",
    answerEn:
      "We recommend making a reservation for better service. Please book via Naver or call us.",
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
