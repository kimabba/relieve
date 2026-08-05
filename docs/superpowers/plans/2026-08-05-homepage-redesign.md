# 홈페이지 리디자인 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 릴리브 홈페이지(`/`)를 "병원급 신뢰·청결 + 임산부 왁싱 전문" 포지셔닝 중심으로 재구성하고, Hero 섹션에만 react-three-fiber 3D를 넣어 쇼케이스 임팩트를 만든다.

**Architecture:** Next.js 14 App Router + Tailwind(`waxly` 색상 토큰) + Framer Motion(이미 설치됨) 유지. 3D는 `react-three-fiber`/`@react-three/drei`를 신규 추가하고 Hero에만 클라이언트 전용 동적 임포트로 격리한다. 나머지 섹션은 기존 서버 컴포넌트 트리 패턴을 그대로 따른다.

**Tech Stack:** Next.js 14.2, React 18, TypeScript, Tailwind CSS, Framer Motion(기존), react-three-fiber + @react-three/drei + three(신규), next-intl(로케일 라우팅만 사용, 컴포넌트 텍스트는 기존 관례대로 `useLocale()` + 인라인 ko/en 분기).

## Global Constraints

- 로케일 텍스트는 이 프로젝트의 기존 관례를 따른다: `useLocale()`으로 얻은 locale이 `"ko"`인지 분기해서 인라인 한/영 문구를 쓴다 (next-intl 메시지 키가 아님). 신규 컴포넌트도 동일 패턴 사용.
- 색상은 반드시 `tailwind.config.ts`의 `waxly` 토큰만 사용한다 (`waxly-brown` `waxly-brownLight` `waxly-brownDark` `waxly-cream` `waxly-gold` `waxly-border`). `beauty-*` 토큰(mauve/rose/sage)은 이번 작업에서 사용하지 않는다.
- 헤딩 폰트는 `'Playfair Display', serif` (fontWeight 400), 본문은 `font-light` — 기존 컴포넌트 전부가 따르는 타이포 규칙.
- **테스트 관례**: 이 저장소에는 테스트 프레임워크가 없다 (순수 프레젠테이션 마케팅 사이트). 프로젝트 CLAUDE.md 지침에 따라 UI 변경의 검증 수단은 `npx tsc --noEmit`(타입 체크) + `npm run lint` + `npm run dev`로 브라우저에서 직접 확인이다. 각 태스크의 "테스트" 스텝은 이 세 가지로 구성되며, 새 테스트 프레임워크를 도입하지 않는다.
- 새 의존성은 `three`, `@react-three/fiber`, `@react-three/drei` 3개로 제한한다. 그 외 3D/애니메이션 라이브러리를 추가로 넣지 않는다.

## 계획 작성 중 발견한 스펙 수정 사항 (spec 대비 변경)

spec(`docs/superpowers/specs/2026-08-05-homepage-redesign-design.md`) 작성 시점엔 실제 `page.tsx`를 확인하지 않아 아래 2가지가 실제와 달랐다. 이 plan은 실제 코드 기준으로 바로잡았다:

1. **`WhySugaring.tsx`는 현재 홈페이지에 연결돼 있지 않다** (파일만 존재, `page.tsx`에 import 없음). 색상도 `beauty` 테마(보라/세이지)라 현재 `waxly` 테마와 안 맞음 — "기존 유지"가 아니라 **waxly 테마로 리스타일 후 신규 연결**해야 한다 (Task 6).
2. **`Features.tsx`("릴리브 이야기" 섹션)는 현재 실제로 홈페이지에 있다.** 이 섹션의 통계(리뷰수, "8+ Year Experience")가 새로 만드는 TrustBar와 중복되고, "8+" 수치는 "2016년부터" 문구와도 안 맞는(2026년 기준 10년) 확인 안 된 숫자다. TrustBar+Certifications로 그 역할이 대체되므로 **Features는 홈페이지에서 제거**한다 (파일은 남겨두되 `page.tsx`에서 뺀다 — 다른 곳에서 쓸 수도 있으니 삭제까지는 하지 않음).

---

### Task 1: 3D 라이브러리 설치 + Hero3D 씬 컴포넌트

**Files:**
- Modify: `package.json`
- Create: `src/components/home/Hero3D.tsx`

