import { placeInfo, location, contact, businessHours, reviews, menuItems } from "@/lib/data";

interface LocalBusinessSchema {
  "@context": string;
  "@type": string[];
  name: string;
  alternateName: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: {
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
  aggregateRating: {
    "@type": string;
    ratingValue: string;
    reviewCount: number;
  };
  priceRange: string;
  sameAs: string[];
  image: string[];
  hasOfferCatalog: {
    "@type": string;
    name: string;
    itemListElement: {
      "@type": string;
      name: string;
      price: number;
      priceCurrency: string;
    }[];
  };
}

export function LocalBusinessJsonLd() {
  const schema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "BeautySalon", "HealthAndBeautyBusiness"],
    name: placeInfo.name,
    alternateName: placeInfo.nameEn,
    description:
      "광주 슈가링 왁싱 전문 릴리브. 광주 임산부 왁싱, 광주 여자 왁싱, 광주 남자 왁싱 프리미엄 케어. 북구 운암동 위치. 국제대회 그랑프리 수상 전문가. 100% 천연 슈가링.",
    url: "https://relieve.kr",
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "북문대로 154 3층",
      addressLocality: "광주",
      addressRegion: "광주광역시 북구",
      postalCode: "61200",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinate.latitude,
      longitude: location.coordinate.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: businessHours.openTime,
      closes: "20:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: reviews.total,
    },
    priceRange: "₩₩",
    sameAs: [placeInfo.naverMapUrl],
    image: [
      "https://ldb-phinf.pstatic.net/20240912_148/1726129302827Yc1Ak_JPEG/%BB%E7%BA%BB_-KakaoTalk_20240624_150315412.jpg",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sugaring Services",
      itemListElement: menuItems.map((item) => ({
        "@type": "Offer",
        name: item.name,
        price: item.price,
        priceCurrency: "KRW",
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchema {
  "@context": string;
  "@type": string;
  mainEntity: {
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }[];
}

export function FAQJsonLd() {
  const faqItems = [
    {
      question: "광주에서 슈가링 왁싱 잘하는 곳 어디인가요?",
      answer:
        "광주 북구 운암동에 위치한 릴리브는 국제왁싱기능경기대회 그랑프리 수상 전문가가 직접 시술합니다. 724건 리뷰 4.9점의 검증된 광주 슈가링 전문샵입니다.",
    },
    {
      question: "광주에서 임산부 왁싱 가능한 곳이 있나요?",
      answer:
        "네, 릴리브는 광주 임산부 왁싱 전문샵입니다. 100% 천연 슈가링으로 임산부도 안전하게 시술받으실 수 있으며, 임산부 전용 쿠션과 편안한 자세로 케어해드립니다.",
    },
    {
      question: "광주 남자 왁싱도 가능한가요?",
      answer:
        "네, 광주 남자 왁싱 전문 시술을 제공합니다. 남성 브라질리언, 바디 왁싱 등 다양한 남성 전용 메뉴가 있으며, 첫 방문 할인 혜택도 있습니다.",
    },
    {
      question: "예약 없이 방문할 수 있나요?",
      answer:
        "원활한 서비스를 위해 사전 예약을 권장드립니다. 네이버 예약 또는 전화(0507-1472-0432)로 예약해주세요.",
    },
    {
      question: "첫 방문 할인은 어떻게 적용되나요?",
      answer:
        "처음 방문하시는 고객님께 특별 할인가를 적용해드립니다. 여성 브라질리언 5만원, 남성 브라질리언 7만원, 임산부 왁싱 8만원입니다.",
    },
    {
      question: "광주 운암동 릴리브 주차는 어디에 하나요?",
      answer:
        "황솔촌 운암점 주차장을 이용해주세요. 1시간 주차권을 발급해드립니다. 주소는 광주 북구 북문대로 154 3층입니다.",
    },
  ];

  const schema: FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
