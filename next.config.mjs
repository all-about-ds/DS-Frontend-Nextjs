/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
