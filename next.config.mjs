/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.republika.co.id",
        port: "",
      },
    ],
  },
};

export default nextConfig;
