"use client";

import { useLocale } from "next-intl";
import Image from "next/image";

const testimonialsData = {
  ko: {
    title: "임산부 고객님 후기",
    testimonials: [
      {
        text: "34주에 시술받는 게 걱정됐는데, 선생님이 정말 편안하게 해주셨어요. 임산부 전용 쿠션이 정말 좋았습니다.",
        name: "김지연",
        week: "34주",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAM7LFnR-ZTiqVwzkBRT2ZxubO1p1h7vM-Lhd9qq_-txxv0kY7Wp2sFAfhvSA2CM22izvBDPq56fSDuK1B1m1bKgLIAQD_fyMWMIE_Lv_3-ruYEfoFv-QTKUGSHz139cP9zeppN18XYQwJ0eSnX-YEiyQtb31M-M421iKhiHePz-e6exApUkmG3TJRe4-dS8SzviUOi3aP71_1yr8FDvMdpuA5y33cOP_xkzThWlTg-IGKKFTY8lzPIROqGIjrcCRqiLqQtBSietqE",
      },
      {
        text: "상담 때 성분 하나하나 설명해주셔서 마음이 놓였어요. 피부가 이렇게 좋아진 건 처음이에요.",
        name: "이수현",
        week: "22주",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAXI9dpGqvbEzUO5jaCcZXTX9IvGvJ-QVDNS1Pfbof3o6Po8NifJMqb55usjOjgeI3JAj-j-ksBedS6yIym65Sm9x3ZfAgZQfMqnzTxdnJHTDb0-rydoQRcQajOmisrFgFraUOdy1nJ7RNK6g7xGTp-V-2A2j1tNGOju_6UV9zv0JpWlkHvOWJFlGrzsZ8q3Dk8NEzitFCTic0XDi70sQ54QBhKAnDiM9WX8disY9Pz1ygfPd4trHzsGAYZHrU-PmrW-L3byFgfEdk",
      },
      {
        text: "임산부에게 강력 추천해요. 슈가링이 왁싱보다 훨씬 부드럽고, 분위기도 너무 편안해요.",
        name: "박민아",
        week: "산후",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBJFKLkkSBumaYxGDyuj3aS4wDDG9WrLqxvLq7s6FpRKYRHA-brMkBDx0VRhk0jqzer0Us80dIiWF5fybda17jPILm24fImmfy9xt-Zo1ffwyMSx2aQl-w47EEbHY6t4iAZmBL75384gpSG01PYqon9ybOcq20OFZxgsi_kAv0JPEGvv7NDQcHnKk3SKsipYXR-2vK8850S6dQ5nWoonOulIgklX6lwHolcs5zPqunZXrA17h9ZfbNTL5K5yu4YzoVs4VbSVbP-Nlk",
      },
    ],
  },
  en: {
    title: "Stories from Mothers",
    testimonials: [
      {
        text: "I was terrified to get waxed at 34 weeks, but the team made me feel so dignified and comfortable. The pillows were a game changer.",
        name: "Sarah J.",
        week: "34 Weeks",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAM7LFnR-ZTiqVwzkBRT2ZxubO1p1h7vM-Lhd9qq_-txxv0kY7Wp2sFAfhvSA2CM22izvBDPq56fSDuK1B1m1bKgLIAQD_fyMWMIE_Lv_3-ruYEfoFv-QTKUGSHz139cP9zeppN18XYQwJ0eSnX-YEiyQtb31M-M421iKhiHePz-e6exApUkmG3TJRe4-dS8SzviUOi3aP71_1yr8FDvMdpuA5y33cOP_xkzThWlTg-IGKKFTY8lzPIROqGIjrcCRqiLqQtBSietqE",
      },
      {
        text: "The private consultation really put my mind at ease. They explained everything about the ingredients. My skin has never been happier.",
        name: "Emily R.",
        week: "22 Weeks",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAXI9dpGqvbEzUO5jaCcZXTX9IvGvJ-QVDNS1Pfbof3o6Po8NifJMqb55usjOjgeI3JAj-j-ksBedS6yIym65Sm9x3ZfAgZQfMqnzTxdnJHTDb0-rydoQRcQajOmisrFgFraUOdy1nJ7RNK6g7xGTp-V-2A2j1tNGOju_6UV9zv0JpWlkHvOWJFlGrzsZ8q3Dk8NEzitFCTic0XDi70sQ54QBhKAnDiM9WX8disY9Pz1ygfPd4trHzsGAYZHrU-PmrW-L3byFgfEdk",
      },
      {
        text: "Highly recommend for any expecting mom. The sugaring is so much gentler than wax, and the atmosphere is pure zen.",
        name: "Michelle T.",
        week: "Post-Partum",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBJFKLkkSBumaYxGDyuj3aS4wDDG9WrLqxvLq7s6FpRKYRHA-brMkBDx0VRhk0jqzer0Us80dIiWF5fybda17jPILm24fImmfy9xt-Zo1ffwyMSx2aQl-w47EEbHY6t4iAZmBL75384gpSG01PYqon9ybOcq20OFZxgsi_kAv0JPEGvv7NDQcHnKk3SKsipYXR-2vK8850S6dQ5nWoonOulIgklX6lwHolcs5zPqunZXrA17h9ZfbNTL5K5yu4YzoVs4VbSVbP-Nlk",
      },
    ],
  },
};

export default function MaternityTestimonials() {
  const locale = useLocale();
  const content =
    locale === "ko" ? testimonialsData.ko : testimonialsData.en;

  return (
    <section className="py-20 lg:py-28 bg-background-light dark:bg-background-dark border-t border-primary/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center font-display text-3xl lg:text-4xl font-bold mb-16 text-text-main dark:text-white">
          {content.title}
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-[#2c2c24] p-8 rounded-2xl shadow-sm border border-transparent hover:border-primary/20 transition-all ${
                index === 1 ? "md:-mt-4" : ""
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm">
                    star
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg italic font-medium mb-6 text-text-main dark:text-gray-200">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gray-200 overflow-hidden relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm text-text-main dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-text-muted">{testimonial.week}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
