import type { Metadata } from "next";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "이용약관",
  description: "광주왁싱 슈가링 릴리브 서비스 이용약관",
};

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <section className="py-20 bg-waxly-cream pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1
          className="text-3xl lg:text-4xl text-waxly-brown mb-8"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
        >
          {isKo ? "이용약관" : "Terms of Service"}
        </h1>

        <div className="space-y-8 text-waxly-brown/90 leading-relaxed text-sm font-light">
          <div>
            <h2 className="text-lg text-waxly-brown font-normal mb-3">
              {isKo ? "1. 예약 및 취소" : "1. Reservations & Cancellations"}
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>{isKo ? "예약은 네이버 예약 또는 전화를 통해 가능합니다." : "Reservations can be made via Naver Booking or phone."}</li>
              <li>{isKo ? "예약 취소는 방문일 전날까지 가능합니다." : "Cancellations must be made by the day before the appointment."}</li>
              <li>{isKo ? "노쇼(No-show) 시 다음 예약이 제한될 수 있습니다." : "No-shows may result in restrictions on future bookings."}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg text-waxly-brown font-normal mb-3">
              {isKo ? "2. 시술 안내" : "2. Treatment Information"}
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>{isKo ? "모든 시술은 전문 자격을 갖춘 시술자가 수행합니다." : "All treatments are performed by certified professionals."}</li>
              <li>{isKo ? "피부 상태에 따라 시술이 제한될 수 있습니다." : "Treatments may be restricted based on skin condition."}</li>
              <li>{isKo ? "시술 전 상담을 통해 고객 맞춤 케어를 제공합니다." : "Pre-treatment consultation ensures personalized care."}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg text-waxly-brown font-normal mb-3">
              {isKo ? "3. 환불 규정" : "3. Refund Policy"}
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>{isKo ? "시술 시작 전 취소 시 전액 환불됩니다." : "Full refund available if cancelled before treatment begins."}</li>
              <li>{isKo ? "시술 시작 후에는 환불이 불가합니다." : "No refund after treatment has started."}</li>
              <li>{isKo ? "이용권은 구매일로부터 1년간 유효합니다." : "Passes are valid for 1 year from purchase date."}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg text-waxly-brown font-normal mb-3">
              {isKo ? "4. 면책 사항" : "4. Disclaimer"}
            </h2>
            <p>
              {isKo
                ? "릴리브는 고객의 개인 피부 특성에 의한 반응에 대해 사전 상담을 통해 최선의 주의를 기울이며, 시술 전 충분한 안내를 제공합니다."
                : "Relieve takes utmost care through pre-treatment consultation regarding individual skin reactions and provides thorough guidance before treatments."}
            </p>
          </div>

          <div>
            <h2 className="text-lg text-waxly-brown font-normal mb-3">
              {isKo ? "5. 문의" : "5. Contact"}
            </h2>
            <p>
              {isKo
                ? `이용약관에 대한 문의는 ${contact.phone}으로 연락해주세요.`
                : `For inquiries about terms of service, please contact us at ${contact.phone}.`}
            </p>
          </div>

          <p className="text-xs text-waxly-brownLight pt-4 border-t border-waxly-brown/10">
            {isKo ? "시행일: 2025년 1월 1일" : "Effective date: January 1, 2025"}
          </p>
        </div>
      </div>
    </section>
  );
}
