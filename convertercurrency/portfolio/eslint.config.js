import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import react from 'eslint-plugin-react'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

     plugins: {
      react,             // ✅ add react plugin
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },


    rules: {
    ...react.configs.recommended.rules,  // ✅ apply react recommended rules
      ...reactHooks.configs['recommended-latest'].rules,
      ...reactRefresh.configs.vite.rules,




      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
