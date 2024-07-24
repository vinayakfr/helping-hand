/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/sign-up',
          destination: '/log-in', // Adjust this if necessary
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  