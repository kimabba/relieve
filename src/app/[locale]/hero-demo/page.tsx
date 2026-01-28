"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroOptionA from "@/components/hero-demos/HeroOptionA";
import HeroOptionB from "@/components/hero-demos/HeroOptionB";
import HeroOptionC from "@/components/hero-demos/HeroOptionC";
import HeroOptionD from "@/components/hero-demos/HeroOptionD";
import HeroOptionE from "@/components/hero-demos/HeroOptionE";
import HeroOptionF from "@/components/hero-demos/HeroOptionF";

const options = [
  { id: "D", label: "Cinematic Split", desc: "다크 배경 + 이미지 분할 + 마그네틱 버튼", hot: true },
  { id: "E", label: "Dark Cinematic", desc: "텍스트 스크램블 + 슬라이드 + 커서 효과", hot: true },
  { id: "F", label: "Cinematic Premium", desc: "3D 패럴랙스 + 풀스크린 + 그라디언트", hot: true },
  { id: "A", label: "프리미엄 럭셔리", desc: "Morphing Blob + Kinetic Typography" },
  { id: "B", label: "미니멀 엘레강스", desc: "Text Reveal + Gradient Animation" },
  { id: "C", label: "인터랙티브", desc: "Scroll-Triggered + Mouse Parallax" },
];

type OptionId = "A" | "B" | "C" | "D" | "E" | "F";

export default function HeroDemoPage() {
  const [activeOption, setActiveOption] = useState<OptionId>("D");

  return (
    <div className="relative">
      {/* Option Selector - Fixed */}
      <div className="fixed top-20 right-4 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-4 max-w-xs">
        <h3 className="text-sm font-bold text-joy-dark mb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-joy-pink">palette</span>
          Hero 스타일 선택
        </h3>
        <div className="space-y-2 max-h-[60vh] overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveOption(opt.id as OptionId)}
              className={`w-full text-left p-3 rounded-xl transition-all ${
                activeOption === opt.id
                  ? "bg-joy-pink text-white"
                  : "bg-gray-50 text-joy-text hover:bg-gray-100"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="font-bold text-sm">
                  {opt.id}: {opt.label}
                </span>
                {opt.hot && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeOption === opt.id
                      ? "bg-white/20 text-white"
                      : "bg-joy-yellow/20 text-joy-yellow"
                  }`}>
                    NEW
                  </span>
                )}
              </span>
              <span className={`text-xs block mt-1 ${activeOption === opt.id ? "text-white/80" : "text-joy-textLight"}`}>
                {opt.desc}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeOption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeOption === "A" && <HeroOptionA />}
          {activeOption === "B" && <HeroOptionB />}
          {activeOption === "C" && <HeroOptionC />}
          {activeOption === "D" && <HeroOptionD />}
          {activeOption === "E" && <HeroOptionE />}
          {activeOption === "F" && <HeroOptionF />}
        </motion.div>
      </AnimatePresence>

      {/* Spacer for Option C scroll */}
      {activeOption === "C" && (
        <div className="h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <span className="material-symbols-outlined text-6xl text-joy-pink mb-4">
              arrow_upward
            </span>
            <p className="text-joy-text text-lg">
              스크롤하여 Hero 효과를 확인하세요
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