**Interfaces:**
- Produces: `Hero3D` — `export default function Hero3D(): JSX.Element`, props 없음, 자체적으로 `<Canvas>` 전체를 렌더링하는 독립 컴포넌트.

- [ ] **Step 1: 의존성 설치**

```bash
npm install three @react-three/fiber @react-three/drei
```

- [ ] **Step 2: 설치 확인**

```bash
npm ls three @react-three/fiber @react-three/drei
```

Expected: 세 패키지 모두 버전 출력, 에러 없음.

- [ ] **Step 3: Hero3D 컴포넌트 작성**

`src/components/home/Hero3D.tsx` 새로 생성:

```tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} color="#FFC402" />
      <directionalLight position={[-3, -2, 2]} intensity={0.4} color="#FFF7EF" />
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.4, 6]} />
          <MeshDistortMaterial
            color="#6A483C"
            distort={0.35}
            speed={1.8}
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>
      </Float>
    </Canvas>
  );
}
```

- [ ] **Step 4: 타입 체크로 확인 (자동 테스트가 없으므로 이것이 검증 단계)**

```bash
npx tsc --noEmit
```

Expected: `Hero3D.tsx` 관련 에러 없음 (기존 `.next/types`의 삭제된 라우트 관련 에러는 이 작업과 무관하므로 무시).

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json src/components/home/Hero3D.tsx
git commit -m "feat: react-three-fiber 기반 Hero3D 블롭 씬 추가"
```

---

### Task 2: Hero.tsx에 Hero3D 통합 + 헤드라인 카피 교체

**Files:**
- Modify: `src/components/home/Hero.tsx:1-6` (imports), `:55-72` (헤드라인), `:81-83` (서브타이틀), `:139-196` (우측 이미지 콜라주 블록)

**Interfaces:**
- Consumes: `Hero3D` (Task 1에서 생성, `src/components/home/Hero3D.tsx` default export)

- [ ] **Step 1: import 구문에 dynamic import 및 reduced-motion 훅 추가**

`src/components/home/Hero.tsx` 상단 (1~6번 줄) 교체:

```tsx
"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { placeInfo, contact, reviews, businessHours } from "@/lib/data";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });
```

- [ ] **Step 2: 컴포넌트 본문 시작 부분에 reduced-motion 감지 state 추가**

`export default function Hero() {` 바로 아래, `const isKo = locale === "ko";` 다음 줄에 추가:

```tsx
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);
```

- [ ] **Step 3: 헤드라인을 신뢰 포지셔닝 카피로 교체**

기존 (48~72번 줄):

```tsx
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl text-waxly-brown leading-tight mb-8 text-balance"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {isKo ? (
                <>
                  광주
                  <br />
                  프리미엄
                  <br />
                  슈가링 케어
                </>
              ) : (
                <>
                  Gwangju
                  <br />
                  Premium
                  <br />
                  Sugaring Care
                </>
              )}
            </motion.h1>
```

교체 후:

```tsx
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl text-waxly-brown leading-tight mb-8 text-balance"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {isKo ? (
                <>
                  믿을 수 있는
                  <br />
                  병원급 청결
                  <br />
                  임산부 왁싱 전문
                </>
              ) : (
                <>
                  Trusted Care,
                  <br />
                  Hospital-Grade
                  <br />
                  Maternity Waxing
                </>
              )}
            </motion.h1>
```

- [ ] **Step 4: 서브타이틀을 신뢰 근거 카피로 교체**

기존 (81~83번 줄):

```tsx
              {isKo
                ? "100% 천연 슈가링으로 부드럽고 건강한 피부를 경험하세요. 설탕, 레몬, 물로만 만든 순수한 케어."
                : "Experience smooth, healthy skin with 100% natural sugaring. Pure care made from sugar, lemon, and water."}
```

교체 후:

```tsx
              {isKo
                ? "위생 인증과 전문 자격을 갖춘 손길로, 임산부와 민감성 피부도 안심하고 맡기는 케어를 제공합니다."
                : "Certified hygiene standards and expert credentials — care trusted by expectant mothers and sensitive skin alike."}
