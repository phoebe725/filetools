// GitHub Pages serves a project site under /<repo>/, so we set basePath there.
// On Vercel/Cloudflare/local the site lives at the root, so basePath stays empty.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "filetools";
const basePath = isGithubPages ? `/${repo}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export — no backend, deployable to GitHub Pages / Cloudflare / Vercel.
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  // Tool pages rely on browser-only libraries; keep the build resilient.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Allow trailing-slash-free clean URLs.
  trailingSlash: false,
};

export default nextConfig;
