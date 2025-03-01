import { prototype } from "events";
import { output } from "framer-motion/client";
import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig={
  output:'export',
  distDir:'dist',
  // images:{
  //   RemotePatterns :[
  //     {
  //       protocol: "https",
  //       hostname:"google.com"
  //     }
  //   ]
  // }
}

export default nextConfig;
