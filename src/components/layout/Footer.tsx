"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { placeInfo, location, contact, menuItems } from "@/lib/data";

export default function Footer() {
  const locale = useLocale();
  const isKo = locale === "ko";

  const year = new Date().getFullYear();

  return (
    <footer className="bg-background-dark pt-20 pb-8 text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand - Stitch Style */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-11 rounded-[10px] bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">
                  spa
                </span>
              </div>
              <div>
                <span className="font-display text-xl font-bold block">
                  {isKo ? "릴리브" : "Relieve"}
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                  {isKo ? "프리미엄 슈가링" : "Premium Sugaring"}
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {isKo
                ? "광주 북구의 프리미엄 슈가링 전문샵. 천연 성분과 전문적인 기술로 당신의 아름다움을 완성합니다."
                : "Premium sugaring specialist in Gwangju. Perfecting your beauty with natural ingredients and professional expertise."}
            </p>
            {/* Social Icons - Stitch Style */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-[10px] bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-sm font-bold">IG</span>
              </a>
              <a
                href={placeInfo.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-[10px] bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-sm font-bold">N</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="size-10 rounded-[10px] bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-lg">call</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-xs uppercase tracking-widest text-primary">
              {isKo ? "서비스" : "Services"}
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              {menuItems.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    href="/services"
                    className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {isKo ? item.name : item.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-xs uppercase tracking-widest text-primary">
              {isKo ? "회사 정보" : "Company"}
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  {isKo ? "전문가 소개" : "About Us"}
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  {isKo ? "오시는 길" : "Location"}
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  {isKo ? "예약" : "Reservation"}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  {isKo ? "블로그" : "Blog"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit Us - Stitch Style */}
          <div>
            <h4 className="font-semibold mb-6 text-xs uppercase tracking-widest text-primary">
              {isKo ? "방문 안내" : "Visit Us"}
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-lg text-primary mt-0.5 shrink-0">
                  location_on
                </span>
                <span className="leading-relaxed">
                  {isKo ? location.address.road : location.address.roadEn}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg text-primary shrink-0">
                  call
                </span>
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg text-primary shrink-0">
                  schedule
                </span>
                <span>{isKo ? "영업시간: 10:00 - 20:00" : "Hours: 10:00 AM - 8:00 PM"}</span>
              </li>
            </ul>

            {/* CTA Button - Stitch Style */}
            <a
              href={placeInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-3 px-5 rounded-[10px] transition-all duration-300"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              {isKo ? "네이버 예약" : "Book Now"}
            </a>
          </div>
        </div>

        {/* Bottom Bar - Stitch Style */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {year} {isKo ? placeInfo.name : placeInfo.nameEn}.{" "}
            {isKo ? "모든 권리 보유." : "All rights reserved."}
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <span className="hover:text-gray-400 cursor-pointer transition-colors">
              {isKo ? "개인정보처리방침" : "Privacy Policy"}
            </span>
            <span className="hover:text-gray-400 cursor-pointer transition-colors">
              {isKo ? "이용약관" : "Terms of Service"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
