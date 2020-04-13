/**
 * ES6 configurations
 * Rules related to ECMAScript 2015
 */
module.exports = {

    // Disallow `super()` call in non-derived classes
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'warn',
    'prefer-template': 'error',

    // Enforce consistent spacing in rest spread operators
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],
};
