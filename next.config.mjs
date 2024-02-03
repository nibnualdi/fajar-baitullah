/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.republika.co.id",
        port: "",
      },
      {
        protocol: "https",
        hostname: "d33wubrfki0l68.cloudfront.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
