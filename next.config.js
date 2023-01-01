const path = require("path");

const semi = require("@douyinfe/semi-next").default({});
const { i18n } = require('./next-i18next.config')
module.exports = semi({
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    return config;
  },
  images: {
    domains: ["127.0.0.1"],
    unoptimized: true
  },
});
