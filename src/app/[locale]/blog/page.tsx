"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { getAllPosts, categoryLabels } from "@/lib/blog-data";

const allCategories = Object.keys(categoryLabels) as Array<
  keyof typeof categoryLabels
>;

export default function BlogPage() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isKo = locale === "ko";

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const allPosts = getAllPosts();
  const filteredPosts =
    activeCategory === "all"
      ? allPosts
      : allPosts.filter((post) => post.category === activeCategory);

  return (
    <section className="py-20 bg-waxly-cream">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1
            className="text-4xl lg:text-5xl text-waxly-brown mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
            }}
          >
            {t("blog")}
          </h1>
          <p className="text-waxly-brownLight text-lg">
            {isKo
              ? "시술 가이드, 팁, 자주 묻는 질문을 확인하세요"
              : "Browse our guides, tips, and frequently asked questions"}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-sm tracking-wide border transition-colors ${
              activeCategory === "all"
                ? "bg-waxly-brown text-white border-waxly-brown"
                : "bg-white text-waxly-brownLight border-waxly-brown/20 hover:border-waxly-brown/40"
            }`}
          >
            {isKo ? "전체" : "All"}
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm tracking-wide border transition-colors ${
                activeCategory === cat
                  ? "bg-waxly-brown text-white border-waxly-brown"
                  : "bg-white text-waxly-brownLight border-waxly-brown/20 hover:border-waxly-brown/40"
              }`}
            >
              {isKo ? categoryLabels[cat].ko : categoryLabels[cat].en}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="bg-white border border-waxly-brown/20 overflow-hidden transition-all duration-300 group-hover:border-waxly-brown/40 group-hover:shadow-sm h-full flex flex-col">
                {/* Placeholder Image */}
                <div className="h-48 bg-waxly-cream flex items-center justify-center border-b border-waxly-brown/10">
                  <span
                    className="material-symbols-outlined text-5xl text-waxly-brown/30"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    article
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Category Badge & Reading Time */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 border border-waxly-brown/30 text-waxly-brown text-xs uppercase tracking-wide">
                      {isKo
                        ? categoryLabels[post.category].ko
                        : categoryLabels[post.category].en}
                    </span>
                    <span className="text-xs text-waxly-brownLight/60 flex items-center gap-1">
                      <span
                        className="material-symbols-outlined text-xs"
                        style={{ fontVariationSettings: "'wght' 200" }}
                      >
                        schedule
                      </span>
                      {isKo
                        ? `${post.readingTime}분`
                        : `${post.readingTime}min`}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-xl text-waxly-brown mb-2 group-hover:text-waxly-brownDark transition-colors line-clamp-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 400,
                    }}
                  >
                    {isKo ? post.titleKo : post.titleEn}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-waxly-brownLight text-sm mb-4 line-clamp-2 flex-1">
                    {isKo ? post.excerptKo : post.excerptEn}
                  </p>

                  {/* Date & Read More */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-waxly-brown/5">
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
                    <span className="text-xs text-waxly-brown flex items-center gap-1 group-hover:gap-2 transition-all">
                      {isKo ? "자세히 보기" : "Read more"}
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'wght' 300" }}
                      >
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <span
              className="material-symbols-outlined text-4xl text-waxly-brown/30 mb-4 block"
              style={{ fontVariationSettings: "'wght' 200" }}
            >
              search_off
            </span>
            <p className="text-waxly-brownLight">
              {isKo
                ? "해당 카테고리에 작성된 글이 없습니다."
                : "No posts found in this category."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