```

- [ ] **Step 5: 우측 이미지 콜라주 블록을 3D/정적 이미지 조건부 렌더링으로 교체**

기존 (139~196번 줄, `{/* Right Content - Image Collage */}` 주석부터 해당 `motion.div` 닫는 태그까지) 전체를 아래로 교체:

```tsx
          {/* Right Content - 3D Hero or Static Fallback */}
          <motion.div
            className="lg:col-span-7 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative w-full max-w-lg ml-auto aspect-[3/4]">
              {prefersReducedMotion ? (
                <div className="relative w-full h-full rounded-tl-[100px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1589525231707-f2de2428f59c?w=600&h=800&fit=crop&q=80"
                    alt={isKo ? "광주 슈가링 시술 - 릴리브" : "Sugaring treatment at Relieve Gwangju"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <Hero3D />
              )}

              {/* Circular Badge */}
              <motion.div
                className="absolute -left-8 top-1/4 w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <div className="text-center">
                  <div
                    className="text-waxly-brown text-xs tracking-wider"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <span className="block text-[10px] tracking-[0.2em]">RELIEVE</span>
                    <span className="block text-lg mt-1">슈가링</span>
                    <span className="block text-[10px] tracking-[0.2em]">SALON</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
```

(참고: 기존의 "Secondary Image - Bottom Left" 장식 블록은 3D 씬과 겹쳐 보이면 지저분하므로 제거한다. 위 코드가 그 블록 없이 완결된 대체본이다.)

- [ ] **Step 6: 타입 체크**

```bash
npx tsc --noEmit
```

Expected: `Hero.tsx` 관련 에러 없음.

- [ ] **Step 7: 브라우저 수동 확인 (테스트 프레임워크 부재에 따른 검증 단계)**

```bash
npm run dev
```

`http://localhost:3000/ko` 접속 후 확인:
- Hero 우측에 3D 블롭이 회전/변형하며 렌더링되는지
- 헤드라인이 "믿을 수 있는 / 병원급 청결 / 임산부 왁싱 전문"으로 보이는지
- 브라우저 DevTools → Rendering → "Emulate CSS prefers-reduced-motion: reduce" 체크 후 새로고침 시 3D 대신 정적 이미지가 보이는지
- `/en` 페이지에서 영문 카피 확인

- [ ] **Step 8: Commit**

```bash
git add src/components/home/Hero.tsx
git commit -m "feat: Hero에 3D 씬 통합 및 신뢰 포지셔닝 카피로 교체"
```

---

### Task 3: 실제 리뷰 데이터 추가 + 후기 섹션 콘텐츠 교체 + 깨진 링크 수정

**Files:**
- Modify: `src/lib/data.ts` (파일 끝에 추가)
- Modify: `src/components/home/ReviewHighlights.tsx:1-22`, `:90-156`, `:201`

**Interfaces:**
- Produces: `ReviewTestimonial` 인터페이스, `reviewTestimonials: ReviewTestimonial[]` (data.ts에서 export, 3개 항목)
- Consumes (ReviewHighlights.tsx에서): `reviewTestimonials`, `placeInfo.id` (기존 `src/lib/data.ts`에 이미 존재)

- [ ] **Step 1: `src/lib/data.ts` 파일 끝에 실제 임산부 후기 3건 추가**

`src/lib/data.ts` 파일 맨 끝에 추가 (기존 `export const safetyPromises = [...]` 블록 등 이후):

```ts
export interface ReviewTestimonial {
  nickname: string;
  visitInfo: string;
  visitInfoEn: string;
  textKo: string;
  textEn: string;
  rating: number;
}

export const reviewTestimonials: ReviewTestimonial[] = [
  {
    nickname: "항2항이",
    visitInfo: "임신 31주 · 1번째 방문",
    visitInfoEn: "31 Weeks Pregnant · 1st Visit",
    textKo:
      "31주 임산부라서 출산 전에 관리하려고 방문했어요. 배가 많이 나와 자세가 불편할까봐 걱정을 많이 했는데, 그런 생각이 들지도 않도록 정확하고 빠르게 진행해주셔서 좋았습니다. 그리고 원장님이 출산경력이 있으셔서 산모님들 배려가 최고에요. 위생도 깔끔했고 시술도 꼼꼼해서 만족했습니다.",
    textEn:
      "As a 31-week pregnant visitor, I was worried my belly would make positioning uncomfortable, but the treatment was quick and precise so I never had to worry. The owner has given birth herself, so she truly understands what expectant mothers need. Everything was clean and thorough.",
    rating: 5,
  },
  {
    nickname: "루체떼라니",
    visitInfo: "임산부 케어 · 3번째 방문",
    visitInfoEn: "Maternity Care · 3rd Visit",
    textKo:
      "이번에 출산 전 관리로 임산부 브라질리언 왁싱 받고 왔어요. 평소에도 꾸준히 다니던 곳이라 믿고 다시 방문했는데, 역시 만족스러웠어요. 슈가링 왁싱이라 자극이 적고 원장님 손이 정말 빨라서 30분 정도 만에 꼼꼼하게 시술과 진정관리까지 끝났어요. 위생관리가 철저하고 친절하게 배려해주셔서 편안하게 받을 수 있었어요.",
    textEn:
      "I came back for maternity Brazilian sugaring before giving birth. I've been a regular here and was fully satisfied once again. Sugaring is gentle, and the treatment plus soothing care finished in about 30 minutes thanks to the owner's speed and precision. Hygiene was thorough and the care was attentive.",
    rating: 5,
  },
  {
    nickname: "lin****",
    visitInfo: "임신 33주 · 1번째 방문",
    visitInfoEn: "33 Weeks Pregnant · 1st Visit",
    textKo:
      "33주차 임산부입니다! 출산전 2~3회 왁싱 받으면 위생관리에 좋다고 들어서 검색하던 차에 릴리브를 알게 되었어요. 사전에 톡톡 문의로 예상방문일자 및 방문주기도 추천해 주셔서 좋더라구요. 매장도 깔끔했고 배때문에 반듯하게 오래 누워있기 힘든데 속전속결로 끝내주셔서 너무 좋았습니다!",
    textEn:
      "I'm 33 weeks pregnant. I heard that 2-3 sugaring sessions before birth help with hygiene, and that's how I found Relieve. They even recommended a visit schedule beforehand through chat consultation. The salon was spotless, and since lying flat is hard this far along, they finished quickly and precisely.",
    rating: 5,
  },
];
```

- [ ] **Step 2: `ReviewHighlights.tsx` import 구문 및 상수 정리**

`src/components/home/ReviewHighlights.tsx` 1~22번 줄 전체 교체:

```tsx
"use client";

import { useLocale } from "next-intl";
import { placeInfo, reviews, reviewTestimonials } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "https://images.unsplash.com/photo-1589525231707-f2de2428f59c?w=300&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1588135862932-8ec0d62d1e6b?w=300&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1770294759101-fae1377d4d34?w=200&h=300&fit=crop&q=80",
];
```

- [ ] **Step 3: 우측 후기 표시 블록을 실제 후기 배열 기반으로 교체**

90~156번 줄(`{/* Right - Testimonial */}`부터 author 블록 닫는 `</motion.div>`까지) 전체를 아래로 교체. 첫 번째 후기를 큰 인용구로, 나머지 두 개를 하단 카드로 보여준다:

```tsx
          {/* Right - Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <h2
              className="text-4xl lg:text-5xl text-waxly-brown mb-10"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              {isKo ? "고객 후기" : "What Clients Say"}
            </h2>

            {/* Quote Icon */}
            <div className="text-waxly-brown/20 mb-6">
              <span
                className="text-7xl leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &ldquo;&ldquo;
              </span>
            </div>

            {/* Featured Testimonial */}
            <p className="text-waxly-brownLight font-light text-lg leading-relaxed mb-6 max-w-prose">
              {isKo ? reviewTestimonials[0].textKo : reviewTestimonials[0].textEn}
            </p>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(reviewTestimonials[0].rating)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-waxly-gold text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-full bg-waxly-brown/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-waxly-brown text-2xl" style={{ fontVariationSettings: "'wght' 200" }}>
                  pregnant_woman
                </span>
              </div>
              <div>
                <p
                  className="text-waxly-brown text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {reviewTestimonials[0].nickname}
                </p>
                <p className="text-waxly-brownLight font-light text-sm">
                  {isKo ? reviewTestimonials[0].visitInfo : reviewTestimonials[0].visitInfoEn}
                </p>
              </div>
            </div>

            {/* Secondary Testimonials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reviewTestimonials.slice(1).map((t) => (
                <div key={t.nickname} className="bg-waxly-cream p-5">
                  <p className="text-waxly-brownLight font-light text-sm leading-relaxed mb-3 line-clamp-4">
                    {isKo ? t.textKo : t.textEn}
                  </p>
                  <p className="text-waxly-brown text-sm">{t.nickname}</p>
                  <p className="text-waxly-brownLight font-light text-xs">
                    {isKo ? t.visitInfo : t.visitInfoEn}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
```

- [ ] **Step 4: 잘못된 네이버 리뷰 링크 수정**

기존 (201번 줄, `placeInfo.id`와 다른 place ID "1306755661"이 하드코딩되어 있던 버그):

```tsx
            href="https://m.place.naver.com/beauty/1306755661/review/visitor"
```

교체 후 (실제 사업장 `placeInfo.id` 사용):

```tsx
            href={`https://m.place.naver.com/place/${placeInfo.id}/review/visitor`}
```

- [ ] **Step 5: 타입 체크**

```bash
npx tsc --noEmit
```

Expected: `data.ts`, `ReviewHighlights.tsx` 관련 에러 없음.

- [ ] **Step 6: 브라우저 수동 확인**

`npm run dev` → `/ko`, `/en` 양쪽에서 후기 섹션 확인: 메인 후기 1개 + 하단 카드 2개 표시, 네이버 리뷰 링크(`https://m.place.naver.com/place/1053630091/review/visitor`)가 실제 릴리브 페이지로 연결되는지 클릭 확인.

- [ ] **Step 7: Commit**

```bash
git add src/lib/data.ts src/components/home/ReviewHighlights.tsx
git commit -m "feat: 실제 임산부 후기 3건 반영 및 잘못된 네이버 리뷰 링크 수정"
```

---

### Task 4: TrustBar 컴포넌트 신규 작성

**Files:**
- Create: `src/components/home/TrustBar.tsx`

**Interfaces:**
- Consumes: `reviews`, `certifications` (기존 `src/lib/data.ts` export)
- Produces: `TrustBar` — `export default function TrustBar(): JSX.Element`, props 없음.

- [ ] **Step 1: TrustBar.tsx 작성**

```tsx
"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { reviews, certifications } from "@/lib/data";

const stats = [
  {
    icon: "reviews",
    value: `${reviews.total}+`,
    labelKo: "방문자 리뷰",
    labelEn: "Visitor Reviews",
  },
  {
    icon: "group",
    value: `${reviews.participantCount}+`,
    labelKo: "누적 참여 고객",
    labelEn: "Total Clients",
  },
  {
    icon: "workspace_premium",
    value: `${certifications.length}`,
    labelKo: "자격·수상 이력",
    labelEn: "Certifications & Awards",
  },
  {
    icon: "auto_stories",
    value: `${reviews.blogCount}+`,
    labelKo: "블로그 후기",
    labelEn: "Blog Reviews",
  },
];

export default function TrustBar() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative bg-waxly-brown py-10 lg:py-14">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.labelKo}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="material-symbols-outlined text-waxly-gold text-3xl mb-2 block"
                style={{ fontVariationSettings: "'wght' 200" }}
              >
                {stat.icon}
              </span>
              <p
                className="text-white text-3xl lg:text-4xl mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </p>
              <p className="text-white/70 font-light text-xs lg:text-sm tracking-wide">
                {isKo ? stat.labelKo : stat.labelEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 타입 체크**

```bash
npx tsc --noEmit
```

Expected: `TrustBar.tsx` 관련 에러 없음.

- [ ] **Step 3: Commit**

```bash
git add src/components/home/TrustBar.tsx
git commit -m "feat: 홈페이지 TrustBar 통계 섹션 추가"
```

---

### Task 5: 홈페이지용 Certifications 컴포넌트 신규 작성

**Files:**
- Create: `src/components/home/Certifications.tsx`

**Interfaces:**
- Consumes: `certifications` (기존 `src/lib/data.ts` export), `Link` (기존 `@/i18n/routing` export)
- Produces: `Certifications` — `export default function Certifications(): JSX.Element`, props 없음. (기존 `src/components/about/CertificationTimeline.tsx`와 별개 파일 — about 페이지 것은 손대지 않는다.)

- [ ] **Step 1: Certifications.tsx 작성**

```tsx
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
```

- [ ] **Step 2: 타입 체크**

```bash
npx tsc --noEmit
```

Expected: `Certifications.tsx` 관련 에러 없음.

- [ ] **Step 3: Commit**

```bash
git add src/components/home/Certifications.tsx
git commit -m "feat: 홈페이지용 Certifications 섹션 추가"
```

---

### Task 6: WhySugaring.tsx를 waxly 테마로 리스타일

**Files:**
- Modify: `src/components/home/WhySugaring.tsx` (전체 파일 교체)

**Interfaces:**
- Produces: `WhySugaring` — 기존과 동일한 `export default function WhySugaring(): JSX.Element`, props 없음. 내부 콘텐츠(임산부/민감성 피부 안심 메시지)는 유지, 색상만 `beauty-*` → `waxly-*`로 교체.

- [ ] **Step 1: 전체 파일을 waxly 테마 색상으로 교체**

`src/components/home/WhySugaring.tsx` 전체를 아래로 교체 (내용 구조·데이터는 기존과 동일, 색상 클래스만 `waxly` 토큰으로 치환하고 폰트를 `font-light` + `Playfair Display` 규칙에 맞춤):

```tsx
"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "eco",
    titleKo: "100% 천연 성분",
    titleEn: "100% Natural",
    descKo: "설탕, 레몬, 물만으로 만든 순수 페이스트",
    descEn: "Pure paste made from sugar, lemon, and water",
  },
  {
    icon: "water_drop",
    titleKo: "수용성 포뮬러",
    titleEn: "Water Soluble",
    descKo: "따뜻한 물로 쉽게 세척, 끈적임 없음",
    descEn: "Easy cleanup with warm water",
  },
  {
    icon: "favorite",
    titleKo: "저자극 케어",
    titleEn: "Hypoallergenic",
    descKo: "민감한 피부에도 안전한 시술",
    descEn: "Safe for sensitive skin",
  },
];

