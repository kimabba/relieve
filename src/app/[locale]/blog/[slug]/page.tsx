import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { getPostBySlug, getAllPosts, categoryLabels } from "@/lib/blog-data";
import { placeInfo } from "@/lib/data";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const isKo = locale === "ko";
  const title = isKo ? post.titleKo : post.titleEn;
  const description = isKo ? post.excerptKo : post.excerptEn;

  return {
    title: `${title} | ${placeInfo.name}`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const isKo = locale === "ko";
  const title = isKo ? post.titleKo : post.titleEn;
  const content = isKo ? post.contentKo : post.contentEn;
  const excerpt = isKo ? post.excerptKo : post.excerptEn;
  const categoryLabel = isKo
    ? categoryLabels[post.category].ko
    : categoryLabels[post.category].en;

  // Related posts: same category, excluding current post
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // If not enough same-category posts, fill with recent posts
  if (relatedPosts.length < 3) {
    const remaining = allPosts
      .filter(
        (p) =>
          p.slug !== post.slug &&
          !relatedPosts.some((rp) => rp.slug === p.slug)
      )
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...remaining);
  }

  const contentParagraphs = content.split("\n\n").filter((p) => p.trim());

  return (
    <section className="py-20 bg-waxly-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-waxly-brownLight hover:text-waxly-brown transition-colors mb-8"
        >
          <span
            className="material-symbols-outlined text-lg"
            style={{ fontVariationSettings: "'wght' 300" }}
          >
            arrow_back
          </span>
          <span className="text-sm">
            {isKo ? "블로그 목록으로" : "Back to Blog"}
          </span>
        </Link>

        {/* Article header */}
        <article>
          <header className="mb-10">
            {/* Category & date */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 border border-waxly-brown/30 text-waxly-brown text-xs uppercase tracking-wide">
                {categoryLabel}
              </span>
              <time className="text-xs text-waxly-brownLight/70">
                {new Date(post.date).toLocaleDateString(
                  isKo ? "ko-KR" : "en-US",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </time>
              <span className="text-xs text-waxly-brownLight/70 flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'wght' 200" }}
                >
                  schedule
                </span>
                {isKo
                  ? `${post.readingTime}분 읽기`
                  : `${post.readingTime} min read`}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl lg:text-4xl text-waxly-brown mb-4 leading-snug"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
              }}
            >
              {title}
            </h1>

            {/* Excerpt */}
            <p className="text-waxly-brownLight text-lg leading-relaxed">
              {excerpt}
            </p>
          </header>

          {/* Divider */}
          <div className="w-12 h-px bg-waxly-brown/30 mb-10" />

          {/* Content */}
          <div className="space-y-5">
            {contentParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-waxly-brown/90 leading-relaxed text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-waxly-brown/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-waxly-peach/50 text-waxly-brownLight"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* CTA */}
        <div className="mt-12 p-8 bg-white border border-waxly-brown/20 text-center">
          <h3
            className="text-xl text-waxly-brown mb-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
            }}
          >
            {isKo ? "예약 상담이 필요하신가요?" : "Ready to Book?"}
          </h3>
          <p className="text-waxly-brownLight text-sm mb-6">
            {isKo
              ? "릴리브에서 전문적인 시술을 경험해보세요"
              : "Experience professional care at Relieve"}
          </p>
          <a
            href={placeInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-waxly-brown text-white text-sm tracking-wide hover:bg-waxly-brownDark transition-colors"
          >
            <span
              className="material-symbols-outlined text-lg"
              style={{ fontVariationSettings: "'wght' 300" }}
            >
              calendar_month
            </span>
            {isKo ? "네이버 예약하기" : "Book on Naver"}
          </a>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2
              className="text-2xl text-waxly-brown mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
              }}
            >
              {isKo ? "관련 글" : "Related Posts"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block bg-white border border-waxly-brown/20 p-5 hover:border-waxly-brown/40 transition-colors"
                >
                  <span className="inline-block px-2 py-0.5 border border-waxly-brown/20 text-waxly-brownLight text-[10px] uppercase tracking-wide mb-2">
                    {isKo
                      ? categoryLabels[related.category].ko
                      : categoryLabels[related.category].en}
                  </span>
                  <h3
                    className="text-sm text-waxly-brown group-hover:text-waxly-brownDark transition-colors line-clamp-2 mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 400,
                    }}
                  >
                    {isKo ? related.titleKo : related.titleEn}
                  </h3>
                  <time className="text-[11px] text-waxly-brownLight/60">
                    {new Date(related.date).toLocaleDateString(
                      isKo ? "ko-KR" : "en-US",
                      { year: "numeric", month: "short", day: "numeric" }
                    )}
                  </time>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
