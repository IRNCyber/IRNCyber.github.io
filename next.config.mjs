import path from "path";
import { fileURLToPath } from "url";
import { withContentCollections } from "@content-collections/next";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  //  REQUIRED for GitHub Pages
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // If your repo is NOT IRNCyber.github.io, uncomment:
  // basePath: "/IRNCyber",
  // assetPrefix: "/IRNCyber/",

  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://169.254.75.215:3000",
  ],

  turbopack: {
    root: __dirname,
  },

};

//  wrap config correctly
export default withContentCollections(nextConfig);
