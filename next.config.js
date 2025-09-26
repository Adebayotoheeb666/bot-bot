/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure Next resolves the project root correctly in this environment
  outputFileTracingRoot: __dirname,
  telemetry: false,
};

module.exports = nextConfig;
