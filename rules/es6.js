/**
 * ES6 configurations
 * Rules related to ECMAScript 2015
 */
module.exports = {

    // Disallow `super()` call in non-derived classes
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // Disallow modifying variables of class declarations
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // Disallow symbol constructor
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // Disallow `this` before calling super() in constructors
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Disallow unnecessary computed property keys in objects and classes
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // Disallow renaming import, export and destructured assignments
    // to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': 'error',

    // Use `const` for variable declarations
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 'error',

    // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and
    // hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'warn',

    // Require use of template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // Enforce consistent spacing in rest spread operators
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],
};
