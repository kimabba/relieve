"use client";

import { useLocale } from "next-intl";
import Image from "next/image";

const productsData = {
  ko: {
    title: "자연의 치유력",
    badge: "임산부 안전",
    products: [
      {
        name: "유기농 알로에 베라",
        description: "즉각적인 진정 효과",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD16psvcK1BlpApLttai9Y2E-Dgf-UDyyLBQi0mfIYbO8Nzhwofd65DjGwXfIw1tgqA5lc064LXA_VRUZKkQCNsTuDS3iabNs3DK1MljkBRZ_O0DaiVmucxxxlZln2yxNhRbN2FoGtkJi3he2y-DcLM2A_pwYdH_A7rHW3ifQTwN3MfjNWjOonDpt0ZgGRK-DKPtuRMaZPuptMigzg75iwqMLUvUdBUkO6J_oQutH9ECREXBQdHs5BOiRNSNBRYfX2QSPmqp2X2SwE",
      },
      {
        name: "캐모마일 추출물",
        description: "민감한 피부 진정",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDTj6Aoy4hxzAqiJK_x7EX4_BzjZbJ1VqzeszUoLSvSK4rLbjvQH8f_UN5fA9SqcEZ2xpZ4uE3h1rOtfoJACxH3e3sAySz-9NZOgG6Mfbv2wd6f0rB5L20i-qRn_zZD8vMPDfZBOfJIe2H1YRIP4BYIr0I-fcLDkXkb7PWeGHoF44f1c7ZkaySn0AXbj0rSB9U-Wdgl8vzCDPTkPUcsxE0AW0ggP_EBFq-3NoB0a6Ot1VZsxicgFj5B5x7E5TSf60ccKT9kaawlNGE",
      },
      {
        name: "티트리 오일",
        description: "천연 항균 보호",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCiF8Cg5QSwrtWvXP6-qWl_sBsFu50zw8E1TRigjjYbutI9w2TGx52dyfR2kRY6KrDUKUQUX1oC0QXp7H4XZQwBaaL-l_ekbjzWFTD_7AV3OoKyv17UEnTMGuPzgNr3QEHSaEPI6ft9HbyLeIf39xU2VcfA1ZfnakQpPERYFaDDepWTliTNVPzvsz6dffHCC9K6u-AA_L6X5Dd4TiiMwj4ShVa2CGhk54WBzfAPF70DFG9_wzEQ-gMAT6Z8m2c5Laa1RQm8x6Mw6Vk",
      },
    ],
  },
  en: {
    title: "Nature's Healing Touch",
    badge: "Pregnancy Safe",
    products: [
      {
        name: "Organic Aloe Vera",
        description: "Soothes inflammation instantly.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD16psvcK1BlpApLttai9Y2E-Dgf-UDyyLBQi0mfIYbO8Nzhwofd65DjGwXfIw1tgqA5lc064LXA_VRUZKkQCNsTuDS3iabNs3DK1MljkBRZ_O0DaiVmucxxxlZln2yxNhRbN2FoGtkJi3he2y-DcLM2A_pwYdH_A7rHW3ifQTwN3MfjNWjOonDpt0ZgGRK-DKPtuRMaZPuptMigzg75iwqMLUvUdBUkO6J_oQutH9ECREXBQdHs5BOiRNSNBRYfX2QSPmqp2X2SwE",
      },
      {
        name: "Chamomile Extract",
        description: "Calms sensitive skin.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDTj6Aoy4hxzAqiJK_x7EX4_BzjZbJ1VqzeszUoLSvSK4rLbjvQH8f_UN5fA9SqcEZ2xpZ4uE3h1rOtfoJACxH3e3sAySz-9NZOgG6Mfbv2wd6f0rB5L20i-qRn_zZD8vMPDfZBOfJIe2H1YRIP4BYIr0I-fcLDkXkb7PWeGHoF44f1c7ZkaySn0AXbj0rSB9U-Wdgl8vzCDPTkPUcsxE0AW0ggP_EBFq-3NoB0a6Ot1VZsxicgFj5B5x7E5TSf60ccKT9kaawlNGE",
      },
      {
        name: "Tea Tree Oil",
        description: "Natural antibacterial protection.",
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
    <div className="bg-secondary-bg dark:bg-white/5 p-6 lg:p-8 rounded-2xl border border-accent-gold/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-display font-bold text-xl text-text-main dark:text-white">
          {content.title}
        </h4>
        <span className="text-[10px] font-bold uppercase tracking-widest bg-green-100 text-green-800 px-2 py-1 rounded-md">
          {content.badge}
        </span>
      </div>

      {/* Products List */}
      <div className="flex flex-col gap-4">
        {content.products.map((product, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 bg-white dark:bg-black/20 rounded-xl shadow-sm border border-black/5 dark:border-white/5 transition-transform hover:-translate-y-1"
          >
            {/* Product Image */}
            <div className="w-14 h-14 rounded-lg bg-gray-100 shrink-0 overflow-hidden relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>

            {/* Product Info */}
            <div>
              <h5 className="font-bold text-text-main dark:text-white text-sm">
                {product.name}
              </h5>
              <p className="text-xs text-text-muted dark:text-gray-400">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
