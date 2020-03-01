/*
 * Comment style rules
 * Encapsulates rules pertaining to comments. These settings try to be as
 * lenient as possible.
 */
module.exports = {
    'capitalized-comments': [
        'warn',
        'always',
        {
            ignoreConsecutiveComments: true
        }
    ],
    'line-comment-position': 'off',
    'multiline-comment-style': 'off', // Documentation needed
    'no-inline-comments': 'off', // Documentation needed
    'no-warning-comments': [
        'warn',
        {
            location: 'start',
            terms: ['todo', 'fixme'],
        },
    ],
    'require-jsdoc': 'warn', // Documentation needed
    'spaced-comment': ['error', 'always'],
    'valid-jsdoc': [
        'warn',
        {
            requireParamType: true,
            requireReturnType: true,
        },
    ],
};
