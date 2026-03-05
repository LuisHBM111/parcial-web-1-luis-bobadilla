import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typedRoutes: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.clipartmax.com',
                port: '',
                pathname: '/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png',
            },
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
                port: '',
                pathname: '/**',
            },
        ],
    }
};

module.exports = nextConfig;