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
    'linebreak-style': 'off',
    'max-lines': ['warn', {max: 300}],
    'max-params': ['warn', 4],
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'prefer-object-spread': 'warn',
    'sort-keys': 'warn', // Documentation needed
    'sort-vars': 'warn', // Documentation needed
    yoda: ['error', 'never'],
};
