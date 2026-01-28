"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const content = {
  ko: {
    nav: {
      brand: "Joyful Bloom",
      services: "서비스",
      maternity: "임산부 케어",
      about: "소개",
      book: "예약하기",
    },
    hero: {
      badge: "임산부를 위한 특별한 케어",
      title: "당신의",
      titleHighlight: "빛나는 여정",
      titleSuffix: "을 축하합니다",
      description:
        "순수한 천연 슈가와 사랑으로 당신의 빛나는 순간을 함께합니다.",
      cta: "사랑으로 케어받기",
    },
    natural: {
      title: "순수 천연 성분",
      description:
        "레몬, 설탕, 물로만 만든 레시피. 독소나 레진 없이 오직 순수함만을 담았습니다.",
    },
    cozy: {
      title: "편안한 공간",
      pillows: "구름 쿠션",
      warmth: "최적 온도",
      quote: "모든 공간이 당신의 완벽한 휴식을 위해 설계되었습니다.",
    },
    guide: {
      title: "임신 단계별 케어",
      steps: [
        {
          num: "01",
          title: "임신 초기",
          desc: "부드러운 시작. 패치 테스트와 민감도 체크에 집중합니다.",
        },
        {
          num: "02",
          title: "임신 중기",
          desc: "황금빛 빛남. 전신 쿠션으로 지지하며 부드러운 피부를 유지합니다.",
        },
        {
          num: "03",
          title: "임신 후기",
          desc: "출산 준비. 옆으로 누운 자세로 편안한 베이비문 케어.",
        },
      ],
    },
    testimonials: {
      title: "고객 후기",
      reviews: [
        {
          text: "정말 안전하고 소중하게 느껴졌어요. 팀이 제 배를 너무 부드럽게 다뤄주셨어요!",
          author: "김지연",
          week: "34주",
        },
        {
          text: "완벽한 휴식 공간이에요. 상담이 너무 자세해서 안심이 됐어요.",
          author: "이수현",
          week: "22주",
        },
      ],
    },
    cta: {
      title: "함께 빛나실 준비 되셨나요?",
      description: "모든 여정은 특별합니다. 상담으로 시작해보세요.",
      book: "상담 예약",
      pricing: "가격 안내",
    },
    footer: {
      tagline: "엄마와 아기를 위한 케어",
      privacy: "개인정보처리방침",
      contact: "연락처",
      instagram: "인스타그램",
      copyright: "© 2024 Joyful Bloom Sanctuary",
    },
  },
  en: {
    nav: {
      brand: "Joyful Bloom",
      services: "Services",
      maternity: "Maternity",
      about: "About",
      book: "Book",
    },
    hero: {
      badge: "Embracing Motherhood",
      title: "Celebrating Your",
      titleHighlight: "Golden Journey",
      titleSuffix: "",
      description:
        "Welcome to a space where your growing glow is nurtured with pure, edible sugar and boundless love.",
      cta: "Joyfully Nurturing You",
    },
    natural: {
      title: "Purely Natural",
      description:
        "Our recipe is a simple hug of lemon, sugar, and water. No toxins, no resins—just goodness for you and your little one.",
    },
    cozy: {
      title: "The Cozy Nest",
      pillows: "Cloud Pillows",
      warmth: "Perfect Warmth",
      quote: "Every corner is designed for your ultimate relaxation.",
    },
    guide: {
      title: "Your Bloom Guide",
      steps: [
        {
          num: "01",
          title: "First Trimester",
          desc: "Gentle beginnings. We focus on patch tests and your changing sensitivity.",
        },
        {
          num: "02",
          title: "Second Trimester",
          desc: "The Golden Glow. Smooth skin maintenance with full body pillow support.",
        },
        {
          num: "03",
          title: "Third Trimester",
          desc: "The Nesting Prep. Gentle 'Baby Moon' care in side-lying comfort.",
        },
      ],
    },
    testimonials: {
      title: "Shared Smiles",
      reviews: [
        {
          text: "I felt so safe and cherished. The team treated my bump with such kindness!",
          author: "Sarah J.",
          week: "34 Weeks",
        },
        {
          text: "A total sanctuary. The consultation was so empowering!",
          author: "Emily R.",
          week: "22 Weeks",
        },
      ],
    },
    cta: {
      title: "Ready to Bloom with Us?",
      description:
        "Every journey is unique. Let's chat about yours over a gentle consultation.",
      book: "Book Consultation",
      pricing: "Pricing",
    },
    footer: {
      tagline: "Nurturing mother and baby.",
      privacy: "Privacy",
      contact: "Contact",
      instagram: "Instagram",
      copyright: "© 2024 Joyful Bloom Sanctuary",
    },
  },
};

