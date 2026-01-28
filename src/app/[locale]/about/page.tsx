import CertificationTimeline from "@/components/about/CertificationTimeline";
import Philosophy from "@/components/about/Philosophy";
import SafetyPromise from "@/components/home/SafetyPromise";
import CTASection from "@/components/home/CTASection";

export default function AboutPage() {
  return (
    <>
      <CertificationTimeline />
      <Philosophy />
      <SafetyPromise />
      <CTASection />
    </>
  );
}
