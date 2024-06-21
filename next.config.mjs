/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.dnd5eapi.co'],
    },
    env: {
        baseApiPath: 'https://www.dnd5eapi.co'
    }
};

export default nextConfig;
