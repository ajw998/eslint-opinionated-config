module.exports = {

    // Disallow spaces inside arrays
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never', {arraysInArrays: true}],

    // Enforce newline before dot notation
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // Enforce trailing newline in end of file
    // https://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'always'],

    // Enforce 4-spaces indentation
    // https://eslint.org/docs/rules/indent
    indent: ['error', 4],
};
