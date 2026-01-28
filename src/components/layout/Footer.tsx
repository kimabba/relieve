"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { placeInfo, location, contact, menuItems } from "@/lib/data";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const isKo = locale === "ko";

  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary-bg dark:bg-[#1e1e18] pt-16 pb-8 text-text-main dark:text-white">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">spa</span>
              <span className="font-display text-lg font-bold">
                {isKo ? "릴리브" : "Relieve"}
              </span>
            </div>
            <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">
              {t("services")}
            </h4>
            <ul className="space-y-4 text-sm text-text-muted dark:text-gray-400">
              {menuItems.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    href="/services"
                    className="hover:text-primary transition-colors"
                  >
                    {isKo ? item.name : item.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">
              {t("company")}
            </h4>
            <ul className="space-y-4 text-sm text-text-muted dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-primary transition-colors">
                  {tNav("location")}
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-primary transition-colors">
                  {tNav("reservation")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  {tNav("blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">
              {t("visitUs")}
            </h4>
            <ul className="space-y-4 text-sm text-text-muted dark:text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-lg mt-0.5">
                  location_on
                </span>
                <span>
                  {isKo ? location.address.road : location.address.roadEn}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg">call</span>
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted dark:text-gray-500">
            © {year} {isKo ? placeInfo.name : placeInfo.nameEn}. {t("rights")}
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary dark:text-gray-400 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a
              href={placeInfo.naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary dark:text-gray-400 transition-colors"
            >
              <span className="sr-only">Naver</span>
              <span className="text-sm font-medium">Naver</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
