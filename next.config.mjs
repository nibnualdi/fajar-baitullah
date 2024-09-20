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
      {
        protocol: "https",
        hostname: "templatelab.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i1.wp.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "qplubbchutomkyebvvxj.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
