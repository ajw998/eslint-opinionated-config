module.exports = {

    // Disallow trailing whitespace
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',

    // Require quotes around objects only when necessary
    // https://eslint.org/docs/rules/quote-props
    'quote-props': ['warn', 'as-needed'],

    // Enforce single quotes
    // https://eslint.org/docs/rules/quotes
    quotes: [
        'error',
        'single',
        {
            allowTemplateLiterals: false,
            avoidEscape: true
        }
    ],

    // Require semicolons
    // https://eslint.org/docs/rules/semi
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],

    // Enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],

    // Require regex literals to be wrapped
    // https://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'error',
};
