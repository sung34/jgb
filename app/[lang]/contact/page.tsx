import type { Metadata } from "next";
import { toMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };               // ❗ string으로 받고
}): Promise<Metadata> {
  const lang = params.lang === "en" ? "en" : "ko"; // 내부에서 좁히기
  const pathname = lang === "en" ? "/en/contact" : "/contact";
  return toMetadata("contact", lang, pathname);
}

export default function Contact() {
  return (
    <div className="mt-6 mx-12">
      <div className="w-fit">
        <h1 className="md:text-2xl font-bold text-xl underline underline-offset-8">문의(Contact)</h1>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <p>문의하기</p>
      </div>
    </div>
  );
}
