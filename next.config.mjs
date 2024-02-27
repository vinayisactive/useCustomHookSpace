/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn-images-1.medium.com',
            port: '',
            pathname: '',
          },
        ],
      },
};

export default nextConfig;
