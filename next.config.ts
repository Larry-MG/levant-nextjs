import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // FizTrade / Dillon Gage product image CDN
      { protocol: 'https', hostname: 'azrstgp1.blob.core.windows.net' },
      { protocol: 'https', hostname: 'portalvhdsqb5kr0hg03k8k.blob.core.windows.net' },
      { protocol: 'https', hostname: '*.blob.core.windows.net' },
    ],
  },
};

export default nextConfig;
