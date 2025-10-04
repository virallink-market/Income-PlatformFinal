/** @type {import('next').NextConfig} */
const nextConfig = {
  // Termux/SWC এরর এড়াতে এই কনফিগারেশনটি ব্যবহার করা হয়েছিল।
  swcMinify: false, 
  
  // ওয়ার্কস্পেস রুট ওয়ার্নিং ঠিক করার জন্য (Vercel এও সাহায্য করবে)
  experimental: {
    outputFileTracingRoot: __dirname, 
  },
};

module.exports = nextConfig;

