module.exports = {
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'quote-props': ['warn', 'as-needed'],
    quotes: [
        'error',
        'single',
        {
            allowTemplateLiterals: false,
            avoidEscape: true
        }
    ],
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    'semi-style': ['error', 'last'],
    'wrap-regex': 'error',
};
