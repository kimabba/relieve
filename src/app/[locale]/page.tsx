import Hero from "@/components/home/Hero";
import WhySugaring from "@/components/home/WhySugaring";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import ReviewHighlights from "@/components/home/ReviewHighlights";
import SafetyPromise from "@/components/home/SafetyPromise";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhySugaring />
      <ServiceHighlights />
      <ReviewHighlights />
      <SafetyPromise />
      <CTASection />
    </>
  );
}
