"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { menuItems } from "@/lib/data";

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
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-bold uppercase tracking-wider mb-3">
            {isKo ? "첫 방문 특별 혜택" : "First Visit Specials"}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-4">
            {isKo ? "시그니처 시술" : "Signature Treatments"}
          </h2>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {isKo
              ? "당신의 아름다움과 편안함을 위한 프리미엄 케어"
              : "Premium care tailored for your beauty and comfort"}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div
              key={service.name}
              className="group bg-white dark:bg-[#32322a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Card Image */}
              <div className="h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage: `url("${serviceImages[index % serviceImages.length]}")`,
                  }}
                />
              </div>

              <div className="p-8">
                <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-2">
                  {isKo ? service.name : service.nameEn}
                </h3>
                <p className="text-text-muted dark:text-gray-400 mb-6 leading-relaxed text-sm line-clamp-2">
                  {isKo ? service.description : service.descriptionEn}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-text-main dark:text-white font-bold text-xl">
                    ₩{formatPrice(service.price)}
                  </span>
                  <Link
                    href="/reservation"
                    className="text-primary font-bold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    {isKo ? "예약하기" : "Book Now"}
                    <span className="material-symbols-outlined text-sm">
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
            className="inline-flex items-center justify-center h-12 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white text-base font-bold rounded-lg transition-all duration-300"
          >
            {isKo ? "전체 메뉴 보기" : "View All Services"}
          </Link>
        </div>
      </div>
    </section>
  );
}
