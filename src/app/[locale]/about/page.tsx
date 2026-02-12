import type { Metadata } from "next";
import CertificationTimeline from "@/components/about/CertificationTimeline";
import Philosophy from "@/components/about/Philosophy";
import TrimesterGuide from "@/components/about/TrimesterGuide";
import TheSanctuary from "@/components/about/TheSanctuary";
import MaternityTestimonials from "@/components/about/MaternityTestimonials";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "소개 | 광주왁싱 슈가링 릴리브 - 국제대회 그랑프리 수상 전문가",
  description:
    "릴리브 원장 소개. 2023 국제왁싱기능경기대회 그랑프리 수상, 한국왁싱뷰티협회 교육이사. 피부국가자격증 보유 전문가의 프리미엄 슈가링 케어. 광주 북구 운암동.",
  openGraph: {
    title: "전문가 소개 | 광주왁싱 슈가링 릴리브",
    description: "국제대회 그랑프리 수상 전문가의 프리미엄 슈가링 케어",
  },
};

export default function AboutPage() {
  return (
    <>
      <CertificationTimeline />
      <Philosophy />
      <TrimesterGuide />
      <TheSanctuary />
      <MaternityTestimonials />
      <CTASection />
    </>
  );
}
