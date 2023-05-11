/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "b5y5122bavz3",
    enviroment: "master",
    // CONTENTFUL_ACCESS_KEY: "uvhKkHLM8N2jzZ8NVCwnpL-YcAcLIDmLe0J7fmmdE"
  },
};

module.exports = nextConfig;
