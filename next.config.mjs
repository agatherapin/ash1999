import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingRoot: path.resolve('.'),
    reactStrictMode: false,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    experimental: {
        optimizeCss: false,
    },
};

export default nextConfig;