import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import sonarPlugin from 'eslint-plugin-sonarjs';
import globals from 'globals';

/**
 * ESLint v9 Flat Configuration
 *
 * This configuration enforces:
 * - SOLID principles through code quality rules
 * - Clean Code practices (max complexity, params, nesting)
 * - TypeScript best practices
 * - React and Next.js conventions
 * - Accessibility standards (WCAG)
 * - Automatic import organization
 * - Code formatting via Prettier
 */
export default defineConfig([
  // Global ignores - files/directories to exclude from linting
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'node_modules/**',
      '.pnpm-store/**',
      'dist/**',
      'coverage/**',
    ],
  },

  // Base ESLint recommended rules
  js.configs.recommended,

  // Main configuration for TypeScript and React files
  // This must come BEFORE Next.js config to avoid plugin conflicts
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      sonarjs: sonarPlugin,
    },
    settings: {
      react: {
        version: 'detect',
        runtime: 'automatic',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      // ============================================================
      // PRETTIER INTEGRATION
      // ============================================================
      'prettier/prettier': 'error',

      // ============================================================
      // CODE QUALITY & RELIABILITY
      // ============================================================
      'no-unreachable': 'error',
      camelcase: 'error',
      'no-duplicate-imports': 'error',

      // ============================================================
      // TYPESCRIPT RULES
      // ============================================================
      'no-unused-vars': 'off', // Disable base rule
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      // ============================================================
      // EXPRESSIONS & CONTROL FLOW
      // ============================================================
      'no-unused-expressions': ['error', { allowShortCircuit: true }],
      'no-else-return': 'warn',
      'no-unneeded-ternary': 'warn',

      // ============================================================
      // MODERN JAVASCRIPT PRACTICES
      // ============================================================
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',

      // ============================================================
      // REACT RULES
      // ============================================================
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js with automatic JSX runtime
      'react/prop-types': 'off', // Using TypeScript for prop validation

      // ============================================================
      // ACCESSIBILITY RULES
      // ============================================================
      'jsx-a11y/alt-text': 'warn',

      // ============================================================
      // SONARJS - CODE COMPLEXITY & QUALITY METRICS
      // Enforces SOLID principles and Clean Code practices
      // ============================================================
      'sonarjs/cognitive-complexity': ['warn', 20],

      // ============================================================
      // CODE STRUCTURE LIMITS
      // These enforce Single Responsibility Principle
      // ============================================================
      'max-depth': ['error', 4], // Maximum nesting depth
      'max-params': ['error', 4], // Maximum function parameters
      'max-nested-callbacks': ['error', 3], // Maximum callback nesting
      'max-lines': [
        'warn',
        {
          max: 500,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      // ============================================================
      // IMPORT ORGANIZATION
      // Enforces Dependency Inversion Principle & Clean Architecture
      // Note: import plugin is already configured by Next.js
      // We only override the import/order rule for custom organization
      // ============================================================
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node.js built-in modules
            'external', // External packages (npm modules)
            'internal', // Internal modules (using path aliases)
            'unknown', // Unknown/unresolved imports
            'parent', // Parent directory imports (../)
            'sibling', // Sibling imports (./)
            'index', // Index file imports
            'object', // Object imports
            'type', // TypeScript type imports
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@**',
              group: 'internal',
            },
            {
              pattern: 'components/**',
              group: 'internal',
            },
            {
              pattern: '\u0000',
              group: 'unknown',
            },
            {
              pattern: '../**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: './**',
              group: 'sibling',
            },
            {
              pattern: '**/*.css',
              group: 'unknown',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },

  // Next.js specific configurations - comes after to allow Next.js to override if needed
  // But we use a modified version that doesn't conflict
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Add any Next.js specific rule overrides here if needed
    },
  },

  // Prettier config - disables rules that conflict with Prettier
  // Must be last to override other configs
  prettierConfig,
]);
