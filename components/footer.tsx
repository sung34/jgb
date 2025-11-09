// components/footer.tsx
import Image from "next/image";
import Link from "next/link";

const t: Record<string, {
  brandTop: string;
  brandBottom: string;
  ceo: string;
  address: string;
  bizno: string;
  home: string;
  about: string;
  products: string;
  contact: string;
}> = {
  ko: {
    brandTop: "농업회사법인",
    brandBottom: "(주)자인그린바이오",
    ceo: "대표: 김자인",
    address: "주소: 서울특별시 강남구 테헤란로 123",
    bizno: "사업자 번호: 000-00-00000",
    home: "홈",
    about: "회사 소개",
    products: "제품",
    contact: "문의",
  },
  en: {
    brandTop: "Agricultural Corporation",
    brandBottom: "Jain Green Bio Co., Ltd.",
    ceo: "CEO: Jain Kim",
    address: "Address: 123, Teheran-ro, Gangnam-gu, Seoul",
    bizno: "Business Reg. No.: 000-00-00000",
    home: "Home",
    about: "About",
    products: "Products",
    contact: "Contact",
  },
};

export default function Footer({ lang = "ko" }: { lang?: string }) {
  const L = t[lang];
  const base = lang === "en" ? "/en" : "";

  return (
    <footer className="footer sm:footer-horizontal footer-vertical footer-start bg-primary text-primary-content p-10">
      <aside>
        <div className="flex gap-3 items-center justify-center mb-4">
          <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center p-1">
            <Image src="/icon.png" alt="Logo" width={36} height={36} />
          </div>
          <span className="font-bold">
            <span className="text-lg">{L.brandTop}</span>
            <br />
            <span className="text-xl">{L.brandBottom}</span>
          </span>
        </div>

        <p className="font-semibold select-text">
          {L.ceo}
          <br />
          {L.address}
          <br />
          <span className="text-xs">{L.bizno}</span>
        </p>
      </aside>

      <nav>
        <div className="grid grid-flow-row gap-4">
          <Link href={`${base}/`} className="link link-hover">{L.home}</Link>
          <Link href={`${base}/about`} className="link link-hover">{L.about}</Link>
          <Link href={`${base}/products`} className="link link-hover">{L.products}</Link>
          <Link href={`${base}/contact`} className="link link-hover">{L.contact}</Link>
        </div>
      </nav>
    </footer>
  );
}
