/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    SECRET_KEY: process.env.SECRET_KEY,
    IV: process.env.IV,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
}

export default nextConfig
