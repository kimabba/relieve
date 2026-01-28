"use client";

import { useLocale } from "next-intl";
import { location, placeInfo } from "@/lib/data";

export default function MapSection() {
  const locale = useLocale();
  const isKo = locale === "ko";

  // Naver Map Static Image URL (fallback)
  const naverMapUrl = `https://map.naver.com/p/entry/place/${placeInfo.id}`;

  return (
    <section className="py-12 bg-secondary-bg dark:bg-[#32322a]">
      <div className="container-main">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          {/* Map Container - Using iframe for Naver Map embed */}
          <div className="relative w-full h-[400px] bg-gray-200 dark:bg-gray-700">
            <iframe
              src={`https://map.naver.com/p/entry/place/${placeInfo.id}?c=15,0,0,0,dh`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={isKo ? "릴리브 위치 지도" : "Relieve Location Map"}
            />
          </div>

          {/* Map Footer */}
          <div className="bg-white dark:bg-background-dark p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-text-main dark:text-white">
                {isKo ? placeInfo.name : placeInfo.nameEn}
              </h3>
              <p className="text-sm text-text-muted dark:text-gray-400">
                {isKo ? location.address.road : location.address.roadEn}
              </p>
            </div>
            <a
              href={naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">open_in_new</span>
              {isKo ? "네이버 지도에서 보기" : "View on Naver Map"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
