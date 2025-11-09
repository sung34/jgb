import type { Metadata } from "next";
import { toMetadata } from "@/lib/seo";


export async function generateMetadata({
  params,
}: {
  params: { lang: string };               // ❗ string으로 받고
}): Promise<Metadata> {
  const lang = params.lang === "en" ? "en" : "ko"; // 내부에서 좁히기
  const pathname = lang === "en" ? "/en/about/company" : "/about/company";
  return toMetadata("about/company", lang, pathname);
  // (로더가 평탄키만 지원이면 "certificate"로 맞추고 파일 위치도 평탄하게)
}



export default function Company() {
  return (
    <div className="mt-6 mx-12">
      <div className="w-fit mb-8">
        <h1 className="md:text-2xl font-bold text-xl underline underline-offset-8">사업자 정보(Legal & Registration)</h1>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <p>사업자 정보</p>
      </div>
    </div>
  );
}