const benefits = [
  { ko: "체온과 비슷한 온도로 화상 위험 없음", en: "No burn risk - body temperature application", icon: "thermostat" },
  { ko: "100% 천연 성분으로 화학 물질 ZERO", en: "100% natural - zero chemicals", icon: "eco" },
  { ko: "모발 성장 방향으로 제거, 통증 최소화", en: "Hair removal in growth direction", icon: "healing" },
  { ko: "자연스러운 각질 제거로 부드러운 피부", en: "Natural exfoliation for smooth skin", icon: "spa" },
];

export default function WhySugaring() {
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-waxly-cream">
      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 py-2 px-5 border border-waxly-brown/20 text-waxly-brown text-sm font-light tracking-wider mb-6">
            <span className="material-symbols-outlined text-base">spa</span>
            {isKo ? "왜 슈가링일까요?" : "Why Sugaring?"}
          </span>
          <h2
            className="text-4xl lg:text-5xl text-waxly-brown mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {isKo ? "일반 왁싱과 무엇이 다를까요?" : "What Makes It Different?"}
          </h2>
          <p className="text-waxly-brownLight font-light text-lg leading-relaxed" style={{ wordBreak: "keep-all" }}>
            {isKo
              ? "슈가링은 설탕, 레몬, 물로만 만들어 임산부도 안심합니다. 체온과 비슷한 37°C로 화상 걱정 없이, 모발 성장 방향으로 제거해 통증을 최소화합니다."
              : "Made only with sugar, lemon, and water, safe for expectant mothers. Applied at 37°C body temperature with no burn risk."}
          </p>
        </motion.div>

        {/* Main Content Grid - Image + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] rounded-tr-[80px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1676313816468-2c944d4fb27d?w=600&h=750&fit=crop&q=80"
                alt="Natural sugaring ingredients"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKo}
                className="flex items-start gap-5 p-6 bg-white border border-waxly-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-waxly-cream flex items-center justify-center flex-shrink-0">
                  <span
                    className="material-symbols-outlined text-xl text-waxly-brown"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    {feature.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-waxly-brown mb-1">
                    {isKo ? feature.titleKo : feature.titleEn}
                  </h3>
                  <p className="text-waxly-brownLight font-light text-sm leading-relaxed">
                    {isKo ? feature.descKo : feature.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          className="relative bg-waxly-brown p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left - Title */}
            <div className="lg:col-span-5">
              <h3
                className="text-3xl lg:text-4xl text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                {isKo ? "임산부도 안심하는 이유" : "Why Expectant Mothers Trust Us"}
              </h3>
              <p className="text-white/70 font-light text-lg" style={{ wordBreak: "keep-all" }}>
                {isKo
                  ? "전 과정 임산부 배려 설계, 편안한 자세로 케어받으세요"
                  : "Every process designed for expectant mothers' comfort"}
              </p>
            </div>

            {/* Right - Benefits List */}
            <div className="lg:col-span-7 space-y-3">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.ko}
                  className="flex items-center gap-4 bg-white/10 p-5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-white text-xl"
                      style={{ fontVariationSettings: "'wght' 200" }}
                    >
                      {benefit.icon}
                    </span>
                  </span>
                  <span className="text-white font-light">
                    {isKo ? benefit.ko : benefit.en}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 타입 체크**

