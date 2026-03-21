import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Explicitly anchor the Turbopack workspace root to this project directory.
  // Without this, Turbopack may detect a stray lockfile in a parent directory
  // (e.g. /home/ubuntu/package-lock.json) and use that as the root, causing
  // the build to fail with a missing pages-manifest.json error.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      // Product image CDN
      { protocol: 'https', hostname: 'azrstgp1.blob.core.windows.net' },
      { protocol: 'https', hostname: 'portalvhdsqb5kr0hg03k8k.blob.core.windows.net' },
      { protocol: 'https', hostname: '*.blob.core.windows.net' },
    ],
  },
};

export default nextConfig;
