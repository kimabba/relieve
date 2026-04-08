import type { Metadata } from "next";
import PriceTable from "@/components/services/PriceTable";
import HygieneSteps from "@/components/services/HygieneSteps";
import SpaGallery from "@/components/services/SpaGallery";
import AftercareTips from "@/components/services/AftercareTips";
import NaturalProducts from "@/components/services/NaturalProducts";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "서비스/메뉴 | 광주왁싱 슈가링 릴리브 - 가격표 & 시술 안내",
  description:
    "광주 슈가링 왁싱 가격표. 여성 브라질리언 50,000원~, 남성 브라질리언 70,000원~, 임산부 왁싱 80,000원~, 속눈썹 펌 40,000원~. 첫 방문 할인, 연간 이용권.",
  openGraph: {
    title: "서비스 메뉴 & 가격 | 광주왁싱 슈가링 릴리브",
    description: "광주 슈가링 왁싱 전체 메뉴 및 가격 안내. 첫 방문 할인 이벤트 진행 중.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PriceTable />
      <HygieneSteps />
      <SpaGallery />
      {/* Aftercare & Products Section */}
      <section className="py-20 lg:py-28 bg-background-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Aftercare Timeline - Takes 3 columns */}
            <div className="lg:col-span-3">
              <AftercareTips />
            </div>
            {/* Natural Products - Takes 2 columns */}
            <div className="lg:col-span-2">
              <NaturalProducts />
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
