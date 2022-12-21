const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // build config
  ...(isProd
    ? {
        assetPrefix: "/astroquirks-front/",
        images: {
          unoptimized: true,
        },
      }
    : {}),
};

module.exports = nextConfig;
