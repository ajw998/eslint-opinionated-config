/**
 * Best Practices
 * Encapsulates rules relate to better ways of doing things and help avoid
 * potential problems. These configurations make no assumptions as to code
 * readability and layout.
 */
module.exports = {
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    complexity: ['error', 5],
    curly: 'error',
    'default-case': 'error',
    'dot-notation': ['error', { allowKeywords: false }],
    eqeqeq: ['error', 'always'],
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error', // Documentation needed
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-labels': 'warn',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-mixed-requires': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-require': 'warn', // Documentation needed
    'no-new-wrappers': 'error',
    'no-path-concat': 'warn',
    'no-proto': 'error',
    'no-script-url': 'error',
    'no-void': 'error',
    'prefer-promise-reject-errors': 'warn',
    radix: 'error',
    'require-await': 'error',
};
