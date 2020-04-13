/**
 * Best Practices
 * Encapsulates rules relate to better ways of doing things and help avoid
 * potential problems. These configurations make no assumptions as to code
 * readability and layout.
 */
module.exports = {
    // Require `return` in array callback methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // Prevent `var` from being called outside of the block they are defined
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // Limit cyclomatic complexity
    // https://eslint.org/docs/rules/complexity
    complexity: ['error', 10],

    // Follow curly braces convention
    // https://eslint.org/docs/rules/curly
    curly: 'error',

    // Require `default` case in switch statement
    // https://eslint.org/docs/rules/default-case
    'default-case': 'error',

    // Require use of dot notation when accesing properties
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': ['error', { allowKeywords: false }],

    // Require typesafe equality operators
    // https://eslint.org/docs/rules/eqeqeq
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

    // Disallow `async` if there is no `await` expression
    // https://eslint.org/docs/rules/require-await
    'require-await': 'error',
};
