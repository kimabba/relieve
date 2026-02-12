import Hero from "@/components/home/Hero";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import Features from "@/components/home/Features";
import ReviewHighlights from "@/components/home/ReviewHighlights";
import SafetyPromise from "@/components/home/SafetyPromise";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <Features />
      <ReviewHighlights />
      <SafetyPromise />
      <CTASection />
    </>
  );
}
