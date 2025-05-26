// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//     /* config options here */

//     turbopack: {
//         rules: {
//             "*.svg": {
//                 loaders: ["@svgr/webpack"],
//                 as: "*.js",
//             },
//         },
//     },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */

    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            },
        },
    },
};

export default nextConfig;
