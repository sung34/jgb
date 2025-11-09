import fs from "fs/promises";
import path from "path";

export async function loadSeo(page: string, lang: 'ko'|'en') {
  const p = path.join(process.cwd(), "public/seo", page, `${page}.json`);
  const j = JSON.parse(await fs.readFile(p, "utf-8"));
  return { ...j.locale[lang], ogImage: j.ogImage?.[lang], alternates: j.alternates };
}

export async function loadContent(filePath: string, lang: 'ko'|'en') {
  const p = path.join(process.cwd(), "public/content", filePath);
  const j = JSON.parse(await fs.readFile(p, "utf-8"));
  return j[lang];
}
