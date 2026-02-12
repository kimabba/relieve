import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "왁싱 교육 | 광주왁싱 슈가링 릴리브 - 전문 강사 양성 프로그램",
  description:
    "광주 왁싱 교육 전문. 국제대회 그랑프리 수상자가 직접 가르치는 체계적인 왁싱 & 슈가링 교육. 기초반, 전문가반, 마스터반 운영. 소수정예 1:1 맞춤 교육.",
  openGraph: {
    title: "왁싱 전문 교육 | 광주왁싱 슈가링 릴리브",
    description: "국제대회 수상자가 직접 가르치는 체계적인 왁싱 & 슈가링 교육 프로그램",
  },
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
