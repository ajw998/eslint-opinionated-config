/**
 * Base rules (Possible errors)
 * Encapsulates linting settings for ECMAScript 2015+ with the intention to
 * reduce possible syntax and logic errors. Most of these settings are
 * common-sense rules. These configurations make no assumptions as to code
 * readability and layout.
 */
module.exports = {

    // Prevent unreachable stop condition in for-loop
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // Getter must always return a value
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // Disallow comparing against negative zero
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // Disallow assignment operators in conditional statements
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // Disallow constant expressions in conditions
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'error',

    // Disallow the use of `debugger`
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',

    // Disallow duplicate arguments in function definitions
    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',

    // Disallow duplicate keys in object literals
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // Disallow duplicate case label in switch statements
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-duplicate-case': 'error',

    // Disallow empty block statements
    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // Disallow empty character classes in regex statement
    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // Disallow reassigning excpetions
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // Disallow unnecessary boolean cast
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // Disallow unnecessary semicolons
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',

    // Disallow reassigning functions
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // Disallow variable or function declaration in nested blocks
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // Disallow invalid regex in RegExp constructor
    // https://eslint.org/docs/rules/no-invalid-regex
    'no-invalid-regexp': 'error',

    // Disallow irregular whitespaces
    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // Disallow calling global object properties as functions
    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'error',

    // Disallow use of Object prototype builtins directly
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // Disallow sparse arrays (i.e. [,,])
    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // Disallow confusing multiline expression
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // Disallow unreachable code
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // Disallow control flow statements in `finally` block
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // Require calls to isNaN when checking for NaN
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': 'error',

    // Comparison of `typeof` expression must be against valid string
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': 'error'
};
