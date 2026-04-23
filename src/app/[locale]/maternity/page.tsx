import type { Metadata } from "next";
import MaternityHero from "@/components/maternity/MaternityHero";
import WhySugaringMaternity from "@/components/maternity/WhySugaringMaternity";
import TrimesterGuide from "@/components/maternity/TrimesterGuide";
import ComfortAmenities from "@/components/maternity/ComfortAmenities";
import MaternityTestimonials from "@/components/maternity/MaternityTestimonials";
import MaternityCTA from "@/components/maternity/MaternityCTA";

export const metadata: Metadata = {
  title: "임산부 케어 전문 | 광주왁싱 슈가링 릴리브",
  description:
    "임산부를 위한 100% 천연 슈가링 전문 케어. 체온 시술로 화상 위험 없음. 임신 기수별 맞춤 케어 가이드, 프라이빗 시술실, 인체공학적 임산부 베개 제공.",
  openGraph: {
    title: "임산부 케어 전문 | 광주왁싱 슈가링 릴리브",
    description: "임산부를 위한 안전하고 부드러운 슈가링 전문 케어.",
  },
};

export default function MaternityPage() {
  return (
    <>
      <MaternityHero />
      <WhySugaringMaternity />
      <TrimesterGuide />
      <ComfortAmenities />
      <MaternityTestimonials />
      <MaternityCTA />
    </>
  );
}
