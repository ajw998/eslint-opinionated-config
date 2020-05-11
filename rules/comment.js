/*
 * Comment style rules
 * Encapsulates rules pertaining to comments. These settings try to be as
 * lenient as possible.
 */
module.exports = {

    // Enforce capitalisation of first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': [
        'warn',
        'always',
        { ignoreConsecutiveComments: true }
    ],

    // Do not enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': 'off',

    // Do not enforce style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': 'off',

    // Allow inline-comments
    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // Warn on warning comments
    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': [
        'warn',
        {
            location: 'start',
            terms: ['todo'],
        },
    ],

    // Require whitespace at the beginning of comments
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always'],
};
