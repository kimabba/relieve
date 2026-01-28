import { Nunito, Merriweather } from "next/font/google";
import type { Metadata } from "next";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bloom & Rest | 임산부 슈가링 케어",
  description: "따뜻하고 포근한 임산부 전용 슈가링 케어 - 당신만의 휴식 공간",
};

export default function BloomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${nunito.variable} ${merriweather.variable} bloom-theme`}>
      {children}
    </div>
  );
}
