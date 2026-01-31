"use client";

import { useTranslations, useLocale } from "next-intl";

interface BlogPost {
  id: string;
  titleKo: string;
  titleEn: string;
  excerptKo: string;
  excerptEn: string;
  category: "tip" | "promotion" | "notice";
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    titleKo: "Y존 테라피 신규 런칭!",
    titleEn: "New Y-Zone Therapy Launch!",
    excerptKo: "릴리브에서 새롭게 선보이는 Y존 테라피를 만나보세요.",
    excerptEn: "Discover our newly launched Y-Zone Therapy at Relieve.",
    category: "promotion",
    date: "2025-12-18",
  },
  {
    id: "2",
    titleKo: "슈가링 시술 전 주의사항",
    titleEn: "Pre-Treatment Tips for Sugaring",
    excerptKo: "더 나은 시술 결과를 위한 사전 준비 방법을 알려드립니다.",
    excerptEn: "Learn how to prepare for better sugaring results.",
    category: "tip",
    date: "2025-12-10",
  },
  {
    id: "3",
    titleKo: "시술 후 피부 관리법",
    titleEn: "Post-Treatment Skincare Guide",
    excerptKo: "시술 후 피부를 건강하게 유지하는 방법을 알아보세요.",
    excerptEn: "Discover how to maintain healthy skin after treatment.",
    category: "tip",
    date: "2025-12-05",
  },
];

const categoryLabels = {
  tip: { ko: "시술 팁", en: "Tips" },
  promotion: { ko: "프로모션", en: "Promotion" },
  notice: { ko: "공지사항", en: "Notice" },
};

export default function BlogPage() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-20 bg-waxly-cream">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1
            className="text-4xl lg:text-5xl text-waxly-brown mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {t("blog")}
          </h1>
          <p className="text-waxly-brownLight text-lg">
            {isKo
              ? "시술 팁, 프로모션, 공지사항을 확인하세요"
              : "Check out our tips, promotions, and announcements"}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-waxly-brown/20 overflow-hidden transition-all duration-300 hover:border-waxly-brown/40 hover:shadow-sm"
            >
              {/* Placeholder Image */}
              <div className="h-48 bg-waxly-cream flex items-center justify-center border-b border-waxly-brown/10">
                <span
                  className="material-symbols-outlined text-5xl text-waxly-brown/30"
                  style={{ fontVariationSettings: "'wght' 200" }}
                >
                  article
                </span>
              </div>

              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 border border-waxly-brown/30 text-waxly-brown text-xs uppercase tracking-wide mb-3">
                  {isKo
                    ? categoryLabels[post.category].ko
                    : categoryLabels[post.category].en}
                </span>

                {/* Title */}
                <h2
                  className="text-xl text-waxly-brown mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
                >
                  {isKo ? post.titleKo : post.titleEn}
                </h2>

                {/* Excerpt */}
                <p className="text-waxly-brownLight text-sm mb-4 line-clamp-2">
                  {isKo ? post.excerptKo : post.excerptEn}
                </p>

                {/* Date */}
                <time className="text-xs text-waxly-brownLight/70">
                  {new Date(post.date).toLocaleDateString(
                    isKo ? "ko-KR" : "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </time>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 text-center p-8 bg-white border border-waxly-brown/20">
          <span
            className="material-symbols-outlined text-4xl text-waxly-gold mb-4 block"
            style={{ fontVariationSettings: "'wght' 200" }}
          >
            auto_awesome
          </span>
          <p className="text-waxly-brownLight">
            {isKo
              ? "더 많은 콘텐츠가 곧 업데이트됩니다!"
              : "More content coming soon!"}
          </p>
        </div>
      </div>
    </section>
  );
}
