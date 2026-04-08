import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { LocalBusinessJsonLd, FAQJsonLd } from "@/components/shared/JsonLd";

// Joy design system fonts
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://relieve.kr"),
  title: {
    default: "광주왁싱 슈가링 릴리브 | 운암동 프리미엄 슈가링 전문",
    template: "%s | 광주왁싱 슈가링 릴리브",
  },
  description:
    "광주 슈가링 왁싱 전문 릴리브. 광주 임산부 왁싱, 광주 여자 왁싱, 광주 남자 왁싱 프리미엄 케어. 북구 운암동 위치. 국제대회 그랑프리 수상 전문가. 724건 리뷰 4.9점.",
  keywords: [
    // 메인 키워드 (지역 + 서비스)
    "광주 임산부 왁싱",
    "광주 여자 왁싱",
    "광주 남자 왁싱",
    "광주 슈가링 왁싱",
    // 지역 키워드
    "광주왁싱",
    "광주슈가링",
    "운암동왁싱",
    "광주북구왁싱",
    // 서비스 키워드
    "광주 브라질리언왁싱",
    "광주 브라질리언",
    "임산부왁싱 광주",
    "남성왁싱 광주",
    // 롱테일 키워드
    "광주 왁싱 잘하는곳",
    "광주 슈가링 전문",
    "광주 임산부 케어",
    "운암동 슈가링",
    "북구 왁싱샵",
  ],
  authors: [{ name: "광주왁싱 슈가링 릴리브" }],
  creator: "광주왁싱 슈가링 릴리브",
  publisher: "광주왁싱 슈가링 릴리브",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "광주왁싱 슈가링 릴리브",
    description: "프리미엄 슈가링 전문샵 - 국제대회 그랑프리 수상 전문가",
    type: "website",
    locale: "ko_KR",
    alternateLocale: "en_US",
    siteName: "광주왁싱 슈가링 릴리브",
    images: [
      {
        url: "https://ldb-phinf.pstatic.net/20240912_148/1726129302827Yc1Ak_JPEG/%BB%E7%BA%BB_-KakaoTalk_20240624_150315412.jpg",
        width: 1200,
        height: 630,
        alt: "광주왁싱 슈가링 릴리브",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "광주왁싱 슈가링 릴리브",
    description: "프리미엄 슈가링 전문샵 - 국제대회 그랑프리 수상",
    images: [
      "https://ldb-phinf.pstatic.net/20240912_148/1726129302827Yc1Ak_JPEG/%BB%E7%BA%BB_-KakaoTalk_20240624_150315412.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      ko: "/ko",
      en: "/en",
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as "ko" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${notoSansKR.variable} ${playfairDisplay.variable} ${notoSerif.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <LocalBusinessJsonLd />
        <FAQJsonLd />
      </head>
      <body className="bg-background-light text-text-main antialiased overflow-x-hidden selection:bg-primary selection:text-white">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
