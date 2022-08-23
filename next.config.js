/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// // for transpiling all ESM @fullcalendar/* packages
// // also, for piping fullcalendar thru babel (to learn why, see babel.config.js)
// const withTM = require("next-transpile-modules")(["@fullcalendar"]);

module.exports = nextConfig;
