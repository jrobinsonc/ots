const packageJson = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BUILD_TIME: new Date().toISOString(),
    APP_NAME: packageJson.name,
    APP_VERSION: packageJson.version,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
