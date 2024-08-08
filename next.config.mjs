/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@tabler/icons-react', '@mantine/carousel'],
    },
};

export default nextConfig;
