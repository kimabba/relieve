import { Quicksand, Merriweather } from "next/font/google";
import type { Metadata } from "next";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joyful Bloom | 임산부 슈가링 케어",
  description: "임산부를 위한 특별한 슈가링 케어 - 천연 성분으로 안전하게",
};

export default function JoyfulLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${quicksand.variable} ${merriweather.variable} joyful-theme`}
    >
      {children}
    </div>
  );
}
