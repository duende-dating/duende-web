import type { NextConfig } from 'next';

/**
 * Static export, served from GitHub Pages under /duende-web.
 *
 * `basePath` and `assetPrefix` are read from the environment rather than
 * hardcoded: `npm run dev` has to serve from the root, and the day a custom
 * domain lands the prefix disappears without touching the code. The workflow
 * sets it; nothing else does.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const config: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  // Pages ship as directories with an index.html, which is the only shape a
  // plain file server can resolve /cgu with.
  trailingSlash: true,
  images: {
    // There is no image optimiser behind a static export.
    unoptimized: true,
  },
};

export default config;
