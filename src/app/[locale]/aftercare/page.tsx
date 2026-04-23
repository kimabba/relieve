import type { Metadata } from "next";
import AftercareHero from "@/components/aftercare/AftercareHero";
import PostTreatmentRituals from "@/components/aftercare/PostTreatmentRituals";
import HygieneSteps from "@/components/aftercare/HygieneSteps";
import PrivateSanctuary from "@/components/aftercare/PrivateSanctuary";

export const metadata: Metadata = {
  title: "시술 후 관리 & 위생 | 광주왁싱 슈가링 릴리브",
  description:
    "슈가링 시술 후 관리 방법과 의료급 위생 관리 시스템을 안내합니다. 5단계 멸균 프로세스로 안전하고 청결한 시술 환경을 보장합니다.",
  openGraph: {
    title: "시술 후 관리 & 위생 | 광주왁싱 슈가링 릴리브",
    description: "의료급 위생 관리와 임산부 안전을 최우선으로 생각합니다.",
  },
};

export default function AftercarePage() {
  return (
    <>
      <AftercareHero />
      <PostTreatmentRituals />
      <HygieneSteps />
      <PrivateSanctuary />
    </>
  );
}
