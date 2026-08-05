// 광주왁싱 슈가링 릴리브 - 비즈니스 데이터

export const placeInfo = {
  id: "1053630091",
  name: "광주왁싱 슈가링 릴리브",
  nameEn: "Gwangju Waxing Sugaring Relieve",
  naverMapUrl: "https://map.naver.com/p/entry/place/1053630091",
  bookingUrl: "https://booking.naver.com/booking/13/bizes/840598",
  category: {
    main: "왁싱,제모",
    keywords: [
      "광주 임산부 왁싱",
      "광주 여자 왁싱",
      "광주 남자 왁싱",
      "광주 슈가링 왁싱",
      "광주왁싱",
      "광주슈가링",
      "운암동왁싱",
      "광주 브라질리언왁싱",
    ],
  },
};

export const location = {
  address: {
    jibun: "광주 북구 운암동 1051-6",
    road: "광주 북구 북문대로 154 3층",
    formatted: "광주 북구 운암동",
    roadEn: "154 Bukmun-daero, Buk-gu, Gwangju, 3F",
  },
  coordinate: {
    latitude: 35.1825701,
    longitude: 126.8726567,
  },
  navigationApps: ["네이버맵", "카카오맵", "T맵"],
};

export const contact = {
  phone: "0507-1472-0432",
  talktalk: true,
  talktalkUrl: "https://talk.naver.com/ct/w4hvyv?frm=mnmb#nafullscreen",
};

export const socialLinks = {
  instagram: "https://www.instagram.com/relieve_waxing/",
  naver: "https://map.naver.com/p/entry/place/1053630091",
};

export const businessHours = {
  openTime: "10:00",
  closeTime: "20:00",
  days: "연중무휴",
  daysEn: "Every day",
  description: "10:00에 영업 시작",
  descriptionEn: "Opens at 10:00",
  formatted: "10:00 - 20:00",
  formattedEn: "10:00 AM - 8:00 PM",
};

export const facilities = [
  { name: "예약", nameEn: "Reservation", icon: "event_available" },
  { name: "무선 인터넷", nameEn: "Free WiFi", icon: "wifi" },
  { name: "반려동물 동반", nameEn: "Pet Friendly", icon: "pets" },
  { name: "남/녀 화장실 구분", nameEn: "Separate Restrooms", icon: "wc" },
  { name: "대기공간", nameEn: "Waiting Area", icon: "weekend" },
];

export const parking = {
  available: true,
  description: "황솔촌 운암점 주차장에 주차하세요! 1시간 주차권 발급해드립니다 :-)",
  descriptionEn: "Park at Hwangsolchon Unam Branch. 1-hour parking ticket provided!",
};

export const paymentMethods = [
  "지역화폐 (모바일형)",
  "지역화폐 (카드형)",
  "제로페이",
];

export const certifications = [
  {
    year: "2025",
    title: "한국왁싱뷰티협회 교육이사 위촉",
    titleEn: "Appointed as Education Director, Korea Waxing Beauty Association",
    highlight: true,
  },
  {
    year: "2025",
    title: "국제왁싱기능경기대회 심사위원 위촉",
    titleEn: "Appointed as Judge, International Waxing Skills Competition",
    highlight: true,
  },
  {
    year: "2024",
    title: "국제왁싱기능경기대회 심사위원 위촉",
    titleEn: "Appointed as Judge, International Waxing Skills Competition",
    highlight: false,
  },
  {
    year: "2023",
    title: "국제왁싱기능경기대회 프로부 그랑프리대상 수상",
    titleEn: "Grand Prix Winner, International Waxing Competition (Pro Division)",
    highlight: true,
  },
  {
    year: "",
    title: "MELLOW 슈퍼바이저 교육과정 이수",
    titleEn: "Completed MELLOW Supervisor Training Course",
    highlight: false,
  },
  {
    year: "",
    title: "브라질리언 메디컬 교육강사 취득",
    titleEn: "Brazilian Medical Instructor Certification",
    highlight: false,
  },
  {
    year: "",
    title: "슈가링전문지도자 자격증 취득",
    titleEn: "Sugaring Professional Instructor License",
    highlight: false,
  },
  {
    year: "",
    title: "미용전문교육강사 취득",
    titleEn: "Beauty Professional Instructor Certification",
    highlight: false,
  },
  {
    year: "",
    title: "피부국가자격증 보유",
    titleEn: "National Esthetician License",
    highlight: false,
  },
];

export interface MenuItem {
  name: string;
  nameEn: string;
  price: number;
  category: string;
  isFirstVisit?: boolean;
  description?: string;
  descriptionEn?: string;
}

