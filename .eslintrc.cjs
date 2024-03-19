const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  plugins: ['react'],
  rules: {
    'react/self-closing-comp': 'error',
    'no-undef': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-pascal-case': 'off',
    'react/no-unknown-property': 'off',
    camelcase: 'off',
  },
  overrides: [
    {
      files: [
        'next.config.mjs',
        'app/**/page.tsx',
        'app/**/layout.tsx',
        'app/**/not-found.tsx',
        'app/**/*error.tsx',
        'app/apple-icon.tsx',
        'app/**/opengraph-image.tsx',
        'app/sitemap.ts',
        'app/robots.ts',
        'middleware.ts',
        'codegen.ts',
      ],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': ['error', { target: 'any' }],
      },
    },
  ],
};
