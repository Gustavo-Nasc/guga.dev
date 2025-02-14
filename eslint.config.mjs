import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

/**
 * @type {import('eslint').Linter.Config[]}
 */
const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', '@rocketseat/eslint-config/next'],
    rules: {
      camelcase: 'off',
    },
  }),
]

export default eslintConfig
