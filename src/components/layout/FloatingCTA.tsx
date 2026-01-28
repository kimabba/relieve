"use client";

import { useState, useEffect } from "react";
import { placeInfo } from "@/lib/data";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={placeInfo.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#03C75A] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#02b150] transition-all hover:scale-105 active:scale-95 group font-bold text-lg"
      >
        <span className="material-symbols-outlined w-6 h-6 group-hover:animate-bounce">
          calendar_month
        </span>
        <span>네이버 예약</span>
      </a>
    </div>
  );
}
