import type { Metadata } from "next";
import { toMetadata } from "@/lib/seo";


export async function generateMetadata({
  params,
}: {
  params: { lang: string };               // ❗ string으로 받고
}): Promise<Metadata> {
  const lang = params.lang === "en" ? "en" : "ko"; // 내부에서 좁히기
  const pathname = lang === "en" ? "/en/products" : "/products";
  return toMetadata("products", lang, pathname);
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
