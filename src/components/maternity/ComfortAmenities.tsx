"use client";

import { useLocale } from "next-intl";

const amenities = [
  {
    icon: "bed",
    titleKo: "전신 임산부 베개",
    titleEn: "Full-Body Pregnancy Pillow",
    descKo: "배와 허리를 위한 맞춤형 지지대로 시술 중 완전히 편안하게 쉬실 수 있습니다.",
    descEn: "Contoured support for your bump and back, allowing you to relax completely during treatment.",
  },
  {
    icon: "settings_accessibility",
    titleKo: "무중력 전동 침대",
    titleEn: "Zero-Gravity Adjustable Beds",
    descKo: "허리 압박을 완화하는 완벽한 각도를 찾을 수 있는 전동 조절 침대입니다.",
    descEn: "Electronically adjustable to find the perfect angle that relieves pressure on your lower back.",
  },
  {
    icon: "air",
    titleKo: "안전한 아로마테라피",
    titleEn: "Safe Aromatherapy",
    descKo: "신경계를 진정시키는 라벤더, 카모마일 등 임산부 안전 에센셜 오일을 사용합니다.",
    descEn: "Subtle, pregnancy-safe essential oils like lavender and chamomile to calm the nervous system.",
  },
];

export default function ComfortAmenities() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <div
                className="rounded-xl w-full h-64 object-cover shadow-lg hover:shadow-xl transition-shadow bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAn0RKk8bseNFQooqEfOIPKlRnoN3pyVm3YN33X8xxPEoja2Oqib7MupXs3ZNQ83lMaJWp1nwpj-2v6tfM0ua4RlmQEBs8zaW1MmIu5qyWJii_wEQ8LgGR7oMrM_RzwUCqoI1uDne9VQMgP9CFMKU4pKr3Cld0rlVPOfVTqsvThwoXNnazWwX_oovH1vn4saJ_rgcm_JY_d10WS3t2w6Nm1S2sHJW_WqgGN6U_rawkRK1NS4i2cdSWiv-sVkz8XKZtHkvEqEuinXV8')",
                }}
              />
              <div className="p-4 bg-background-light rounded-xl border border-primary/20 text-center">
                <span className="text-primary font-bold text-2xl font-display">23°C</span>
                <p className="text-xs uppercase tracking-wider mt-1 text-text-muted">
                  {isKo ? "최적 온도" : "Optimal Temp"}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-xl text-center flex flex-col items-center justify-center h-32">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">chair</span>
                <p className="text-xs uppercase tracking-wider font-bold text-primary">
                  {isKo ? "조절 가능" : "Adjustable"}
                </p>
              </div>
              <div
                className="rounded-xl w-full h-64 object-cover shadow-lg hover:shadow-xl transition-shadow bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8INF7lspUyvdb6GbBwoSwBdR1QD4AWqElFoSN7NpBIy1S_NnIVOXEPOatxeBy0ReHN2r7MPB9UpMIRL9brWdCpa3fAum8PoaSashUHCtbEfZYCrnMkqbO9UkWHLYN2lr9_Nb8gaVL08zrTqsEFZiSYXCu2AIy3VQFRM_4-ApDXjPIcsV90PB305ow8nLYljyt2E2KwHJ0AzlkvaWRffvnFv9hXSFCGYNNxrFkz6upZzSqhm0nl5aqLLTWqR_SviYLNk4IN37s6mE')",
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div>
              <span className="text-primary font-bold text-sm tracking-widest uppercase">
                {isKo ? "우리의 공간" : "The Sanctuary"}
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-4 text-text-main">
                {isKo ? (
                  <>
                    고객님의 편안함을 위해
                    <br />
                    <em>설계된 공간</em>
                  </>
                ) : (
                  <>
                    Engineered for
                    <br />
                    <em>Your Comfort</em>
                  </>
                )}
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                {isKo
                  ? "시술실을 휴식의 안식처로 재구상했습니다. 삭막한 클리닉이 아닌, 임신의 독특한 인체공학을 중심으로 설계된 공간으로 들어오세요."
                  : "We've reimagined the treatment room to be a haven of relaxation. Forget sterile clinics; step into a space designed around the unique ergonomics of pregnancy."}
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              {amenities.map((amenity) => (
                <div key={amenity.icon} className="flex gap-4 items-start">
                  <div className="min-w-[40px] h-[40px] rounded-full bg-secondary-bg flex items-center justify-center text-text-main shrink-0">
                    <span className="material-symbols-outlined text-xl">{amenity.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text-main">
                      {isKo ? amenity.titleKo : amenity.titleEn}
                    </h4>
                    <p className="text-sm text-text-muted mt-1">
                      {isKo ? amenity.descKo : amenity.descEn}
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
