"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { placeInfo, location, contact, menuItems } from "@/lib/data";

export default function Footer() {
  const locale = useLocale();
  const isKo = locale === "ko";

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-joy-dark pt-20 pb-8 text-white overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-joy-pink/5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-joy-teal/5 blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="section-container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-joy-teal rounded-full flex items-center justify-center text-white font-serif font-bold italic text-xl">
                R
              </div>
              <div>
                <span className="font-serif text-xl font-bold block">
                  {isKo ? "릴리브" : "Relieve"}
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                  {isKo ? "프리미엄 슈가링" : "Premium Sugaring"}
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {isKo
                ? "임산부를 위한 따뜻하고 안전한 슈가링 케어. 100% 천연 성분으로 소중한 순간을 함께합니다."
                : "Warm and safe sugaring care for expectant mothers. 100% natural ingredients for your precious moments."}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-joy-pink flex items-center justify-center transition-all duration-300"
              >
                <span className="text-sm font-bold">IG</span>
              </a>
              <a
                href={placeInfo.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#03C75A] flex items-center justify-center transition-all duration-300"
              >
                <span className="text-sm font-bold">N</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-joy-teal flex items-center justify-center transition-all duration-300"
              >
                <span className="material-symbols-outlined text-lg">call</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-xs uppercase tracking-widest text-joy-pink">
              {isKo ? "서비스" : "Services"}
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              {menuItems.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {isKo ? item.name : item.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-xs uppercase tracking-widest text-joy-pink">
              {isKo ? "회사 정보" : "Company"}
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  {isKo ? "임산부 케어" : "Maternity Care"}
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="hover:text-white transition-colors duration-300"
                >
                  {isKo ? "오시는 길" : "Location"}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-300"
                >
                  {isKo ? "서비스 메뉴" : "Services"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-semibold mb-6 text-xs uppercase tracking-widest text-joy-pink">
              {isKo ? "방문 안내" : "Visit Us"}
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-lg text-joy-teal mt-0.5 shrink-0">
                  location_on
                </span>
                <span className="leading-relaxed">
                  {isKo ? location.address.road : location.address.roadEn}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg text-joy-teal shrink-0">
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
                <span className="material-symbols-outlined text-lg text-joy-teal shrink-0">
                  schedule
                </span>
                <span>{isKo ? "10:00 - 20:00" : "10:00 AM - 8:00 PM"}</span>
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href={placeInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-joy-pink hover:bg-[#FF8E8E] text-white text-sm font-semibold py-3 px-5 rounded-full transition-all duration-300"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              {isKo ? "네이버 예약" : "Book Now"}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
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
