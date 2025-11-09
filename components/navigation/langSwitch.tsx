"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LangSwitch() {
  const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");
  const toEN = isEN ? pathname : pathname === "/" ? "/en" : "/en" + pathname;
  const toKO = isEN ? pathname.replace(/^\/en(\/|$)/, "/") : pathname;

  return (
    <div className="join">
      <Link href={toKO} className={`btn btn-ghost btn-sm join-item ${!isEN ? "btn-active" : ""}`}>KO</Link>
      <Link href={toEN} className={`btn btn-ghost btn-sm join-item ${isEN ? "btn-active" : ""}`}>EN</Link>
    </div>
  );
}
