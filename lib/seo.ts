// lib/seo.ts
import fs from "fs/promises";
import path from "path";
import type { Metadata } from "next";


export async function loadSeoJSON(key: string) {
  const parts = key.split("/").filter(Boolean);              // ["about","certificate"]
  const filename = `${parts[parts.length - 1]}.json`;        // "certificate.json"
  const p = path.join(process.cwd(), "public", "seo", ...parts, filename);
  const raw = await fs.readFile(p, "utf-8");
  return JSON.parse(raw) as {
    page: string;
    canonical?: string;
    ogImage?: Record<string, string>;
    locale: Record<string, { title: string; description: string; keywords: string[] }>;
    alternates?: { languages?: Record<string, string> };
  };
}

export async function toMetadata(page: string, lang: string, pathname: string): Promise<Metadata> {
  const seo = await loadSeoJSON(page);
  const loc = seo.locale[lang];
  const ogImg = seo.ogImage?.[lang];

  const languages =
    seo.alternates?.languages ?? { "ko-KR": "/", en: "/en" };

  return {
    title: loc.title,
    description: loc.description,
    keywords: loc.keywords,
    alternates: {
      canonical: seo.canonical || pathname,
      languages,
    },
    openGraph: {
      title: loc.title,
      description: loc.description,
      url: pathname,
      type: "website",
      images: ogImg ? [ogImg] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: loc.title,
      description: loc.description,
      images: ogImg ? [ogImg] : undefined,
    },
    robots: { index: true, follow: true },
  };
}
