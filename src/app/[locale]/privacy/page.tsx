import type { Metadata } from "next";
import { placeInfo, contact, location } from "@/lib/data";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "광주왁싱 슈가링 릴리브 개인정보처리방침",
};

export default async function PrivacyPage({
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
          {isKo ? "개인정보처리방침" : "Privacy Policy"}
        </h1>

        <div className="space-y-8 text-waxly-brown/90 leading-relaxed text-sm font-light">
          <div>
            <h2 className="text-lg text-waxly-brown font-normal mb-3">
              {isKo ? "1. 개인정보의 수집 및 이용 목적" : "1. Purpose of Collecting Personal Information"}
            </h2>
            <p>
              {isKo
                ? `${placeInfo.name}(이하 "릴리브")은 예약 및 상담 서비스 제공을 위해 최소한의 개인정보를 수집합니다.`
                : `${placeInfo.nameEn} ("Relieve") collects minimal personal information for reservation and consultation services.`}
            </p>
          </div>

          <div>
            <h2 className="text-lg text-waxly-brown font-normal mb-3">
              {isKo ? "2. 수집하는 개인정보 항목" : "2. Types of Personal Information Collected"}
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>{isKo ? "이름, 연락처 (예약 시)" : "Name, contact number (when booking)"}</li>
              <li>{isKo ? "시술 이력 (서비스 제공 목적)" : "Treatment history (for service purposes)"}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg text-waxly-brown font-normal mb-3">
              {isKo ? "3. 개인정보의 보유 및 이용 기간" : "3. Retention Period"}
            </h2>
            <p>
              {isKo
                ? "수집된 개인정보는 서비스 제공 기간 동안 보유하며, 목적 달성 후 지체 없이 파기합니다."
                : "Personal information is retained during the service period and promptly destroyed after the purpose is fulfilled."}
            </p>
          </div>

          <div>
            <h2 className="text-lg text-waxly-brown font-normal mb-3">
              {isKo ? "4. 개인정보의 제3자 제공" : "4. Third-Party Disclosure"}
            </h2>
            <p>
              {isKo
                ? "릴리브는 고객의 동의 없이 개인정보를 외부에 제공하지 않습니다. 단, 법령에 의해 요구되는 경우는 예외입니다."
                : "Relieve does not share personal information with third parties without customer consent, except as required by law."}
            </p>
          </div>

          <div>
            <h2 className="text-lg text-waxly-brown font-normal mb-3">
              {isKo ? "5. 문의처" : "5. Contact"}
            </h2>
            <p>
              {isKo
                ? `개인정보 관련 문의사항은 ${contact.phone}으로 연락해주세요.`
                : `For privacy inquiries, please contact us at ${contact.phone}.`}
            </p>
            <p className="mt-2">
              {isKo
                ? `주소: ${location.address.road}`
                : `Address: ${location.address.roadEn}`}
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
