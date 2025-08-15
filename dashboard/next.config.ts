import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'http://localhost:53350',
    'http://127.0.0.1:53350',
    'http://10.10.10.168:53350', // Add your server's IP and port here
  ],
};

export default nextConfig;
