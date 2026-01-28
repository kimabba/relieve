"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const content = {
  ko: {
    nav: {
      brand: "Bloom & Rest",
      welcome: "환영합니다",
      heart: "우리의 마음",
      care: "부드러운 케어",
      reserve: "예약하기",
      book: "예약 문의",
    },
    hero: {
      title: "당신만을 위한 따뜻한 휴식 공간",
      description:
        "당신의 여정을 위해 특별히 만들어진 공간에서 마음과 몸을 쉬세요. 단순한 케어 그 이상—안전하고, 지지받고, 진정으로 소중히 여겨지는 느낌을 드립니다.",
    },
    features: {
      title: "당신의 모든 순간을 케어합니다",
      description:
        "최대한 부드럽게 진행되도록 모든 과정을 다듬었습니다. 모든 디테일이 당신과 아기에게 마음의 평화와 완벽한 편안함을 제공합니다.",
      items: [
        {
          icon: "volunteer_activism",
          title: "프라이빗 공간",
          description:
            "전체 시술실을 독립적으로 사용합니다. 조용하고 편안한 환경에서 깊이 호흡할 수 있습니다.",
        },
        {
          icon: "self_care",
          title: "공감 상담",
          description:
            "먼저 경청합니다. 전문가가 당신의 몸 변화를 이해하고 맞춤 케어를 제공합니다.",
        },
        {
          icon: "auto_awesome",
          title: "순수 슈가링",
          description:
            "유기농, 식용 등급의 슈가 페이스트로 피부를 부드럽고 차분하게 케어합니다.",
        },
      ],
    },
    booking: {
      title: "평온한 순간을 찾으세요",
      description:
        "천천히 편안하게 움직일 수 있는 시간을 선택하세요. 따뜻한 환영으로 기다리고 있겠습니다.",
      month: "2024년 1월",
      times: "1월 15일 가능 시간",
      slots: ["오전 10:00", "오전 11:30", "오후 1:00", "오후 3:30"],
      nameLabel: "성함",
      namePlaceholder: "예: 김지연",
      stageLabel: "임신 단계 (선택)",
      stageOptions: [
        "현재 단계를 선택해주세요",
        "임신 초기 (1-12주)",
        "임신 중기 (13-26주)",
        "임신 후기 (27주 이상)",
        "산후",
      ],
      submit: "예약 요청하기",
      note: "오늘 결제가 필요하지 않습니다. 당신의 편안함이 최우선입니다.",
    },
    faq: {
      title: "궁금한 점에 대한 따뜻한 답변",
      items: [
        {
          q: "아기와 저에게 정말 안전한가요?",
          a: "네, 절대적으로 안전합니다. 저희 슈가링 페이스트는 순수 유기농—설탕, 물, 레몬만 사용합니다. 민감한 피부를 자극할 수 있는 화학물질이나 향료가 없습니다. 체온에서 사용하므로 열로 인한 불편함이 없어 임산부에게 가장 부드러운 선택입니다.",
        },
        {
          q: "피부가 더 민감한데 괜찮을까요?",
          a: "완전히 이해합니다. 호르몬 변화로 피부가 더 민감해질 수 있습니다. 당신의 속도에 맞춰 진행하며, 필요한 만큼 휴식을 취할 수 있습니다. 가볍고 케어받는 느낌으로 돌아가시는 것이 저희의 목표입니다.",
        },
        {
          q: "출산 전 언제 방문하는 것이 좋을까요?",
          a: "많은 어머니들이 34-36주 정도에 방문하십니다. 출산 예정일 최소 2주 전에 마지막 예약을 권장합니다. 아기가 일찍 도착하더라도 유연한 취소 정책이 있으니 걱정 마세요.",
        },
        {
          q: "동반인과 함께 올 수 있나요?",
          a: "물론입니다. 시술실은 프라이빗 공간이지만, 편안한 라운지에서 동반인이 허브차와 함께 기다리실 수 있습니다.",
        },
      ],
    },
    location: {
      title: "편안한 공간으로 오세요",
      description:
        "평화로운 거리에 자리잡고 있습니다. 계단 없이, 넓고 햇살 가득한 복도, 들어서는 순간 느껴지는 즉각적인 편안함.",
      badge: "우리의 공간",
      address: "광주 북구 운암동 황솔촌",
      valet: "주차 안내",
      valetDesc:
        "바로 문 앞까지 오세요. 주차는 저희가 도와드리며, 바로 휴식 공간으로 들어오실 수 있습니다.",
      hours: "영업시간",
      hoursValue: "월-토: 오전 10시 - 오후 7시",
      phone: "문의전화",
      phoneValue: "010-1234-5678",
    },
    footer: {
      tagline:
        "모든 어머니가 가장 변화무쌍한 시기에 소중히 여겨지고, 지지받고, 완벽하게 평화로움을 느끼는 세상을 만들어갑니다.",
      explore: "둘러보기",
      services: "케어 서비스",
      mission: "우리의 미션",
      reservations: "예약",
      connect: "연결하기",
      instagram: "인스타그램",
      contact: "문의하기",
      privacy: "개인정보처리방침",
      copyright: "© 2024 Bloom & Rest 임산부 케어. All rights reserved.",
    },
  },
  en: {
    nav: {
      brand: "Bloom & Rest",
      welcome: "Welcome",
      heart: "Our Heart",
      care: "Gentle Care",
      reserve: "Reserve Your Space",
      book: "Book with Care",
    },
    hero: {
      title: "Your Warm & Nurturing Sanctuary",
      description:
        "Rest your heart and mind in a space crafted specifically for your journey. We offer more than just care—we offer a soft place to land, ensuring you feel supported, safe, and truly seen.",
    },
    features: {
      title: "Nurturing Every Step of Your Way",
      description:
        "We've refined our process to be as gentle as possible. Every detail is curated to provide peace of mind and complete physical comfort for you and your little one.",
      items: [
        {
          icon: "volunteer_activism",
          title: "Private Haven",
          description:
            "The entire center is yours. We ensure zero overlaps so you can breathe deeply in a quiet, exclusive environment.",
        },
        {
          icon: "self_care",
          title: "Empathetic Consult",
          description:
            "We listen before we act. Our specialists understand the changes your body is experiencing and tailor every touch to your comfort.",
        },
        {
          icon: "auto_awesome",
          title: "Pure Sugaring",
          description:
            "Our organic, edible-grade sugar paste is applied with a soothing technique that is remarkably gentle on your skin.",
        },
      ],
    },
    booking: {
      title: "Find Your Moment of Calm",
      description:
        "Choose a time that lets you move slowly and comfortably. We'll be here waiting with a warm welcome.",
      month: "January 2024",
      times: "Openings for Jan 15",
      slots: ["10:00 AM", "11:30 AM", "01:00 PM", "03:30 PM"],
      nameLabel: "Your Name",
      namePlaceholder: "E.g., Sarah Jenkins",
      stageLabel: "Stage of Journey (Optional)",
      stageOptions: [
        "Where are you currently?",
        "Early Pregnancy (1-12 weeks)",
        "Middle Pregnancy (13-26 weeks)",
        "Late Pregnancy (27+ weeks)",
        "Newly Postpartum",
      ],
      submit: "Request My Sanctuary Time",
      note: "Rest assured, no payment is needed today. We prioritize your comfort above all else.",
    },
    faq: {
      title: "Caring Answers for Your Concerns",
      items: [
        {
          q: "Is this process truly safe for my baby and me?",
          a: "Yes, with absolute certainty. Our sugaring paste is purely organic—just sugar, water, and lemon. It contains no chemicals or fragrances that could irritate sensitive skin. Because it's used at body temperature, there is no risk of heat-related discomfort.",
        },
        {
          q: "I'm feeling extra sensitive—will it be okay?",
          a: "We completely understand. Hormonal shifts can make your skin more sensitive. We move at your pace, using extra-gentle techniques and allowing for as many breaks as you need.",
        },
        {
          q: "When is the best time to visit before my due date?",
          a: "Many mothers find comfort in visiting around week 34-36. We recommend booking your final session at least two weeks before your estimated due date.",
        },
        {
          q: "Can I bring a supportive partner with me?",
          a: "Of course. While our treatment room is a private space, we have a serene lounge where partners can relax with calming herbal tea.",
        },
      ],
    },
    location: {
      title: "Welcome Home",
      description:
        "Tucked away in a peaceful, leaf-lined district. Our facility is designed for easy movement—no stairs, wide sunlit corridors, and immediate calm.",
      badge: "Our Sanctuary",
      address: "1200 Sanctuary Blvd, Ste 400",
      valet: "Valet for Mums",
      valetDesc:
        "Pull up directly to our door, and our caring team will handle everything while you walk straight into your retreat.",
      hours: "Open for You",
      hoursValue: "Mon - Sat: 9am - 7pm",
      phone: "Care Line",
      phoneValue: "(555) 123-4567",
    },
    footer: {
      tagline:
        "Cultivating a world where every mother feels cherished, supported, and perfectly at peace during her most transformative season.",
      explore: "Explore",
      services: "Care Services",
      mission: "Our Mission",
      reservations: "Reservations",
      connect: "Connect",
      instagram: "Instagram",
      contact: "Contact Us",
      privacy: "Privacy Care",
      copyright: "© 2024 Bloom & Rest Maternity Sanctuary. All rights reserved.",
    },
  },
};

