import type { Metadata } from "next";
import { toMetadata } from "@/lib/seo";


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
  const pathname = lang === "en" ? "/en/products" : "/products";
  return toMetadata("products", lang, pathname);    // ← 로더가 중첩 지원이면 이렇게
  // (로더가 평탄키만 지원이면 "certificate"로 맞추고 파일 위치도 평탄하게)
}


export default function Products() {
  return (
    <div className="mt-6 mx-12 mb-6">
          <div className="w-fit mb-8">
            <h1 className="md:text-2xl font-bold text-xl underline underline-offset-8">특허증 (Certificate of Patent)</h1>
          </div>
          <div className=" flex flex-col justify-center items-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, veritatis corrupti debitis vel animi officiis in ipsa cum omnis dolores optio. Illum quibusdam excepturi iste aperiam voluptas quis, in ut.
            Totam quaerat culpa cupiditate suscipit, nobis laudantium. Similique temporibus perferendis iusto adipisci quaerat optio eligendi deleniti impedit ipsum laborum repellat autem odio sequi, animi aspernatur et facilis quo recusandae voluptate?
            Excepturi dolorum rem consequuntur expedita ipsum recusandae sapiente. Laudantium quis ut sequi repudiandae, deleniti quo ad illo pariatur placeat ipsum fugit nam voluptatum tempore voluptatem quos, debitis doloremque quidem veritatis?
            Expedita cupiditate consequuntur repellendus, ut minima iste repudiandae voluptates sapiente? Rerum incidunt labore odio, deleniti a earum recusandae repellendus exercitationem. Fugit voluptates facilis, sapiente nulla nemo quia harum hic in.
            Ut amet nisi in velit quam expedita. Quaerat quo aperiam soluta et harum provident repellat eaque expedita? Quis voluptatem esse repellendus ullam ad! Labore facilis distinctio magni temporibus necessitatibus commodi?
            Dolorem cumque quod inventore sit voluptate sint reprehenderit laboriosam doloremque vero dolores corrupti impedit ducimus delectus provident nostrum quis rerum iste omnis, ullam voluptas. Architecto deserunt explicabo quod quis ipsum.
            Sint quasi provident illum porro animi nisi, sed, nobis reiciendis eligendi saepe assumenda quaerat ipsa dignissimos facilis recusandae veniam pariatur eos alias sequi reprehenderit ab soluta ducimus. Ipsam, porro atque?
            Quas maiores cum quaerat suscipit impedit fugiat similique expedita nam, fuga, laboriosam molestias nemo porro fugit, libero consequuntur dolorum. Nesciunt magni consequatur ullam quam ad cum consectetur nostrum laboriosam numquam?
          </div>
        </div>
  );
}
