/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
