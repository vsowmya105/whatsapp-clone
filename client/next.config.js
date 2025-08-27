/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    NEXT_PUBLIC_ZEGO_APP_ID : 123,
    NEXT_PUBLIC_ZEGO_SERVER_ID : ""
  },
  images:{
    domains:["localhost"],
  }
};

module.exports = nextConfig;
