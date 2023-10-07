/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/recommended-type-checked',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": {
          "arguments": false,
          "attributes": false
        }
      }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
