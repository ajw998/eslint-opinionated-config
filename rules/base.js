/**
 * Base rules (Possible errors)
 * Encapsulates linting settings for ECMAScript 2015+ with the intention to
 * reduce possible syntax and logic errors. These configurations make no
 * assumptions as to code readability and layout.
 *
 * These configurations are largely a bit-by-bit breakdown of eslint:recommended
 */
module.exports = {
    'for-direction': 'error',
    'getter-return': ['error', { allowImplicit: true }],
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-constant-condition': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error', // Documentation needed
    'valid-typeof': 'error'
};
