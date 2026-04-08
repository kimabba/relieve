"use client";

import { useLocale } from "next-intl";
import { placeInfo } from "@/lib/data";

export default function AftercareHero() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative w-full py-12 md:py-20 px-4 flex justify-center bg-background-light">
      <div className="max-w-[960px] w-full flex flex-col items-center">
        <div className="w-full rounded-2xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
          <div
            className="w-full h-[400px] md:h-[500px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6KUrKjG1QV4aB8KBsVKhJbAaOzE8sRDYA6JqHE-ncotDgaCRg78Y8uyrwmuqsGB7xJ6rvQu140qfepLVgzCBGR5nXPCQ1EruQwZ3wkBX4K2Wlm1WzkpierLMBGspzFdTOvV3Exh2N1Go0FFj2B-klR8LiSC2SMheR1IYQNbyjP1Wx35Ba-hYkSlkP4uH_bcAODQqeoLHJwa466R_yuk0vG6XvOcTzkcCipvjMT1SJKsB3vFyzgka-cHQ13IUi-ZfRAff7A35WOmU')",
            }}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 md:p-12">
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/30">
              {isKo ? "임산부 안전 기준" : "Maternity Safe Standard"}
            </span>
            <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4 drop-shadow-sm">
              {isKo ? (
                <>
                  타협 없는 안전,
                  <br />
                  평온한 케어.
                </>
              ) : (
                <>
                  Uncompromising Safety.
                  <br />
                  Serene Care.
                </>
              )}
            </h1>
            <p className="text-white/90 text-sm md:text-lg max-w-2xl font-light mb-8 leading-relaxed">
              {isKo
                ? "의료급 위생 기준과 임산부를 위해 설계된 프라이빗 공간에서 마음의 안정과 편안함을 경험하세요."
                : "Experience our medical-grade hygiene standards within a sanctuary designed for your peace of mind and comfort during pregnancy."}
            </p>
            <a
              href={placeInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-black/20 flex items-center gap-2"
            >
              {isKo ? "지금 예약하기" : "Book Now"}
              <span className="material-symbols-outlined text-sm">calendar_month</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
