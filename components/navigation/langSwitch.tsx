"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function computeLangLinks(pathname: string) {
  // /, /ko, /en, /ko/..., /en/..., /about(리라이트) 모두 안전하게 처리
  const parts = pathname.split("/").filter(Boolean); // ["ko","about"] 혹은 ["about"] 등
  let current: "ko" | "en";
  let restParts: string[];

  if (parts[0] === "en") {
    current = "en";
    restParts = parts.slice(1);
  } else if (parts[0] === "ko") {
    current = "ko";
    restParts = parts.slice(1);
  } else {
    // 언어 세그먼트가 없는 경우(예: /, /about) → 기본 ko로 간주
    current = "ko";
    restParts = parts;
  }

  const rest = restParts.join("/");
  const to = (lang: "ko" | "en") => "/" + [lang, rest].filter(Boolean).join("/");

  return { current, toKO: to("ko"), toEN: to("en") };
}

export default function LangSwitch() {
  const pathname = usePathname() || "/";
  const { current, toKO, toEN } = computeLangLinks(pathname);

  return (
    <div className="join">
      <Link href={toKO} className={`btn btn-ghost btn-sm join-item ${current === "ko" ? "btn-active" : ""}`}>KO</Link>
      <Link href={toEN} className={`btn btn-ghost btn-sm join-item ${current === "en" ? "btn-active" : ""}`}>EN</Link>
    </div>
  );
}
