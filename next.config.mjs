/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "d2kxt83yjeiafa.cloudfront.net",
                pathname: "/albums2/**"
            }
        ]
    }
};

export default nextConfig;
