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
      "광주 북구 운암동 프리미엄 슈가링 전문샵. 임산부왁싱, 브라질리언왁싱, 남성왁싱. 국제대회 그랑프리 수상 전문가의 꼼꼼한 시술.",
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
      question: "예약 없이 방문할 수 있나요?",
      answer:
        "원활한 서비스를 위해 사전 예약을 권장드립니다. 네이버 예약 또는 전화로 예약해주세요.",
    },
    {
      question: "임산부도 시술받을 수 있나요?",
      answer:
        "네, 임산부 전용 프로그램이 있습니다. 천연 성분 슈가링으로 안전하게 시술받으실 수 있습니다.",
    },
    {
      question: "첫 방문 할인은 어떻게 적용되나요?",
      answer:
        "처음 방문하시는 고객님께 특별 할인가를 적용해드립니다. 예약 시 첫 방문임을 말씀해주세요.",
    },
    {
      question: "시술 시간은 얼마나 걸리나요?",
      answer:
        "시술 부위에 따라 다르며, 브라질리언 기준 약 30-45분 정도 소요됩니다.",
    },
    {
      question: "주차는 어디에 하나요?",
      answer:
        "황솔촌 운암점 주차장을 이용해주세요. 1시간 주차권을 발급해드립니다.",
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
