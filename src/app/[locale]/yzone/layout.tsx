import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Y존 테라피 | 광주왁싱 슈가링 릴리브 - 프리미엄 Y존 집중 케어",
  description:
    "광주 Y존 테라피 전문. 민감한 Y존 피부 진정, 보습, 색소 침착 개선. 철저한 위생 관리, 4단계 집중 케어 프로그램. 런칭 특가 99,000원.",
  openGraph: {
    title: "Y존 테라피 | 광주왁싱 슈가링 릴리브",
    description: "프리미엄 Y존 집중 케어. 피부 진정, 보습, 색소 침착 개선까지 한 번에.",
  },
};

export default function YZoneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
