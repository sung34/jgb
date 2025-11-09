import Image from "next/image";
import Link from "next/link";
import LangSwitch from "./langSwitch";

const t: Record<string, {
  brand: string;
  about: string;
  patents: string;
  legal: string;
  products: string;
  contact: string;
}> = {
  ko: {
    brand: "자인그린바이오",
    about: "회사 소개",
    patents: "특허",
    legal: "사업자 정보",
    products: "제품",
    contact: "문의",
  },
  en: {
    brand: "Jain Green Bio",
    about: "About",
    patents: "Patents",
    legal: "Legal & Registration",
    products: "Products",
    contact: "Contact",
  },
};

export default function  Nav({ lang = "ko" }: { lang: string }) {
  const base = lang === "en" ? "/en" : "";
  const L = t[lang];

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a>{L.brand}</a>
              <ul className="p-2">
                <li><Link href={`${base}/about`}>{L.about}</Link></li>
                <li><Link href={`${base}/about/certificate`}>{L.patents}</Link></li>
                <li><Link href={`${base}/about/company`}>{L.legal}</Link></li>
              </ul>
            </li>
            <li><Link href={`${base}/products`}>{L.products}</Link></li>
            <li><Link href={`${base}/contact`}>{L.contact}</Link></li>
          </ul>
        </div>

        <Link href={`${base}/`} className="flex justify-center items-center gap-3 ml-1.5 normal-case md:text-xl text-sm font-bold">
          <img src="/favicon.png" alt={lang === "en" ? "Jain Green Bio logo" : "자인그린바이오 로고"} width={18} height={18} className="mr-1" />
          {L.brand}
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href={`${base}/about`}>{L.about}</Link></li>
          <li><Link href={`${base}/about/certificate`}>{L.patents}</Link></li>
          <li><Link href={`${base}/about/company`}>{L.legal}</Link></li>
          <li><Link href={`${base}/products`}>{L.products}</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <LangSwitch />
        <Link href={`${base}/contact`} className="btn btn-primary m-4">{L.contact}</Link>
      </div>
    </div>
  );
}
