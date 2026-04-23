"use client";

import { useLocale } from "next-intl";
import { placeInfo } from "@/lib/data";

export default function MaternityHero() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative w-full overflow-hidden">
      <div className="px-4 py-8 md:px-10 md:py-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-xl overflow-hidden relative min-h-[560px] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCyKH164CM0v4KJRyzs2_Fm2mfbbWTOuCSEKKNkep5Gy5c_3dy9f5fDOvPtKhrk0P-Lowyi7bGBOjrez7IqxFp_JUHlMYk1XrMHUWQh8San-tCs933x46Y36NVcj5E_Kpq0jVAgnlHpPgRRf3WplLyMVG8qv5tobyA3GyLIH27WTKqS6ObTtP2IzovicBAX-BZjJOh5Qx6WfkncuXGmVu3z-M8qNTBbf7tg7jsnvptS1aXegvM9xIjf_tvx1_k9TgCiKInWhTDjME')",
              }}
            />
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="relative z-20 flex flex-col gap-6 text-center max-w-[800px] p-6">
              <span className="uppercase tracking-[0.2em] text-xs font-bold text-white/90">
                {isKo ? "프리미엄 임산부 케어" : "Premium Maternity Care"}
              </span>
              <h1 className="font-display text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
                {isKo ? (
                  <>
                    안전과 평온:
                    <br />
                    임산부 슈가링 전문가
                  </>
                ) : (
                  <>
                    Safety &amp; Serenity:
                    <br />
                    Maternity Sugaring Specialists
                  </>
                )}
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-[600px] mx-auto">
                {isKo
                  ? "예비 엄마의 가장 민감한 피부를 위해 특별히 설계된 부드럽고 100% 천연 케어."
                  : "Gentle, all-natural care designed specifically for the most sensitive skin of expecting mothers."}
              </p>
              <div className="pt-4">
                <a
                  href={placeInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {isKo ? "프라이빗 상담 예약" : "Book Private Consultation"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
