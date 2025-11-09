import type { Metadata } from "next";
import { toMetadata } from "@/lib/seo";


export async function generateMetadata({
  params,
}: {
  params: { lang: string };               // ❗ string으로 받고
}): Promise<Metadata> {
  const lang = params.lang === "en" ? "en" : "ko"; // 내부에서 좁히기
  const pathname = lang === "en" ? "/en/about" : "/about";
  return toMetadata("about", lang, pathname);
}

export default function About() {
  return (
    <div className="mt-6 mx-12 mb-6">
          <div className="w-fit mb-8">
            <h1 className="md:text-2xl font-bold text-xl underline underline-offset-8">회사 소개 (About us)</h1>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellendus sunt nam facilis quam voluptate? Corporis debitis dolore ut ratione adipisci quo corrupti quae natus veritatis, sunt voluptatem est ipsum.
              Illo sint sunt numquam, unde sapiente optio iste similique laboriosam explicabo repellendus sed ipsa atque ab quod ea ducimus dolor harum consequatur deserunt totam error, voluptatem hic! Non, nostrum aut?
              Veniam a repellendus ullam aliquam asperiores rem architecto error unde vero officia ex ut nam excepturi officiis consequatur libero eveniet non aspernatur voluptate assumenda similique, dolores beatae! Quas, cum non.
              Dolore aperiam soluta beatae quod non nobis omnis necessitatibus deleniti aliquam officiis incidunt voluptas laudantium voluptatibus, tenetur repudiandae. Animi aut temporibus id numquam odio pariatur natus laborum error delectus provident.
              Tempora, similique obcaecati fuga necessitatibus voluptas provident dolore incidunt magni pariatur? Ducimus aliquam totam molestiae nemo harum quisquam nobis, iure neque hic vero dolore possimus maiores unde ipsum, vel laborum?
              Illum ab mollitia pariatur, modi numquam recusandae quod eos maxime! Dolores, corporis optio! Dolores, tempore dolore! Enim, quam eos at iusto quos a possimus illo beatae fugit tempore, vel reprehenderit?
              Quaerat, neque veniam maiores nam dolore quibusdam qui voluptatibus repellendus quod facere nisi saepe in officiis ea hic est maxime eum incidunt et illum iusto dolor sint id voluptas? Iure?
              Expedita minus voluptates quia magni explicabo cumque amet eum pariatur consectetur architecto nobis, dolorum obcaecati consequuntur, quo vel qui aspernatur dolore doloribus officiis voluptas! Omnis quasi ad laboriosam blanditiis maiores.
            </p>
          </div>
        </div>
  );
}
