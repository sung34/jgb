import type { Metadata } from "next";
import { toMetadata } from "@/lib/seo";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };               // ❗ string으로 받고
}): Promise<Metadata> {
  const lang = params.lang === "en" ? "en" : "ko"; // 내부에서 좁히기
  const pathname = lang === "en" ? "/en/about/certificate" : "/about/certificate";
  return toMetadata("about/certificate", lang, pathname);    // ← 로더가 중첩 지원이면 이렇게
  // (로더가 평탄키만 지원이면 "certificate"로 맞추고 파일 위치도 평탄하게)
}


export default function Certificate() {
  return (
    <div className="mt-6 mx-12">
      <div className="w-fit mb-8">
        <h1 className="md:text-2xl font-bold text-xl underline underline-offset-8">특허증 (Certificate of Patent)</h1>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <Image width={600} height={600} alt="" src={"/contents/about/certificate/cert1.jpg"} />
        <Image width={565} height={600} alt="" src={"/contents/about/certificate/cert2.jpg"} />
      </div>
    </div>
  );
}
