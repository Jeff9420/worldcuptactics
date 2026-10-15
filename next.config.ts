import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "worldcuptactics.vercel.app" }],
        destination: "https://worldcuptactics.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
