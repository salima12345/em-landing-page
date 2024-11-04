/** @type {import('next').NextConfig} */
const config = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.eliott-markus.com',
        },
      ],
    },
  };
  
  export default config;