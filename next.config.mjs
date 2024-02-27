/** @type {import('next').NextConfig} */
const module = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            pathname: '/t/**',
          },
        ],
      },
};

export default module;
