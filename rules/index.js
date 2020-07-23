const base = require('./base');
const bestPractices = require('./best-practices');
const es6 = require('./es6');
const jest = require('./jest');
const style = require('./style');
const unicorn = require ('./unicorn');
const variables = require('./variables');

module.exports = {
    env: {
        browser: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:unicorn/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: [
        'jest',
        'no-use-extend-native',
        'react',
        'unicorn',
    ],
    rules: {
        ...base,
        ...bestPractices,
        ...es6,
        ...jest,
        ...style,
        ...unicorn,
        ...variables,
    }
};
