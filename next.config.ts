import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain static files in out/, so the site can be hosted on GitHub Pages
  output: "export",
  poweredByHeader: false,
  devIndicators: false,
};

export default nextConfig;
