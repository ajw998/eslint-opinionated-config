/*
 * Variable rules
 */
module.exports = {

    // Prefer initialisation in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': 'warn',

    // Disallow deleting variables
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // Disallow variables from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // Disallow shadowing of restricted names
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // Disallow undeclared variables
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // Disallow initialisation to undefined
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // Disallow use of `undefined`
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'warn',

    // Disallow early use
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'error',
};
