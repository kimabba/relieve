"use client";

import { useLocale } from "next-intl";

const timelineSteps = [
  {
    icon: "schedule",
    titleKo: "시술 직후",
    titleEn: "Immediately After",
    descKo: "통기성 좋은 면 소재의 헐렁한 옷을 입어 피부가 숨 쉴 수 있게 하세요. 뜨거운 샤워나 사우나 등 열원을 피해주세요.",
    descEn: "Wear loose, cotton clothing to allow skin to breathe. Avoid heat sources like hot showers or saunas.",
  },
  {
    icon: "calendar_today",
    titleKo: "24시간 후",
    titleEn: "24 Hours Later",
    descKo: "추천 유기농 오일로 보습을 시작하여 피부를 부드럽고 촉촉하게 유지하세요.",
    descEn: "Begin moisturizing with our recommended organic oils to keep skin supple and hydrated.",
  },
  {
    icon: "event_repeat",
    titleKo: "3일 후",
    titleEn: "3 Days Later",
    descKo: "슈가 스크럽으로 부드럽게 각질을 제거하여 내성 모발을 예방하세요. 주 2-3회 지속하세요.",
    descEn: "Exfoliate gently with a sugar scrub to prevent ingrown hairs. Continue 2-3 times per week.",
  },
];

const products = [
  {
    nameKo: "유기농 알로에베라",
    nameEn: "Organic Aloe Vera",
    descKo: "즉각적인 염증 진정 효과.",
    descEn: "Soothes inflammation instantly.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD16psvcK1BlpApLttai9Y2E-Dgf-UDyyLBQi0mfIYbO8Nzhwofd65DjGwXfIw1tgqA5lc064LXA_VRUZKkQCNsTuDS3iabNs3DK1MljkBRZ_O0DaiVmucxxxlZln2yxNhRbN2FoGtkJi3he2y-DcLM2A_pwYdH_A7rHW3ifQTwN3MfjNWjOonDpt0ZgGRK-DKPtuRMaZPuptMigzg75iwqMLUvUdBUkO6J_oQutH9ECREXBQdHs5BOiRNSNBRYfX2QSPmqp2X2SwE",
  },
  {
    nameKo: "카모마일 추출물",
    nameEn: "Chamomile Extract",
    descKo: "민감한 피부를 진정시킵니다.",
    descEn: "Calms sensitive skin.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTj6Aoy4hxzAqiJK_x7EX4_BzjZbJ1VqzeszUoLSvSK4rLbjvQH8f_UN5fA9SqcEZ2xpZ4uE3h1rOtfoJACxH3e3sAySz-9NZOgG6Mfbv2wd6f0rB5L20i-qRn_zZD8vMPDfZBOfJIe2H1YRIP4BYIr0I-fcLDkXkb7PWeGHoF44f1c7ZkaySn0AXbj0rSB9U-Wdgl8vzCDPTkPUcsxE0AW0ggP_EBFq-3NoB0a6Ot1VZsxicgFj5B5x7E5TSf60ccKT9kaawlNGE",
  },
  {
    nameKo: "티트리 오일",
    nameEn: "Tea Tree Oil",
    descKo: "천연 항균 보호.",
    descEn: "Natural antibacterial protection.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCiF8Cg5QSwrtWvXP6-qWl_sBsFu50zw8E1TRigjjYbutI9w2TGx52dyfR2kRY6KrDUKUQUX1oC0QXp7H4XZQwBaaL-l_ekbjzWFTD_7AV3OoKyv17UEnTMGuPzgNr3QEHSaEPI6ft9HbyLeIf39xU2VcfA1ZfnakQpPERYFaDDepWTliTNVPzvsz6dffHCC9K6u-AA_L6X5Dd4TiiMwj4ShVa2CGhk54WBzfAPF70DFG9_wzEQ-gMAT6Z8m2c5Laa1RQm8x6Mw6Vk",
  },
];

export default function PostTreatmentRituals() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="py-16 md:py-24 px-4 flex justify-center bg-background-light">
      <div className="max-w-[960px] w-full flex flex-col gap-12">
        <div className="text-center md:text-left border-b border-primary/20 pb-6">
          <p className="text-primary font-bold tracking-widest uppercase text-xs mb-2">
            {isKo ? "시술 후 관리" : "Aftercare"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-main">
            {isKo ? "시술 후 관리 루틴" : "Post-Treatment Rituals"}
          </h2>
          <p className="mt-4 text-text-muted max-w-xl">
            {isKo
              ? "임산부 전용 슈가링 기법은 부드럽지만, 올바른 관리를 통해 피부를 진정되고 빛나게 유지하세요."
              : "Our specialized maternity sugaring technique is gentle, but proper aftercare ensures your skin remains calm and radiant."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Timeline */}
          <div className="flex flex-col gap-0">
            {timelineSteps.map((step, i) => (
              <div key={step.icon} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-xl">{step.icon}</span>
                  </div>
                  {i < timelineSteps.length - 1 && (
                    <div className="w-px bg-primary/20 flex-1 my-2" />
                  )}
                </div>
                <div className={`pt-2 ${i < timelineSteps.length - 1 ? "pb-8" : ""}`}>
                  <h3 className="text-lg font-bold text-text-main font-display">
                    {isKo ? step.titleKo : step.titleEn}
                  </h3>
                  <p className="text-text-muted text-sm mt-1 leading-relaxed">
                    {isKo ? step.descKo : step.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Products */}
          <div className="bg-secondary-bg p-6 md:p-8 rounded-2xl border border-primary/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-xl text-text-main">
                {isKo ? "자연의 치유력" : "Nature's Healing Touch"}
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-green-100 text-green-800 px-2 py-1 rounded-md">
                {isKo ? "임산부 안전" : "Pregnancy Safe"}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {products.map((product) => (
                <div
                  key={product.nameEn}
                  className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm border border-black/5 hover:-translate-y-0.5 transition-transform"
                >
                  <div
                    className="w-14 h-14 rounded-lg bg-gray-100 shrink-0 overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                  <div>
                    <h4 className="font-bold text-text-main text-sm">
                      {isKo ? product.nameKo : product.nameEn}
                    </h4>
                    <p className="text-xs text-text-muted">
                      {isKo ? product.descKo : product.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
