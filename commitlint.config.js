/**
 * Commitlint Configuration
 *
 * Enforces conventional commit message format to maintain clean git history.
 *
 * Format: <type>(<scope>): <subject>
 *
 * Example: feat(auth): add login functionality
 *
 * Types:
 * - feat: A new feature
 * - fix: A bug fix
 * - docs: Documentation only changes
 * - style: Changes that don't affect code meaning (formatting, etc.)
 * - refactor: Code change that neither fixes a bug nor adds a feature
 * - test: Adding or correcting tests
 * - chore: Changes to build process or auxiliary tools
 * - perf: Performance improvements
 * - ci: CI/CD configuration changes
 * - build: Build system or external dependencies changes
 * - revert: Reverts a previous commit
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Enforce allowed commit types
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'perf',
        'ci',
        'build',
        'revert',
      ],
    ],
    // Subject must be lowercase (no sentence case, start case, etc.)
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    // Subject maximum length
    'subject-max-length': [2, 'always', 72],
    // Type must be lowercase
    'type-case': [2, 'always', 'lower-case'],
    // Minimum commit message length
    'header-min-length': [2, 'always', 10],
  },
};