```bash
npx tsc --noEmit
```

Expected: `WhySugaring.tsx` 관련 에러 없음.

- [ ] **Step 3: Commit**

```bash
git add src/components/home/WhySugaring.tsx
git commit -m "refactor: WhySugaring을 waxly 테마 색상으로 리스타일"
```

---

### Task 7: page.tsx 재조립 (최종 섹션 순서)

**Files:**
- Modify: `src/app/[locale]/page.tsx` (전체 파일 교체)

**Interfaces:**
- Consumes: `Hero`(기존), `TrustBar`(Task 4), `WhySugaring`(Task 6), `SafetyPromise`(기존, 미변경), `Certifications`(Task 5), `ServiceHighlights`(기존, 미변경), `ReviewHighlights`(Task 3), `CTASection`(기존, 미변경). `Features`는 더 이상 import하지 않는다 (파일은 삭제하지 않고 남겨둠).

- [ ] **Step 1: page.tsx 전체 교체**

```tsx
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import WhySugaring from "@/components/home/WhySugaring";
import SafetyPromise from "@/components/home/SafetyPromise";
import Certifications from "@/components/home/Certifications";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import ReviewHighlights from "@/components/home/ReviewHighlights";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhySugaring />
      <SafetyPromise />
      <Certifications />
      <ServiceHighlights />
      <ReviewHighlights />
      <CTASection />
    </>
  );
}
```

