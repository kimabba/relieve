import CertificationTimeline from "@/components/about/CertificationTimeline";
import Philosophy from "@/components/about/Philosophy";
import TrimesterGuide from "@/components/about/TrimesterGuide";
import TheSanctuary from "@/components/about/TheSanctuary";
import MaternityTestimonials from "@/components/about/MaternityTestimonials";
import SafetyPromise from "@/components/home/SafetyPromise";
import CTASection from "@/components/home/CTASection";

export default function AboutPage() {
  return (
    <>
      <CertificationTimeline />
      <Philosophy />
      <TrimesterGuide />
      <TheSanctuary />
      <MaternityTestimonials />
      <SafetyPromise />
      <CTASection />
    </>
  );
}
