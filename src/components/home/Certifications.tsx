"use client";

import { useLocale } from "next-intl";
import { certifications } from "@/lib/data";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export default function Certifications() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-24 lg:py-32 bg-waxly-cream overflow-hidden">
      <div className="section-container relative">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 py-2 px-5 border border-waxly-brown/20 text-waxly-brown text-sm font-light tracking-wider mb-6">
            <span className="material-symbols-outlined text-base">workspace_premium</span>
            {isKo ? "전문 자격" : "Certifications"}
          </span>
          <h2
            className="text-4xl lg:text-5xl text-waxly-brown mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {isKo ? "믿을 수 있는 자격과 경력" : "Trusted Credentials"}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-waxly-border" />
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div
                    className={`absolute left-0 top-1 w-8 h-8 flex items-center justify-center ${
                      cert.highlight ? "bg-waxly-gold text-white" : "bg-white text-waxly-brown"
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'wght' 200" }}
                    >
                      {cert.highlight ? "emoji_events" : "check"}
                    </span>
                  </div>
                  <div
                    className={`p-4 ${
                      cert.highlight
                        ? "bg-waxly-gold/10 border border-waxly-gold/30"
                        : "bg-white"
                    }`}
                  >
                    {cert.year && (
                      <span className="text-sm text-waxly-brownLight mb-1 block">
                        {cert.year}
                      </span>
                    )}
                    <h3
                      className={`font-light ${
                        cert.highlight ? "text-waxly-brown" : "text-waxly-brownLight"
                      }`}
                    >
                      {isKo ? cert.title : cert.titleEn}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/education"
              className="inline-flex items-center gap-2 text-waxly-brown font-light tracking-wider hover:gap-3 transition-all"
            >
              {isKo ? "교육 프로그램 더 알아보기" : "Learn About Our Training Program"}
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