const images = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPsZ-zqOLcSXYYoijZs9KkgkJjKvGB-UHibBUiuKPoUsE6kuHbQyeWgkLEv5uawSsL59SdEfFlESwXPKBkPmRediJkiGdmfOJ4B_cKGbjGP50Un6JRwie1fIs7CDLifYDW70rGSKwloA1tpImFJ2TfQih-8-UWy3bIewzomhsyEBlZjsx2rEPzzBNqYw-UCY-CzmimJJ0V3Cl6WbqZgS4eBNNxpl-Lq38PBfq1Gd2D29L0vSRCBFGM-3JeTs95jCfYSSo-ga6UdNc",
  location:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuANXQiU21cMCf_Oli7v1WL3YmeA-gWbReY-DDJX9Qp7ET0p_rtNpYuyx_gGAn1gujsATwaidfqHZ6u_ykxRXc6lR_G6yusw1wU6WMvbVNxqxxeblrhPFSlvT2IsJ6h22Carj1Llwcrca8BcP82PVe5QwegWOK_1KlJtnGoy1DPZgi3K4AGOc1dIJAUWwUy_M2KsXuKf2Wh69_rzrDN6OGLbp6tk82GShqMnxr9ReX6TKPNOtIaBMaBRSMuCiZBPRDy2xu0leyajkWQ",
};

