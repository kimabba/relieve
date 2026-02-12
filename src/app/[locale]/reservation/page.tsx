import type { Metadata } from "next";
import ReservationHero from "@/components/reservation/ReservationHero";
import PrivateProcess from "@/components/reservation/PrivateProcess";
import ReservationInfo from "@/components/reservation/ReservationInfo";
import FAQ from "@/components/reservation/FAQ";

export const metadata: Metadata = {
  title: "예약 안내 | 광주왁싱 슈가링 릴리브 - 네이버 예약 & 전화",
  description:
    "광주 슈가링 왁싱 예약. 네이버 예약 또는 전화(0507-1472-0432)로 편리하게 예약하세요. 지역화폐, 제로페이, N Pay 결제 가능.",
  openGraph: {
    title: "예약 안내 | 광주왁싱 슈가링 릴리브",
    description: "네이버 예약 또는 전화로 편리하게 예약하세요.",
  },
};

export default function ReservationPage() {
  return (
    <>
      <ReservationHero />
      <PrivateProcess />
      <ReservationInfo />
      <FAQ />
    </>
  );
}