export const menuItems: MenuItem[] = [
  {
    name: "임산부 왁싱 첫 방문 할인",
    nameEn: "Maternity Waxing (First Visit)",
    price: 80000,
    category: "firstVisit",
    isFirstVisit: true,
    description: "임산부를 위한 특별 케어",
    descriptionEn: "Special care for expectant mothers",
  },
  {
    name: "여성 브라질리언 첫 방문 할인",
    nameEn: "Women's Brazilian (First Visit)",
    price: 50000,
    category: "firstVisit",
    isFirstVisit: true,
    description: "여성 브라질리언 슈가링",
    descriptionEn: "Women's Brazilian sugaring",
  },
  {
    name: "남성 브라질리언 첫 방문 할인",
    nameEn: "Men's Brazilian (First Visit)",
    price: 70000,
    category: "firstVisit",
    isFirstVisit: true,
    description: "남성 브라질리언 슈가링",
    descriptionEn: "Men's Brazilian sugaring",
  },
  {
    name: "디자인 세라클 스케일링 (여)",
    nameEn: "Design Ceracl Scaling (Women)",
    price: 130000,
    category: "premium",
    description: "프리미엄 세라클 스케일링 케어",
    descriptionEn: "Premium ceracl scaling care",
  },
  {
    name: "디자인 세라클 스케일링 (남)",
    nameEn: "Design Ceracl Scaling (Men)",
    price: 160000,
    category: "premium",
    description: "프리미엄 세라클 스케일링 케어",
    descriptionEn: "Premium ceracl scaling care",
  },
  {
    name: "브라질리언 1년 무제한 이용권 (여)",
    nameEn: "Brazilian Annual Pass (Women)",
    price: 500000,
    category: "annual",
    description: "1년 무제한 브라질리언 이용",
    descriptionEn: "Unlimited Brazilian for 1 year",
  },
  {
    name: "브라질리언 1년 무제한 이용권 (남)",
    nameEn: "Brazilian Annual Pass (Men)",
    price: 700000,
    category: "annual",
    description: "1년 무제한 브라질리언 이용",
    descriptionEn: "Unlimited Brazilian for 1 year",
  },
  {
    name: "노글루 보톡스펌(기본)",
    nameEn: "No-Glue Botox Perm (Basic)",
    price: 40000,
    category: "lash",
    description: "자연스러운 속눈썹 펌",
    descriptionEn: "Natural eyelash perm",
  },
  {
    name: "블랙틴트펌(염색)",
    nameEn: "Black Tint Perm",
    price: 45000,
    category: "lash",
    description: "속눈썹 염색 + 펌",
    descriptionEn: "Eyelash tint + perm",
  },
];

export const reviews = {
  total: 772,
  participantCount: 515,
  highlights: [
    { keyword: "시술이 꼼꼼해요", keywordEn: "Thorough treatment", count: 702, icon: "verified" },
    { keyword: "친절해요", keywordEn: "Kind & friendly", count: 648, icon: "favorite" },
    { keyword: "손이 빨라요", keywordEn: "Quick service", count: 520, icon: "speed" },
    { keyword: "매장이 청결해요", keywordEn: "Clean facility", count: 497, icon: "cleaning_services" },
    { keyword: "분위기가 편안해요", keywordEn: "Comfortable atmosphere", count: 396, icon: "spa" },
  ],
  blogCount: 179,
};

export const events = [
  {
    title: "Y존 테라피 런칭 !!",
    titleEn: "Y-Zone Therapy Launch!",
    period: "2025.12.18. ~ 2026.01.31.",
    active: true,
  },
];

export const mainImages = [
  "https://ldb-phinf.pstatic.net/20240912_148/1726129302827Yc1Ak_JPEG/%BB%E7%BA%BB_-KakaoTalk_20240624_150315412.jpg",
  "https://ldb-phinf.pstatic.net/20250529_63/17484907191722GUYN_JPEG/KakaoTalk_20250529_125034083.jpg",
  "https://ldb-phinf.pstatic.net/20231129_198/1701253646386fGCnv_JPEG/KakaoTalk_20231129_192709012.jpg",
  "https://ldb-phinf.pstatic.net/20250529_270/1748490388217fp4Gh_JPEG/KakaoTalk_20250529_124518958.jpg",
];

export const safetyPromises = [
  {
    icon: "block",
    title: "No Double Dipping",
    titleEn: "No Double Dipping",
    description: "매번 새로운 스틱 사용",
    descriptionEn: "Fresh applicator every time",
  },
  {
    icon: "verified_user",
    title: "인증된 전문가",
    titleEn: "Certified Specialists",
    description: "국제대회 수상 경력",
    descriptionEn: "Award-winning professionals",
  },
  {
    icon: "clean_hands",
    title: "철저한 위생",
    titleEn: "Hospital-Grade Hygiene",
    description: "의료급 위생 관리",
    descriptionEn: "Medical-grade cleanliness",
  },
];
