import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    async rewrites() {
    return [
      // 루트 → ko 내부 경로로 재작성 (브라우저 URL은 / 유지)
      { source: '/', destination: '/ko' },
      { source: '/about', destination: '/ko/about' },
      { source: '/about/:path*', destination: '/ko/about/:path*' },
      { source: '/products', destination: '/ko/products' },
      { source: '/contact', destination: '/ko/contact' },
      // EN은 그대로 /en 사용
    ];
  },
};

export default nextConfig;
