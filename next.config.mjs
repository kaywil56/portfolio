/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@tabler/icons-react'],
    },
};

export default nextConfig;
