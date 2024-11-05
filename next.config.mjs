// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enable static export
    basePath: '/JoonC2.github.io',  // Match your repository name
    images: {
      unoptimized: true,  // Disable Next.js image optimization (since it's not supported on static sites)
  },
};


export default nextConfig;