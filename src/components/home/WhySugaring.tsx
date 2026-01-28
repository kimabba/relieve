"use client";

import { useLocale } from "next-intl";

const features = [
  {
    icon: "eco",
    titleKo: "100% 천연 성분",
    titleEn: "100% Natural",
    descKo: "설탕, 레몬, 물 세 가지 천연 성분만으로 만든 순수한 페이스트",
    descEn: "Pure paste made from just sugar, lemon, and water",
  },
  {
    icon: "water_drop",
    titleKo: "수용성",
    titleEn: "Water Soluble",
    descKo: "따뜻한 물로 쉽게 세척, 끈적임 없음",
    descEn: "Easy cleanup with warm water, no sticky residue",
  },
  {
    icon: "favorite",
    titleKo: "저자극성",
    titleEn: "Hypoallergenic",
    descKo: "가장 민감한 피부에도 안전",
    descEn: "Safe for the most sensitive skin types",
  },
];

export default function WhySugaring() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-20 lg:py-28 bg-secondary-bg dark:bg-[#32322a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stitch-style Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">
            {isKo ? "왜 슈가링인가요?" : "Why Sugaring?"}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-6">
            {isKo ? "고대의 지혜, 현대의 케어" : "Ancient Wisdom, Modern Care"}
          </h2>
          <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed">
            {isKo
              ? "일반 왁싱과 달리, 슈가링은 상온 페이스트를 사용하여 살아있는 피부 세포가 아닌 죽은 피부 세포와 털에만 부착됩니다. 이 고대 기법은 통증이 현저히 적고 자극을 최소화하여, 임신 중 민감해진 피부를 가진 분들에게 최고의 선택입니다."
              : "Unlike traditional waxing, sugaring uses a room-temperature paste that adheres only to dead skin cells and hair, never to live skin. This ancient technique is significantly less painful and minimizes irritation, making it the premier choice for the heightened sensitivity during pregnancy."}
          </p>
        </div>

        {/* Stitch-style 3-Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-background-dark rounded-[12px] p-8 shadow-stitch hover:shadow-stitch-md transition-all duration-300 hover:-translate-y-1 text-center"
            >
              {/* Stitch Icon Circle */}
              <div className="icon-circle-lg mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl text-primary">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-3">
                {isKo ? feature.titleKo : feature.titleEn}
              </h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                {isKo ? feature.descKo : feature.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Stitch-style Bottom Visual with Badge */}
        <div className="mt-16 flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="flex-1 relative">
            <div className="relative rounded-[12px] overflow-hidden shadow-stitch-lg aspect-[4/3]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD_vTA09i4Sx9TA8Jdj2mIszEbeT-jyfFAH5TIucCDGBJqGkM-u4xPxSTgrPhBEUGFyB5S6F7rWmMLfT3fEpKC1LcU5ejAlBjerrwYUUpNCM6eiTmzl5NCZeOyCU3fsrPGeS0fvvQrEZVnnyxw0N3DfYbwgBnkKhXbWMpchd3Dyzl9zBfWcztDd2bSEKUQ4QWuw1k3nmZaf_cFeRJsPa_cmMePl9-Z2al-zLyiVPyeWF53W0zYcXYO6JGGMFjAc3pHV4E45bU6Bp8")`,
                }}
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-8 w-28 h-28 bg-white dark:bg-background-dark rounded-full p-3 flex items-center justify-center shadow-stitch-md border-4 border-background-light dark:border-background-dark">
              <div className="text-center">
                <span className="block text-primary font-bold text-2xl">100%</span>
                <span className="block text-text-muted dark:text-gray-400 text-[10px] uppercase tracking-wide font-medium">
                  {isKo ? "천연성분" : "Organic"}
                </span>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="flex-1 space-y-6">
            <h3 className="font-display text-2xl font-bold text-text-main dark:text-white">
              {isKo ? "임산부를 위한 최선의 선택" : "The Best Choice for Expectant Mothers"}
            </h3>

            <div className="space-y-4">
              {[
                { ko: "체온과 비슷한 온도로 화상 위험 없음", en: "Applied at body temperature - no burn risk" },
                { ko: "화학 물질 없이 100% 천연 성분만 사용", en: "100% natural ingredients, no chemicals" },
                { ko: "모발 성장 방향으로 제거하여 통증 최소화", en: "Hair removed in natural growth direction" },
                { ko: "피부 각질 제거 효과로 부드러운 피부", en: "Natural exfoliation for smoother skin" },
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    check_circle
                  </span>
                  <span className="text-text-muted dark:text-gray-300">
                    {isKo ? benefit.ko : benefit.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
