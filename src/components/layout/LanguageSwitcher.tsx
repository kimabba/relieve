"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "ko" ? "en" : "ko";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 text-sm font-medium text-text-main hover:text-primary dark:text-white dark:hover:text-primary transition-colors"
      aria-label={locale === "ko" ? "Switch to English" : "한국어로 전환"}
    >
      <span className="material-symbols-outlined text-lg">language</span>
      <span>{locale === "ko" ? "EN" : "한국어"}</span>
    </button>
  );
}
