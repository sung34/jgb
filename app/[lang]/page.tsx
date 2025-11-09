import type { Metadata } from "next";
import { toMetadata } from "@/lib/seo";

import DiffSection from "@/components/home/diff";
import HeroSection from "@/components/home/hero";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };               // ❗ string으로 받고
}): Promise<Metadata> {
   // ✅ 먼저 언래핑
  const { lang } = await params;
  // ✅ 'ko' | 'en'으로 정규화
  const locale: "ko" | "en" = lang === "en" ? "en" : "ko";
  // ✅ 실제 보이는 경로 사용(리다이렉트/리라이트 정책에 맞춰)
  const pathname = lang === "en" ? "/en" : "/";
  return toMetadata("home", lang, pathname);    // ← 로더가 중첩 지원이면 이렇게
  // (로더가 평탄키만 지원이면 "certificate"로 맞추고 파일 위치도 평탄하게)
}

export default function Home() {
  return (
    <>
     <HeroSection />
     <DiffSection />
    </>
  );
}
