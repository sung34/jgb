import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "자인그린바이오",
  icons: "/favicon.svg",
  description: "",
};

export async function generateStaticParams() {
  return [{ lang: 'ko' }, { lang: 'en' }];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={'ko'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased select-none`}
      >
          {children}
      </body>
    </html>
  );
}
