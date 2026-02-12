import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "블로그 | 광주왁싱 슈가링 릴리브 - 슈가링 & 왁싱 정보",
  description:
    "광주 슈가링 왁싱 전문 정보. 슈가링 vs 왁싱 차이점, 임산부 왁싱 안전 가이드, 시술 후 관리법, 첫 방문 준비사항 등 유용한 정보를 제공합니다.",
  openGraph: {
    title: "블로그 | 광주왁싱 슈가링 릴리브",
    description: "슈가링 & 왁싱 관련 유용한 정보와 팁",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
