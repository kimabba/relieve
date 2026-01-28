"use client";

import { useLocale } from "next-intl";

export default function WhySugaring() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-20 lg:py-28 bg-secondary-bg dark:bg-[#32322a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="flex-1 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD_vTA09i4Sx9TA8Jdj2mIszEbeT-jyfFAH5TIucCDGBJqGkM-u4xPxSTgrPhBEUGFyB5S6F7rWmMLfT3fEpKC1LcU5ejAlBjerrwYUUpNCM6eiTmzl5NCZeOyCU3fsrPGeS0fvvQrEZVnnyxw0N3DfYbwgBnkKhXbWMpchd3Dyzl9zBfWcztDd2bSEKUQ4QWuw1k3nmZaf_cFeRJsPa_cmMePl9-Z2al-zLyiVPyeWF53W0zYcXYO6JGGMFjAc3pHV4E45bU6Bp8")`,
                }}
              />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-12 w-32 h-32 bg-background-light dark:bg-background-dark rounded-full p-4 flex items-center justify-center shadow-lg hidden md:flex">
              <div className="text-center">
                <span className="block text-primary font-bold text-xl">100%</span>
                <span className="block text-text-muted dark:text-gray-400 text-xs uppercase tracking-wide">
                  {isKo ? "천연성분" : "Organic"}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-6">
              {isKo ? "왜 슈가링인가요?" : "Why Sugaring?"}
            </h2>
            <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed mb-6">
              {isKo
                ? "일반 왁싱과 달리, 슈가링은 설탕, 레몬, 물 세 가지 천연 성분만으로 만든 상온 페이스트를 사용합니다. 죽은 피부 세포와 털에만 부착되어 살아있는 피부에는 절대 자극을 주지 않습니다."
                : "Unlike traditional waxing, sugaring uses a room-temperature paste made from just three natural ingredients: sugar, lemon, and water. It adheres only to dead skin cells and hair, never to live skin."}
            </p>
            <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed mb-8">
              {isKo
                ? "이 고대 기법은 통증이 현저히 적고 자극을 최소화하여, 임신 중 민감해진 피부를 가진 분들에게 최고의 선택입니다."
                : "This ancient technique is significantly less painful and minimizes irritation, making it the premier choice for the heightened sensitivity during pregnancy."}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    water_drop
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    {isKo ? "수용성" : "Water Soluble"}
                  </h4>
                  <p className="text-sm text-text-muted dark:text-gray-400">
                    {isKo
                      ? "따뜻한 물로 쉽게 세척, 끈적임 없음"
                      : "Easy cleanup with warm water, no sticky residue."}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">eco</span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    {isKo ? "저자극성" : "Hypoallergenic"}
                  </h4>
                  <p className="text-sm text-text-muted dark:text-gray-400">
                    {isKo
                      ? "가장 민감한 피부에도 안전"
                      : "Safe for the most sensitive skin types."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
