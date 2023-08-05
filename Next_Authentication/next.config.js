/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "thumbs.dreamstime.com",
    ], // Add the domain(s) of the external images you want to display.
  },
};

module.exports = nextConfig;
