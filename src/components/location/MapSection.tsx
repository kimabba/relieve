"use client";

import { useLocale } from "next-intl";
import { location, placeInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function MapSection() {
  const locale = useLocale();
  const isKo = locale === "ko";

  const naverMapUrl = `https://map.naver.com/p/entry/place/${placeInfo.id}`;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Map Container */}
          <div className="relative w-full h-[400px] lg:h-[500px] bg-gray-100">
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
          <div className="bg-[#FFFAF4] p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-gray-800 text-lg mb-1">
                {isKo ? placeInfo.name : placeInfo.nameEn}
              </h3>
              <p className="text-gray-600">
                {isKo ? location.address.road : location.address.roadEn}
              </p>
            </div>
            <a
              href={naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#9B8AC4] hover:bg-[#8577B0] text-white rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              <span className="material-symbols-outlined text-lg">open_in_new</span>
              {isKo ? "네이버 지도에서 보기" : "View on Naver Map"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
