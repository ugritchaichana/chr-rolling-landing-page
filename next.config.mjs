import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG || "booth-01",
  project: process.env.SENTRY_PROJECT || "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  automaticVercelMonitors: true,
});
