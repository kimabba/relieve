import type { Metadata } from "next";
import LocationInfo from "@/components/location/LocationInfo";
import MapSection from "@/components/location/MapSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "오시는 길 | 광주왁싱 슈가링 릴리브 - 광주 북구 운암동",
  description:
    "광주 북구 북문대로 154 3층. 운암동 왁싱 전문샵 릴리브 위치 안내. 황솔촌 주차장 이용 가능(1시간 주차권 제공). 네이버맵, 카카오맵, T맵 길찾기.",
  openGraph: {
    title: "오시는 길 | 광주왁싱 슈가링 릴리브",
    description: "광주 북구 운암동 위치. 주차 가능, 길찾기 안내.",
  },
};

export default function LocationPage() {
  return (
    <>
      <LocationInfo />
      <MapSection />
      <CTASection />
    </>
  );
}
