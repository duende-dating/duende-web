import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

/**
 * eslint-config-next ships flat configs directly since Next 15, so there is no
 * eslintrc to translate. Going through FlatCompat instead makes ESLint 10 try
 * to serialise the plugin graph and fall over on its own cycle.
 */
const config = [
  ...coreWebVitals,
  ...typescript,
  { ignores: ['out/**', '.next/**', 'next-env.d.ts'] },
];

export default config;
