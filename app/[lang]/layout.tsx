import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/footer";
import Nav from "@/components/navigation/nav";

export const metadata: Metadata = {
  title: "자인그린바이오",
  icons: "/favicon.svg",
};

export async function generateStaticParams() {
  return [{ lang: 'ko' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // ✅ Next 16: Promise 타입으로 받기
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: "ko" | "en" = lang === "en" ? "en" : "ko";
  return (
    <>
      <Nav lang={locale} />
      <main className="min-h-screen pb-12">
        {children}
      </main>
      <Footer lang={locale} />

    </>

  );
}
