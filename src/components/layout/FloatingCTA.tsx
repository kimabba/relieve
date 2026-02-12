"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { placeInfo, contact } from "@/lib/data";

export default function FloatingCTA() {
  const locale = useLocale();
  const isKo = locale === "ko";
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isExpanded) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-floating-cta]")) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isExpanded]);

  return (
    <div
      data-floating-cta
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      {/* Expanded Options */}
      <div
        className={`absolute bottom-16 right-0 mb-2 flex flex-col gap-2 transition-all duration-300 ${
          isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Naver Booking */}
        <a
          href={placeInfo.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-white text-waxly-brown pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 whitespace-nowrap border border-waxly-border"
        >
          <span className="material-symbols-outlined text-lg">calendar_month</span>
          <span className="text-sm font-light">{isKo ? "네이버 예약" : "Naver Booking"}</span>
        </a>

        {/* Phone Call */}
        <a
          href={`tel:${contact.phone}`}
          className="flex items-center gap-2.5 bg-white text-waxly-brown pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 whitespace-nowrap border border-waxly-border"
        >
          <span className="material-symbols-outlined text-lg">call</span>
          <span className="text-sm font-light">{isKo ? "전화 문의" : "Call Us"}</span>
        </a>

        {/* TalkTalk Chat */}
        <a
          href={placeInfo.naverMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-white text-waxly-brown pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 whitespace-nowrap border border-waxly-border"
        >
          <span className="material-symbols-outlined text-lg">chat</span>
          <span className="text-sm font-light">{isKo ? "톡톡 상담" : "Chat"}</span>
        </a>
      </div>

      {/* Main FAB Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 ${
          isExpanded
            ? "bg-waxly-brownDark text-white rotate-45"
            : "bg-waxly-brown text-white"
        }`}
        aria-label={isKo ? "예약 옵션" : "Booking options"}
      >
        <span className="material-symbols-outlined text-2xl transition-transform duration-300">
          {isExpanded ? "close" : "add"}
        </span>
      </button>
    </div>
  );
}
