const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    disable:process.env.NODE_ENV === 'development'

});

const nextConfig = withPWA({
    // next config
});
module.exports = nextConfig;



// const { i18n } = require("./next-i18next.config");
// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");
// module.exports = withPWA({
//     trailingSlash: true,
//     images: {
//         domains: ['127.0.0.1'],
//     },
//     typescript: {
//         ignoreBuildErrors: true,
//     },
//     pwa: {
//         disable: process.env.NODE_ENV !== "production",
//         dest: "public",
//         runtimeCaching,
//         fallbacks: {
//             image: '/assets/images/banner/banner-1.jpg'
//         }
//     },
//     i18n,
// });