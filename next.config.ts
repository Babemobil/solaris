import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/loesungen/privat",
        destination: "/loesungen/solar",
        permanent: true,
      },
      {
        source: "/loesungen/gewerbe",
        destination: "/loesungen/solar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
