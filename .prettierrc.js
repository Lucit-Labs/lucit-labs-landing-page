/**
 * Prettier Configuration
 *
 * Enforces consistent code formatting across the codebase.
 * Works in conjunction with ESLint for comprehensive code quality.
 */
module.exports = {
  // Line width before wrapping
  printWidth: 80,

  // Number of spaces per indentation level
  tabWidth: 2,

  // Use semicolons at the end of statements
  semi: true,

  // Use single quotes instead of double quotes
  singleQuote: true,

  // Use single quotes in JSX
  jsxSingleQuote: false,

  // Trailing commas where valid in ES5 (objects, arrays, etc.)
  trailingComma: 'all',

  // Print spaces between brackets in object literals
  bracketSpacing: true,

  // Include parentheses around a sole arrow function parameter
  arrowParens: 'always',

  // Maintain existing line endings (auto)
  endOfLine: 'auto',
};
