import ReservationHero from "@/components/reservation/ReservationHero";
import PrivateProcess from "@/components/reservation/PrivateProcess";
import ReservationInfo from "@/components/reservation/ReservationInfo";
import FAQ from "@/components/reservation/FAQ";

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
