import fs from "fs/promises";
import path from "path";

type Lang = "ko" | "en";

export type HomeHero = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  bgImage?: string;
  bgAlt?: string;
  overlayClass?: string; // e.g., "hero-overlay bg-black/40"
};

export async function loadHomeHero(lang: Lang): Promise<HomeHero> {
  const p = path.join(process.cwd(), "public", "contents", "home", "home.json");
  const raw = await fs.readFile(p, "utf-8");
  const json = JSON.parse(raw);
  return json[lang] as HomeHero;
}
