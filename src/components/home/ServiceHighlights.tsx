"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { menuItems } from "@/lib/data";
import Image from "next/image";

// Service images
const serviceImages = [
  "https://ldb-phinf.pstatic.net/20240912_148/1726129302827Yc1Ak_JPEG/%BB%E7%BA%BB_-KakaoTalk_20240624_150315412.jpg",
  "https://ldb-phinf.pstatic.net/20240912_27/1726129304053xGd87_JPEG/%BB%E7%BA%BB_-KakaoTalk_20240624_150315412_02.jpg",
  "https://ldb-phinf.pstatic.net/20240912_102/1726129305320F7tNK_JPEG/%BB%E7%BA%BB_-KakaoTalk_20240624_150315412_03.jpg",
];

export default function ServiceHighlights() {
  const locale = useLocale();
  const isKo = locale === "ko";

  // Featured services - first visit specials
  const featuredServices = menuItems.filter((item) => item.isFirstVisit);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(isKo ? "ko-KR" : "en-US").format(price);
  };

  return (
    <section className="py-20 lg:py-28 bg-joy-bg">
      <div className="section-container">
        {/* Joy-style Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">
            {isKo ? "케어 메뉴" : "Care Menu"}
          </span>
          <h2 className="section-title mb-4">
            {isKo ? "당신을 위한 특별한 케어" : "Special Care for You"}
          </h2>
          <p className="text-joy-textLight text-lg">
            {isKo
              ? "첫 방문 고객님께 드리는 특별 혜택으로 프리미엄 케어를 경험하세요"
              : "Experience premium care with special benefits for first-time visitors"}
          </p>
        </div>

        {/* Joy-style Bento Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div
              key={service.name}
              className="group bg-white rounded-4xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={serviceImages[index % serviceImages.length]}
                  alt={isKo ? service.name : service.nameEn}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  priority={index === 0}
                />
                {/* First Visit Badge */}
                <div className="absolute top-4 left-4 bg-joy-yellow text-joy-dark text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">star</span>
                  {isKo ? "첫 방문 특가" : "First Visit"}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-joy-dark mb-2">
                  {isKo ? service.name : service.nameEn}
                </h3>
                <p className="text-joy-textLight text-sm leading-relaxed mb-6 line-clamp-2">
                  {isKo ? service.description : service.descriptionEn}
                </p>

                {/* Price & CTA Row */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-joy-textLight uppercase tracking-wider">
                      {isKo ? "가격" : "Price"}
                    </span>
                    <span className="block text-joy-dark font-bold text-xl">
                      ₩{formatPrice(service.price)}
                    </span>
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 bg-joy-pink/10 hover:bg-joy-pink text-joy-pink hover:text-white font-semibold text-sm py-2.5 px-5 rounded-full transition-all duration-300"
                  >
                    {isKo ? "자세히" : "Details"}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 h-14 px-10 bg-white border-2 border-joy-pink text-joy-pink hover:bg-joy-pink hover:text-white text-base font-semibold rounded-full transition-all duration-300 shadow-soft"
          >
            {isKo ? "전체 메뉴 보기" : "View All Services"}
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
