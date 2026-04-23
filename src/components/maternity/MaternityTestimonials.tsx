"use client";

import { useLocale } from "next-intl";

const testimonials = [
  {
    quoteKo: "34주에 왁싱을 받는 것이 너무 걱정됐는데, 팀이 정말 품위 있고 편안하게 해줬어요. 베개가 정말 달랐어요.",
    quoteEn: "I was terrified to get waxed at 34 weeks, but the team made me feel so dignified and comfortable. The pillows were a game changer.",
    nameKo: "김지혜",
    nameEn: "Sarah J.",
    weekKo: "34주",
    weekEn: "34 Weeks",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM7LFnR-ZTiqVwzkBRT2ZxubO1p1h7vM-Lhd9qq_-txxv0kY7Wp2sFAfhvSA2CM22izvBDPq56fSDuK1B1m1bKgLIAQD_fyMWMIE_Lv_3-ruYEfoFv-QTKUGSHz139cP9zeppN18XYQwJ0eSnX-YEiyQtb31M-M421iKhiHePz-e6exApUkmG3TJRe4-dS8SzviUOi3aP71_1yr8FDvMdpuA5y33cOP_xkzThWlTg-IGKKFTY8lzPIROqGIjrcCRqiLqQtBSietqE",
    featured: false,
  },
  {
    quoteKo: "프라이빗 상담이 정말 마음을 편하게 해줬어요. 성분에 대해 모든 것을 설명해줬고, 피부가 이렇게 좋았던 적이 없었어요.",
    quoteEn: "The private consultation really put my mind at ease. They explained everything about the ingredients. My skin has never been happier.",
    nameKo: "이수진",
    nameEn: "Emily R.",
    weekKo: "22주",
    weekEn: "22 Weeks",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXI9dpGqvbEzUO5jaCcZXTX9IvGvJ-QVDNS1Pfbof3o6Po8NifJMqb55usjOjgeI3JAj-j-ksBedS6yIym65Sm9x3ZfAgZQfMqnzTxdnJHTDb0-rydoQRcQajOmisrFgFraUOdy1nJ7RNK6g7xGTp-V-2A2j1tNGOju_6UV9zv0JpWlkHvOWJFlGrzsZ8q3Dk8NEzitFCTic0XDi70sQ54QBhKAnDiM9WX8disY9Pz1ygfPd4trHzsGAYZHrU-PmrW-L3byFgfEdk",
    featured: true,
  },
  {
    quoteKo: "임산부 엄마에게 강력 추천합니다. 슈가링이 왁스보다 훨씬 부드럽고, 분위기가 완전한 평온함 그 자체예요.",
    quoteEn: "Highly recommend for any expecting mom. The sugaring is so much gentler than wax, and the atmosphere is pure zen.",
    nameKo: "박민지",
    nameEn: "Michelle T.",
    weekKo: "출산 후",
    weekEn: "Post-Partum",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJFKLkkSBumaYxGDyuj3aS4wDDG9WrLqxvLq7s6FpRKYRHA-brMkBDx0VRhk0jqzer0Us80dIiWF5fybda17jPILm24fImmfy9xt-Zo1ffwyMSx2aQl-w47EEbHY6t4iAZmBL75384gpSG01PYqon9ybOcq20OFZxgsi_kAv0JPEGvv7NDQcHnKk3SKsipYXR-2vK8850S6dQ5nWoonOulIgklX6lwHolcs5zPqunZXrA17h9ZfbNTL5K5yu4YzoVs4VbSVbP-Nlk",
    featured: false,
  },
];

export default function MaternityTestimonials() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="bg-background-light py-24 px-4 md:px-10 border-t border-primary/10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display text-center text-3xl font-bold mb-16 text-text-main">
          {isKo ? "엄마들의 이야기" : "Stories from Mothers"}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.nameEn}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-primary/20 transition-all ${
                t.featured ? "md:-mt-4" : ""
              }`}
            >
              <div className="flex gap-1 text-primary mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm">
                    star
                  </span>
                ))}
              </div>
              <p className="text-lg italic font-medium mb-6 text-text-main">
                &ldquo;{isKo ? t.quoteKo : t.quoteEn}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="size-10 rounded-full bg-gray-200 overflow-hidden bg-cover bg-center shrink-0"
                  style={{ backgroundImage: `url('${t.avatar}')` }}
                />
                <div>
                  <p className="font-bold text-sm text-text-main">
                    {isKo ? t.nameKo : t.nameEn}
                  </p>
                  <p className="text-xs text-text-muted">
                    {isKo ? t.weekKo : t.weekEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