const images = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCyKH164CM0v4KJRyzs2_Fm2mfbbWTOuCSEKKNkep5Gy5c_3dy9f5fDOvPtKhrk0P-Lowyi7bGBOjrez7IqxFp_JUHlMYk1XrMHUWQh8San-tCs933x46Y36NVcj5E_Kpq0jVAgnlHpPgRRf3WplLyMVG8qv5tobyA3GyLIH27WTKqS6ObTtP2IzovicBAX-BZjJOh5Qx6WfkncuXGmVu3z-M8qNTBbf7tg7jsnvptS1aXegvM9xIjf_tvx1_k9TgCiKInWhTDjME",
  natural:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCnUzpJcylZsuLcbb764kBZyNYMeyKdsVTq1V6zuNJfZHFl3VAeXlNYSYbheKQJ4q5w8q2vsrch1DkawyVlUuolHqHMp8t0_Wy3Y6YBVpwitKZbCYhgc7V0FOIg0tCluAMBnCGqPu7rjitXEuuGDAc1ZKDkqHJ0YfV30xJBIUtV6JlRqh8-EBE9lgIFLWXZ9iDo5UvIYkNbWZurwVFSJUT9ngGgJ4RRURTkGxQNBkBULDbZsmhAqA4y03JrfNNQdkK_KYM75XlXZWc",
  spa1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn0RKk8bseNFQooqEfOIPKlRnoN3pyVm3YN33X8xxPEoja2Oqib7MupXs3ZNQ83lMaJWp1nwpj-2v6tfM0ua4RlmQEBs8zaW1MmIu5qyWJii_wEQ8LgGR7oMrM_RzwUCqoI1uDne9VQMgP9CFMKU4pKr3Cld0rlVPOfVTqsvThwoXNnazWwX_oovH1vn4saJ_rgcm_JY_d10WS3t2w6Nm1S2sHJW_WqgGN6U_rawkRK1NS4i2cdSWiv-sVkz8XKZtHkvEqEuinXV8",
  spa2: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8INF7lspUyvdb6GbBwoSwBdR1QD4AWqElFoSN7NpBIy1S_NnIVOXEPOatxeBy0ReHN2r7MPB9UpMIRL9brWdCpa3fAum8PoaSashUHCtbEfZYCrnMkqbO9UkWHLYN2lr9_Nb8gaVL08zrTqsEFZiSYXCu2AIy3VQFRM_4-ApDXjPIcsV90PB305ow8nLYljyt2E2KwHJ0AzlkvaWRffvnFv9hXSFCGYNNxrFkz6upZzSqhm0nl5aqLLTWqR_SviYLNk4IN37s6mE",
  review1:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAM7LFnR-ZTiqVwzkBRT2ZxubO1p1h7vM-Lhd9qq_-txxv0kY7Wp2sFAfhvSA2CM22izvBDPq56fSDuK1B1m1bKgLIAQD_fyMWMIE_Lv_3-ruYEfoFv-QTKUGSHz139cP9zeppN18XYQwJ0eSnX-YEiyQtb31M-M421iKhiHePz-e6exApUkmG3TJRe4-dS8SzviUOi3aP71_1yr8FDvMdpuA5y33cOP_xkzThWlTg-IGKKFTY8lzPIROqGIjrcCRqiLqQtBSietqE",
  review2:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAXI9dpGqvbEzUO5jaCcZXTX9IvGvJ-QVDNS1Pfbof3o6Po8NifJMqb55usjOjgeI3JAj-j-ksBedS6yIym65Sm9x3ZfAgZQfMqnzTxdnJHTDb0-rydoQRcQajOmisrFgFraUOdy1nJ7RNK6g7xGTp-V-2A2j1tNGOju_6UV9zv0JpWlkHvOWJFlGrzsZ8q3Dk8NEzitFCTic0XDi70sQ54QBhKAnDiM9WX8disY9Pz1ygfPd4trHzsGAYZHrU-PmrW-L3byFgfEdk",
};

