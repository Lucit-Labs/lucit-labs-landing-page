import createNextIntlPlugin from 'next-intl/plugin';

import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const basePath = isGitHubActions && repoName ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default withNextIntl(nextConfig);
