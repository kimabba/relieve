// 블로그 포스트 데이터

export interface BlogPost {
  slug: string;
  titleKo: string;
  titleEn: string;
  excerptKo: string;
  excerptEn: string;
  contentKo: string;
  contentEn: string;
  category: "guide" | "tip" | "faq" | "promotion" | "notice";
  date: string;
  readingTime: number;
  tags: string[];
}

export const categoryLabels = {
  guide: { ko: "가이드", en: "Guide" },
  tip: { ko: "시술 팁", en: "Tips" },
  faq: { ko: "자주 묻는 질문", en: "FAQ" },
  promotion: { ko: "프로모션", en: "Promotion" },
  notice: { ko: "공지사항", en: "Notice" },
};

const blogPosts: BlogPost[] = [
  {
    slug: "sugaring-vs-waxing",
    titleKo: "슈가링과 왁싱의 차이점: 광주 슈가링 전문샵이 알려드리는 핵심 비교",
    titleEn: "Sugaring vs Waxing: Key Differences Explained by Gwangju Specialists",
    excerptKo:
      "슈가링과 왁싱, 어떤 제모법이 나에게 맞을까요? 광주 슈가링 전문샵 릴리브가 두 시술의 차이점을 상세히 비교해드립니다.",
    excerptEn:
      "Which hair removal method is right for you? Relieve, Gwangju's sugaring specialist, compares both treatments in detail.",
    contentKo: `슈가링과 왁싱은 모두 인기 있는 제모 방법이지만, 시술 방식과 결과에서 중요한 차이가 있습니다. 광주 슈가링 전문샵 릴리브에서 두 시술을 비교해드립니다.

슈가링은 설탕, 레몬즙, 물로 만든 100% 천연 페이스트를 사용합니다. 체온 정도의 낮은 온도로 시술하기 때문에 화상 위험이 없고, 민감한 피부에도 적합합니다. 가장 큰 특징은 모근 방향으로 바르고 모근 반대 방향으로 제거하는 것이 아니라, 모근 반대 방향으로 바르고 모근 방향으로 제거한다는 점입니다. 이 방식 덕분에 모낭 손상이 적고 인그로운 헤어(매몰모) 발생률이 현저히 낮습니다.

반면 왁싱은 송진 기반의 왁스를 높은 온도로 녹여 사용합니다. 빠른 시술 속도가 장점이지만, 열에 의한 피부 자극이 있을 수 있고 알레르기 반응이 나타나는 경우도 있습니다.

슈가링의 장점을 정리하면 다음과 같습니다. 첫째, 천연 성분이라 피부 자극이 적습니다. 둘째, 낮은 온도로 화상 위험이 없어 임산부도 안심하고 받을 수 있습니다. 셋째, 수용성이라 물로 쉽게 세척됩니다. 넷째, 반복 시술 시 모질이 점점 가늘어집니다.

왁싱이 적합한 경우도 있습니다. 넓은 부위를 빠르게 제모해야 하거나, 굵고 단단한 모질에 즉각적인 효과를 원할 때 선택할 수 있습니다.

릴리브는 광주에서 슈가링 전문 교육을 이수한 전문가가 시술합니다. 국제왁싱기능경기대회 그랑프리 수상 경력의 원장이 직접 관리하며, 피부 타입과 모질에 따라 최적의 시술법을 제안해드립니다. 첫 방문이시라면 부담 없이 상담받아보세요.`,
    contentEn: `Sugaring and waxing are both popular hair removal methods, but they differ significantly in technique and results.

Sugaring uses a 100% natural paste made from sugar, lemon juice, and water. It's applied at body temperature, eliminating burn risks and making it suitable for sensitive skin. The paste is applied against hair growth and removed in the natural direction of growth, resulting in less follicle damage and significantly fewer ingrown hairs.

Traditional waxing uses resin-based wax heated to high temperatures. While it offers faster treatment speed, it can cause skin irritation from heat and occasional allergic reactions.

Key advantages of sugaring include: natural ingredients cause less irritation; low temperature means no burn risk (safe for pregnant women); water-soluble for easy cleanup; and hair becomes finer with repeated treatments.

At Relieve in Gwangju, our sugaring specialist — a Grand Prix winner at the International Waxing Skills Competition — provides personalized treatments based on your skin type and hair texture. Book a consultation for your first visit.`,
    category: "guide",
    date: "2026-02-10",
    readingTime: 4,
    tags: ["슈가링", "왁싱", "비교", "광주슈가링", "제모"],
  },
  {
    slug: "maternity-waxing-safety",
    titleKo: "임산부 왁싱 안전 가이드: 광주 임산부 왁싱 전문샵의 시술 노하우",
    titleEn: "Maternity Waxing Safety Guide: Expert Tips from Gwangju Specialists",
    excerptKo:
      "임산부도 왁싱을 받을 수 있을까요? 광주 임산부 왁싱 전문 릴리브가 안전한 시술 방법과 주의사항을 안내합니다.",
    excerptEn:
      "Can pregnant women get waxing? Relieve shares safe treatment methods and precautions for maternity waxing.",
    contentKo: `임신 중 제모가 필요하지만 안전이 걱정되시나요? 광주 임산부 왁싱 전문샵 릴리브에서 안전한 시술에 대해 자세히 알려드립니다.

결론부터 말씀드리면, 임산부도 왁싱을 받을 수 있습니다. 다만 몇 가지 중요한 조건이 있습니다. 릴리브에서는 임산부 고객님께 슈가링을 권장합니다. 슈가링은 천연 성분(설탕, 레몬즙, 물)만 사용하고, 체온 수준의 낮은 온도로 시술하기 때문에 화학물질이나 열에 의한 자극 걱정이 없습니다.

임산부 왁싱의 적정 시기는 임신 중기(14주~28주)입니다. 이 시기에는 입덧이 줄어들고 배가 너무 크지 않아 시술이 편안합니다. 임신 초기(12주 이전)에는 시술을 권장하지 않으며, 임신 후기에도 시술은 가능하지만 체위 조절이 필요할 수 있습니다.

릴리브의 임산부 전용 케어는 다음과 같은 특징이 있습니다. 전용 시술 베드에서 편안한 자세를 유지할 수 있도록 쿠션과 지지대를 제공합니다. 시술 시간을 충분히 확보하여 서두르지 않고 진행합니다. 피부가 특히 민감한 부위는 소량씩 나누어 시술합니다. 시술 전후 피부 진정 케어를 제공합니다.

주의사항도 안내드립니다. 시술 전 담당 산부인과 의사와 상의하시는 것을 권장합니다. 피부 트러블이나 정맥류가 있는 부위는 시술을 피합니다. 시술 당일 무리한 활동은 삼가시는 것이 좋습니다.

릴리브 원장은 피부국가자격증과 슈가링전문지도자 자격을 보유하고 있으며, 임산부 시술 경험이 풍부합니다. 출산 전 케어가 필요하시다면 편하게 문의해주세요. 첫 방문 시 임산부 왁싱 할인 가격으로 시술받으실 수 있습니다.`,
    contentEn: `Concerned about hair removal safety during pregnancy? Relieve, Gwangju's maternity waxing specialist, provides detailed guidance.

Yes, pregnant women can get waxing — with important conditions. We recommend sugaring for expectant mothers, as it uses only natural ingredients (sugar, lemon juice, water) at body temperature, eliminating concerns about chemicals or heat irritation.

The optimal timing is the second trimester (weeks 14-28), when morning sickness subsides and the belly isn't too large. We don't recommend treatments before 12 weeks, and late-term treatments may require position adjustments.

Our maternity care features include: supportive cushions for comfort, unhurried treatment pace, sectioned application for sensitive areas, and pre/post treatment skin calming care.

Our director holds a National Esthetician License and Sugaring Professional Instructor certification with extensive maternity treatment experience. First-time visitors receive a special maternity waxing discount.`,
    category: "guide",
    date: "2026-02-05",
    readingTime: 4,
    tags: ["임산부왁싱", "광주임산부왁싱", "슈가링", "안전", "출산준비"],
  },
  {
    slug: "first-visit-guide",
    titleKo: "첫 방문 가이드: 광주 슈가링 시술 전 준비사항 총정리",
    titleEn: "First Visit Guide: How to Prepare for Your Sugaring Session in Gwangju",
    excerptKo:
      "처음 슈가링을 받으시나요? 시술 전 모발 길이부터 피부 관리까지, 광주 슈가링 첫 방문에 필요한 모든 것을 알려드립니다.",
    excerptEn:
      "First time getting sugaring? Everything you need to know about hair length, skin prep, and what to expect.",
    contentKo: `슈가링을 처음 받으시는 분들이 가장 많이 궁금해하시는 것들을 정리했습니다. 광주 슈가링 전문샵 릴리브에서 첫 방문 준비사항을 안내해드립니다.

모발 길이가 가장 중요합니다. 슈가링은 최소 0.5cm 이상의 모발 길이가 필요합니다. 면도 후 약 2~3주 정도 기른 상태가 적당합니다. 너무 짧으면 페이스트가 모발을 충분히 감싸지 못하고, 너무 길면 시술 시 불편할 수 있어 적정 길이를 맞춰오시는 것이 좋습니다.

시술 전날 주의사항입니다. 시술 부위에 보습제를 충분히 바르되, 시술 당일에는 오일이나 로션을 바르지 마세요. 유분이 있으면 페이스트가 모발에 잘 붙지 않습니다. 시술 전날 과도한 각질 제거나 스크럽도 피해주세요. 피부가 자극받은 상태에서 시술하면 민감해질 수 있습니다.

시술 당일에는 편안한 복장으로 오시면 됩니다. 브라질리언 시술의 경우 넉넉한 하의를 추천드립니다. 시술 시간은 부위에 따라 다르지만, 브라질리언 기준 약 30~45분 정도 소요됩니다. 첫 시술 시에는 상담 시간이 추가로 필요하므로 여유 있게 예약해주세요.

통증에 대해 걱정하시는 분들이 많습니다. 솔직히 말씀드리면 첫 시술 시에는 약간의 통증이 있습니다. 하지만 슈가링은 왁싱보다 통증이 적고, 시술 횟수가 반복될수록 모질이 가늘어지면서 통증도 줄어듭니다. 생리 전후에는 피부가 민감해지므로 가능하면 이 시기를 피하는 것이 좋습니다.

릴리브에서는 첫 방문 고객님께 할인 가격을 제공합니다. 여성 브라질리언 첫 방문 50,000원, 남성 브라질리언 첫 방문 70,000원입니다. 네이버 예약을 통해 간편하게 예약하실 수 있습니다.`,
    contentEn: `Here's everything first-time sugaring clients ask about, compiled by Relieve in Gwangju.

Hair length is crucial — you need at least 0.5cm, about 2-3 weeks of growth after shaving. Too short and the paste can't grip; too long and it may be uncomfortable.

The day before: moisturize the area well, but skip oils and lotions on treatment day as they prevent paste adhesion. Avoid exfoliating or scrubbing the day before.

On treatment day, wear comfortable clothing. Brazilian treatments take about 30-45 minutes. First visits include a consultation, so book extra time.

Regarding pain: there is some discomfort during the first session, but sugaring is gentler than waxing, and pain decreases with repeated treatments as hair becomes finer. Avoid booking around your menstrual cycle when skin is more sensitive.

Relieve offers first-visit discounts: Women's Brazilian at 50,000 KRW and Men's Brazilian at 70,000 KRW. Book easily through Naver Reservation.`,
    category: "guide",
    date: "2026-01-28",
    readingTime: 4,
    tags: ["첫방문", "준비사항", "광주슈가링", "가이드", "예약"],
  },
  {
    slug: "aftercare-tips",
    titleKo: "시술 후 관리법: 슈가링 후 피부 관리 완벽 가이드",
    titleEn: "Aftercare Guide: Complete Skin Care Tips After Sugaring",
    excerptKo:
      "슈가링 시술 후 피부를 건강하게 유지하는 방법을 알아보세요. 매몰모 예방부터 보습까지 전문가의 관리 팁을 공유합니다.",
    excerptEn:
      "Learn how to keep your skin healthy after sugaring. Expert tips from ingrown hair prevention to moisturizing.",
    contentKo: `슈가링 시술 후 올바른 관리를 하면 피부 컨디션을 최상으로 유지할 수 있습니다. 릴리브의 시술 후 관리 가이드를 참고해주세요.

시술 직후(0~24시간)에는 다음 사항을 지켜주세요. 시술 부위에 뜨거운 물 사용을 피하고, 미지근한 물로 가볍게 세척합니다. 사우나, 찜질방, 수영장 등 고온다습한 환경은 24시간 이내 피해주세요. 꽉 끼는 옷보다는 통풍이 잘 되는 편안한 의류를 착용합니다. 시술 부위에 향이 있는 제품(향수, 데오드란트)은 바르지 마세요.

시술 후 2~3일이 지나면 보습 관리를 시작합니다. 무향의 순한 보습제를 매일 발라주세요. 알로에 베라 젤이나 세라마이드 성분의 보습제가 적합합니다. 피부가 완전히 진정된 후에는 시술 부위의 보습을 꾸준히 유지하는 것이 중요합니다.

매몰모(인그로운 헤어) 예방이 가장 중요한 사후 관리입니다. 시술 후 3~4일째부터 부드러운 각질 제거를 시작합니다. 일주일에 2~3회 정도 시술 부위를 부드럽게 스크럽해주세요. 물리적 스크럽보다는 AHA/BHA 성분의 화학적 각질 제거제가 더 효과적입니다. 단, 과도한 각질 제거는 피부 자극을 유발하니 적당히 해주세요.

다음 시술 예약 시기도 중요합니다. 슈가링은 보통 4~6주 간격으로 시술받는 것이 이상적입니다. 너무 자주 받으면 모발이 충분히 자라지 않아 효과가 떨어지고, 너무 늦으면 모질 개선 효과가 줄어들 수 있습니다. 릴리브에서는 개인별 모질과 성장 속도에 따라 다음 시술 시기를 안내해드립니다.

시술 후 피부 트러블이 발생하면 당황하지 마세요. 시술 직후 약간의 붉음이나 돌기는 정상적인 반응입니다. 보통 24~48시간 내에 자연스럽게 사라집니다. 만약 3일 이상 지속되거나 심한 경우에는 릴리브에 연락해주시면 관리 방법을 안내해드립니다.`,
    contentEn: `Proper aftercare keeps your skin in the best condition after sugaring. Follow Relieve's aftercare guide.

Immediately after (0-24 hours): avoid hot water, use lukewarm water instead. Skip saunas, steam rooms, and pools for 24 hours. Wear loose, breathable clothing. Don't apply fragranced products to the treated area.

After 2-3 days, begin moisturizing with fragrance-free, gentle products. Aloe vera gel or ceramide-based moisturizers work well. Consistent moisturizing is key.

Ingrown hair prevention is the most important aftercare step. Start gentle exfoliation 3-4 days post-treatment, 2-3 times per week. Chemical exfoliants (AHA/BHA) are more effective than physical scrubs.

Schedule your next session 4-6 weeks apart for optimal results. At Relieve, we recommend personalized timing based on your hair growth pattern.

Some redness or bumps immediately after treatment are normal and typically resolve within 24-48 hours. Contact us if irritation persists beyond 3 days.`,
    category: "tip",
    date: "2026-01-20",
    readingTime: 4,
    tags: ["사후관리", "피부관리", "매몰모", "보습", "슈가링"],
  },
  {
    slug: "why-yzone-care",
    titleKo: "Y존 케어가 필요한 이유: 여성 건강과 위생을 위한 전문 관리",
    titleEn: "Why Y-Zone Care Matters: Professional Care for Women's Health & Hygiene",
    excerptKo:
      "Y존 케어는 단순한 제모가 아닙니다. 여성 건강과 위생 관리를 위한 전문적인 Y존 테라피의 필요성을 알아보세요.",
    excerptEn:
      "Y-zone care goes beyond hair removal. Learn why professional Y-zone therapy is essential for women's health and hygiene.",
    contentKo: `Y존 케어에 대한 관심이 높아지고 있습니다. 하지만 아직 많은 분들이 Y존 케어를 단순한 제모로만 생각하시는 경우가 많습니다. Y존 관리가 왜 필요한지, 어떤 효과가 있는지 알려드리겠습니다.

Y존은 비키니 라인, 회음부, 항문 주변을 포함하는 영역으로, 특성상 습기가 차기 쉽고 마찰이 잦아 피부 트러블이 발생하기 쉬운 부위입니다. 적절한 관리가 없으면 피부 자극, 색소침착, 냄새 등의 문제가 생길 수 있습니다.

전문적인 Y존 케어의 장점은 다음과 같습니다. 위생 개선 측면에서, 체모 관리를 통해 습기와 세균 번식을 줄여 감염 위험을 낮춥니다. 특히 여름철이나 운동을 자주 하시는 분들에게 위생적인 효과가 큽니다. 피부 건강 면에서는, 정기적인 슈가링으로 모질이 가늘어지면서 피부 표면이 매끈해지고, 매몰모와 모낭염 발생이 줄어듭니다. 자기 관리의 일환으로, Y존 케어를 통해 자신감과 편안함을 느끼시는 분들이 많습니다.

릴리브에서는 최근 Y존 테라피를 새롭게 런칭했습니다. 기존의 단순 제모에서 한 단계 더 나아가, 각질 관리와 피부 진정까지 포함하는 종합 케어 프로그램입니다. 디자인 세라클 스케일링은 Y존 피부를 부드럽게 관리하는 프리미엄 시술로, 많은 고객님들의 만족도가 높습니다.

시술은 완전한 프라이버시가 보장되는 1인 전용 시술실에서 진행됩니다. 여성 원장이 직접 시술하며, 시술 중 불편함을 최소화하기 위해 소량씩 나누어 진행합니다. 시술 전후 상담을 통해 개인별 맞춤 관리 계획을 세워드립니다.

Y존 케어에 관심이 있지만 첫 시술이 부담스러우신 분들은 릴리브의 첫 방문 할인을 활용해보세요. 편안한 분위기에서 전문적인 상담을 받으실 수 있습니다.`,
    contentEn: `Interest in Y-zone care is growing, but many still view it as simple hair removal. Let's explore why professional Y-zone management is important.

The Y-zone — including the bikini line, perineum, and perianal area — is prone to moisture buildup and friction, making it susceptible to skin irritation, hyperpigmentation, and odor without proper care.

Benefits of professional Y-zone care include: improved hygiene by reducing moisture and bacterial growth; better skin health with finer hair regrowth and fewer ingrown hairs; and increased confidence and comfort.

Relieve recently launched our Y-zone therapy program, going beyond simple hair removal to include exfoliation and skin calming for comprehensive care. Our Design Ceracl Scaling provides premium Y-zone skin management.

All treatments are performed in private rooms by our female director, with personalized care plans. First-time visitors can take advantage of our introductory discount.`,
    category: "tip",
    date: "2026-01-15",
    readingTime: 4,
    tags: ["Y존", "여성건강", "위생", "Y존테라피", "케어"],
  },
  {
    slug: "mens-waxing-faq",
    titleKo: "남성 왁싱 Q&A: 광주 남자 왁싱에 대한 모든 궁금증 해결",
    titleEn: "Men's Waxing FAQ: Everything You Need to Know About Male Waxing in Gwangju",
    excerptKo:
      "남성 왁싱이 처음이신가요? 광주 남자 왁싱 전문샵 릴리브에서 통증, 시술 과정, 비용까지 자주 묻는 질문에 답합니다.",
    excerptEn:
      "New to men's waxing? Relieve answers frequently asked questions about pain, procedure, and cost.",
    contentKo: `남성 왁싱에 대한 관심은 높아지고 있지만, 첫 시술 전 궁금한 점이 많으실 겁니다. 광주 남자 왁싱 전문샵 릴리브에서 자주 받는 질문들을 정리했습니다.

Q. 남자도 브라질리언 왁싱을 받을 수 있나요?
A. 물론입니다. 남성 브라질리언 왁싱은 이미 보편적인 시술입니다. 위생 관리, 스포츠 활동, 개인 취향 등 다양한 이유로 남성 고객분들이 꾸준히 늘고 있습니다. 릴리브에서는 남성 전용 시술 프로토콜을 운영하고 있습니다.

Q. 통증은 어느 정도인가요?
A. 솔직하게 말씀드리면 첫 시술 시에는 통증이 있습니다. 하지만 생각보다 심하지 않다는 후기가 대부분입니다. 릴리브에서는 슈가링 방식으로 시술하여 일반 왁싱보다 통증이 적습니다. 또한 시술 횟수가 늘어날수록 모질이 가늘어지면서 통증이 현저히 줄어듭니다.

Q. 시술 시간은 얼마나 걸리나요?
A. 남성 브라질리언 기준 약 40~50분 정도 소요됩니다. 첫 방문 시에는 상담을 포함하여 약 1시간 정도 여유를 가지고 오시면 됩니다.

Q. 남자 원장이 시술하나요?
A. 릴리브는 여성 원장이 시술합니다. 국제대회 수상 경력이 있는 전문가로, 남성 시술 경험이 풍부하며 프로페셔널한 환경에서 시술이 진행됩니다. 1인 전용 시술실에서 프라이버시가 완벽하게 보장됩니다.

Q. 비용은 얼마인가요?
A. 남성 브라질리언 첫 방문 가격은 70,000원입니다. 정기적으로 방문하시는 분들을 위한 연간 무제한 이용권(700,000원)도 있어, 장기적으로 경제적입니다.

Q. 시술 전 준비할 것이 있나요?
A. 모발 길이가 0.5cm 이상이어야 합니다. 면도 후 약 2~3주 정도 기른 상태가 적당합니다. 시술 당일에는 시술 부위에 로션이나 오일을 바르지 마세요. 샤워 후 깨끗한 상태로 오시면 됩니다.

더 궁금한 점이 있으시면 릴리브로 편하게 문의해주세요. 네이버 예약을 통해 간편하게 예약하실 수 있습니다.`,
    contentEn: `Interest in men's waxing is growing. Here are the most frequently asked questions at Relieve, Gwangju's male waxing specialist.

Q. Can men get Brazilian waxing?
A. Absolutely. Men's Brazilian waxing is now mainstream, with clients choosing it for hygiene, sports, or personal preference.

Q. How painful is it?
A. There is some pain during the first session, but most clients say it's less than expected. We use sugaring, which is gentler than traditional waxing, and pain decreases significantly with repeated treatments.

Q. How long does it take?
A. About 40-50 minutes for a men's Brazilian. Allow about 1 hour for first visits including consultation.

Q. What about privacy?
A. Our female director has extensive experience with male clients. All treatments are conducted in a private single room with complete privacy.

Q. How much does it cost?
A. Men's Brazilian first visit is 70,000 KRW. An annual unlimited pass (700,000 KRW) is available for regular clients.

Q. How should I prepare?
A. Hair should be at least 0.5cm long (about 2-3 weeks after shaving). Don't apply lotion or oil on the treatment area on the day of your appointment.`,
    category: "faq",
    date: "2026-01-10",
    readingTime: 5,
    tags: ["남성왁싱", "광주남자왁싱", "브라질리언", "FAQ", "슈가링"],
  },
  {
    slug: "how-to-choose-waxing-shop",
    titleKo: "광주 왁싱샵 고르는 법: 좋은 왁싱샵을 구별하는 5가지 기준",
    titleEn: "How to Choose a Waxing Shop in Gwangju: 5 Key Criteria",
    excerptKo:
      "광주에서 왁싱샵을 찾고 계신가요? 안전하고 실력 있는 왁싱샵을 선택하는 5가지 핵심 기준을 알려드립니다.",
    excerptEn:
      "Looking for a waxing shop in Gwangju? Here are 5 essential criteria for choosing a safe, skilled waxing studio.",
    contentKo: `광주에서 왁싱샵을 검색하면 수많은 곳이 나옵니다. 어떤 곳을 선택해야 안전하고 만족스러운 시술을 받을 수 있을까요? 좋은 왁싱샵을 구별하는 5가지 핵심 기준을 알려드립니다.

첫째, 자격증과 경력을 확인하세요. 피부 관련 국가자격증은 기본이고, 왁싱이나 슈가링 전문 교육 이수 여부를 확인하는 것이 중요합니다. 대회 수상 경력이나 교육 이사 등의 이력은 실력을 객관적으로 증명하는 좋은 지표입니다. 릴리브의 경우 피부국가자격증, 슈가링전문지도자 자격, 국제대회 그랑프리 수상, 한국왁싱뷰티협회 교육이사 위촉 등의 경력을 보유하고 있습니다.

둘째, 위생 관리 시스템을 살펴보세요. 1회용 도구 사용 여부, 시술 도구의 소독 절차, 시술실 청결도를 확인하세요. 특히 더블디핑(한 번 사용한 스틱을 왁스통에 다시 넣는 행위)을 하지 않는지가 매우 중요합니다. 위생에 자신 있는 샵은 이러한 정보를 투명하게 공개합니다.

셋째, 사용하는 제품을 확인하세요. 어떤 왁스나 슈가링 페이스트를 사용하는지, 성분은 안전한지 문의해보세요. 좋은 샵은 사용 제품에 대해 명확하게 설명해줍니다. 천연 성분 기반의 제품을 사용하는 곳이 피부 자극이 적습니다.

넷째, 리뷰와 후기를 꼼꼼히 확인하세요. 네이버, 카카오맵 등의 실제 방문 리뷰를 살펴보세요. 리뷰 수와 함께 구체적인 시술 후기에 주목하세요. 특히 "꼼꼼하다", "위생적이다", "설명이 친절하다" 등의 키워드가 반복되는 곳이 신뢰할 수 있습니다.

다섯째, 상담과 사후 관리 서비스를 확인하세요. 좋은 왁싱샵은 시술 전 충분한 상담을 제공하고, 시술 후 관리 방법을 안내하며, 문제 발생 시 대응 체계를 갖추고 있습니다. 가격만 보고 선택하기보다는 전체적인 서비스 품질을 고려하시는 것이 현명합니다.

릴리브는 위 5가지 기준을 모두 충족하는 광주 왁싱 전문샵입니다. 네이버 리뷰 700건 이상, "시술이 꼼꼼해요" 651건, "친절해요" 610건의 실제 고객 평가가 이를 증명합니다.`,
    contentEn: `With so many waxing shops in Gwangju, how do you choose? Here are 5 essential criteria.

First, check certifications and experience. A national esthetician license is basic — look for specialized waxing training and competition awards as objective proof of skill.

Second, examine hygiene practices. Verify single-use tools, sterilization procedures, and especially no double-dipping policy. Transparent shops openly share this information.

Third, ask about products used. Good shops clearly explain their wax or sugaring paste ingredients. Natural-based products cause less irritation.

Fourth, read reviews carefully. Check Naver and KakaoMap reviews for recurring keywords like "thorough," "hygienic," and "explains well."

Fifth, evaluate consultation and aftercare. Quality shops provide thorough pre-treatment consultations, aftercare guidance, and responsive support for any issues.

Relieve meets all 5 criteria with over 700 Naver reviews, 651 "thorough treatment" mentions, and 610 "friendly" mentions from actual customers.`,
    category: "guide",
    date: "2026-01-05",
    readingTime: 4,
    tags: ["왁싱샵", "광주왁싱", "선택기준", "위생", "리뷰"],
  },
  {
    slug: "seasonal-waxing-tips",
    titleKo: "계절별 왁싱 관리 팁: 사계절 피부 관리 완벽 가이드",
    titleEn: "Seasonal Waxing Tips: Year-Round Skin Care Guide",
    excerptKo:
      "계절에 따라 왁싱 관리법이 달라져야 합니다. 봄여름가을겨울 각 시즌에 맞는 왁싱 전후 피부 관리 팁을 알려드립니다.",
    excerptEn:
      "Waxing care should adapt to the seasons. Learn the best skin care tips for each season before and after waxing.",
    contentKo: `계절이 바뀌면 피부 상태도 변합니다. 각 시즌에 맞는 왁싱 관리법을 알면 더 좋은 결과를 얻을 수 있습니다. 릴리브에서 계절별 왁싱 관리 팁을 알려드립니다.

봄(3~5월)은 왁싱을 시작하기 가장 좋은 시기입니다. 여름 노출 시즌 전에 미리 관리를 시작하면 모질이 가늘어진 상태로 여름을 맞이할 수 있습니다. 봄에는 2~3회 시술을 받으면 여름에 눈에 띄게 개선된 상태를 느끼실 수 있습니다. 환절기에는 피부가 건조해지기 쉬우니 보습에 신경 써주세요.

여름(6~8월)은 왁싱 수요가 가장 높은 시즌입니다. 자외선이 강한 만큼 시술 후 자외선 차단에 특히 주의해야 합니다. 시술 부위에 직접적인 햇빛 노출은 48시간 이상 피해주세요. 수영이나 해수욕 계획이 있다면 최소 24시간 전에 시술을 완료하는 것이 좋습니다. 땀이 많이 나는 여름에는 통풍이 잘 되는 옷을 입고, 시술 부위를 청결하게 유지해주세요.

가을(9~11월)은 피부 리페어에 집중할 수 있는 시기입니다. 여름 동안 자외선에 노출된 피부를 회복시키면서 왁싱을 지속하면 좋습니다. 건조해지기 시작하는 시기이므로 보습 관리를 강화하세요. 각질 제거도 여름보다 조금 더 신경 써주시면 매몰모 예방에 도움이 됩니다.

겨울(12~2월)에는 왁싱을 쉬시는 분들이 많은데, 사실 겨울이야말로 꾸준히 관리하기 좋은 시기입니다. 노출이 적어 시술 후 자외선 걱정이 적고, 꾸준히 관리하면 봄에 더 좋은 상태로 시작할 수 있습니다. 다만 겨울에는 피부가 매우 건조해지므로 시술 전후 보습이 핵심입니다. 히터 등으로 건조한 환경에서는 보습제를 자주 발라주세요.

연간 관리 팁을 정리하면, 4~6주 간격의 정기적인 시술이 가장 효과적입니다. 계절에 관계없이 꾸준한 관리가 모질 개선과 피부 건강에 최선입니다. 릴리브의 1년 무제한 이용권을 활용하시면 경제적으로 연간 관리를 받으실 수 있습니다.`,
    contentEn: `Skin changes with the seasons, and so should your waxing routine. Here are Relieve's seasonal tips.

Spring (March-May) is the best time to start waxing. Begin 2-3 sessions before summer to arrive with noticeably finer hair. Focus on moisturizing during the transitional weather.

Summer (June-August) sees the highest demand. After treatment, avoid direct sun exposure for 48+ hours and complete treatment at least 24 hours before swimming. Wear breathable clothing and keep treated areas clean.

Fall (September-November) is perfect for skin repair. Recover from summer UV damage while continuing treatments. Increase moisturizing and exfoliation to prevent ingrown hairs.

Winter (December-February) is actually ideal for consistent care — less UV concern post-treatment, and regular maintenance means better results come spring. Extra moisturizing is essential in dry winter conditions.

Year-round tip: regular treatments every 4-6 weeks are most effective. Relieve's annual unlimited pass offers economical year-round care.`,
    category: "tip",
    date: "2025-12-20",
    readingTime: 4,
    tags: ["계절관리", "피부관리", "왁싱팁", "보습", "연간관리"],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}
