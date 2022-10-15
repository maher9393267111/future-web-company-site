// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

// module.exports = {
//   images: {
//     domains: ["maikon.biz", "i.pravatar.cc", "mdbcdn.b-cdn.net"],
//   },
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
// };


/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig



