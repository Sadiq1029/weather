const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: false,
  images: {
    domains: ['openweathermap.org']
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});