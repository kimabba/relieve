"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { placeInfo, location, contact, menuItems } from "@/lib/data";

export default function Footer() {
  const locale = useLocale();
  const isKo = locale === "ko";

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-waxly-brown pt-20 pb-8 text-waxly-cream overflow-hidden">
      {/* Decorative Curved Line */}
      <svg
        className="absolute top-0 left-0 w-[400px] h-[200px] opacity-10 pointer-events-none"
        viewBox="0 0 400 200"
        fill="none"
      >
        <path
          d="M0 100C100 50 200 0 300 50C350 75 400 100 400 200"
          stroke="#FFF7EF"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="section-container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span
                className="text-2xl text-waxly-cream"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                {isKo ? "릴리브" : "Relieve"}
              </span>
              <p className="text-waxly-cream/60 text-xs tracking-wider mt-1">
                SUGARING SALON
              </p>
            </div>
            <p className="text-waxly-cream/70 font-light text-sm leading-relaxed mb-6">
              {isKo
                ? "100% 천연 슈가링으로 부드럽고 건강한 피부를 경험하세요. 그랑프리 수상 전문가의 꼼꼼한 케어."
                : "Experience smooth, healthy skin with 100% natural sugaring. Award-winning expert care."}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 border border-waxly-cream/30 hover:bg-waxly-cream hover:text-waxly-brown flex items-center justify-center transition-all duration-300"
              >
                <span className="text-sm font-light">IG</span>
              </a>
              <a
                href={placeInfo.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Naver Map"
                className="w-11 h-11 border border-waxly-cream/30 hover:bg-[#03C75A] hover:border-[#03C75A] flex items-center justify-center transition-all duration-300"
              >
                <span className="text-sm font-light">N</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                aria-label={isKo ? "전화하기" : "Call us"}
                className="w-11 h-11 border border-waxly-cream/30 hover:bg-waxly-cream hover:text-waxly-brown flex items-center justify-center transition-all duration-300"
              >
                <span className="material-symbols-outlined text-lg">call</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mb-6 text-lg text-waxly-cream"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              {isKo ? "서비스" : "Services"}
            </h4>
            <ul className="space-y-3.5 text-sm text-waxly-cream/70 font-light">
              {menuItems.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    href="/services"
                    className="hover:text-waxly-cream hover:underline transition-colors duration-300"
                  >
                    {isKo ? item.name : item.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="mb-6 text-lg text-waxly-cream"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              {isKo ? "회사 정보" : "Company"}
            </h4>
            <ul className="space-y-3.5 text-sm text-waxly-cream/70 font-light">
              <li>
                <Link
                  href="/about"
                  className="hover:text-waxly-cream hover:underline transition-colors duration-300"
                >
                  {isKo ? "소개" : "About Us"}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-waxly-cream hover:underline transition-colors duration-300"
                >
                  {isKo ? "임산부 케어" : "Maternity Care"}
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="hover:text-waxly-cream hover:underline transition-colors duration-300"
                >
                  {isKo ? "오시는 길" : "Location"}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-waxly-cream hover:underline transition-colors duration-300"
                >
                  {isKo ? "서비스 메뉴" : "Services"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4
              className="mb-6 text-lg text-waxly-cream"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              {isKo ? "방문 안내" : "Visit Us"}
            </h4>
            <ul className="space-y-4 text-sm text-waxly-cream/70 font-light">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-lg text-waxly-cream/50 mt-0.5 shrink-0" style={{ fontVariationSettings: "'wght' 200" }}>
                  location_on
                </span>
                <span className="leading-relaxed">
                  {isKo ? location.address.road : location.address.roadEn}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg text-waxly-cream/50 shrink-0" style={{ fontVariationSettings: "'wght' 200" }}>
                  call
                </span>
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-waxly-cream transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg text-waxly-cream/50 shrink-0" style={{ fontVariationSettings: "'wght' 200" }}>
                  schedule
                </span>
                <span>{isKo ? "10:00 - 20:00" : "10:00 AM - 8:00 PM"}</span>
              </li>
            </ul>

            {/* CTA Button - Square Waxly Style */}
            <a
              href={placeInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-waxly-cream hover:bg-white text-waxly-brown text-sm font-light tracking-wider py-3 px-6 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              {isKo ? "네이버 예약" : "Book Now"}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-waxly-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-waxly-cream/50 font-light">
            © {year} {isKo ? placeInfo.name : placeInfo.nameEn}.{" "}
            {isKo ? "모든 권리 보유." : "All rights reserved."}
          </p>
          <div className="flex gap-6 text-xs text-waxly-cream/50 font-light">
            <span className="hover:text-waxly-cream/70 cursor-pointer transition-colors">
              {isKo ? "개인정보처리방침" : "Privacy Policy"}
            </span>
            <span className="hover:text-waxly-cream/70 cursor-pointer transition-colors">
              {isKo ? "이용약관" : "Terms of Service"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
