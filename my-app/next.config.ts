 import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {hostname:"www.google.com"},
      {hostname:"www.vecteezy.com"},
      {hostname:"upload.wikimedia.org"}
    ]
  }
};

export default nextConfig;
