"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { placeInfo, contact } from "@/lib/data";
import CTASection from "@/components/home/CTASection";

export default function EducationPage() {
  const locale = useLocale();
  const isKo = locale === "ko";

  const credentials = [
    {
      year: "2025",
      titleKo: "한국왁싱뷰티협회 교육이사 위촉",
      titleEn: "Appointed Education Director, Korea Waxing Beauty Association",
      highlight: true,
    },
    {
      year: "2025",
      titleKo: "국제왁싱기능경기대회 심사위원 위촉",
      titleEn: "Appointed Judge, International Waxing Skills Competition",
      highlight: true,
    },
    {
      year: "2023",
      titleKo: "국제왁싱기능경기대회 프로부 그랑프리대상 수상",
      titleEn: "Grand Prix Winner, International Waxing Competition (Pro Division)",
      highlight: true,
    },
    {
      year: "",
      titleKo: "MELLOW 슈퍼바이저 교육과정 이수",
      titleEn: "Completed MELLOW Supervisor Training",
      highlight: false,
    },
    {
      year: "",
      titleKo: "브라질리언 메디컬 교육강사 자격",
      titleEn: "Brazilian Medical Instructor Certification",
      highlight: false,
    },
    {
      year: "",
      titleKo: "슈가링전문지도자 자격증",
      titleEn: "Sugaring Professional Instructor License",
      highlight: false,
    },
  ];

  const courses = [
    {
      icon: "school",
      titleKo: "기초반",
      titleEn: "Basic Course",
      durationKo: "2주 과정",
      durationEn: "2-Week Program",
      descKo: "왁싱의 기본 이론부터 실전 테크닉까지. 초보자를 위한 완벽한 입문 코스",
      descEn: "From basic theory to practical techniques. Perfect introduction for beginners",
      contentsKo: ["왁싱 이론 및 피부학", "위생 관리", "기본 부위 실습", "고객 응대법"],
      contentsEn: ["Waxing theory & dermatology", "Hygiene management", "Basic area practice", "Customer service"],
      priceKo: "상담 후 결정",
      priceEn: "Upon consultation",
    },
    {
      icon: "workspace_premium",
      titleKo: "전문가반",
      titleEn: "Professional Course",
      durationKo: "4주 과정",
      durationEn: "4-Week Program",
      descKo: "브라질리언 슈가링 전문 테크닉. 현직 원장을 위한 스킬업 과정",
      descEn: "Specialized Brazilian sugaring techniques. Skill-up course for working professionals",
      contentsKo: ["브라질리언 전문 테크닉", "슈가링 심화", "트러블 대응법", "매장 운영 노하우"],
      contentsEn: ["Brazilian specialized techniques", "Advanced sugaring", "Trouble handling", "Salon management"],
      priceKo: "상담 후 결정",
      priceEn: "Upon consultation",
    },
    {
      icon: "emoji_events",
      titleKo: "마스터반",
      titleEn: "Master Course",
      durationKo: "6주 과정",
      durationEn: "6-Week Program",
      descKo: "교육 강사를 목표로 하는 분들을 위한 최고 수준의 마스터 과정",
      descEn: "Top-level master course for those aiming to become instructors",
      contentsKo: ["강사 양성 프로그램", "대회 준비반", "1:1 멘토링", "자격증 취득 지원"],
      contentsEn: ["Instructor training", "Competition prep", "1:1 mentoring", "Certification support"],
      priceKo: "상담 후 결정",
      priceEn: "Upon consultation",
    },
  ];

  const benefits = [
    {
      icon: "military_tech",
      titleKo: "국제대회 수상 경력 강사",
      titleEn: "Award-Winning Instructor",
      descKo: "2023 그랑프리 수상자가 직접 지도",
      descEn: "Direct instruction from 2023 Grand Prix winner",
    },
    {
      icon: "groups",
      titleKo: "소수 정예 수업",
      titleEn: "Small Group Classes",
      descKo: "1:1 맞춤 피드백 제공",
      descEn: "Personalized 1:1 feedback",
    },
    {
      icon: "handshake",
      titleKo: "취업 연계 지원",
      titleEn: "Job Placement Support",
      descKo: "수료 후 취업 연계 프로그램",
      descEn: "Employment connection program after completion",
    },
    {
      icon: "card_membership",
      titleKo: "자격증 취득 지원",
      titleEn: "Certification Support",
      descKo: "민간 자격증 취득까지 지원",
      descEn: "Support for obtaining certifications",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background - Waxly cream */}
        <div className="absolute inset-0 bg-waxly-cream" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-[10%] w-32 h-32 bg-waxly-brown/5" />
        <div className="absolute bottom-32 right-[15%] w-24 h-24 bg-waxly-gold/10" />

        <div className="relative min-h-[70vh] flex items-center pt-32 pb-20">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 py-2.5 px-6 bg-white border border-waxly-brown/20 text-waxly-brown text-sm font-medium">
                  <span
                    className="material-symbols-outlined text-base"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    school
                  </span>
                  {isKo ? "한국왁싱뷰티협회 교육이사" : "KWBA Education Director"}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl text-waxly-brown mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {isKo ? "왁싱 전문 교육" : "Professional Waxing Education"}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg lg:text-xl text-waxly-brownLight mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {isKo
                  ? "국제대회 그랑프리 수상자가 직접 가르치는\n체계적인 왁싱 & 슈가링 전문 교육 프로그램"
                  : "Systematic waxing & sugaring education program\ntaught directly by an International Grand Prix winner"}
              </motion.p>

              {/* CTA */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-waxly-brown text-white font-medium text-lg hover:bg-waxly-brownLight transition-colors"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    call
                  </span>
                  {isKo ? "교육 문의하기" : "Inquire Now"}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 py-2 px-5 bg-waxly-gold/10 border border-waxly-gold/30 text-waxly-brown text-sm font-medium mb-6">
              <span
                className="material-symbols-outlined text-base"
                style={{ fontVariationSettings: "'wght' 200" }}
              >
                verified
              </span>
              {isKo ? "강사 자격" : "Instructor Credentials"}
            </span>
            <h2
              className="text-3xl lg:text-4xl text-waxly-brown"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              {isKo ? "검증된 전문 강사" : "Certified Expert Instructor"}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-4 p-4 mb-3 border ${
                  cred.highlight ? "bg-waxly-gold/5 border-waxly-gold/30" : "bg-waxly-cream/50 border-waxly-brown/10"
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {cred.highlight && (
                  <span
                    className="material-symbols-outlined text-waxly-gold text-2xl"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    emoji_events
                  </span>
                )}
                {!cred.highlight && (
                  <span
                    className="material-symbols-outlined text-waxly-brownLight text-2xl"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    check_circle
                  </span>
                )}
                <div className="flex-1">
                  <span className="text-waxly-brown">
                    {cred.year && <span className="text-waxly-brownLight mr-2">{cred.year}</span>}
                    {isKo ? cred.titleKo : cred.titleEn}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 lg:py-32 bg-waxly-cream">
        <div className="section-container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 py-2 px-5 bg-waxly-brown/10 border border-waxly-brown/20 text-waxly-brown text-sm font-medium mb-6">
              <span
                className="material-symbols-outlined text-base"
                style={{ fontVariationSettings: "'wght' 200" }}
              >
                menu_book
              </span>
              {isKo ? "교육 과정" : "Curriculum"}
            </span>
            <h2
              className="text-3xl lg:text-4xl text-waxly-brown mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              {isKo ? "단계별 맞춤 교육" : "Step-by-Step Custom Training"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.icon}
                className="bg-white p-8 border border-waxly-brown/10 hover:border-waxly-brown/30 transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-waxly-cream border border-waxly-brown/10 flex items-center justify-center mx-auto mb-4">
                    <span
                      className="material-symbols-outlined text-3xl text-waxly-brown"
                      style={{ fontVariationSettings: "'wght' 200" }}
                    >
                      {course.icon}
                    </span>
                  </div>
                  <h3
                    className="text-xl text-waxly-brown mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
                  >
                    {isKo ? course.titleKo : course.titleEn}
                  </h3>
                  <span className="text-sm text-waxly-brownLight">
                    {isKo ? course.durationKo : course.durationEn}
                  </span>
                </div>

                {/* Description */}
                <p className="text-waxly-brownLight text-center mb-6 leading-relaxed">
                  {isKo ? course.descKo : course.descEn}
                </p>

                {/* Contents */}
                <div className="flex-1">
                  <ul className="space-y-2">
                    {(isKo ? course.contentsKo : course.contentsEn).map((content, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-waxly-brown">
                        <span className="w-1.5 h-1.5 bg-waxly-gold" />
                        {content}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="mt-6 pt-6 border-t border-waxly-brown/10 text-center">
                  <span className="text-lg text-waxly-brown">
                    {isKo ? course.priceKo : course.priceEn}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-waxly-brown">
        <div className="section-container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl lg:text-4xl text-white"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              {isKo ? "릴리브 교육만의 특별함" : "What Makes Us Special"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.icon}
                className="bg-white/10 p-6 text-center border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
                  <span
                    className="material-symbols-outlined text-2xl text-white"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    {benefit.icon}
                  </span>
                </div>
                <h3
                  className="text-lg text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
                >
                  {isKo ? benefit.titleKo : benefit.titleEn}
                </h3>
                <p className="text-white/70 text-sm">
                  {isKo ? benefit.descKo : benefit.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl lg:text-4xl text-waxly-brown mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                {isKo ? "교육 상담 신청" : "Education Consultation"}
              </h2>
              <p className="text-waxly-brownLight mb-8 leading-relaxed">
                {isKo
                  ? "교육 과정에 대해 궁금하신 점이 있으시면 언제든 문의해주세요.\n상담을 통해 맞춤 교육 계획을 세워드립니다."
                  : "If you have any questions about our courses, please feel free to contact us.\nWe'll create a customized training plan through consultation."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-waxly-brown text-white font-medium text-lg hover:bg-waxly-brownLight transition-colors"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    call
                  </span>
                  {contact.phone}
                </a>
                <a
                  href={placeInfo.naverMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-waxly-cream border border-waxly-brown/20 text-waxly-brown font-medium text-lg hover:bg-waxly-cream/80 transition-colors"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    location_on
                  </span>
                  {isKo ? "오시는 길" : "Location"}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
