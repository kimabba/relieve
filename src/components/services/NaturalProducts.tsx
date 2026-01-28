"use client";

import { useLocale } from "next-intl";
import Image from "next/image";

const productsData = {
  ko: {
    sectionLabel: "천연 성분",
    title: "자연의 치유력",
    badge: "임산부 안전",
    products: [
      {
        name: "유기농 알로에 베라",
        description: "즉각적인 진정 효과",
        benefit: "진정",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD16psvcK1BlpApLttai9Y2E-Dgf-UDyyLBQi0mfIYbO8Nzhwofd65DjGwXfIw1tgqA5lc064LXA_VRUZKkQCNsTuDS3iabNs3DK1MljkBRZ_O0DaiVmucxxxlZln2yxNhRbN2FoGtkJi3he2y-DcLM2A_pwYdH_A7rHW3ifQTwN3MfjNWjOonDpt0ZgGRK-DKPtuRMaZPuptMigzg75iwqMLUvUdBUkO6J_oQutH9ECREXBQdHs5BOiRNSNBRYfX2QSPmqp2X2SwE",
      },
      {
        name: "캐모마일 추출물",
        description: "민감한 피부 진정",
        benefit: "안정",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDTj6Aoy4hxzAqiJK_x7EX4_BzjZbJ1VqzeszUoLSvSK4rLbjvQH8f_UN5fA9SqcEZ2xpZ4uE3h1rOtfoJACxH3e3sAySz-9NZOgG6Mfbv2wd6f0rB5L20i-qRn_zZD8vMPDfZBOfJIe2H1YRIP4BYIr0I-fcLDkXkb7PWeGHoF44f1c7ZkaySn0AXbj0rSB9U-Wdgl8vzCDPTkPUcsxE0AW0ggP_EBFq-3NoB0a6Ot1VZsxicgFj5B5x7E5TSf60ccKT9kaawlNGE",
      },
      {
        name: "티트리 오일",
        description: "천연 항균 보호",
        benefit: "보호",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCiF8Cg5QSwrtWvXP6-qWl_sBsFu50zw8E1TRigjjYbutI9w2TGx52dyfR2kRY6KrDUKUQUX1oC0QXp7H4XZQwBaaL-l_ekbjzWFTD_7AV3OoKyv17UEnTMGuPzgNr3QEHSaEPI6ft9HbyLeIf39xU2VcfA1ZfnakQpPERYFaDDepWTliTNVPzvsz6dffHCC9K6u-AA_L6X5Dd4TiiMwj4ShVa2CGhk54WBzfAPF70DFG9_wzEQ-gMAT6Z8m2c5Laa1RQm8x6Mw6Vk",
      },
    ],
  },
  en: {
    sectionLabel: "Natural Ingredients",
    title: "Nature's Healing Touch",
    badge: "Pregnancy Safe",
    products: [
      {
        name: "Organic Aloe Vera",
        description: "Soothes inflammation instantly.",
        benefit: "Soothe",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD16psvcK1BlpApLttai9Y2E-Dgf-UDyyLBQi0mfIYbO8Nzhwofd65DjGwXfIw1tgqA5lc064LXA_VRUZKkQCNsTuDS3iabNs3DK1MljkBRZ_O0DaiVmucxxxlZln2yxNhRbN2FoGtkJi3he2y-DcLM2A_pwYdH_A7rHW3ifQTwN3MfjNWjOonDpt0ZgGRK-DKPtuRMaZPuptMigzg75iwqMLUvUdBUkO6J_oQutH9ECREXBQdHs5BOiRNSNBRYfX2QSPmqp2X2SwE",
      },
      {
        name: "Chamomile Extract",
        description: "Calms sensitive skin.",
        benefit: "Calm",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDTj6Aoy4hxzAqiJK_x7EX4_BzjZbJ1VqzeszUoLSvSK4rLbjvQH8f_UN5fA9SqcEZ2xpZ4uE3h1rOtfoJACxH3e3sAySz-9NZOgG6Mfbv2wd6f0rB5L20i-qRn_zZD8vMPDfZBOfJIe2H1YRIP4BYIr0I-fcLDkXkb7PWeGHoF44f1c7ZkaySn0AXbj0rSB9U-Wdgl8vzCDPTkPUcsxE0AW0ggP_EBFq-3NoB0a6Ot1VZsxicgFj5B5x7E5TSf60ccKT9kaawlNGE",
      },
      {
        name: "Tea Tree Oil",
        description: "Natural antibacterial protection.",
        benefit: "Protect",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCiF8Cg5QSwrtWvXP6-qWl_sBsFu50zw8E1TRigjjYbutI9w2TGx52dyfR2kRY6KrDUKUQUX1oC0QXp7H4XZQwBaaL-l_ekbjzWFTD_7AV3OoKyv17UEnTMGuPzgNr3QEHSaEPI6ft9HbyLeIf39xU2VcfA1ZfnakQpPERYFaDDepWTliTNVPzvsz6dffHCC9K6u-AA_L6X5Dd4TiiMwj4ShVa2CGhk54WBzfAPF70DFG9_wzEQ-gMAT6Z8m2c5Laa1RQm8x6Mw6Vk",
      },
    ],
  },
};

export default function NaturalProducts() {
  const locale = useLocale();
  const content = locale === "ko" ? productsData.ko : productsData.en;

  return (
    <div className="bg-white dark:bg-[#32322a] p-6 lg:p-8 rounded-[12px] shadow-stitch">
      {/* Stitch-style Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className="section-label">{content.sectionLabel}</span>
          <h4 className="font-display font-bold text-xl text-text-main dark:text-white mt-1">
            {content.title}
          </h4>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest bg-accent-teal/10 text-accent-teal px-3 py-1.5 rounded-full flex items-center gap-1">
          <span className="material-symbols-outlined text-xs">verified</span>
          {content.badge}
        </span>
      </div>

      {/* Stitch-style Products Grid */}
      <div className="grid grid-cols-1 gap-4">
        {content.products.map((product, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 p-4 bg-secondary-bg dark:bg-background-dark rounded-[12px] border border-primary/10 transition-all duration-300 hover:shadow-stitch hover:-translate-y-0.5"
          >
            {/* Product Image */}
            <div className="size-16 rounded-[10px] bg-white dark:bg-white/10 shrink-0 overflow-hidden relative shadow-stitch-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="64px"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <h5 className="font-display font-bold text-text-main dark:text-white text-sm mb-0.5">
                {product.name}
              </h5>
              <p className="text-xs text-text-muted dark:text-gray-400">
                {product.description}
              </p>
            </div>

            {/* Benefit Badge */}
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full shrink-0">
              {product.benefit}
            </span>
          </div>
        ))}
      </div>

      {/* Stitch-style Footer Note */}
      <div className="mt-6 pt-4 border-t border-primary/10 flex items-center gap-2 text-xs text-text-muted dark:text-gray-400">
        <span className="material-symbols-outlined text-primary text-sm">
          eco
        </span>
        {locale === "ko"
          ? "모든 제품은 유기농 인증을 받았습니다"
          : "All products are organically certified"}
      </div>
    </div>
  );
}
