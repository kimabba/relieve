import Hero from "@/components/home/Hero";
import WhySugaring from "@/components/home/WhySugaring";
import FeaturedTreatments from "@/components/home/FeaturedTreatments";
import ReviewHighlights from "@/components/home/ReviewHighlights";
import SafetyPromise from "@/components/home/SafetyPromise";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhySugaring />
      <FeaturedTreatments />
      <ReviewHighlights />
      <SafetyPromise />
      <CTASection />
    </>
  );
}