export default function BloomPage() {
  const locale = useLocale();
  const t = locale === "ko" ? content.ko : content.en;
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedTime, setSelectedTime] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Calendar days
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-bloom-bg font-[family-name:var(--font-nunito)] text-bloom-muted antialiased">
      {/* Header */}
      <header className="bg-bloom-surface border-b border-bloom-accent/50">
        <div className="max-w-[960px] mx-auto px-4 md:px-10 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-bloom-primary">
              <span className="material-symbols-outlined text-3xl">
                favorite
              </span>
              <h2 className="font-[family-name:var(--font-merriweather)] text-bloom-text text-xl font-bold tracking-tight">
                {t.nav.brand}
              </h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#"
                className="text-bloom-muted text-sm font-semibold hover:text-bloom-primary transition-colors"
              >
                {t.nav.welcome}
              </Link>
              <Link
                href="#"
                className="text-bloom-muted text-sm font-semibold hover:text-bloom-primary transition-colors"
              >
                {t.nav.heart}
              </Link>
              <Link
                href="#"
                className="text-bloom-muted text-sm font-semibold hover:text-bloom-primary transition-colors"
              >
                {t.nav.care}
              </Link>
              <Link
                href="#"
                className="text-bloom-primary text-sm font-bold border-b-2 border-bloom-primary"
              >
                {t.nav.reserve}
              </Link>
              <button className="bg-bloom-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-bloom-primary/90 transition-all shadow-md">
                {t.nav.book}
              </button>
            </nav>
            <button className="md:hidden text-bloom-text">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-10 py-6">
        <div className="max-w-[960px] mx-auto">
          <div
            className="relative min-h-[420px] rounded-3xl overflow-hidden flex items-center justify-center p-8 md:p-12"
            style={{
              backgroundImage: `linear-gradient(rgba(217, 126, 106, 0.45), rgba(92, 74, 67, 0.6)), url("${images.hero}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-center max-w-[650px] z-10">
              <h1 className="font-[family-name:var(--font-merriweather)] text-white text-3xl md:text-5xl font-bold leading-tight italic mb-6">
                {t.hero.title}
              </h1>
              <p className="text-white/95 text-base md:text-lg leading-relaxed">
                {t.hero.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-bloom-bg py-16 md:py-20">
        <div className="max-w-[960px] mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-merriweather)] text-bloom-text text-2xl md:text-[32px] font-bold mb-4">
              {t.features.title}
            </h2>
            <p className="text-bloom-muted text-lg max-w-[650px] mx-auto">
              {t.features.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {t.features.items.map((item, index) => (
              <div
                key={index}
                className={`group bg-bloom-surface rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border ${
                  index === 1
                    ? "border-bloom-secondary/30"
                    : "border-bloom-accent"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                    index === 1
                      ? "bg-bloom-secondary/20 text-bloom-secondary"
                      : "bg-bloom-accent/40 text-bloom-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-merriweather)] text-bloom-text text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-bloom-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-bloom-surface border-y border-bloom-accent/50 py-16 md:py-20">
        <div className="max-w-[960px] mx-auto px-4 md:px-10">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-merriweather)] text-bloom-text text-2xl md:text-3xl font-bold italic mb-3">
              {t.booking.title}
            </h2>
            <p className="text-bloom-muted max-w-[600px] mx-auto">
              {t.booking.description}
            </p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl shadow-bloom-primary/5 border border-bloom-accent/50 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Calendar */}
              <div className="flex-1 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-bloom-accent/50 bg-[#fffdfc]">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-xl text-bloom-text">
                    {t.booking.month}
                  </h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-bloom-accent/30 text-bloom-primary transition-colors">
                      <span className="material-symbols-outlined">
                        chevron_left
                      </span>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-bloom-accent/30 text-bloom-primary transition-colors">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>

                {/* Week days */}
                <div className="grid grid-cols-7 gap-2 mb-4 text-center">
                  {["일", "월", "화", "수", "목", "금", "토"].map((day, i) => (
                    <span
                      key={day}
                      className={`text-[10px] font-bold uppercase tracking-widest ${
                        i === 0 || i === 6
                          ? "text-bloom-secondary"
                          : "text-bloom-muted/60"
                      }`}
                    >
                      {day}
                    </span>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold">
                  {/* Empty cells for start of month */}
                  <div className="p-2 text-gray-200">30</div>
                  <div className="p-2 text-gray-200">31</div>
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`p-2 rounded-xl transition-all ${
                        selectedDate === day
                          ? "bg-bloom-primary text-white shadow-lg shadow-bloom-primary/30 scale-110"
                          : "hover:bg-bloom-accent/20 text-bloom-muted"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slots & Form */}
              <div className="flex-1 p-6 md:p-10 bg-[#fdfaf8]">
                <div className="mb-8">
                  <h3 className="font-bold text-xl text-bloom-text mb-5">
                    {t.booking.times}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {t.booking.slots.map((slot, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedTime(i)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                          selectedTime === i
                            ? "bg-bloom-secondary text-white shadow-md"
                            : "border border-bloom-accent bg-white text-bloom-muted hover:border-bloom-primary hover:text-bloom-primary"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <form className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-bloom-muted/70 ml-1">
                      {t.booking.nameLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.booking.namePlaceholder}
                      className="h-12 rounded-2xl border border-bloom-accent px-5 text-sm outline-none focus:border-bloom-primary focus:ring-2 focus:ring-bloom-primary/10 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-bloom-muted/70 ml-1">
                      {t.booking.stageLabel}
                    </label>
                    <select className="h-12 rounded-2xl border border-bloom-accent px-5 text-sm outline-none focus:border-bloom-primary focus:ring-2 focus:ring-bloom-primary/10 bg-white appearance-none">
                      {t.booking.stageOptions.map((option, i) => (
                        <option key={i}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full h-14 bg-bloom-primary text-white rounded-full text-base font-bold hover:bg-bloom-primary/90 transition-all shadow-lg shadow-bloom-primary/20"
                  >
                    {t.booking.submit}
                  </button>
                  <p className="text-xs text-center text-bloom-muted/70 italic">
                    {t.booking.note}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-bloom-bg py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-4 md:px-10">
          <h2 className="font-[family-name:var(--font-merriweather)] text-bloom-text text-2xl md:text-[34px] font-bold text-center italic mb-10">
            {t.faq.title}
          </h2>

          <div className="flex flex-col gap-5">
            {t.faq.items.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-bloom-surface border border-bloom-accent/50 p-6 md:p-8 shadow-sm hover:border-bloom-primary/20 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-[family-name:var(--font-merriweather)] font-bold text-lg text-bloom-text pr-4">
                    {item.q}
                  </span>
                  <span
                    className={`material-symbols-outlined text-bloom-primary transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    expand_circle_down
                  </span>
                </button>
                {openFaq === index && (
                  <div className="mt-4 text-bloom-muted leading-relaxed border-t border-bloom-accent/50 pt-5">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-bloom-surface border-t border-bloom-accent/50 py-16 md:py-20">
        <div className="max-w-[960px] mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Map Image */}
            <div className="w-full lg:w-1/2 h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-bloom-primary/10 relative">
              <Image
                src={images.location}
                alt="Location"
                fill
                className="object-cover opacity-70 sepia-[0.2] saturate-[0.8]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-bloom-accent">
                <span className="material-symbols-outlined text-bloom-primary text-3xl">
                  location_on
                </span>
                <div>
                  <span className="text-xs font-bold text-bloom-secondary uppercase">
                    {t.location.badge}
                  </span>
                  <p className="text-sm font-bold text-bloom-text">
                    {t.location.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <div>
                <h2 className="font-[family-name:var(--font-merriweather)] text-bloom-text text-3xl md:text-4xl font-bold italic mb-4">
                  {t.location.title}
                </h2>
                <p className="text-bloom-muted text-lg leading-relaxed">
                  {t.location.description}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex gap-5 items-start p-6 rounded-[2rem] bg-bloom-accent/20 border border-bloom-accent/40">
                  <span className="material-symbols-outlined text-bloom-primary text-3xl mt-1">
                    local_parking
                  </span>
                  <div>
                    <h3 className="font-bold text-bloom-text text-xl">
                      {t.location.valet}
                    </h3>
                    <p className="text-sm text-bloom-muted mt-2 leading-relaxed">
                      {t.location.valetDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-8 flex-wrap">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-bloom-secondary/10 text-bloom-secondary">
                      <span className="material-symbols-outlined">
                        schedule
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-bloom-text text-sm">
                        {t.location.hours}
                      </h4>
                      <p className="text-xs text-bloom-muted">
                        {t.location.hoursValue}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-bloom-secondary/10 text-bloom-secondary">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-bloom-text text-sm">
                        {t.location.phone}
                      </h4>
                      <p className="text-xs text-bloom-muted">
                        {t.location.phoneValue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bloom-text text-bloom-bg py-16">
        <div className="max-w-[960px] mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="flex flex-col gap-5 max-w-[320px]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-bloom-accent">
                  favorite
                </span>
                <h3 className="font-[family-name:var(--font-merriweather)] font-bold text-2xl">
                  {t.nav.brand}
                </h3>
              </div>
              <p className="text-bloom-muted/60 text-sm leading-relaxed">
                {t.footer.tagline}
              </p>
            </div>

            <div className="flex gap-16">
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-xs uppercase tracking-widest text-bloom-accent/60">
                  {t.footer.explore}
                </h4>
                <Link
                  href="#"
                  className="text-bloom-muted/50 hover:text-white text-sm transition-colors"
                >
                  {t.footer.services}
                </Link>
                <Link
                  href="#"
                  className="text-bloom-muted/50 hover:text-white text-sm transition-colors"
                >
                  {t.footer.mission}
                </Link>
                <Link
                  href="#"
                  className="text-bloom-muted/50 hover:text-white text-sm transition-colors"
                >
                  {t.footer.reservations}
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-xs uppercase tracking-widest text-bloom-accent/60">
                  {t.footer.connect}
                </h4>
                <Link
                  href="#"
                  className="text-bloom-muted/50 hover:text-white text-sm transition-colors"
                >
                  {t.footer.instagram}
                </Link>
                <Link
                  href="#"
                  className="text-bloom-muted/50 hover:text-white text-sm transition-colors"
                >
                  {t.footer.contact}
                </Link>
                <Link
                  href="#"
                  className="text-bloom-muted/50 hover:text-white text-sm transition-colors"
                >
                  {t.footer.privacy}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center text-[10px] text-bloom-muted/40 uppercase tracking-[0.2em]">
          {t.footer.copyright}
        </div>
      </footer>

      {/* Back to Main Link */}
      <div className="fixed bottom-4 md:bottom-8 left-4 md:left-8 z-50">
        <Link
          href="/"
          className="bg-white/90 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-white transition-colors text-sm md:text-base border border-bloom-accent/50"
        >
          <span className="material-symbols-outlined text-bloom-primary">
            arrow_back
          </span>
          <span className="font-semibold text-bloom-text">
            {locale === "ko" ? "메인으로" : "Back to Main"}
          </span>
        </Link>
      </div>
    </div>
  );
}
