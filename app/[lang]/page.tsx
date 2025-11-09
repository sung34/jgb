import type { Metadata } from "next";
import { toMetadata } from "@/lib/seo";

import DiffSection from "@/components/home/diff";
import HeroSection from "@/components/home/hero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "ko" | "en" }>;
}): Promise<Metadata> {
  const { lang } = await params;
  // 홈의 pathname: ko → '/', en → '/en'
  const pathname = lang === "en" ? "/en" : "/";
  return toMetadata("home", lang, pathname);
}

export default function Home() {
  return (
    <>
     <HeroSection />
     <DiffSection />
    </>
  );
}
