import PriceTable from "@/components/services/PriceTable";
import HygieneSteps from "@/components/services/HygieneSteps";
import SpaGallery from "@/components/services/SpaGallery";
import AftercareTips from "@/components/services/AftercareTips";
import NaturalProducts from "@/components/services/NaturalProducts";
import CTASection from "@/components/home/CTASection";

export default function ServicesPage() {
  return (
    <>
      <PriceTable />
      <HygieneSteps />
      <SpaGallery />
      {/* Aftercare & Products Section */}
      <section className="py-20 lg:py-28 bg-waxly-cream">
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
