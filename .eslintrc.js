// .eslintrc.js
module.exports = {
  root: true,
  env: {
    // Your code runs in these environments:
    browser: true,
    node: true,
    'react-native/react-native': true, // enables React Native globals
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,           // enables JSX parsing
    },
    ecmaVersion: 2021,     // support modern ECMAScript features
    sourceType: 'module',  // supports import/export
  },

  plugins: [
    'react',
    'react-hooks',
    'react-native',
    '@typescript-eslint',
    'prettier',
  ],

  extends: [
    'eslint:recommended',                    // ESLint’s recommended rules
    'plugin:react/recommended',              // React best-practices
    'plugin:react-native/all',               // React Native–specific rules
    'plugin:@typescript-eslint/recommended', // TypeScript best-practices
    'prettier',                              // disables ESLint rules that conflict with Prettier
  ],

  settings: {
    react: {
      version: 'detect', // auto-detect React version for eslint-plugin-react
    },
  },

  rules: {
    // 1. Let Prettier handle all formatting issues:
    'prettier/prettier': 'error',

    // 2. Disable rules you probably don’t care about (optional):
    'react/react-in-jsx-scope': 'off', // React 17+ doesn’t need React imported in scope
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // 3. You can tweak any other rules here, e.g.:
    // 'no-console': 'warn',
    // '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
