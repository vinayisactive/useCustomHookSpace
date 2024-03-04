/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dbs9ulw2r/image/upload/**',
          },
        ],
      },
};

export default nextConfig;
