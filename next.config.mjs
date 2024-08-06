/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@tabler/icons-react', '@mantine/form'],
    },
};

export default nextConfig;
