import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import WhySugaring from "@/components/home/WhySugaring";
import SafetyPromise from "@/components/home/SafetyPromise";
import Certifications from "@/components/home/Certifications";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import ReviewHighlights from "@/components/home/ReviewHighlights";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhySugaring />
      <SafetyPromise />
      <Certifications />
      <ServiceHighlights />
      <ReviewHighlights />
      <CTASection />
    </>
  );
}
