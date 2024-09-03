/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.expgames.gg",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