- [ ] **Step 2: 타입 체크 + 린트**

```bash
npx tsc --noEmit
npm run lint
```

Expected: `page.tsx` 관련 에러/경고 없음.

- [ ] **Step 3: Commit**

```bash
git add src/app/[locale]/page.tsx
git commit -m "feat: 홈페이지 섹션 순서 재구성 (Hero→TrustBar→WhySugaring→SafetyPromise→Certifications→ServiceHighlights→ReviewHighlights→CTA)"
```

---

### Task 8: 전체 빌드 검증 및 반응형/양쪽 로케일 수동 QA

**Files:** 없음 (검증 전용 태스크)

- [ ] **Step 1: 프로덕션 빌드**

```bash
npm run build
```

Expected: 빌드 성공, 타입/린트 에러 없음.

- [ ] **Step 2: 로컬 서버로 전체 페이지 수동 확인**

```bash
npm run dev
```

`http://localhost:3000/ko`와 `/en` 각각에서:
- 섹션 순서가 Hero → TrustBar → WhySugaring → SafetyPromise → Certifications → ServiceHighlights → ReviewHighlights → CTA인지
- 모바일 뷰포트(DevTools 375px)에서 TrustBar 통계 2열, Certifications 타임라인, WhySugaring 카드가 깨지지 않는지
- Hero 3D가 데스크톱에서 부드럽게 로드되는지, 3D 로드 중에도 레이아웃 시프트가 없는지
- Lighthouse(Chrome DevTools) 모바일 프로파일로 LCP 측정 — 목표 2.5초 이내 (Hero3D 지연 로드가 실제로 LCP를 해치지 않는지 확인)

- [ ] **Step 3: 문제 발견 시 해당 Task로 돌아가 수정 후 재확인.** 문제 없으면 이 태스크는 별도 커밋 없이 종료 (검증 전용).
