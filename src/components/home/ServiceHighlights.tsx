"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { menuItems } from "@/lib/data";
import Image from "next/image";

// Service images from Stitch template
const serviceImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ4zUxJQd2KYz2FH7jgPe0YWj9uSPfwx8mblhgwuAHpbM6dYW1a2cKhQVQXsVmZy1qekmKSTlFmcR8slWNw5JIQwjP-2QY5xp1cCSEyRBdJnJvXR3YDdSuGtHCq8OmWG7X2DqjSKgVnI_SNLK45RgWRmyFhkdJSNKLQNBQ_g2x-uALt_1p1g-BPrNijMqIVpgNj9aA3vdUq3nLqzRy2VkpbzJX4yEHDy8Hc0bW6pVkKhgmhb-6lsC1yIp2vb31-WBpNKZ7LwUl0iY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfFKiVjdA3BYslFpLRpWLVNgfm_Gm-EPnRBOvUCvYLdpPt3zEWa4PL_Vy3MKJQ5qiG8pRwzGLqNJGqGjFbTYfQGw9n-e2LJxS0xpPHWqd4IvPfKLsU5GWwJhVyKiAcWUQzD5Qd6qRJRBR2jJTyJ8J5RV8DL9RqEWS3fUOJBqQkgQTEZHhNPJVLJPqZpH6FXLwmJR3KHpQkXRc7nRPWZ2qK5yTLQRZH7qS7P0fNPYzXWJHQ2J7rPfJKQRQRYJVZNJHG8GQzPL6Q",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA7EPUL7R3nFLxMqKcPqMJHzXVPLfWCqJmP0VrLwZ7MF0Xp8CQGZwbD5vX9yK8PZqLmKRNTQXNVJ5qJWPKXGqfyQJVPQ2z7WNxUqLyJZ0rKPWqJ8TKrL8qP0PQ8QXNLZqrJWLJQ2GbPZqLJWPKXGqfyQJVPQ2z7WNxUqLyJZ0rKPWqJ8TKrL8qP0PQ8QXNLZqrJWLJQ2GbP",
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
    <section className="py-20 lg:py-28 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stitch-style Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">
            {isKo ? "서비스 메뉴" : "Service Menu"}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
            {isKo ? "시그니처 시술" : "Signature Treatments"}
          </h2>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {isKo
              ? "첫 방문 고객님을 위한 특별 혜택과 함께 프리미엄 케어를 경험하세요"
              : "Experience premium care with special benefits for first-time visitors"}
          </p>
        </div>

        {/* Stitch-style 3-Column Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div
              key={service.name}
              className="group bg-white dark:bg-[#32322a] rounded-[12px] overflow-hidden shadow-stitch hover:shadow-stitch-lg transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={serviceImages[index % serviceImages.length]}
                  alt={isKo ? service.name : service.nameEn}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  priority={index === 0}
                />
                {/* First Visit Badge */}
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                  {isKo ? "첫 방문 특가" : "First Visit"}
                </div>
              </div>

              {/* Card Content - Stitch Style */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-2">
                  {isKo ? service.name : service.nameEn}
                </h3>
                <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {isKo ? service.description : service.descriptionEn}
                </p>

                {/* Price & CTA Row - Stitch Layout */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
                  <div>
                    <span className="text-xs text-text-muted dark:text-gray-500 uppercase tracking-wider">
                      {isKo ? "가격" : "Price"}
                    </span>
                    <span className="block text-text-main dark:text-white font-bold text-xl">
                      ₩{formatPrice(service.price)}
                    </span>
                  </div>
                  <Link
                    href="/reservation"
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm uppercase tracking-wide group-hover:gap-2.5 transition-all duration-300"
                  >
                    {isKo ? "예약" : "Book"}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Stitch Style */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 h-14 px-10 border-2 border-primary text-primary hover:bg-primary hover:text-white text-base font-semibold rounded-[12px] transition-all duration-300"
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
