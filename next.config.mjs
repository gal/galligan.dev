/** @type {import('next').NextConfig} */
const nextConfig = {
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
