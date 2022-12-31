const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },

  // build config
  ...(isProd
    ? {
        images: {
          unoptimized: true,
        },
      }
    : {}),
};

module.exports = nextConfig;
