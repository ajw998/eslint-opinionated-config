/**
 * Stylistic rules
 * Only includes rules pertaining to JavaScript styles
 * Styles do not reflect best practices and are opinionated.
 */
const characters = require('./characters');
const comment = require('./comment');
const layout = require('./layout');

module.exports = {
    ...characters,
    ...comment,
    ...layout,

    // Ensure consistent linbreak style
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'off',

    // Prefer max 300 lines of code in files
    // https://eslint.org/docs/rules/max-lines
    'max-lines': ['warn', {max: 300, skipComments: true}],

    // Prefer max 4 paramters in functions
    // https://eslint.org/docs/rules/max-params
    'max-params': ['warn', 4],

    // Always allow ternary
    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // Blanket ban on trailing white spaces
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',

    // Prefer using object spread over `Object.assign()`
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'warn',

    // Prefer object keys sorting
    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': 'warn',

    // Prefer variable sorting
    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': 'warn',

    // Disallow yoda conditions
    // https://eslint.org/docs/rules/yoda
    yoda: ['error', 'never'],
};
