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

    // Disallow use of caller/callee
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // Disallow lexical declarations in case/default clauses
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'error',

    // Disallow eval()
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // Disallow Extending of Native Objects
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // Disallow floating decimals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // Disallow the type conversion with shorter notations
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': 'error',

    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // https://eslint.org/docs/rules/no-implied-this
    'no-invalid-this': 'error',

    // Disallow labeled statements
    // https://eslint.org/docs/rules/no-labels
    'no-labels': 'warn',

    // Disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // Disallow functions in loops
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // Disallow new For Side Effects
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // Disallow function constructors
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // Disallow Primitive Wrapper Instances
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // Disallow use of __proto__
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    'no-script-url': 'error',
    'no-void': 'error',
    'prefer-promise-reject-errors': 'warn',
    radix: 'error',

    // Disallow `async` if there is no `await` expression
    // https://eslint.org/docs/rules/require-await
    'require-await': 'error',
};