export default function JoyfulPage() {
  const locale = useLocale();
  const t = locale === "ko" ? content.ko : content.en;

  return (
    <div className="min-h-screen bg-bg-cream text-text-soft font-[family-name:var(--font-merriweather)]">
      {/* Navigation */}
      <nav className="fixed top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 z-50 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto bg-white/80 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg flex items-center gap-2 md:gap-3">
          <span className="material-symbols-outlined text-accent-teal text-2xl md:text-3xl">
            child_care
          </span>
          <span className="font-[family-name:var(--font-quicksand)] font-bold text-base md:text-lg tracking-tight">
            {t.nav.brand}
          </span>
        </div>
        <div className="hidden md:flex pointer-events-auto bg-white/80 backdrop-blur-md px-2 py-2 rounded-full shadow-lg gap-2">
          <Link
            href="#"
            className="px-6 py-2 rounded-full hover:bg-primary-joy transition-colors font-[family-name:var(--font-quicksand)] font-medium"
          >
            {t.nav.services}
          </Link>
          <Link
            href="#"
            className="px-6 py-2 rounded-full bg-primary-joy font-[family-name:var(--font-quicksand)] font-bold"
          >
            {t.nav.maternity}
          </Link>
          <Link
            href="#"
            className="px-6 py-2 rounded-full hover:bg-primary-joy transition-colors font-[family-name:var(--font-quicksand)] font-medium"
          >
            {t.nav.about}
          </Link>
          <button className="bg-accent-teal text-white px-8 py-2 rounded-full font-[family-name:var(--font-quicksand)] font-bold shadow-md hover:scale-105 transition-transform">
            {t.nav.book}
          </button>
        </div>
      </nav>

      {/* Main Content - Magazine Grid */}
      <main className="p-4 md:p-8 lg:p-12 pt-20 md:pt-24">
        <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-4 md:gap-6">
          {/* Hero Panel */}
          <div className="col-span-12 lg:col-span-7 row-span-1 lg:row-span-4 bg-primary-joy/20 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 lg:p-12 min-h-[400px] md:min-h-[500px] relative overflow-hidden flex items-center">
            {/* Blob Background */}
            <div className="absolute -top-10 -left-10 w-48 md:w-64 h-48 md:h-64 bg-accent-pink rounded-full blur-[40px] opacity-40" />

            <div className="z-10 max-w-xl">
              <span className="inline-block px-4 py-1 bg-white rounded-full text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
                {t.hero.badge}
              </span>
              <h1 className="font-[family-name:var(--font-quicksand)] text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8 text-text-soft">
                {t.hero.title} <br />
                <span className="text-accent-pink italic">
                  {t.hero.titleHighlight}
                </span>
                {t.hero.titleSuffix}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-8 md:mb-10 opacity-80">
                {t.hero.description}
              </p>
              <button className="bg-accent-pink text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-[family-name:var(--font-quicksand)] text-lg md:text-xl font-bold shadow-xl hover:bg-accent-pink/90 transition-all flex items-center gap-3">
                {t.hero.cta}
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>

            {/* Hero Image */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 lg:opacity-100 pointer-events-none">
              <Image
                src={images.hero}
                alt="Maternity Glow"
                fill
                className="object-cover rounded-l-[6rem] lg:rounded-l-[10rem]"
                sizes="50vw"
              />
            </div>
          </div>

          {/* Natural Panel */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 bg-accent-teal/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl rotate-6 overflow-hidden shadow-lg flex-shrink-0 relative">
                <Image
                  src={images.natural}
                  alt="Pure Sugar"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-quicksand)] text-xl md:text-2xl font-bold mb-2 md:mb-3">
                  {t.natural.title}
                </h2>
                <p className="text-sm leading-relaxed opacity-75">
                  {t.natural.description}
                </p>
              </div>
            </div>
          </div>

          {/* Cozy Nest Panel */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-xl shadow-primary-joy/5">
            <div className="flex flex-col gap-4">
              <h3 className="font-[family-name:var(--font-quicksand)] text-xl md:text-2xl font-bold text-accent-teal">
                {t.cozy.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-2 md:gap-3 bg-bg-cream p-3 rounded-2xl border border-primary-joy/20">
                  <span className="material-symbols-outlined text-primary-joy">
                    bed
                  </span>
                  <span className="text-xs font-bold">{t.cozy.pillows}</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 bg-bg-cream p-3 rounded-2xl border border-primary-joy/20">
                  <span className="material-symbols-outlined text-primary-joy">
                    thermostat
                  </span>
                  <span className="text-xs font-bold">{t.cozy.warmth}</span>
                </div>
              </div>
              <p className="text-sm italic mt-2 opacity-60">
                &ldquo;{t.cozy.quote}&rdquo;
              </p>
            </div>
          </div>

          {/* Bloom Guide Panel */}
          <div className="col-span-12 lg:col-span-4 row-span-1 lg:row-span-3 bg-accent-pink/5 border-2 border-dashed border-accent-pink/30 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8">
            <h2 className="font-[family-name:var(--font-quicksand)] text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center">
              {t.guide.title}
            </h2>
            <div className="space-y-8 md:space-y-12 relative">
              <div className="absolute left-5 md:left-6 top-0 bottom-0 w-1 bg-accent-pink/10 -z-10" />
              {t.guide.steps.map((step, index) => (
                <div key={index} className="flex gap-4 md:gap-6 items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0 ring-4 ring-accent-pink/20">
                    <span className="font-[family-name:var(--font-quicksand)] font-bold text-accent-pink text-sm md:text-base">
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-quicksand)] text-base md:text-lg font-bold">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-70">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="col-span-12 lg:col-span-8 row-span-1 lg:row-span-2">
            <div className="grid grid-cols-2 h-full gap-4 md:gap-6">
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden relative min-h-[200px] md:min-h-[300px]">
                <Image
                  src={images.spa1}
                  alt="Spa Detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex-1 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative min-h-[120px] md:min-h-[180px]">
                  <Image
                    src={images.spa2}
                    alt="Comfort"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="h-20 md:h-28 bg-accent-teal rounded-[2rem] md:rounded-[3rem] flex items-center justify-center p-4 md:p-6 text-white text-center">
                  <p className="font-[family-name:var(--font-quicksand)] font-bold text-base md:text-xl">
                    100% Love & Safety
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Panel */}
          <div className="col-span-12 lg:col-span-8 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8">
            <h2 className="font-[family-name:var(--font-quicksand)] text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              {t.testimonials.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {t.testimonials.reviews.map((review, index) => (
                <div
                  key={index}
                  className={`relative p-5 md:p-6 rounded-3xl ${index === 0 ? "bg-primary-joy/10" : "bg-accent-teal/10"}`}
                >
                  <div
                    className={`absolute -top-3 md:-top-4 ${index === 0 ? "-left-3 md:-left-4" : "-right-3 md:-right-4"} w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-4 border-white`}
                  >
                    <Image
                      src={index === 0 ? images.review1 : images.review2}
                      alt={review.author}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <p className="text-sm leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p
                    className={`mt-4 font-[family-name:var(--font-quicksand)] font-bold ${index === 0 ? "text-accent-pink" : "text-accent-teal"}`}
                  >
                    — {review.author}, {review.week}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Panel */}
          <div className="col-span-12 bg-text-soft text-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex-1">
              <h2 className="font-[family-name:var(--font-quicksand)] text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                {t.cta.title}
              </h2>
              <p className="opacity-70 text-base md:text-lg">
                {t.cta.description}
              </p>
            </div>
            <div className="flex gap-3 md:gap-4 flex-wrap justify-center">
              <button className="bg-primary-joy text-text-soft px-8 md:px-10 py-3 md:py-4 rounded-full font-[family-name:var(--font-quicksand)] font-bold text-base md:text-lg hover:scale-105 transition-transform">
                {t.cta.book}
              </button>
              <button className="bg-transparent border-2 border-white/30 px-8 md:px-10 py-3 md:py-4 rounded-full font-[family-name:var(--font-quicksand)] font-bold text-base md:text-lg hover:bg-white/10 transition-colors">
                {t.cta.pricing}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 md:mt-12 mb-6 md:mb-8 max-w-[1600px] mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 border-t border-primary-joy/30 pt-8 md:pt-12">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="size-10 md:size-12 bg-accent-teal rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined">spa</span>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-quicksand)] text-lg md:text-xl font-bold">
                {t.nav.brand}
              </h3>
              <p className="text-xs opacity-50">{t.footer.tagline}</p>
            </div>
          </div>
          <div className="flex gap-6 md:gap-8 text-sm font-[family-name:var(--font-quicksand)] font-bold uppercase tracking-widest text-text-soft/60">
            <Link href="#" className="hover:text-accent-pink transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="#" className="hover:text-accent-pink transition-colors">
              {t.footer.contact}
            </Link>
            <Link href="#" className="hover:text-accent-pink transition-colors">
              {t.footer.instagram}
            </Link>
          </div>
          <p className="text-xs opacity-40">{t.footer.copyright}</p>
        </div>
      </footer>

      {/* Back to Main Link */}
      <div className="fixed bottom-4 md:bottom-8 left-4 md:left-8 z-50">
        <Link
          href="/"
          className="bg-white/80 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-white transition-colors text-sm md:text-base"
        >
          <span className="material-symbols-outlined text-accent-teal">
            arrow_back
          </span>
          <span className="font-[family-name:var(--font-quicksand)] font-medium">
            {locale === "ko" ? "메인으로" : "Back to Main"}
          </span>
        </Link>
      </div>
    </div>
  );
}
